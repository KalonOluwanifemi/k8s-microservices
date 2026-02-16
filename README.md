# 🚀 Microservices Deployment on Azure Kubernetes Service (AKS)

[![Azure](https://img.shields.io/badge/Azure-Kubernetes-blue?logo=azure)](https://azure.microsoft.com/)  
[![Docker](https://img.shields.io/badge/Docker-Container-blue?logo=docker)](https://www.docker.com/)  
[![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js)](https://nodejs.org/)

This project demonstrates how to deploy a **microservices application** to **Azure Kubernetes Service (AKS)** using **Docker** and **Kubernetes**, following cloud-native and DevOps best practices.
## Project structure
<img width="794" height="514" alt="image" src="https://github.com/user-attachments/assets/496021f0-83af-4dd4-a823-b2d8a44d24be" />



## 📝 Steps Overview

### 1️⃣ Prepare Microservices
- Implement Node.js + Express services in each folder (`api-gateway/`, `user-service/`, `product-service/`)  
- Add Dockerfile in each service folder for containerization  

### 2️⃣ Build & Push Docker Images
- Build Docker images using the folder context  
- Push images to Docker Hub (or your preferred container registry)  

Example:
docker build -t <username>/user-service:1.0 ./user-service
docker push <username>/user-service:1.0


### 3️⃣ Create Kubernetes Manifests
- Define **Deployment** and **Service** manifests in `k8s/`  
- API Gateway → LoadBalancer  
- Other services → ClusterIP  

### 4️⃣ Setup AKS Cluster
az login
az group create --name microservices-rg --location eastus
az aks create --resource-group microservices-rg --name microservices-cluster --node-count 2 --enable-addons monitoring --generate-ssh-keys
az aks get-credentials --resource-group microservices-rg --name microservices-cluster

### 5️⃣ Deploy Microservices
kubectl apply -f k8s/user-deployment.yaml
kubectl apply -f k8s/product-deployment.yaml
kubectl apply -f k8s/gateway-deployment.yaml

kubectl get nodes
kubectl get pods
kubectl get svc

- Access API Gateway via External IP:

http://EXTERNAL-IP/users

http://EXTERNAL-IP/products

Kubectl get svc

<img width="895" height="160" alt="image" src="https://github.com/user-attachments/assets/391080f1-2e98-4248-87bb-28847aa55ea2" />


kubectl get pods

<img width="736" height="155" alt="image" src="https://github.com/user-attachments/assets/b91dc9aa-14ad-46d6-8e62-34a594d9070b" />


http://52.159.224.99/products

<img width="1190" height="724" alt="image" src="https://github.com/user-attachments/assets/3205d68e-ec5e-44c7-bf31-fc713df5b071" />

GitOps with ArgoCD

<img width="1911" height="856" alt="image" src="https://github.com/user-attachments/assets/492b9996-96d4-4c30-ba52-bbf6355907b5" />


