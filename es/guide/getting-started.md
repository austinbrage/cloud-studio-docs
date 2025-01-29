# Inicio rápido

## Intaladores de la aplicación

[Place installer files]

## Panel de control vacío

Cuando el panel de control se abre pro primera vez, no tendrás un **dir. de trabajo** seteado.

:::info ¿Qué es un directorio de trabajo?
También llamado "workdir" es una carpeta en el sistema local del usuario donde todo el trabajo realizado en la aplicación será guardado y ejecutado.

- *La alicación está pensada para trabajar con un **"official workdir"** almacenado en un repositorio público de Github, para que pueda ser clonado por el usuario y setado en la app*.
:::

:::tip Eligiendo un dir. de trabajo
En el panel vos vas a tener 2 opciones para configurar el "workdir": 

1. Podés hacerlo manualmente, copiando el comando de clonación de git, ejecutándolo localmente y seleccionando la nueva carpeta clonada en **settings** siguiendo las flechas.

2. O podés hacerlo automáticamente, accionando el botón para elegir una carpeta en tu ordenador donde querés colocar el "workdir", y luego la aplicación hará el resto. 
:::

![Initial Dashboard](../../assets/images/examples_dashboard/initial_dashboard.png)

## Panel de control preparado

Una vez que el dir. de trabajo este clonado en tu computadora, se parecerá a esto.

- *Tres carpetas para los 3 principales proveedores del mercado (aws, azure and gcp)*. 
- *Y dentro de cada una, una carpeta para la claves (ssh), plantillas, proyectos, etc*.

![Official workdir](../../assets/images/examples_dashboard/official_workdir.png)

La aplicación lee estos directorios en el "workdir" y los lista en el menú lateral.

- *CloudStudio está preparado para los estos 3 proveedores, con sus logos respectivos*. 
- *Al seleccionar uno, el panel te llevará a lista de sus plantillas, proyectos, módulos, etc*. 

![Main Dashboard](../../assets/images/examples_dashboard/main_dashboard.png)
