import { defineConfig } from 'vitepress'

export const en = defineConfig({

    lang: 'en-US',
    title: "Cloud studio",
    description: "CloudStudio is a desktop app that creates, edits and executes terraform / ansible projects",

    head: [
        ['link', { rel: "icon", type: 'image/svg+xml', href: "/cloudLogoHead.svg"}],
    ],
  
    themeConfig: {
        logo: { src: '/cloudLogoHead.svg', width: 24, height: 24 },
    
        nav: nav(),
    
        sidebar: {
            '/guide/': { base: '/guide/', items: sidebarGuide() }
        },
    
        socialLinks: [
            { icon: 'github', link: 'https://github.com/austinbrage' }
        ],
    
        footer: {
            message: 'Released under a Personal use License.',
            copyright: `Copyright © 2024-${new Date().getFullYear()} Austin Brage`
        },
    }
})

function nav() {
    return [
        { 
            text: 'Home', 
            link: '/' 
        },
        {
            text: 'Guide',
            link: '/guide/what-is-cloudstudio',
            activeMatch: '/guide/'
        }
    ]
}

function sidebarGuide() {
    return [
        {
            text: 'Introduction',
            collapsed: false,
            items: [
                { text: 'What is CloudStudio?', link: 'what-is-cloudstudio' },
                { text: 'Getting Started', link: 'getting-started' },
                { text: 'Examples', link: 'app-examples' },
            ]
        },
        {
            text: 'Tools',
            collapsed: true,
            items: [
                { text: 'Terraform', link: 'terraform-tool' },
                { text: 'Ansible', link: 'ansible-tool' },
                { text: 'Infracost', link: 'infracost-tool' },
            ]
        },
        {
            text: 'Providers',
            collapsed: true,
            items: [
                { text: 'AWS provider', link: 'aws-provider' },
                { text: 'AZURE provider', link: 'azure-provider' },
                { text: 'GOOGLE provider', link: 'google-provider' },
            ]
        },
        {
            text: 'Credentials',
            collapsed: true,
            items: [
                { text: 'AWS credentials', link: 'aws-credentials' },
                { text: 'AZURE credentials', link: 'azure-credentials' },
                { text: 'GOOGLE credentials', link: 'google-credentials' },
            ]
        }
    ]
}