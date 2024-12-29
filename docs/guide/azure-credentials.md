---
outline: deep
---

# How to generate credentials in AZURE?

To access AZURE, you generate credentials using **Azure Active Directory (AAD)**.

The credentials in AZURE include FOUR values; a client id, a client secret, a tenant id and a subscription id. With the subscription id being interchangable within the same connection. 

## AAD and Subscriptions

The azure active directory are used for external applications (like CloudStudio) to access resources on a AZURE account, controling its access through roles and permissions.

:::info
An application is created in AAD, which generates a client_id and allows a client_secret to be configured.
And also this application is tied to a specific tenant identified by the tenant_id.

- On the other hand the subscription_id refers to a unique identifier for an Azure subscription (which controls billing, cost management, access control, permission management, etc).
:::

1. First go to the "App registrations" console after logging in

![An image](../public/azure_credentials/azure_credentials_console_search.png)

2. In the new opened console click "New registration" 

![An image](../public/azure_credentials/azure_credentials_app_registrations.png)

3. Give it a name, select "Accounts in any organizational directory" and click "Register"

![An image](../public/azure_credentials/azure_credentials_register_new_app.png)

4. Copy the Client_ID and the Tenant_ID in the application registered

![An image](../public/azure_credentials/azure_credentials_client_and_tenant_id.png)

5. Then go the "Certificates & Secrets" link in the Manage section on the leftside menu

![An image](../public/azure_credentials/azure_credentials_certificates_and_secrets_link.png)

6. Click on the "New Client Secret" button

![An image](../public/azure_credentials/azure_credentials_certificates_and_secrets.png)

7. Give a description and a duration of your choice to the new secret, click "Add"

![An image](../public/azure_credentials/azure_credentials_certificates_and_secrets_add_new.png)

8. Copy the Client_SECRET generated for the application registered

![An image](../public/azure_credentials/azure_credentials_certificates_and_secrets_copy.png)

9. Back to the Platform Dashboard go to the "Subscriptions"

![An image](../public/azure_credentials/azure_credentials_subscriptions_link.png)

10. Click on a subscription of your choice (select the default of you haven't configured any)

![An image](../public/azure_credentials/azure_credentials_subscriptions_list.png)

11. Copy the Subscription_ID that refers to the current subscription

![An image](../public/azure_credentials/azure_credentials_subscriptions_copy.png)

## Add secrets to CloudStudio

:::info
In case you have the AZURE CLI installed and logged in (with the az login command), then it's not necesary to load the credentials on the environment secrets of CloudStudio.

- Perhaps you'd want to add only the subscription_id since it identifies a specific subscription within the account that changes depending on the needs of the project.
:::

1. Go to the Azure provider on the CloudStudio dashboard and click "add secret"

![An image](../public/azure_credentials/azure_credentials_cloud_studio_add_1.png)

2. Copy the 4 keys, paste it on the default key-values and apply changes

![An image](../public/azure_credentials/azure_credentials_cloud_studio_add_2.png)

3. Finally set created secret to the current app environment

![An image](../public/azure_credentials/azure_credentials_cloud_studio_add_3.png)

