import {propiedadesAlquiler} from './datos/datos.js'

const elemento2 = document.querySelector('#alquiler')
let html2 = ''

for (const propiedadAlquiler of propiedadesAlquiler) {
    let permiteFumar2 = propiedadAlquiler.smoke === 'true' ? '<p class="text-success"><i class="fas fa-smoking" aria-hidden="true"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban" aria-hidden="true"></i> No se permite fumar</p>'
    let permiteMascotas2 = propiedadAlquiler.pets === 'true' ? '<p class="text-success"><i class="fas fa-paw" aria-hidden="true"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban" aria-hidden="true"></i> No se permiten mascotas</p>'

    html2+=
    `
    <div class="col-xl-4 col-lg-5 col-md-6 col-sm-10 mb-4 d-flex">
    <div class="card">
    <img src="${propiedadAlquiler.src}" alt="${propiedadAlquiler.nombre}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${propiedadAlquiler.nombre}</h5>
    <p class="card-text">${propiedadAlquiler.descripcion}</p>
    <p><i class="fas fa-map-marker-alt"></i> ${propiedadAlquiler.direccion}</p>
    <p>
    <i class="fas fa-bed"></i> ${propiedadAlquiler.habitaciones} Habitaciones  |
    <i class="fas fa-bath"></i> ${propiedadAlquiler.banos} Baños
    </p>
    <p><i class="fas fa-dollar-sign" aria-hidden="true"></i> ${(propiedadAlquiler.valor).toLocaleString()}</p>
    <div>${permiteFumar2}</div>
    <div>${permiteMascotas2}</div>
    </div>
    </div>
    </div>
    `
}

elemento2.innerHTML = html2