import {propiedadesVentas} from './datos/datos.js'

const elemento = document.querySelector('#venta')
let html = ''

for (const propiedadVenta of propiedadesVentas) {
    let permiteFumar = propiedadVenta.smoke === 'true' ? '<p class="text-success"><i class="fas fa-smoking" aria-hidden="true"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban" aria-hidden="true"></i> No se permite fumar</p>'
    let permiteMascotas = propiedadVenta.pets === 'true' ? '<p class="text-success"><i class="fas fa-paw" aria-hidden="true"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban" aria-hidden="true"></i> No se permiten mascotas</p>'

    html+=
    `
    <div class="col-xl-4 col-lg-5 col-md-6 col-sm-10 mb-4 d-flex">
    <div class="card">
    <img src="${propiedadVenta.src}" alt="${propiedadVenta.nombre}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${propiedadVenta.nombre}</h5>
    <p class="card-text">${propiedadVenta.descripcion}</p>
    <p><i class="fas fa-map-marker-alt"></i> ${propiedadVenta.direccion}</p>
    <p>
    <i class="fas fa-bed"></i> ${propiedadVenta.habitaciones} Habitaciones  |
    <i class="fas fa-bath"></i> ${propiedadVenta.banos} Baños
    </p>
    <p><i class="fas fa-dollar-sign" aria-hidden="true"></i> ${(propiedadVenta.valor).toLocaleString()}</p>
    <div>${permiteFumar}</div>
    <div>${permiteMascotas}</div>
    </div>
    </div>
    </div>
    `
}

elemento.innerHTML = html