import andrea from '../assets/avatar-andrea.png'
import beatriz from '../assets/avatar-beatriz.png'
import marcela from '../assets/avatar-marcela.png'

import proyectoMar1 from '../assets/proyectosMarcela/Proyecto-1.png'
import proyectoMar2 from '../assets/proyectosMarcela/Proyecto-2.png'
import proyectoMar3 from '../assets/proyectosMarcela/Proyecto-3.png'
import proyectoMar4 from '../assets/proyectosMarcela/Proyecto-4.png'
import proyectoAn1 from '../assets/proyectosAndrea/DAM.png'
import proyectoAn2 from '../assets/proyectosAndrea/SePrice.png'
import proyectoAn3 from '../assets/proyectosAndrea/Porfolio.PNG'
import proyectoAn4 from '../assets/proyectosAndrea/AforoTag.PNG'
import prezi from '../assets/proyectosBeatriz/prezi.png'
import bigdata from '../assets/proyectosBeatriz/bigdata.png'
import uxui from '../assets/proyectosBeatriz/uxui.png'  

const integrantes = [
    {
        id: 1,
        nombre: "Andrea Durán",
        avatar: andrea,
        ruta: "/andrea",
        rol: "Desarrolladora Web",
        redes: {
            github: "https://github.com/andreaduran1",
            linkedin: "https://linkedin.com"
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
            { nombre: 'Kotlin', nivel: 50 },
            { nombre: 'Node.js', nivel: 60 },
            { nombre: 'MySQL', nivel: 60 },
            { nombre: 'MongoDB', nivel: 40 },
            { nombre: 'Trello', nivel: 85 },
            { nombre: 'Azure DevOps', nivel: 70 },
        ],
        proyectos: [
            { id: 1, titulo: 'Gestión Club Deportivo', descripcion: 'Aplicación móvil para la gestión integral de socios y cobros. Permite la administración de cuotas mensuales, avisos de mora vía email y control de actividades para no socios, optimizando la administración diaria del club.', imagen: proyectoAn1, link: '#' },
            { id: 2, titulo: 'Clínica SePrice', descripcion: 'Prototipado de un sistema de gestión clínica centrado en el circuito de turnos. El diseño abarca desde la recepción del paciente hasta la atención profesional y carga de datos, priorizando la fluidez del proceso administrativo.', imagen: proyectoAn2, link: '#' },
            { id: 3, titulo: 'Portafolio', descripcion: 'Desarrollo de una Landing Page de Portafolio Personal utilizando HTML5 y CSS3 puros. Este proyecto tiene como objetivo aplicar estructuras semánticas, integración de fuentes externas (Google Fonts), manejo de layouts mediante Flexbox o Grid, y asegurar que el diseño sea responsivo y accesible.', imagen: proyectoAn3, link: '#' },
            { id: 4, titulo: 'AforoTag', descripcion: 'Aplicación web enfocada en la gestión interactiva, escaneo de accesos y recolección de Leads para eventos presenciales. Dispone de una arquitectura Mobile-First construida y optimizada bajo el ecosistema de ReactJS.', imagen: proyectoAn4, link: '#' }
        ],
        techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Git','Java', 'Vue', 'MySQL', 'MongoDB','Node.js', 'Kotlin']
    },
    {
        id: 2,
        nombre: "Beatriz González",
        avatar: beatriz,
        ruta: "/beatriz",
        rol: "Desarrolladora Web",
        redes: {
            github: "#",
            linkedin: "https://linkedin.com"
        },
        habilidades: [
            { nombre: 'HTML', nivel: 80 },
            { nombre: 'CSS', nivel: 75 },
            { nombre: 'JavaScript', nivel: 70 },
            { nombre: 'Python', nivel: 70 },
            { nombre: 'MySQL', nivel: 60 },
            { nombre: 'Figma', nivel: 75 },
            { nombre: 'Looker Studio', nivel: 75 },
            { nombre: 'Prezi', nivel: 75 },
            { nombre: 'Trello', nivel: 70 },
            { nombre: 'React', nivel: 50 },
            { nombre: 'Git', nivel: 65 },
            { nombre: 'Cobol', nivel: 85 },
            { nombre: 'CICS', nivel: 85 },
        ],
        proyectos: [
            { id: 1, titulo: 'Prezi', descripcion: 'Presentación de desarrollo del software y el mundo laboral', imagen: prezi, link: '#' },
            { id: 2, titulo: 'Big-Data', descripcion: 'Análisis de datos presentación en Looker Studio', imagen: bigdata, link: '#' },
            { id: 3, titulo: 'UX-UI', descripcion: 'Ideación de una actividad comercial innovadora, generación de prototipos y Marca', imagen: uxui, link: '#' },
        ],
        techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Python', 'MySQL', 'Figma', 'Looker Studio', 'Trello']
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
            { id: 1, titulo: 'Task Manager', descripcion: 'Una aplicación web de tareas construida con Flask y SQLite. Task Manager permite crear, listar, completar y eliminar tareas desde una interfaz sencilla y responsive. Principales características: registro e inicio de sesión de usuarios, creación de tareas con título, descripción y prioridad, visualización de tareas pendientes y completadas, tareas completadas se muestran al final de la lista, diseño móvil-friendly con una paleta de colores moderna.', imagen: proyectoMar1, link: '#' },
            { id: 2, titulo: 'Mobile App', descripcion: 'Aplicación desarrollada para la materia "Desarrollo de Aplicaciones Móviles". Los requisitoseran: iniciar sesión en la aplicación como administrador, registrar clientes, pagar cuotas y actividades, y consultar las fechas de vencimiento diarias. Se maquetó en Figma y se desarrolló en Android Studio utilizando Kotlin y XML', imagen: proyectoMar2, link: '#' },
            { id: 3, titulo: 'Desktop App - Inglés', descripcion: 'Aplicación de escritorio personalizada, diseñada para un profesor de inglés sobre la base de un ejercicio. Los requerimientos del sistema fueron, por un lado, gestionar un crud para categorías semánticas y dentro de ellas para palabras o frases y por el otro, generar una                            visualización random y no repetitiva de esas palabras una vez seleccionada la categoría. La aplicación se desarrolló en C# con Visual Studio utilizando Windows Forms.', imagen: proyectoMar3, link: '#' },
            { id: 4, titulo: 'Portfolio personal', descripcion: 'Desarrollo de un portafolio personal para mostrar mis proyectos y habilidades. Desarrollado en HTML, CSS y JavaScript.', imagen: proyectoMar4, link: '#' },
        ],
        techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Python', 'Kotlin', 'Figma', 'MySQL', 'Node.js']
    }
]

export default integrantes