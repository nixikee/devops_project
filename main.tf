# main.tf
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.0"
    }
  }
}

resource "docker_network" "app_network" {
  name = "${var.project_name}-network"
  driver = "bridge"
  # Enable IPv6 if needed
  ipam_config {
    subnet = "172.100.0.0/16"
    gateway = "172.100.0.1"
  }
  internal = false
}


# Angular alkalmazás modul
module "angular_app" {
  source = "./modules/angular-app"

  app_port = var.client_port
  container_name = "${var.project_name}-angular"
}

output "network_info" {
  value = {
    network_id   = docker_network.app_network.id
    network_name = docker_network.app_network.name
  }
}
