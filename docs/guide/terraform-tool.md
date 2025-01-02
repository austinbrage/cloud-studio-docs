---
outline: deep
---

# Terraform tool

CloudStudio utilizes the Terraform program as one of its main components in order to work.

**It must be installed on the machine so CloudStudio can use it.**

:::info **Installation**
[Terraform program](https://developer.hashicorp.com/terraform/language)
:::

:::info **Official Documentation**
[Terraform Language docs](https://developer.hashicorp.com/terraform/language)
:::

## Overview
Terraform is a powerful IaC (Infrastructure as Code) tool designed to simplify the management of the cloud. 

> It enables users to define, deploy, and manage resources across multiple cloud providers using a declarative configuration language.

## Features
- **`Multi-Cloud Support`**: Integrates with AWS, Azure, GCP, and more.
- **`Infrastructure as Code`**: Allows you to codify any infrastructure for reproducibility.
- **`Resource Dependency Graph`**: Automatically handles resource dependencies.
- **`State Management`**: Keeps track of infrastructure changes and updates.

## Example

Here is a basic example of creating an AWS EC2 instance

```terraform
provider "aws" {
  region = "us-west-2"
}

resource "aws_instance" "example" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
```