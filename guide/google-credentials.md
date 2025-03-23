---
outline: deep
---

# How to generate credentials in GCP?

To access GCP, you generate credentials using **Service accounts on IAM console**.

The credentials in GCP include ONE single file in JSON format that contains all the neccessary information for authentication.

## Project and billing

The services in Google Cloud are organized in projects, each project has its own ID, billing account and permissions to use the GCP resources through service accounts.

::: info
Each project used to deploy resources has to have a billing account with a credit card attached. 
:::

1. First go to the "Create a project" console after logging in

![GCP Leftside menu](../assets/images/gcp_credentials/gcp_credentials_new_project_1.png)

2. Choose a project name and a unique project ID (to use it on CloudStudio)

![GCP New Project](../assets/images/gcp_credentials/gcp_credentials_new_project_2.png)

3. Go to "Billing" on the new created project

![GCP New billing account](../assets/images/gcp_credentials/gcp_credentials_new_billing_1.png)

4. Go to "Manage billing accounts" to create a new account

![GCP Manage billing account](../assets/images/gcp_credentials/gcp_credentials_new_billing_2.png)

5. Click on "Create account"

![GCP Create billing account](../assets/images/gcp_credentials/gcp_credentials_new_billing_3.png)

6. Choose a name and a country for the new account and click on "Continue"

![GCP New billing account name](../assets/images/gcp_credentials/gcp_credentials_new_billing_4.png)

7. Add or choose a credit card and click on "Submit and enable billing"

![GCP New billing account credit card](../assets/images/gcp_credentials/gcp_credentials_new_billing_5.png)

8. Create a budget alert on the new billing account and go back to "billing"

![GCP Billing account budget alert](../assets/images/gcp_credentials/gcp_credentials_new_billing_6.png)

9. On the tab of "My projects" select the "Change billing" action on the new project

![GCP Projects tabs](../assets/images/gcp_credentials/gcp_credentials_new_billing_7.png)

10. Select the new account and click on "Set account"

![GCP Project attached to new account](../assets/images/gcp_credentials/gcp_credentials_new_billing_8.png)

## Service account keys

The service accounts are used for external applications (like CloudStudio) to access resources on a GCP account, controling its access through roles and permissions.

::: info
Every service account belongs to an specific project within GCP, so every resource created though a service account will live on that specfic project. To use a service account, the external app will connect to it by a JSON file created in the IAM console and downloaded on local machine.
:::

1. First go to the "Security accounts" on the new project dashboard

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

## APIs and Project permissions

Before start working with the new credentials, the APIs of each service to be deployed have to be enabled on the project.

:::info
The APIs for each Google service of a project can be enable or disable on the library.
:::

1. Go to "library" in the APIs and services section

![GCP Leftside menu](../assets/images/gcp_credentials/gcp_credentials_apis_1.png)

2. Search for the service you want to deploy on Google cloud

![GCP Library](../assets/images/gcp_credentials/gcp_credentials_apis_2.png)

3. Select the service you are looking for

![GCP Library search](../assets/images/gcp_credentials/gcp_credentials_apis_3.png)

4. Click on "enable" and wait until it takes effect

![GCP Service API enable](../assets/images/gcp_credentials/gcp_credentials_apis_4.png)

:::info
Additionally if you want to use the credentials generated on "Project A" to deploy resources on "Project B" you'll need to add the same service account with owner role to "Project B".
:::

1. Go to "IAM" console on the "Project B" you want to link to the credentials of "Project A"

![GCP Leftside menu](../assets/images/gcp_credentials/gcp_credentials_cross_project_1.png)

2. Click on "Grant access"

![GCP IAM console](../assets/images/gcp_credentials/gcp_credentials_cross_project_2.png)

3. Select the name of the service account of "Project A" and give it an owner role, save it

![GCP IAM grant access](../assets/images/gcp_credentials/gcp_credentials_cross_project_3.png)

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