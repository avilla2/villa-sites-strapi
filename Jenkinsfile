pipeline { 
    agent { 
        docker { 
            image 'node:18.20.0-alpine' 
        } 
    }
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage("Install") {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') { 
            steps { 
                sh 'npm run build' 
            }
        }
        stage('Deploy') {
            steps {
                sh 'cp -a . /srv/strapi-api/' 
            }
        }
    }
}