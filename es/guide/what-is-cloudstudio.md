# ¿Qué es Cloud Studio?

Oficialmente **Cloud Studio Pro**, es una aplicación de escritorio diseñada para desarrollar rápidamente infraestructura en cualquier proveedor en la nube.

Edita archivo TERRAFORM y ANSIBLE en la interfaz, dando butones para accionar y ejecutar los comandos principales de estas herramientas en el proveedor en la nube.

<div class="tip custom-block" style="padding-top: 8px">

¿Querés probarlo ya? Saltá al [Inicio rápido](./getting-started).

</div>

## ¿Cómo funciona?

A través de una aplicación de escritorio que crea, edita y ejecuta ***archivos terraform y ansible*** elaborados en la UI, guardando estos archivos en el ordenador del usuario.

<div class="tip custom-block" style="padding-top: 8px">

¿Querés verlo ya en acción? Saltá a los [Ejemplos](./app-examples).

</div>


## Casos de uso

- **Ingenieros de datos y desarrollo web sin experiencia en DevOps**

  > Un uso común para CloudStudio es la creación de infraestructura en la nube con poca o ninguna experiencia en DevOps, a partir de plantillas ya preparadas para proyectos.
  
  > ***¿Cómo?: La aplicación provee archivos confiables de código, editables por el usuario en una UI intuituva. [CloudStudio da la IaC, vos la editás y ejecutás]***

- **Infraestuctura inmensa y complicada**

  > Otro uso común, es para los ingenieros DevOps que puedan crear grandes infraestructuras que pueden fácilmente salirse de control durante el desarrollo.

  > ***¿Por qué?: Cuando se tienen varios servidores, bases de datos, contenedores, etc, la aplicación provee con IaC ya probada. [CloudStudio genera IaC compleja]***

- **Infraestructura Demo**

  > Otro uso común es la cración de proyectos demo rápidamente en casos donde la infraestructura es requerida para probar un proyecto o funcionalidad. 

  > ***¿Cómo?: A veces trabajamos para clientes o equipos que necesitan ver previamente la aplicación antes de empezar en producción. [CloudStudio hace las 2 cosas]***

## Descripción

Es una aplicación de escritorio hecha con ElectronJS, que utiliza un directorio de trabajo en el ordenador para guardar y administrar los archivos de los proyectos en la nube.

::: info Directorio de trabajo official

***Almacenado en un repositorio público en GitHub existe un "official workdir" https://github.com/austinbrage/cloud-studio-workdir que está hecho para usarser en la app.***

- Contiene plantillas de proyectos en los 3 principales proveedores; AWS, AZURE, GOOGLE 
:::

## Importante

Acá hay un par de cosas a considerar cuando se utiliza la aplicación de Cloudstudio.

::: warning Sólo proyectos LOCALES

***La aplicación está configurada y diseñada para trabajar con proyectos locales, por lo tanto no está preparada para trabajar con proyectos colaborativos como TerraformCloud o SpaceLift.***

>  - A pesar de que puede trabajar con proyectos en equipo, no puede realizar CI/CD, revisiones de código, permisos para los desarrolladores, estado remoto, etc.

>  - CloudStudio está concebido principalmente para proyectos en solitario (e.j. "side hustles", procesos de aprendizaje) o versiones de prueba de proyectos en equipo.
:::

::: warning Sin contraseña en las claves ssh

***La aplicación está preparada para crear, almacenar y administrar claves SSH para conexiones ansible, pero no puede ejcutar comandos ansible en proyectos que usen claves con contraseña.***

>  - Ansible necesita que la contraseña de una clave SSH sea establecida para la conexión, pero la aplicación no puede probeerla al ejecutar el comando.

>  - Por lo tanto, la aplicación necesita que las claves SSH no tengan contraseña para poder ejecutar el comando ansible-playbook exitosamente.
:::