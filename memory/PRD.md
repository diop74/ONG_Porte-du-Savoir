# PRD - Site ONG Porte du Savoir (Udditaare Ganndal)

## Problème original
Créer un site web officiel pour l'ONG "Porte du Savoir (Udditaare Ganndal)", spécialisée dans la promotion de l'éducation à Nouadhibou, Mauritanie. Site moderne, professionnel, responsive, multilingue prêt (FR par défaut), sécurisé, avec interface admin complète.

## Choix utilisateur
- Palette: Bleu/vert (éducation, espoir)
- Logo: Créé (icône livre avec dégradé)
- Contenu: Démonstration créé
- Don: Bouton redirigeant vers contact
- Contact: Messages stockés en base

## Architecture technique
- **Frontend**: React + Tailwind CSS + Shadcn UI
- **Backend**: FastAPI (Python)
- **Base de données**: MongoDB
- **Auth**: JWT

## Personas utilisateurs
1. **Visiteur public**: Découvrir l'ONG, ses projets, actualités
2. **Candidat membre**: Soumettre demande d'adhésion
3. **Administrateur**: Gérer tout le contenu du site

## Fonctionnalités implémentées ✅

### Pages publiques (7)
- [x] Accueil (Hero, Stats, Projets récents, Actualités, CTA)
- [x] À propos (Histoire, Mission, Vision, Valeurs, Organes)
- [x] Projets (Liste filtrable, Détails)
- [x] Actualités (Blog avec articles)
- [x] Membres (Types, Conditions, Formulaire adhésion)
- [x] Documents (Catégories: Statuts, Règlement, Autres)
- [x] Contact (Formulaire, Coordonnées, Info don)

### Espace Admin (7 sections)
- [x] Login sécurisé JWT
- [x] Dashboard (Statistiques, Actions rapides)
- [x] CRUD Projets
- [x] CRUD Articles
- [x] Gestion Membres (Approbation/Rejet)
- [x] Gestion Documents
- [x] Messages de contact
- [x] Paramètres (Contenu du site)

### Modèles MongoDB
- User (admin)
- Project
- Article
- Member
- Document
- ContactMessage
- SiteContent

## Credentials Admin
- **Email**: admin@portedusavoir.org
- **Mot de passe**: Admin123!

## Backlog P0/P1/P2

### P0 (Critique) - ✅ Fait
- Site fonctionnel complet
- Admin CRUD
- Design responsive

### P1 (Important)
- [ ] Upload fichiers images/PDF réel
- [ ] Envoi email pour messages contact
- [ ] Internationalisation (i18n) Arabe

### P2 (Nice to have)
- [ ] SEO avancé (meta tags dynamiques)
- [ ] Analytics
- [ ] Newsletter
- [ ] Intégration paiement dons

## Date de création
20 Janvier 2025
