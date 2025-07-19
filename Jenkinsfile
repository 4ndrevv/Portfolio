pipeline {
    agent any

    environment {
        IMAGE_NAME = "react-vite-nginx"
        CONTAINER_NAME = "react-vite-app"
        PORT = "8081"
        GIT_REPO = "https://github.com/4ndrevv/Portfolio.git"
        BRANCH = "main"
        EC2_USER = "ubuntu"              // SSH username trên EC2
        EC2_HOST = "15.188.195.103"        // Public IPv4 của EC2
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: "${BRANCH}", url: "${GIT_REPO}"
            }
        }

        stage('Build Docker Image Locally') {
            steps {
                sh """
                    docker build -t ${IMAGE_NAME} .
                    docker save ${IMAGE_NAME} | bzip2 > ${IMAGE_NAME}.tar.bz2
                """
            }
        }

        stage('Transfer and Deploy to EC2') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'ec2-ssh-key', keyFileVariable: 'KEYFILE')]) {
                    sh """
                        scp -o StrictHostKeyChecking=no -i \$KEYFILE ${IMAGE_NAME}.tar.bz2 ${EC2_USER}@${EC2_HOST}:/home/${EC2_USER}/
                        ssh -o StrictHostKeyChecking=no -i \$KEYFILE ${EC2_USER}@${EC2_HOST} '
                            docker stop ${CONTAINER_NAME} || true &&
                            docker rm ${CONTAINER_NAME} || true &&
                            tar -xjvf /home/${EC2_USER}/${IMAGE_NAME}.tar.bz2 -O > /home/${EC2_USER}/${IMAGE_NAME}.tar &&
                            docker load -i /home/${EC2_USER}/${IMAGE_NAME}.tar &&
                            docker run -d -p ${PORT}:80 --name ${CONTAINER_NAME} ${IMAGE_NAME}
                        '
                    """
                }
            }
        }
    }
}
