---
outline: deep
---

# How to generate credentials in GCP?

To access GCP, you generate credentials using **Service accounts on IAM console**.

The credentials in GCP include ONE single file in JSON format that contains all the neccessary information for authentication.

## Service account keys

The service accounts are used for external applications (like CloudStudio) to access resources on a GCP account, controling its access through roles and permissions.

::: info
Every service account belongs to an specific project within GCP, so every resource created though a service account will live on that specfic project. To use a service account, the external app will connect to it by a JSON file created in the IAM console and downloaded on local machine.
:::

1. First go to the "Security accounts" console after logging in

![GCP Leftside menu](../assets/images/gcp_credentials/gcp_credentials_sidemenu.png)

2. In the new opened console click "Create Service Account" 

![GCP Service accounts](../assets/images/gcp_credentials/gcp_credentials_service_accounts.png)

3. Give it a name and appropriate description

![GCP Create service account 1](../assets/images/gcp_credentials/gcp_credentials_create_service_account.png)

4. Grant "Owner" role to access most GCP resources within that project

![GCP Create service account 2](../assets/images/gcp_credentials/gcp_credentials_service_account_permissions.png)

5. Skip the "Grant users access" step and confirm operation

![GCP Create service account 3](../assets/images/gcp_credentials/gcp_credentials_service_account_confirm.png)

6. Back to the Service accounts list, select the recently created and click "Manage Keys"

![GCP Service account manage keys](../assets/images/gcp_credentials/gcp_credentials_service_account_keys.png)

7. Click on the selector "Add Key" and then on the "Create New Key" option

![GCP Service account add key](../assets/images/gcp_credentials/gcp_credentials_service_account_create_key.png)

8. Choose JSON format and click on "Create" to download the credentials file

![GCP Service account download key](../assets/images/gcp_credentials/gcp_credentials_service_account_create_key_confirm.png)

## Add secrets to CloudStudio

:::info
After downloading the credentials JSON file, its content should look like this
:::

![GCP credentials example](../assets/images/gcp_credentials/gcp_credentials_example.png)

1. Go to the Google provider on the CloudStudio dashboard and click "add secret"

![CloudStudio add keys 1](../assets/images/gcp_credentials/gcp_credentials_cloud_studio_add_1.png)

2. Copy the root to the JSON file, paste it on the app_credentials value and apply changes

![CloudStudio add keys 2](../assets/images/gcp_credentials/gcp_credentials_cloud_studio_add_2.png)

3. Finally set created secret to the current app environment

![CloudStudio add keys 3](../assets/images/gcp_credentials/gcp_credentials_cloud_studio_add_3.png)