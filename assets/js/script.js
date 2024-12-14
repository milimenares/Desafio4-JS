// // //etiquetas smoke y pets
// // const generarEtiquetas = (smoke, pets) => {
// //     const permiteFumar = smoke === 'true'
// //         ? '<p class="text-success"><i class="fas fa-smoking" aria-hidden="true"></i> Permitido fumar</p>'
// //         : '<p class="text-danger"><i class="fas fa-smoking-ban" aria-hidden="true"></i> No se permite fumar</p>'

// //     const permiteMascotas = pets === 'true'
// //         ? '<p class="text-success"><i class="fas fa-paw" aria-hidden="true"></i> Mascotas permitidas</p>'
// //         : '<p class="text-danger"><i class="fa-solid fa-ban" aria-hidden="true"></i> No se permiten mascotas</p>'

// //     return { permiteFumar, permiteMascotas }
// // }

// // //renderizar propiedades
// // const renderizarPropiedades = (selector, propiedades) => {
// //     const elemento = document.querySelector(selector)
// //     if (!elemento) {
// //         console.error(`No se encontró el elemento con el selector ${selector}`)
// //         return
// //     }

// //     let html = ''

// //     for (const propiedad of propiedades) {
// //         const { permiteFumar, permiteMascotas } = generarEtiquetas(propiedad.smoke, propiedad.pets)

// //         html += `
// //             <div class="col-xl-4 col-lg-5 col-md-6 col-sm-10 mb-4 d-flex">
// //                 <div class="card">
// //                     <img src="${propiedad.src}" alt="${propiedad.nombre}" class="card-img-top">
// //                     <div class="card-body">
// //                         <h5 class="card-title">${propiedad.nombre}</h5>
// //                         <p class="card-text">${propiedad.descripcion}</p>
// //                         <p><i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}</p>
// //                         <p>
// //                             <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones  |
// //                             <i class="fas fa-bath"></i> ${propiedad.banos} Baños
// //                         </p>
// //                         <p><i class="fas fa-dollar-sign" aria-hidden="true"></i> ${propiedad.valor}</p>
// //                         <div>${permiteFumar}</div>
// //                         <div>${permiteMascotas}</div>
// //                     </div>
// //                 </div>
// //             </div>
// //         `
// //     }

// //     elemento.innerHTML = html
// // }

// // //datos
// // const propiedadesVentas = [
// //     {
// //         src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
// //         nombre: 'Apartamento de lujo en zona exclusiva',
// //         descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
// //         direccion: '123 Luxury Lane, Prestige Suburb, CA 45678',
// //         habitaciones: 4,
// //         banos: 4,
// //         valor: 5000,
// //         smoke: 'false',
// //         pets: 'false'
// //     },
// //     {
// //         src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
// //         nombre: 'Apartamento acogedor en la montaña',
// //         descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
// //         direccion: '789 Mountain Road, Summit Peaks, CA 23456',
// //         habitaciones: 2,
// //         banos: 1,
// //         valor: 1200,
// //         smoke: 'true',
// //         pets: 'true'
// //     },
// //     {
// //         src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
// //         nombre: 'Penthouse de lujo con terraza panorámica',
// //         descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
// //         direccion: '567 Skyline Avenue, Skyview City, CA 56789',
// //         habitaciones: 3,
// //         banos: 3,
// //         valor: 4500,
// //         smoke: 'false',
// //         pets: 'true'
// //     },
// //     {
// //         src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI4MjM3MjgzNjQ5MTk3MTc2OQ%3D%3D/original/868eb51c-6392-4f8b-9fbf-be688d2648a6.jpeg?im_w=960&im_format=avif',
// //         nombre: 'Departamento a pasos de la bahía',
// //         descripcion: 'Este alojamiento se encuentra cerca del parque nacional',
// //         direccion: '302 Biscaine Boulevard, Miami, Florida',
// //         habitaciones: 1,
// //         banos: 1,
// //         valor: 5800,
// //         smoke: 'true',
// //         pets: 'false'
// //     }
// // ]

// // const propiedadesAlquiler = [
// //     {
// //         src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
// //         nombre: 'Apartamento en el centro de la ciudad',
// //         descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
// //         direccion: '123 Main Street, Anytown, CA 91234',
// //         habitaciones: 2,
// //         banos: 2,
// //         valor: 2000,
// //         smoke: 'false',
// //         pets: 'true'
// //     },
// //     {
// //         src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
// //         nombre: 'Apartamento luminoso con vista al mar',
// //         descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
// //         direccion: '456 Ocean Avenue, Seaside Town, CA 56789',
// //         habitaciones: 3,
// //         banos: 3,
// //         valor: 2500,
// //         smoke: 'true',
// //         pets: 'true'
// //     },
// //     {
// //         src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
// //         nombre: 'Condominio moderno en zona residencial',
// //         descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
// //         direccion: '123 Main Street, Anytown, CA 91234',
// //         habitaciones: 2,
// //         banos: 2,
// //         valor: 2200,
// //         smoke: 'false',
// //         pets: 'false'
// //     },
// //     {
// //         src: 'https://a0.muscache.com/im/pictures/miso/Hosting-36629436/original/be745f65-f854-45fb-8810-ccdc9040c168.jpeg?im_w=960&im_format=avif',
// //         nombre: 'Dormitorio con vistas a la iglesia en Harlem Brownstone',
// //         descripcion: 'Dormitorio iluminado y soleado en una casa adosada ocupada por el propietario de Harlem renovada',
// //         direccion: '135 Avenue',
// //         habitaciones: 1,
// //         banos: 1,
// //         valor: 900,
// //         smoke: 'true',
// //         pets: 'false'
// //     }
// // ]


// // renderizarPropiedades('#venta', propiedadesVentas)
// // renderizarPropiedades('#alquiler', propiedadesAlquiler)




// //Propiedades Venta

// const propiedadesVentas = [
//     {
//         src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
//         nombre: 'Apartamento de lujo en zona exclusiva',
//         descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
//         direccion: '123 Luxury Lane, Prestige Suburb, CA 45678',
//         habitaciones: 4,
//         banos: 4,
//         valor: 5000,
//         smoke: 'false',
//         pets: 'false'
//     },
//     {
//         src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
//         nombre: 'Apartamento acogedor en la montaña',
//         descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
//         direccion: '789 Mountain Road, Summit Peaks, CA 23456',
//         habitaciones: 2,
//         banos: 1,
//         valor: 1200,
//         smoke: 'true',
//         pets: 'true'
//     },
//     {
//         src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
//         nombre: 'Penthouse de lujo con terraza panorámica',
//         descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
//         direccion: '567 Skyline Avenue, Skyview City, CA 56789',
//         habitaciones: 3,
//         banos: 3,
//         valor: 4500,
//         smoke: 'false',
//         pets: 'true'
//     },
//     {
//         src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI4MjM3MjgzNjQ5MTk3MTc2OQ%3D%3D/original/868eb51c-6392-4f8b-9fbf-be688d2648a6.jpeg?im_w=960&im_format=avif',
//         nombre: 'Departamento a pasos de la bahía',
//         descripcion: 'Este alojamiento se encuentra cerca del parque nacional',
//         direccion: '302 Biscaine Boulevard, Miami, Florida',
//         habitaciones: 1,
//         banos: 1,
//         valor: 5800,
//         smoke: 'true',
//         pets: 'false'
//     }
// ]


// const elemento = document.querySelector('#venta')
// let html = ''

// for (const propiedadVenta of propiedadesVentas) {
//     let permiteFumar = propiedadVenta.smoke === 'true' ? '<p class="text-success"><i class="fas fa-smoking" aria-hidden="true"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban" aria-hidden="true"></i> No se permite fumar</p>';
//     let permiteMascotas = propiedadVenta.pets === 'true' ? '<p class="text-success"><i class="fas fa-paw" aria-hidden="true"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban" aria-hidden="true"></i> No se permiten mascotas</p>';

//     html+=
//     `
//     <div class="col-xl-4 col-lg-5 col-md-6 col-sm-10 mb-4 d-flex">
//     <div class="card">
//     <img src="${propiedadVenta.src}" alt="${propiedadVenta.nombre}" class="card-img-top">
//     <div class="card-body">
//     <h5 class="card-title">${propiedadVenta.nombre}</h5>
//     <p class="card-text">${propiedadVenta.descripcion}</p>
//     <p><i class="fas fa-map-marker-alt"></i> ${propiedadVenta.direccion}</p>
//     <p>
//     <i class="fas fa-bed"></i> ${propiedadVenta.habitaciones} Habitaciones  |
//     <i class="fas fa-bath"></i> ${propiedadVenta.banos} Baños
//     </p>
//     <p><i class="fas fa-dollar-sign" aria-hidden="true"></i> ${propiedadVenta.valor}</p>
//     <div>${permiteFumar}</div>
//     <div>${permiteMascotas}</div>
//     </div>
//     </div>
//     </div>
//     `
// }

// elemento.innerHTML = html



// //Propiedades Alquiler

// const propiedadesAlquiler = [
//     {
//         src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
//         nombre: 'Apartamento en el centro de la ciudad',
//         descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
//         direccion: '123 Main Street, Anytown, CA 91234',
//         habitaciones: 2,
//         banos: 2,
//         valor: 2000,
//         smoke: 'false',
//         pets: 'true'
//     },
//     {
//         src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
//         nombre: 'Apartamento luminoso con vista al mar',
//         descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
//         direccion: '456 Ocean Avenue, Seaside Town, CA 56789',
//         habitaciones: 3,
//         banos: 3,
//         valor: 2500,
//         smoke: 'true',
//         pets: 'true'
//     },
//     {
//         src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
//         nombre: 'Condominio moderno en zona residencial',
//         descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
//         direccion: '123 Main Street, Anytown, CA 91234',
//         habitaciones: 2,
//         banos: 2,
//         valor: 2200,
//         smoke: 'false',
//         pets: 'false'
//     },
//     {
//         src: 'https://a0.muscache.com/im/pictures/miso/Hosting-36629436/original/be745f65-f854-45fb-8810-ccdc9040c168.jpeg?im_w=960&im_format=avif',
//         nombre: 'Dormitorio con vistas a la iglesia en Harlem Brownstone',
//         descripcion: 'Dormitorio iluminado y soleado en una casa adosada ocupada por el propietario de Harlem renovada',
//         direccion: '135 Avenue',
//         habitaciones: 1,
//         banos: 1,
//         valor: 900,
//         smoke: 'true',
//         pets: 'false'
//     }
// ]


// const elemento2 = document.querySelector('#alquiler')
// let html2 = ''

// for (const propiedadAlquiler of propiedadesAlquiler) {
//     let permiteFumar2 = propiedadAlquiler.smoke === 'true' ? '<p class="text-success"><i class="fas fa-smoking" aria-hidden="true"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban" aria-hidden="true"></i> No se permite fumar</p>';
//     let permiteMascotas2 = propiedadAlquiler.pets === 'true' ? '<p class="text-success"><i class="fas fa-paw" aria-hidden="true"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban" aria-hidden="true"></i> No se permiten mascotas</p>';

//     html2+=
//     `
//     <div class="col-xl-4 col-lg-5 col-md-6 col-sm-10 mb-4 d-flex">
//     <div class="card">
//     <img src="${propiedadAlquiler.src}" alt="${propiedadAlquiler.nombre}" class="card-img-top">
//     <div class="card-body">
//     <h5 class="card-title">${propiedadAlquiler.nombre}</h5>
//     <p class="card-text">${propiedadAlquiler.descripcion}</p>
//     <p><i class="fas fa-map-marker-alt"></i> ${propiedadAlquiler.direccion}</p>
//     <p>
//     <i class="fas fa-bed"></i> ${propiedadAlquiler.habitaciones} Habitaciones  |
//     <i class="fas fa-bath"></i> ${propiedadAlquiler.banos} Baños
//     </p>
//     <p><i class="fas fa-dollar-sign" aria-hidden="true"></i> ${propiedadAlquiler.valor}</p>
//     <div>${permiteFumar2}</div>
//     <div>${permiteMascotas2}</div>
//     </div>
//     </div>
//     </div>
//     `
// }

// elemento2.innerHTML = html2

import { propiedadesVentas, propiedadesAlquiler } from "./datos/datos.js"


const renderizarPropiedades = (propiedades, contenedorPropiedades) => {

    const elementoIndex = document.querySelector(contenedorPropiedades)
    const limite = propiedades.slice(0,3)
    let htmlIndex = ''

    for (const propiedad of limite) {
        let permiteFumarIndex = propiedad.smoke === 'true' ? '<p class="text-success"><i class="fas fa-smoking" aria-hidden="true"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban" aria-hidden="true"></i> No se permite fumar</p>'
        let permiteMascotasIndex = propiedad.pets === 'true' ? '<p class="text-success"><i class="fas fa-paw" aria-hidden="true"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fa-solid fa-ban" aria-hidden="true"></i> No se permiten mascotas</p>'

        htmlIndex+=
        `
            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-10 mb-4 d-flex">
            <div class="card">
            <img src="${propiedad.src}" alt="${propiedad.nombre}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.direccion}</p>
            <p>
            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones  |
            <i class="fas fa-bath"></i> ${propiedad.banos} Baños
            </p>
            <p><i class="fas fa-dollar-sign" aria-hidden="true"></i> ${propiedad.valor}</p>
            <div>${permiteFumarIndex}</div>
            <div>${permiteMascotasIndex}</div>
            </div>
            </div>
            </div>
        `
    }
    elementoIndex.innerHTML = htmlIndex
}

renderizarPropiedades(propiedadesVentas, '#venta');
renderizarPropiedades(propiedadesAlquiler, '#alquiler');