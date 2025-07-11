pipeline {
    agent any

    environment {
        IMAGE_NAME = "react-vite-nginx"
        CONTAINER_NAME = "react-vite-app"
        PORT = "8081"
        GIT_REPO = "https://github.com/4ndrevv/Portfolio.git"
        BRANCH = "main"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${BRANCH}", url: "${GIT_REPO}"
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME} ."
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"
                    sh "docker run -d -p ${PORT}:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}"
                }
            }
        }
    }
}
