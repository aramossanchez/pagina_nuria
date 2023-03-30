export const getExperienciasProyectos = () => {
  return experienciasProyectos;
};

export const getExperienciasEventos = () => {
  return experienciasEventos;
};

const experienciasProyectos = {
  section: 'proyectos',
  verMas: [
    {
      id: 'origen',
      title: 'PROYECTO ORIGEN',
      imageUrl: '/images/origen_project.png',
      imgAlt: 'Proyecto Origen',
    },
    {
      id: 'feetRetail',
      title: '6FEETRETAIL',
      imageUrl: '/images/feetRetail.png',
      imgAlt: '6FeetRetail',
    },
    {
      id: 'webImaginalia',
      title: 'DISEÑO ACTUAL DE LA WEB DE IMAGINALIA',
      imageUrl: '/images/webImaginalia.png',
      imgAlt: 'Diseño actual de la página web de Imaginalia',
    }
  ],
  detalle: [
    {
      id: 'origen',
      title: 'Proyecto Origen',
      imageUrl: '/images/origen_project.png',
      imgAlt: 'Proyecto Origen',
      imgSize: 175,
      detail: 'Dirigido durante mi estancia en <a href="http://www.imaginalia-albacete.com/origen/" target="_blank" rel="noopener noreferrer">Centro Comercial Imaginalia</a>. Implantado en todos los Centros Comerciales gestionados por Cushman & Wakefield a nivel nacional. Proyecto de sostenibilidad y compromiso con el objetivo de mejorar las acciones realizadas por el Centro Comercial cumpliendo con los 17 ODS.',
      list: [
        'Campaña de reducción de uso de plásticos <a href="http://www.imaginalia-albacete.com/novedad/campana-de-reduccion-de-uso-de-plasticos/" target="_blank" rel="noopener noreferrer">(link)</a>.',
        'Día del Niño y de la Niña <a href="http://www.imaginalia-albacete.com/novedad/dia-del-nino-y-de-la-nina/" target="_blank" rel="noopener noreferrer">(link)</a>',
        'Día Mundial de la Lucha contra el Cáncer de Mama <a href="http://www.imaginalia-albacete.com/novedad/dia-mundial-de-la-lucha-contra-el-cancer-de-mama/" target="_blank" rel="noopener noreferrer">(link)</a>'
      ]
    },
    {
      id: 'feetRetail',
      title: '6FeetRetail',
      imageUrl: '/images/feetRetail.png',
      imgAlt: '6FeetRetail',
      imgSize: 190,
      detail: 'Acondicionamiento e implementación de todas las medidas sanitarias establecidas por motivos de la pandemia mundial de la COVID-19, para que el Centro Comercial Imaginalia fuese un lugar seguro tanto para nuestros trabajadores como para nuestros clientes.</a>',
    },
    {
      id: 'webImaginalia',
      title: 'Diseño actual de la página web de Imaginalia - App móvil y línea gráfica',
      imageUrl: '/images/webImaginalia.png',
      imgAlt: 'Diseño actual de la página web de Imaginalia - App móvil y línea gráfica',
      imgSize: 160,
      detail: 'Bajo mi dirección, supervisión y en compañía de la Community Manager del centro comercial, se diseña la página web que actualmente Imaginalia tiene en uso. Seleccionando la información a mostrar al cliente y el contenido gráfico en relación a los eventos/campañas. Lo mismo para la Aplicación móvil de Imaginalia. Se desarrolla bajo mi dirección y supervisión, incluyendo el contenido necesario para ser una app útil para los clientes y usuarios del centro comercial. <a href="http://www.imaginalia-albacete.com" target="_blank" rel="noopener noreferrer">(link)</a>',
    },
  ]
};

const experienciasEventos = {
  section: 'eventos',
  verMas: [
    {
      id: 'summerFest',
      title: '1º IMAGINALIA SUMMER FEST',
      imageUrl: '/images/summerFest.png',
      imgAlt: '1º Imaginalia Summer Fest',
    },
    {
      id: 'feriaAlbacete',
      title: 'FERIA DE ALBACETE',
      imageUrl: '/images/feriaAlbacete.png',
      imgAlt: 'Feria de Albacete',
    },
    {
      id: 'espectaculosInfantiles',
      title: 'ESPECTÁCULOS INFANTILES',
      imageUrl: '/images/espectaculoInfantil.png',
      imgAlt: 'Espectáculos infantiles',
    }
  ],
  detalle: [
    {
      id: 'summerFest',
      title: '1º Imaginalia Summer Fest',
      imageUrl: '/images/summerFest.png',
      imgAlt: '1º Imaginalia Summer Fest',
      imgSize: 110,
      detail: 'Bajo mi dirección y supervisión y con el objetivo de amenizar la zona de Ocio y Restauración del Centro Comercial Imaginalia y potenciar la cultura en la ciudad de Albacete, se crea un festival de música para dar a conocer a las bandas emergentes de la ciudad y provincia y darles la oportunidad de tocar en un espacio con gran cantidad de público. El resultado de la actividad fue muy gratificante para todas las partes cumpliendo con los objetivos marcados.'
    },
    {
      id: 'feriaAlbacete',
      title: 'Feria de Albacete',
      imageUrl: '/images/feriaAlbacete.png',
      imgAlt: 'Feria de Albacete',
      imgSize: 120,
      detail: 'Debido a los años de pandemia y a la cancelación de la famosa Feria de Albacete en el año 2021, bajo mi dirección y supervisión, se crea en Imaginalia una agenda repleta de actividades para los días que comprenden la tradicional feria (del 7 al 17 de septiembre). Actividades dirigidas a todos los públicos y, sobre todo, cumpliendo con todas las normas de seguridad y sanitarias establecidas durante esos duros momentos. Gran aceptación por parte de los clientes del centro comercial.',
    },
    {
      id: 'espectaculosInfantiles',
      title: 'Espectáculos infantiles',
      imageUrl: '/images/espectaculoInfantil.png',
      imgAlt: 'Espectáculos infantiles',
      imgSize: 150,
      detail: 'El público objetivo principal para el centro comercial durante mi estancia en él, era las familias jóvenes con hijxs menores a 12 años, por ello, gran parte de las actividades que se planteaban y que dirigía iban destinadas a este target. De ahí, todos los espectáculos infantiles organizados en el centro comercial y todas las actividades llevadas a cabo con el fin de fidelizar al mayor número de clientes con estas características.',
    },
  ]
};