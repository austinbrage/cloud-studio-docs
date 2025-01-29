# What is Cloud Studio?

**Cloud Studio**, is a desktop application designed for creating fast and reliable infrastructure on any cloud provider.

It edits TERRAFORM and ANSIBLE files on the screen interface and gives action buttons to run the main commands for these tools on your current cloud provider.

<div class="tip custom-block" style="padding-top: 8px">

Just want to try it out? Skip to the [Quickstart](./getting-started).

</div>

## How it works?

Through a desktop application that creates, edits and executes ***terraform and ansible files*** made on the UI, saving these files on the user file system.

<div class="tip custom-block" style="padding-top: 8px">

Just want to see it in action? Skip to the [Examples](./app-examples).

</div>


## Use Cases

- **Web and data engineers with no devops experience**

  > A common use of CloudStudio is building infrastructure with little or no knowledge of Devops, scaffolding built-in templates for new projects on the dashboard.
  
  > ***How?: The application provides reliable and tested terraform/ansible code files, editable by the user on a intuitive UI. [CloudStudio gives IaC, you edit it and run it]***

- **Big complecated Infrastructure**

  > Another common use is by devops engineers to create a large cloud infrastructure that can easily get out of control during development.

  > ***Why?: When having several servers, databases, buckets, etc the application provides with already tested infraestructure. [CloudStudio scaffolds complex IaC]***

- **Demo Infrastructure**

  > Another common use is the creation of demos quickly in cases where an infrastructure is required to test a project or functionality. 

  > ***How?: Sometimes we work with clients or teams that need to see a previous application working before starting on production. [CloudStudio does it all at once]***

## Description

It is a desktop application made in ElectronJS, which uses a work directory to store and manage the folder and files of the cloud projects.

::: info Official Workdir

***Stored on a public GitHub repo there is an official workdir https://github.com/austinbrage/cloud-studio-workdir that is intened to be used by the DESKTOP APP.***

- This repo contains templates for projects on the 3 main cloud providers; AWS, AZURE, GOOGLE 
:::

## Important

Here there are a couple of things to consider when using the Cloudstudio app.

::: warning Only LOCAL projects

***The app is set and strongly prepared to work with local projects, therefore it's not fully prepared to work with collaborative projects like TerraformCloud or SpaceLift.***

>  - Although it can work with code written in team projects, it cannot perform CI/CD, code reviews, dev permissions, backend state, etc.

>  - CloudStudio is mainly conceived for solo projects (e.g. side hustles, learning process) or personal stage versions of team projects.
:::

::: warning No PASSPHRASE on ssh keys

***The app is prepared to create, store and manage SSH keys for ansible connections, but it cannot run ansible commands on projects that use keys with a passphrase.***

>  - Ansible needs the passphrase of an SSH key to establish connection, but the app can't run the ansible-playbook command in that case.

>  - Therefore the app needs the SSH key with no passphrase to be able to run the ansible-playbook command successfully.
:::