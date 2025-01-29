---
outline: deep
---

# Herramienta Terraform

CloudStudio utiliza Terraform como uno de sus componentes principales para funcionar.

**Debe ser instalado localmente para que CloudStudio pueda usarlo.**

:::info **Instalación**
[Programa Terraform](https://developer.hashicorp.com/terraform/language)
:::

:::info **Documentación oficial**
[Documentación del lenguaje de Terraform](https://developer.hashicorp.com/terraform/language)
:::

## Vista general

Terraform es una herramienta poderosa de IaC (Infraestructura como Código) diseñada para simplificar la administración en la nube. 

> Habilita a los usuarios el definir, desplegar y administrar recursos en múltiples proveedores en la nube usando un lenguaje de configuración declarativo.

## Características

- **`Soporte Multi-Nube`**: Se integra con AWS, Azure, GCP, y más.
- **`Infraestructura como Código`**: Te permite codificar y reproducir cualquier Infra.
- **`Gráfico de dependencias de Recursos`**: Maneja dependencias automáticamente.
- **`Administración de Estados`**: Registra los cambios y actualizaciones de la Infra.

## Ejemplo

Acá tenés un ejemplo básico de la creación de una instancia AWS EC2

```terraform
provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
```