pipeline {
    agent any

    environment {
        KUBECONFIG = 'C:\\ProgramData\\Jenkins\\.kube\\config'
    }

    stages {
        

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t reg-form:latest .'
            }
        }

        stage('Load Image into Kind') {
            steps {
                bat 'docker save reg-form:latest -o regform.tar'
                bat 'kind load image-archive regform.tar --name regform-cluster'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat 'kubectl delete -f regform-deployment.yaml || echo "No previous deployment"'
                bat 'kubectl apply -f regform-deployment.yaml'
            }
        }

        stage('Verify Deployment') {
            steps {
                bat 'kubectl get pods'
                bat 'kubectl get svc'
            }
        }
    }
}
