import { defineConfig } from 'vitepress'

export const es = defineConfig({

    lang: 'es-EN',
    title: "Cloud studio",
    description: "Documentación de una aplicación de escritorio de desarrollo DevOps",

    head: [
        ['link', { rel: "icon", type: 'image/svg+xml', href: "/cloudLogoHead.svg"}],
    ],
  
    themeConfig: {
        logo: { src: '/cloudLogoHead.svg', width: 24, height: 24 },
    
        nav: nav(),
    
        sidebar: {
            '/es/guide/': { base: '/es/guide/', items: sidebarGuide() }
        },
    
        socialLinks: [
            { icon: 'github', link: 'https://github.com/austinbrage' }
        ],
    
        footer: {
            message: 'Publicado bajo una licencia de uso personal.',
            copyright: `Derechos reservados © 2024-${new Date().getFullYear()} Austin Brage`
        },
        
        docFooter: {
            prev: 'Anterior',
            next: 'Siguiente'
        },
    
        outline: {
            label: 'En esta página'
        },
        
        langMenuLabel: 'Cambiar Idioma',
        returnToTopLabel: 'Volver arriba',
        sidebarMenuLabel: 'Menu Lateral',
        darkModeSwitchLabel: 'Tema Oscuro',
        lightModeSwitchTitle: 'Cambiar a modo claro',
        darkModeSwitchTitle: 'Cambiar a modo oscuro',
        skipToContentLabel: 'Saltar al contenido'
    },

})

function nav() {
    return [
        { 
            text: 'Inicio', 
            link: '/es' 
        },
        {
            text: 'Guia',
            link: '/es/guide/what-is-cloudstudio',
            activeMatch: '/es/guide/'
        }
    ]
}

function sidebarGuide() {
    return [
        {
            text: 'Introducción',
            collapsed: false,
            items: [
                { text: '¿Qué es CloudStudio?', link: 'what-is-cloudstudio' },
                { text: 'Inicio rápido', link: 'getting-started' },
                { text: 'Ejemplos', link: 'app-examples' },
            ]
        },
        {
            text: 'Herramientas',
            collapsed: true,
            items: [
                { text: 'Terraform', link: 'terraform-tool' },
                { text: 'Ansible', link: 'ansible-tool' },
                { text: 'Infracost', link: 'infracost-tool' },
            ]
        },
        {
            text: 'Proveedores',
            collapsed: true,
            items: [
                { text: 'Proveedor AWS', link: 'aws-provider' },
                { text: 'Proveedor AZURE', link: 'azure-provider' },
                { text: 'Proveedor GOOGLE', link: 'google-provider' },
            ]
        },
        {
            text: 'Credenciales',
            collapsed: true,
            items: [
                { text: 'Credenciales AWS', link: 'aws-credentials' },
                { text: 'Credenciales AZURE', link: 'azure-credentials' },
                { text: 'Credenciales GOOGLE', link: 'google-credentials' },
            ]
        }
    ]
}