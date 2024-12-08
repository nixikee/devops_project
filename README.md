## Használt tool-ok:
 - docker
 - git
 - bind9
 - firewall
 - jenkins
 - prometheus
 - grafana
 - graylog
 - zabbix
 - nginx

Docker compose-ban fut az angular alkalmazás, a bind9, a registry,, az nginx, a jenkins, a prometheus, a grafana és a zabbix. 
Tűzfal is beállításra került.
Terraform használatába is belekezdtem, ezt azonban nem sikerült működésre bírnom.

## Futtatás:

sudo nano /etc/resolv.conf -> nameserver 172.31.0.2

sudo docker compose up --build
sudo docker compose down

## Image készítése

sudo docker build -t angular-dev-env -f Dockerfile_angular-dev-env .

sudo docker tag angular-dev-env:latest localhost:5000/angular-dev-env:latest

sudo docker run -it --rm -p 5001:5000 registry:2

sudo docker push localhost:5000/angular-dev-env

Jenkins-ben
Angular-CI-Docker
 - build step -> Execute shell
		 - docker pull localhost:5000/angular-dev-env
		 - docker run -rm angular-dev-env /bin/bash -c "git clone https://github.com/nixikee/devops_project.git && cd devops_project && npm install && npm run build"

## SSH Jenkins-be


ssh-keygen -trsa -b 4096 -C "jenkins-deploy"
 - ./keys/jenkins_deploy_key


### Install jenkins-be:
 - nodejs
 - pipeline
 - git
 - ssh agent
 - locale

### Credentials:
 - System/Global credentials
 - kind: ssh
 - id: jenkins-deploy-key
 - username: deploy
 - private key: keys/jenkins_deploy_key