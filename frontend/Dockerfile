# Usando a imagem oficial do Node.js
FROM node:14

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependência
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar o código da aplicação
COPY . .

# Rodar o build da aplicação React
RUN npm run build

# Expor a porta padrão do React (3000)
EXPOSE 3000

# Comando para rodar a aplicação com o React
CMD ["npm", "start"]
