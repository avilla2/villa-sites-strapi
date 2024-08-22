pipeline { 
    agent any
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
        stage('Reload Server') {
            steps {
                sh 'pm2 reload strapi-prod' 
            }
        }
    }
}