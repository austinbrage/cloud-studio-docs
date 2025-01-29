---
outline: deep
---

# Herramienta Ansible

CloudStudio utiliza Ansible como uno de sus componentes principales para funcionar.

**Debe ser instalado localmente para que CloudStudio pueda usarlo.**

:::info **Instalación**
[Programa Ansible](https://docs.ansible.com/ansible/latest/installation_guide/index.html)
:::

:::info **Documentación oficial**
[Documentación de Playbooks en Ansible](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html)
:::

## Vista general

Ansible es una herramienta de automatización diseñada principalmente para la administración de configuración de aplicaciones ya desplegadas ( e.j. por Terraform ). 

> No necesita agentes y su configuración simple basada en YAML habilita a desarrolladores el contectarse, instalar y configurar cualquier software en la nube.

## Características

- **`Arquitectura sin Agentes`**: No es necesario instalar software en la máquina a manejar.
- **`Playbooks YAML Legibles`**: Fácil de entender los archivos de configuración.
- **`Módulos Extesibles`**: Soporte para administrar servidores, recursos en la nube y más.
- **`Idempotencia`**: Se asegura que las tareas solo se ejecuten si es necesario.

## Ejemplo

Acá tenés un ejemplo básico de la configuración de un servidor web

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