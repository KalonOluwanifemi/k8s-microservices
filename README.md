🚀 Microservices Deployment on Azure Kubernetes Service (AKS)






This project demonstrates how to build, containerize, and deploy a simple microservices application to Azure Kubernetes Service (AKS) using Docker and Kubernetes, following cloud-native and DevOps best practices.

📂 Project Structure
microservices-app/
│
├── api-gateway/
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
│
├── user-service/
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
│
├── product-service/
│   ├── Dockerfile
│   ├── package.json
│   └── index.js
│
├── k8s/
│   ├── user-deployment.yaml
│   ├── product-deployment.yaml
│   └── gateway-deployment.yaml
│
└── README.md

🏗️ High-Level Architecture

The application consists of three microservices:

API Gateway – Public entry point

User Service – Handles user-related endpoints

Product Service – Handles product-related endpoints

Flow:
Client → API Gateway → User Service
                     → Product Service
All services run as containers inside a Kubernetes cluster and communicate using Kubernetes internal networking.

📝 Steps Overview
1️⃣ Prepare Microservices

Implement Node.js + Express services in each folder

Add Dockerfile in each service folder for containerization

2️⃣ Build & Push Docker Images

Build Docker images for each service using the folder context

Push images to Docker Hub (or preferred container registry)

Reference:
docker build -t <username>/user-service:1.0 ./user-service
docker push <username>/user-service:1.0

3️⃣ Create Kubernetes Manifests

Define Deployment and Service manifests for each microservice in k8s/

user-deployment.yaml → User Service

product-deployment.yaml → Product Service

gateway-deployment.yaml → API Gateway

API Gateway service type: LoadBalancer (exposed externally)

Other services: ClusterIP (internal communication)

4️⃣ Setup AKS Cluster

# Login to Azure
az login

# Create a resource group
az group create --name microservices-rg --location eastus

# Create AKS cluster
az aks create \
  --resource-group microservices-rg \
  --name microservices-cluster \
  --node-count 2 \
  --enable-addons monitoring \
  --generate-ssh-keys

# Configure kubectl
az aks get-credentials --resource-group microservices-rg --name microservices-cluster

kubectl apply -f k8s/user-deployment.yaml
kubectl apply -f k8s/product-deployment.yaml
kubectl apply -f k8s/gateway-deployment.yaml

kubectl get nodes
kubectl get pods
kubectl get svc

http://<EXTERNAL-IP>/users
http://<EXTERNAL-IP>/products

✅ Summary

Microservices containerized with Docker

Orchestrated and deployed to AKS using Kubernetes

API Gateway exposes services externally

Internal communication via ClusterIP services
