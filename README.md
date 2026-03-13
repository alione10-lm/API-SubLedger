# 💳 SubLedger API - Gestionnaire d'Abonnements FinTech

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

**SubLedger** est une API backend sécurisée qui permet aux utilisateurs de centraliser et gérer leurs abonnements numériques. Le système intègre une authentification JWT, une validation stricte des données et un contrôle d'accès basé sur les rôles (RBAC).

---

## 🚀 Fonctionnalités principales

- **Auth System** : Inscription et Connexion avec mots de passe cryptés (`bcrypt`).
- **Subscription CRUD** : Gestion complète des abonnements (Nom, Prix, Cycle).
- **Ownership Security** : Seul le propriétaire d'un abonnement peut le voir, le modifier ou le supprimer.
- **Admin Access** : Routes spéciales réservées aux administrateurs (ex: liste des utilisateurs).
- **Data Validation** : Validation des entrées avec `Express-validator`.

---

## 🛠️ Stack Technique

- **Backend** : Node.js & Express.js
- **Database** : MongoDB & Mongoose
- **Sécurité** : JWT (JSON Web Tokens), Bcrypt.js
- **Validation** : Express-validator

---

## ⚙️ Initialisation & Installation

### 1. Pré-requis

- Node.js installé
- MongoDB (Local ou Atlas)

### 2. Installation pas à pas

### Cloner le projet

```bash
git clone https://github.com/alione10-lm/API-SubLedger.git

cd API-SubLedger
```

### Installer les dépendances

```bash
npm install
```

### Créer le fichier d'environnement

```bash
touch .env
```

## 🧊 UML Diagrams

### 1. Class Diagram

<p align="center">
  <img src="./assets/class diagram.png" alt="class diagram" width="100%">
</p>

### 2. Use Case Diagram

<p align="center">
  <img src="./assets/use case.png" alt="use case diagram" width="100%">
</p>
