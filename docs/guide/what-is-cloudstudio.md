# What is Cloud Studio?

[Cloud Studio](https://brage.pages.dev), is a desktop application designed for creating fast and reliable infrastructure on any cloud provider.

It edits terraform files on the screen interface and gives action butons to run the basic terraform commands for your current cloud provider.

<div class="tip custom-block" style="padding-top: 8px">

Just want to try it out? Skip to the [Quickstart](./getting-started).

</div>

## How it works?

Through a desktop application that creates, edits and executes ***.tf files*** made on the UI, saving these files on the user file system for sharing or customizing outside CloudStudio.

<div class="tip custom-block" style="padding-top: 8px">

Just want to see it in action? Skip to the [Examples](./queries).

</div>


## Use Cases

- **Web and data engineers with no devops experience**

  > A common use of CloudStudio is building infrastructure with little or no knowledge of Devops, either with the cloud provider's dashboard or the Terraform tool.. 
  
  > ***How?: The application provides reliable and tested terraform code files, editable by the user within a opinionated UI. [CloudStudio gives IaC, you edit it and run it]***

- **Big complecated Infrastructure**

  > Another common use is by devops engineers to create a large cloud infrastructure that can easily get out of control during development.

  > ***Why?: When having several servers, databases, buckets, etc the application provides with already tested infraestructure. [CloudStudio scaffolds complex IaC]***

- **Demo Infrastructure**

  > Another common use is the creation of demos quickly in cases where an infrastructure is required to test a project or functionality. 

  > ***How?: Sometimes we work with clients or teams that need to see a previous application working before starting to develop. [CloudStudio does it all at once]***

## Description

It is a desktop application made in ElectronJS, which currently works on the creation of infrastructure on the **Amazon Web Services** provider.

::: warning Only AWS Infrastructure

***Currently it only works with `Amazon Web Services`, therefore it only generates and runs Terraform files for aws products.***
:::