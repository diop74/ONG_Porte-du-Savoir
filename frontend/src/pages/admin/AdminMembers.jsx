import { useState, useEffect } from "react";
import { Check, X, Trash2, Users, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const API = process.env.REACT_APP_BACKEND_URL;

export default function AdminMembers() {
  const [members, setMembers] = useState([]);
  const [pendingMembers, setPendingMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    try {
      const [membersRes, pendingRes] = await Promise.all([
        fetch(`${API}/api/members`),
        fetch(`${API}/api/members/pending`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);
      setMembers(await membersRes.json());
      setPendingMembers(await pendingRes.json());
    } catch (e) {
      console.error("Error:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id, memberType) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${API}/api/members/${id}/approve?member_type=${memberType}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        toast.success("Membre approuvé");
        fetchData();
      }
    } catch (e) {
      toast.error("Erreur lors de l'approbation");
    }
  };

  const handleReject = async (id) => {
    if (!window.confirm("Rejeter cette demande ?")) return;
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${API}/api/members/${id}/reject`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        toast.success("Demande rejetée");
        fetchData();
      }
    } catch (e) {
      toast.error("Erreur");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer ce membre ?")) return;
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${API}/api/members/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        toast.success("Membre supprimé");
        fetchData();
      }
    } catch (e) {
      toast.error("Erreur lors de la suppression");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div data-testid="admin-members">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Membres</h1>
        <p className="text-slate-600 mt-1">Gérez les membres et les demandes d'adhésion</p>
      </div>

      <Tabs defaultValue="pending" className="space-y-6">
        <TabsList>
          <TabsTrigger value="pending" className="gap-2" data-testid="tab-pending">
            <UserPlus className="w-4 h-4" />
            Demandes ({pendingMembers.length})
          </TabsTrigger>
          <TabsTrigger value="approved" className="gap-2" data-testid="tab-approved">
            <Users className="w-4 h-4" />
            Membres ({members.length})
          </TabsTrigger>
        </TabsList>

        {/* Pending Tab */}
        <TabsContent value="pending">
          <div className="dashboard-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Téléphone</TableHead>
                  <TableHead>Motivation</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingMembers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-slate-500 py-8">
                      Aucune demande en attente
                    </TableCell>
                  </TableRow>
                ) : (
                  pendingMembers.map((member) => (
                    <TableRow key={member.id} data-testid={`pending-row-${member.id}`}>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>{member.phone}</TableCell>
                      <TableCell className="max-w-xs truncate">{member.motivation}</TableCell>
                      <TableCell>
                        <Select
                          defaultValue="actif"
                          onValueChange={(value) => handleApprove(member.id, value)}
                        >
                          <SelectTrigger className="w-32" data-testid={`type-select-${member.id}`}>
                            <SelectValue placeholder="Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="actif">Actif</SelectItem>
                            <SelectItem value="fondateur">Fondateur</SelectItem>
                            <SelectItem value="honneur">Honneur</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleApprove(member.id, "actif")}
                          className="text-green-600 hover:text-green-700"
                          data-testid={`approve-${member.id}`}
                        >
                          <Check className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleReject(member.id)}
                          className="text-red-600 hover:text-red-700"
                          data-testid={`reject-${member.id}`}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* Approved Tab */}
        <TabsContent value="approved">
          <div className="dashboard-card overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Téléphone</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center text-slate-500 py-8">
                      Aucun membre
                    </TableCell>
                  </TableRow>
                ) : (
                  members.map((member) => (
                    <TableRow key={member.id} data-testid={`member-row-${member.id}`}>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>{member.phone}</TableCell>
                      <TableCell>
                        <span
                          className={
                            member.member_type === "fondateur"
                              ? "badge-warning"
                              : member.member_type === "honneur"
                              ? "badge-info"
                              : "badge-success"
                          }
                        >
                          {member.member_type === "fondateur"
                            ? "Fondateur"
                            : member.member_type === "honneur"
                            ? "Honneur"
                            : "Actif"}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(member.id)}
                          className="text-red-600 hover:text-red-700"
                          data-testid={`delete-member-${member.id}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
