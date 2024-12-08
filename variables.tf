# variables.tf
variable "project_name" {
  description = "A projekt neve, ami az erőforrások elnevezésében is megjelenik"
  type        = string
  default     = "devops-project"
}

variable "client_port" {
  description = "Az Angular alkalmazás portja"
  type        = number
  default     = 4200
}

