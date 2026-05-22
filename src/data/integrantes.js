import andrea from '../assets/avatar-andrea.png'
import beatriz from '../assets/avatar-beatriz.png'
import marcela from '../assets/avatar-marcela.png'

import proyectoMar1 from '../assets/proyectosMarcela/proyecto-1.png'
import proyectoMar2 from '../assets/proyectosMarcela/proyecto-2.png'
import proyectoMar3 from '../assets/proyectosMarcela/proyecto-3.png'
import proyectoMar4 from '../assets/proyectosMarcela/proyecto-4.png'

const integrantes = [
    {
        id: 1,
        nombre: "Andrea Durán",
        avatar: andrea,
        ruta: "/andrea",
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