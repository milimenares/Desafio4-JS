const propiedadesVentas = [
    {
        src: 'https://a0.muscache.com/im/pictures/e4166550-3355-408c-842e-7b0bea98e7af.jpg?im_w=720&im_format=avif',
        nombre: 'Alma Mar "Casa frente al mar"',
        descripcion: '"Alma Mar"  se encuentra en primera línea sobre la playa, mirando el Pacífico, con acceso privado, en una comunidad de siete casas en la meca del windsurf / kitesurf de Matanzas',
        direccion: 'Ruta G-890, Navidad, VI Región',
        habitaciones: 2,
        banos: 2,
        valor: 90000000,
        smoke: 'false',
        pets: 'false'
    },
    {
        src: 'https://a0.muscache.com/im/pictures/miso/Hosting-939668127289680159/original/7436728f-6f88-4265-b27b-d6d9a33c75bc.jpeg?im_w=1200&im_format=avif',
        nombre: 'Studio boutique en Ñuñoa',
        descripcion: 'Studio extremadamente acogedor y totalmente nuevo',
        direccion: 'San Eugenio #4200, Ñuñoa, Santiago',
        habitaciones: 1,
        banos: 1,
        valor: 85000000,
        smoke: 'true',
        pets: 'true'
    },
    {
        src: 'https://a0.muscache.com/im/pictures/18764352/cb70c534_original.jpg?im_w=1200&im_format=avif',
        nombre: 'Depto en Parque Forestal',
        descripcion: 'El departamento es privado, esta ubicado frente al Parque Forestal, tiene cama 2 plazas en dormitorio',
        direccion: 'Bellavista #200, Santiago',
        habitaciones: 2,
        banos: 1,
        valor: 110000000,
        smoke: 'false',
        pets: 'true'
    },
    {
        src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MzEyMDMxMDY%3D/original/3e6a5d89-a39f-44f6-ba4f-ed0c8d29219b.jpeg?im_w=1200&im_format=avif',
        nombre: 'Departamento completo para 2, playa a 15 minutos',
        descripcion: 'Comodo y completo departamento para 2 personas en tranquilo sector de reñaca',
        direccion: 'Los Sargazos #401, Reñaca, Viña del Mar',
        habitaciones: 1,
        banos: 1,
        valor: 125000000,
        smoke: 'true',
        pets: 'false'
    },
    {
        src: 'https://a0.muscache.com/im/pictures/miso/Hosting-695636986819084298/original/7b7324ce-8b51-4193-8172-10b75c35c2bb.jpeg?im_w=1200&im_format=avif',
        nombre: 'Cómodo apartamento con jardín y hermosas vistas',
        descripcion: 'A pasos de la playa, seguridad para tu familia y a 7 minutos en auto al centro de La Serena',
        direccion: 'Zona Dunar Serena Golf, La Serena',
        habitaciones: 4,
        banos: 3,
        valor: 250000000,
        smoke: 'true',
        pets: 'true'
    },
    {
        src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1297271702696170997/original/4923eb56-c641-449e-93fa-8205b3c756dc.jpeg?im_w=1200&im_format=avif',
        nombre: 'Departamento en Coquimbo',
        descripcion: 'Disfruta de la sencillez de este alojamiento tranquilo y céntrico',
        direccion: 'Santa Rosa 485, Coquimbo',
        habitaciones: 3,
        banos: 2,
        valor: 135000000,
        smoke: 'true',
        pets: 'false'
    }
]


const propiedadesAlquiler = [
    {
        src: 'https://a0.muscache.com/im/pictures/0081a269-7081-438d-97a2-b151aea14b82.jpg?im_w=1200&im_format=avif',
        nombre: 'Privacidad y Vistas Espectaculares en la Montaña',
        descripcion: 'Las Espectaculares vistas y la tranquilidad están garantizadas',
        direccion: 'Camino al Volcán S/N, Cajón del Maipo',
        habitaciones: 1,
        banos: 2,
        valor: 130000,
        smoke: 'false',
        pets: 'true'
    },
    {
        src: 'https://a0.muscache.com/im/pictures/miso/Hosting-1057098618904462764/original/bebebfdc-fa83-4f16-a13a-4b658a197f19.jpeg?im_w=1200&im_format=avif',
        nombre: 'Tiny House en medio del bosque con terraza',
        descripcion: 'Ven a vivir la experiencia única de alojar en una Aldea de Tiny House',
        direccion: 'Palguín Bajo, Pucón',
        habitaciones: 2,
        banos: 1,
        valor: 60500,
        smoke: 'true',
        pets: 'true'
    },
    {
        src: 'https://a0.muscache.com/im/pictures/1c5c6e3e-8bc2-45cd-a01f-36c44a845fe1.jpg?im_w=720&im_format=avif',
        nombre: 'Cabaña de descanso y tranquilidad',
        descripcion: 'Cabaña rodeada de bosque nativo y pasa un brazo del río Fuy',
        direccion: 'Punahue #30, Panguipulli',
        habitaciones: 1,
        banos: 1,
        valor: 50000,
        smoke: 'false',
        pets: 'false'
    },
    {
        src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1027003067045655012/original/c12689cf-addb-45ed-a24d-ea721e44e446.jpeg?im_w=1200&im_format=avif',
        nombre: 'Departamento en primera línea de playa con vista insuperable',
        descripcion: 'Cálido departamento en PRIMERA LINEA FRENTE AL MAR, con todo lo necesario para un relajo de fin de semana',
        direccion: 'Avenida del Mar #1200, Puchuncavi, Valparaíso',
        habitaciones: 2,
        banos: 2,
        valor: 55000,
        smoke: 'true',
        pets: 'false'
    },
    {
        src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MzQyMjg4Mjk%3D/original/cd2234a1-250a-48f7-96e3-eac92666d092.png?im_w=720&im_format=avif',
        nombre: 'Alojamiento entero: cabaña en Laguna Verde',
        descripcion: 'Disfruta de una cabaña única con vista al mar, terraza con jacuzzi, reposeras y hamaca para relajarte',
        direccion: 'Calle Andrómeda 101, laguna Verde, Valparaíso',
        habitaciones: 2,
        banos: 2,
        valor: 50400,
        smoke: 'true',
        pets: 'true'
    },
    {
        src: 'https://a0.muscache.com/im/ml/photo_enhancement/pictures/3902b702-c2b8-4f61-93c1-f12f7e35ed2f.jpg?im_w=1200&im_format=avif',
        nombre: 'Habitación privada en minicasa en San José de Maipo',
        descripcion: 'Nuestro Glamping es una nueva forma de Hospedaje, similar al camping tradicional pero con muchas mas comodidades',
        direccion: 'Camino al Alfalfal S/N, San José de Maipo',
        habitaciones: 1,
        banos: 1,
        valor: 52000,
        smoke: 'true',
        pets: 'false'
    }
]

export {propiedadesVentas, propiedadesAlquiler}