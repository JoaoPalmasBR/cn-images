# Etapa 1: Imagem base com o Python
FROM python:3.9-slim

# Setar o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o requirements.txt para o container
COPY requirements.txt .

# Instalar as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copiar o código do projeto para o container
COPY . .

# Expôr a porta
EXPOSE 8000

# Comando para rodar o Django com o Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "meu_projeto.wsgi:application"]
