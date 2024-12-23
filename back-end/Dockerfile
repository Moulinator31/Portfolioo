# Utiliser une image Node.js comme base
FROM node:16

# Créer un répertoire de travail
WORKDIR /app

# Copier les fichiers de package
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du projet
COPY . .

# Exposer le port utilisé par votre application
EXPOSE 8000

# Lancer l'application
CMD ["npm", "run", "start:dev"]
