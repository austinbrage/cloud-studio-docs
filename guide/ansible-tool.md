---
outline: deep
---

# Ansible Tool

CloudStudio utilizes the Ansible program as one of its main components in order to work.

**It must be installed on the machine so CloudStudio can use it.**

:::info **Installation**
[Ansible program](https://docs.ansible.com/ansible/latest/installation_guide/index.html)
:::

:::info **Official Documentation**
[Ansible Playbook docs](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html)
:::

## Overview

Ansible is an automation tool designed mainly for configuration management in already deployed applications ( deployed with Terraform for instance ). 

> Its agentless architecture and simple YAML-based configuration enables developers to connect, install and configure any software on any machine in the cloud.

## Features
- **`Agentless Architecture`**: No need to install software on managed infraestructure.
- **`Human-Readable YAML Playbooks`**: Easy-to-understand configuration files.
- **`Extensive Modules`**: Support for managing servers, cloud resources, and more.
- **`Idempotency`**: Ensures tasks are executed only when necessary.

## Example

Here is a simple example to configure a web server

```yaml
- hosts: web
  become: yes

  tasks:
    - name: Update package index
      apt:
        update_cache: yes
    
    - name: Install Nginx
      apt:
        name: nginx
        state: present
    
    - name: Start Nginx service
      service:
        name: nginx
        state: started
```