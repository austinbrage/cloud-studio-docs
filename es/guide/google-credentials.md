---
outline: deep
---

# ¿Cómo generar credenciales en GCP?

Para acceder a GCP, se generan credenciales utilizando **Cuentas de servicio en la consola IAM**.

Las credenciales en GCP consisten en UN solo archivo en formato JSON que contiene toda la información necesaria para la autenticación.

## Claves de cuentas de servicio  

Las cuentas de servicio se utilizan para que aplicaciones externas (como CloudStudio) accedan a los recursos de una cuenta de GCP, controlando su acceso mediante roles y permisos.  

::: info  
Cada cuenta de servicio pertenece a un proyecto específico dentro de GCP, por lo que cada recurso creado a través de una cuenta de servicio existirá dentro de ese mismo proyecto. Para utilizar una cuenta de servicio, la aplicación externa se conectará a ella mediante un archivo JSON creado en la consola IAM y descargado en la máquina local.  
:::  

1. Primero, ingresá a la consola de **Cuentas de servicio** después de iniciar sesión.  

![GCP Leftside menu](../../assets/images/gcp_credentials/gcp_credentials_sidemenu.png)  

2. En la nueva consola, hacé clic en **"Crear cuenta de servicio"**.  

![GCP Service accounts](../../assets/images/gcp_credentials/gcp_credentials_service_accounts.png)  

3. Asignale un nombre y una descripción adecuada.  

![GCP Create service account 1](../../assets/images/gcp_credentials/gcp_credentials_create_service_account.png)  

4. Asignale el rol **"Owner"** para que pueda acceder a la mayoría de los recursos de GCP dentro de ese proyecto.  

![GCP Create service account 2](../../assets/images/gcp_credentials/gcp_credentials_service_account_permissions.png)  

5. Saltá el paso de **"Otorgar acceso a usuarios"** y confirmá la operación.  

![GCP Create service account 3](../../assets/images/gcp_credentials/gcp_credentials_service_account_confirm.png)  

6. Volvé a la lista de cuentas de servicio, seleccioná la recién creada y hacé clic en **"Administrar claves"**.  

![GCP Service account manage keys](../../assets/images/gcp_credentials/gcp_credentials_service_account_keys.png)  

7. Hacé clic en **"Agregar clave"** y luego en **"Crear nueva clave"**.  

![GCP Service account add key](../../assets/images/gcp_credentials/gcp_credentials_service_account_create_key.png)  

8. Elegí el formato **JSON** y hacé clic en **"Crear"** para descargar el archivo de credenciales.  

![GCP Service account download key](../../assets/images/gcp_credentials/gcp_credentials_service_account_create_key_confirm.png)  

## Agregar credenciales en CloudStudio  

:::info  
Después de descargar el archivo JSON de credenciales, su contenido debería verse así:  
:::  

![GCP credentials example](../../assets/images/gcp_credentials/gcp_credentials_example.png)  

1. Accedé al proveedor de Google en el panel de CloudStudio y hacé clic en **"Agregar secreto"**.  

![CloudStudio add keys 1](../../assets/images/gcp_credentials/gcp_credentials_cloud_studio_add_1.png)  

2. Copiá la ruta del archivo JSON, pegala en el campo **app_credentials** y aplicá los cambios.  

![CloudStudio add keys 2](../../assets/images/gcp_credentials/gcp_credentials_cloud_studio_add_2.png)  

3. Finalmente, asigná la clave creada al entorno de la aplicación actual.  

![CloudStudio add keys 3](../../assets/images/gcp_credentials/gcp_credentials_cloud_studio_add_3.png)  
