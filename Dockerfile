# Utilisation de l'image officielle Node.js
FROM node:22

# Répertoire de travail dans le container
WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers dans le conteneur
COPY . .

# Expose le port utilisé par l'application
EXPOSE 3000

# Commande pour lancer l'application (avec nodemon si nécessaire)
CMD ["node", "app.js"]
