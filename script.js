
class Alumno {
    constructor(nombre, edad, especialidad) {
        this.nombre = nombre;
        this.edad = edad;
        this.especialidad = especialidad;
    }
}


const alumnos = [
    new Alumno("Juan Pérez", 20, "Desarrollo Web"),
    new Alumno("María López", 21, "Desarrollo Web"),
    new Alumno("Carlos Sánchez", 22, "Desarrollo Web"),
    new Alumno("Lucía Martínez", 23, "Desarrollo Web"),
    new Alumno("David Gómez", 24, "Desarrollo Web"),
    new Alumno("Ana Fernández", 25, "Desarrollo Web"),
    new Alumno("Miguel Torres", 26, "Desarrollo Web"),
    new Alumno("Laura Ramírez", 22, "Desarrollo Web"),
    new Alumno("Pedro Muñoz", 20, "Desarrollo Web"),
    new Alumno("Sofía Gutiérrez", 21, "Desarrollo Web"),
    new Alumno("Andrés Ruiz", 22, "Desarrollo Web"),
    new Alumno("Carmen Navarro", 23, "Desarrollo Web"),
    new Alumno("Javier Romero", 24, "Desarrollo Web"),
    new Alumno("Isabel Jiménez", 25, "Desarrollo Web"),
    new Alumno("Raúl Díaz", 26, "Desarrollo Web"),
    new Alumno("Paula Morales", 22, "Desarrollo Web"),
    new Alumno("Manuel Castro", 20, "Desarrollo Web"),
    new Alumno("Elena Ortega", 21, "Desarrollo Web"),
    new Alumno("Rosa Vargas", 23, "Desarrollo Web"),
    new Alumno("Luis Peña", 24, "Desarrollo Web"),
    new Alumno("Verónica Serrano", 25, "Desarrollo Web"),
    new Alumno("José Luis Romero", 26, "Desarrollo Web")
];

const alumnosGenerados = [];


const container = document.getElementById("container");
const botonGenerar = document.getElementById("generarAlumno");


function generarAlumno() {
    if (alumnosGenerados.length === alumnos.length) {
        alert("No se pueden generar más alumnos. Todos ya han sido generados.");
        return;
    }

    let alumnoAleatorio;
    do {
        alumnoAleatorio = alumnos[Math.floor(Math.random() * alumnos.length)];
    } while (alumnosGenerados.includes(alumnoAleatorio));

 
    alumnosGenerados.push(alumnoAleatorio);

   
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${alumnoAleatorio.nombre}</h3>
        <p>Edad: ${alumnoAleatorio.edad}</p>
        <p>Especialidad: ${alumnoAleatorio.especialidad}</p>
        <button class="borrar">Borrar</button>
    `;

  
    card.querySelector(".borrar").addEventListener("click", () => {
        container.removeChild(card);
        const index = alumnosGenerados.indexOf(alumnoAleatorio);
        if (index > -1) {
            alumnosGenerados.splice(index, 1); 
        }
    });

   
    container.appendChild(card);
}


botonGenerar.addEventListener("click", generarAlumno);
