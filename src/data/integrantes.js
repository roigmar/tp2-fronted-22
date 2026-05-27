import andrea from '../assets/avatar-andrea.png'
import beatriz from '../assets/avatar-beatriz.png'
import marcela from '../assets/avatar-marcela.png'

import proyectoMar1 from '../assets/proyectosMarcela/proyecto-1.png'
import proyectoMar2 from '../assets/proyectosMarcela/proyecto-2.png'
import proyectoMar3 from '../assets/proyectosMarcela/proyecto-3.png'
import proyectoMar4 from '../assets/proyectosMarcela/proyecto-4.png'
import proyectoAn1 from '../assets/proyectosAndrea/DAM.png'
import proyectoAn2 from '../assets/proyectosAndrea/SePrice.png'
import proyectoAn3 from '../assets/proyectosAndrea/Porfolio.PNG'
import proyectoAn4 from '../assets/proyectosAndrea/AforoTag.PNG'

const integrantes = [
    {
        id: 1,
        nombre: "Andrea Durán",
        avatar: andrea,
        ruta: "/andrea",
        rol: "Desarrolladora Web",
        redes: {
            github: "https://github.com/andreaduran1",
            linkedin: "#"
        },
        habilidades: [
            { nombre: 'HTML', nivel: 80 },
            { nombre: 'CSS', nivel: 80 },
            { nombre: 'JavaScript', nivel: 85 },
            { nombre: 'React', nivel: 60 },
            { nombre: 'Git', nivel: 90 },
            { nombre: 'Figma', nivel: 90 },
            { nombre: 'Java', nivel: 80 },
            { nombre: 'Vue', nivel: 92 },
            { nombre: 'MySQL', nivel: 60 },
            { nombre: 'MongoDB', nivel: 40 },
            { nombre: 'Trello', nivel: 85 },
            { nombre: 'Node.js', nivel: 60 },
            { nombre: 'Azure DevOps', nivel: 70 },
        ],
        proyectos: [
            { id: 1, titulo: 'Gestión Club Deportivo', descripcion: 'Aplicación móvil para la gestión integral de socios y cobros. Permite la administración de cuotas mensuales, avisos de mora vía email y control de actividades para no socios, optimizando la administración diaria del club.', imagen: proyectoAn1, link: '#' },
            { id: 2, titulo: 'Clínica SePrice', descripcion: 'Prototipado de un sistema de gestión clínica centrado en el circuito de turnos. El diseño abarca desde la recepción del paciente hasta la atención profesional y carga de datos, priorizando la fluidez del proceso administrativo.', imagen: proyectoAn2, link: '#' },
            { id: 3, titulo: 'Portafolio', descripcion: 'Desarrollo de una Landing Page de Portafolio Personal utilizando HTML5 y CSS3 puros. Este proyecto tiene como objetivo aplicar estructuras semánticas, integración de fuentes externas (Google Fonts), manejo de layouts mediante Flexbox o Grid, y asegurar que el diseño sea responsivo y accesible.', imagen: proyectoAn3, link: '#' },
            { id: 4, titulo: 'AforoTag', descripcion: 'Aplicación web enfocada en la gestión interactiva, escaneo de accesos y recolección de Leads para eventos presenciales. Dispone de una arquitectura Mobile-First construida y optimizada bajo el ecosistema de ReactJS.', imagen: proyectoAn4, link: '#' }
        ],
        techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Git']
    },
    {
        id: 2,
        nombre: "Beatriz Gonzalez",
        avatar: beatriz,
        ruta: "/beatriz",
        rol: "Desarrolladora Web",
        redes: {
            github: "#",
            linkedin: "#"
        },
        habilidades: [
            { nombre: 'HTML', nivel: 80 },
            { nombre: 'CSS', nivel: 75 },
            { nombre: 'JavaScript', nivel: 70 },
            { nombre: 'React', nivel: 50 },
            { nombre: 'Git', nivel: 65 },
        ],
        proyectos: [
            { id: 1, titulo: 'Proyecto 1', descripcion: 'Descripción', imagen: null, link: '#' },
            { id: 2, titulo: 'Proyecto 2', descripcion: 'Descripción', imagen: null, link: '#' },
            { id: 3, titulo: 'Proyecto 3', descripcion: 'Descripción', imagen: null, link: '#' },
        ],
        techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Git']
    },
    {
        id: 3,
        nombre: "Marcela Roig",
        avatar: marcela,
        ruta: "/marcela",
        rol: "Desarrolladora Web",
        redes: {
            github: "#",
            linkedin: "#"
        },
        habilidades: [
            { nombre: 'HTML', nivel: 90 },
            { nombre: 'CSS', nivel: 85 },
            { nombre: 'JavaScript', nivel: 75 },
            { nombre: 'Python', nivel: 70 },
            { nombre: 'Kotlin', nivel: 60 },
            { nombre: 'Git', nivel: 80 },
            { nombre: 'Figma', nivel: 75 },
            { nombre: 'MySQL', nivel: 65 },
            { nombre: 'Trello', nivel: 85 },
            { nombre: 'React', nivel: 55 },
            { nombre: 'Node.js', nivel: 50 },
        ],
        proyectos: [
            { id: 1, titulo: 'Proyecto 1', descripcion: 'Descripción', imagen: proyectoMar1, link: '#' },
            { id: 2, titulo: 'Proyecto 2', descripcion: 'Descripción', imagen: proyectoMar2, link: '#' },
            { id: 3, titulo: 'Proyecto 3', descripcion: 'Descripción', imagen: proyectoMar3, link: '#' },
            { id: 4, titulo: 'Proyecto 4', descripcion: 'Descripción', imagen: proyectoMar4, link: '#' },
        ],
        techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Python', 'Kotlin', 'Figma', 'MySQL', 'Node.js']
    }
]

export default integrantes