# PRD - Site ONG Porte du Savoir (Udditaare Ganndal)

## Problème original
Créer un site web officiel pour l'ONG "Porte du Savoir (Udditaare Ganndal)", spécialisée dans la promotion de l'éducation à Nouadhibou, Mauritanie. Site moderne, professionnel, responsive, multilingue prêt (FR par défaut), sécurisé, avec interface admin complète.

## Choix utilisateur
- Palette: Bleu/vert (éducation, espoir)
- Logo: Créé (icône livre avec dégradé)
- Contenu: Démonstration créé
- Don: Bouton redirigeant vers contact
- Upload fichiers: Local (serveur)
- Email: Non implémenté (à ajouter plus tard)

## Architecture technique
- **Frontend**: React + Tailwind CSS + Shadcn UI
- **Backend**: FastAPI (Python)
- **Base de données**: MongoDB
- **Auth**: JWT
- **Stockage fichiers**: Local (/app/backend/uploads/)

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
- [x] CRUD Projets avec upload d'images
- [x] CRUD Articles avec upload d'images
- [x] Gestion Membres (Ajout direct, Modification, Approbation/Rejet)
- [x] Gestion Documents avec upload PDF/DOC
- [x] Messages de contact
- [x] Paramètres (Contenu du site)

### Upload de fichiers ✅ (Iteration 2)
- [x] Upload d'images (JPG, PNG, WebP, GIF) - max 10MB
- [x] Upload de documents (PDF, DOC, DOCX) - max 10MB
- [x] Stockage local dans /app/backend/uploads/
- [x] Fichiers servis via /uploads/
- [x] Zone drag & drop + URL externe en fallback

### Gestion des membres ✅ (Iteration 2)
- [x] Admin peut ajouter un membre directement (déjà approuvé)
- [x] Admin peut modifier un membre existant
- [x] Choix du type: Actif, Fondateur, Honneur

## Credentials Admin
- **Email**: admin@portedusavoir.org
- **Mot de passe**: Admin123!

## Backlog P1/P2

### P1 (Important)
- [ ] Envoi email pour messages contact
- [ ] Internationalisation (i18n) Arabe

### P2 (Nice to have)
- [ ] SEO avancé (meta tags dynamiques)
- [ ] Analytics
- [ ] Newsletter
- [ ] Intégration paiement dons

## Historique des mises à jour
- **20 Jan 2025**: MVP créé avec toutes les pages publiques et admin
- **20 Jan 2025**: Ajout upload fichiers local + gestion membres améliorée
