export const getExperienciasProyectos = () => {
  return experienciasProyectos;
};

export const getExperienciasEventos = () => {
  return experienciasEventos;
};

export const getExperienciasCampañasOffline = () => {
  return experienciasCampañasOffline;
};

export const getExperienciasCampañasOnline = () => {
  return experienciasCampañasOnline;
};



const experienciasProyectos = {
  section: 'proyectos',
  name: 'Proyectos',
  verMas: [
    {
      id: 'origen',
      title: 'PROYECTO ORIGEN',
      imageUrl: 'images/origen_project.png',
      imgAlt: 'Proyecto Origen',
    },
    {
      id: 'feetRetail',
      title: '6FEETRETAIL',
      imageUrl: 'images/feetRetail.png',
      imgAlt: '6FeetRetail',
    },
    {
      id: 'webImaginalia',
      title: 'DISEÑO ACTUAL DE LA WEB DE IMAGINALIA',
      imageUrl: 'images/webImaginalia.png',
      imgAlt: 'Diseño actual de la página web de Imaginalia',
    }
  ],
  detalle: [
    {
      id: 'origen',
      title: 'Proyecto Origen',
      imageUrl: 'images/origen_project.png',
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
      imageUrl: 'images/feetRetail.png',
      imgAlt: '6FeetRetail',
      imgSize: 190,
      detail: 'Acondicionamiento e implementación de todas las medidas sanitarias establecidas por motivos de la pandemia mundial de la COVID-19, para que el Centro Comercial Imaginalia fuese un lugar seguro tanto para nuestros trabajadores como para nuestros clientes.</a>',
    },
    {
      id: 'webImaginalia',
      title: 'Diseño actual de la página web de Imaginalia - App móvil y línea gráfica',
      imageUrl: 'images/webImaginalia.png',
      imgAlt: 'Diseño actual de la página web de Imaginalia - App móvil y línea gráfica',
      imgSize: 160,
      detail: 'Bajo mi dirección, supervisión y en compañía de la Community Manager del centro comercial, se diseña la página web que actualmente Imaginalia tiene en uso. Seleccionando la información a mostrar al cliente y el contenido gráfico en relación a los eventos/campañas. Lo mismo para la Aplicación móvil de Imaginalia. Se desarrolla bajo mi dirección y supervisión, incluyendo el contenido necesario para ser una app útil para los clientes y usuarios del centro comercial. <a href="http://www.imaginalia-albacete.com" target="_blank" rel="noopener noreferrer">(link)</a>',
    },
  ]
};

const experienciasEventos = {
  section: 'eventos',
  name: 'Eventos',
  verMas: [
    {
      id: 'summerFest',
      title: '1º IMAGINALIA SUMMER FEST',
      imageUrl: 'images/summerFest.png',
      imgAlt: '1º Imaginalia Summer Fest',
    },
    {
      id: 'feriaAlbacete',
      title: 'FERIA DE ALBACETE',
      imageUrl: 'images/feriaAlbacete.png',
      imgAlt: 'Feria de Albacete',
    },
    {
      id: 'espectaculosInfantiles',
      title: 'ESPECTÁCULOS INFANTILES',
      imageUrl: 'images/espectaculoInfantil.png',
      imgAlt: 'Espectáculos infantiles',
    }
  ],
  detalle: [
    {
      id: 'summerFest',
      title: '1º Imaginalia Summer Fest',
      imageUrl: 'images/summerFest.png',
      imgAlt: '1º Imaginalia Summer Fest',
      imgSize: 110,
      detail: 'Bajo mi dirección y supervisión y con el objetivo de amenizar la zona de Ocio y Restauración del Centro Comercial Imaginalia y potenciar la cultura en la ciudad de Albacete, se crea un festival de música para dar a conocer a las bandas emergentes de la ciudad y provincia y darles la oportunidad de tocar en un espacio con gran cantidad de público. El resultado de la actividad fue muy gratificante para todas las partes cumpliendo con los objetivos marcados.'
    },
    {
      id: 'feriaAlbacete',
      title: 'Feria de Albacete',
      imageUrl: 'images/feriaAlbacete.png',
      imgAlt: 'Feria de Albacete',
      imgSize: 120,
      detail: 'Debido a los años de pandemia y a la cancelación de la famosa Feria de Albacete en el año 2021, bajo mi dirección y supervisión, se crea en Imaginalia una agenda repleta de actividades para los días que comprenden la tradicional feria (del 7 al 17 de septiembre). Actividades dirigidas a todos los públicos y, sobre todo, cumpliendo con todas las normas de seguridad y sanitarias establecidas durante esos duros momentos. Gran aceptación por parte de los clientes del centro comercial.',
    },
    {
      id: 'espectaculosInfantiles',
      title: 'Espectáculos infantiles',
      imageUrl: 'images/espectaculoInfantil.png',
      imgAlt: 'Espectáculos infantiles',
      imgSize: 150,
      detail: 'El público objetivo principal para el centro comercial durante mi estancia en él, era las familias jóvenes con hijxs menores a 12 años, por ello, gran parte de las actividades que se planteaban y que dirigía iban destinadas a este target. De ahí, todos los espectáculos infantiles organizados en el centro comercial y todas las actividades llevadas a cabo con el fin de fidelizar al mayor número de clientes con estas características.',
    },
  ]
};

const experienciasCampañasOffline = {
  section: 'campanasOffline',
  name: 'Campañas Offline',
  verMas: [
    {
      id: 'cataShow',
      title: 'CATA-SHOW "TINTA BLANCA"',
      imageUrl: 'images/cataShow.png',
      imgAlt: 'Cata-Show "Tinta Blanca"',
    },
    {
      id: 'blackFriday',
      title: 'BLACK FRIDAY',
      imageUrl: 'images/blackFriday.png',
      imgAlt: 'Black Friday',
    },
    {
      id: 'navidades',
      title: 'NAVIDADES',
      imageUrl: 'images/navidad.png',
      imgAlt: 'Navidades',
    }
  ],
  detalle: [
    {
      id: 'cataShow',
      title: 'Cata-Show "Tinta Blanca"',
      imageUrl: 'images/cataShow.png',
      imgAlt: 'Cata-Show "Tinta Blanca"',
      imgSize: 110,
      detail: 'Acuerdo de colaboración con la Ruta del Vino la Manchuela y Tyrsova Producciones. Espectáculo que une la cultura del vino con el humor. Destinado a promover y promocionar la tierra de la Manchuela con su producto estrella “el vino”. Gran aceptación por parte de los clientes y los propios socios de las entidades nombradas. <a href="http://vinosdecastillalamancha.es/llega-cata-show-tinta-blanca-espectaculo-do-manchuela/" target="_blank" rel="noopener noreferrer">(link)</a>'
    },
    {
      id: 'blackFriday',
      title: 'Black Friday',
      imageUrl: 'images/blackFriday.png',
      imgAlt: 'Black Friday',
      imgSize: 120,
      detail: 'Campaña consolidada en centro comercial Imaginalia. Con el objetivo de incentivar las compras y dar a conocer todas las ofertas promocionales que llevan a cabo los establecimientos del centro. Además, con estas campañas y por la forma en la que las diseñé y desarrollé se conseguíamos gran cantidad de base de datos.',
    },
    {
      id: 'navidades',
      title: 'Navidades',
      imageUrl: 'images/espectaculoInfantil.png',
      imgAlt: 'Navidades',
      imgSize: 150,
      detail: 'También es una de las acciones más consolidadas por el centro comercial. Dentro de la programación de actividades infantiles y navideñas, bajo mi dirección se creó y desarrolló la llegada oficial de Papá Noel a la ciudad. Acción que tuvo gran éxito entre los habitantes de la ciudad y provincia ya que es la única llegada oficial del personaje navideño. <a href="http://www.facebook.com/watch/?v=4808242155934890" target="_blank" rel="noopener noreferrer">(link)</a>',
    },
  ]
};

const experienciasCampañasOnline = {
  section: 'campanasOnline',
  name: 'Campañas Online',
  verMas: [
    {
      id: 'dia_mujer',
      title: 'DÍA INTERNACIONAL DE LA MUJER',
      imageUrl: 'images/dia_mujer.png',
      imgAlt: 'Día internacional de la mujer',
    },
    {
      id: 'sorteos_varios',
      title: 'SORTEOS VARIOS',
      imageUrl: 'images/sorteos_varios.png',
      imgAlt: 'Sorteos varios',
    },
    {
      id: 'video_promocional',
      title: 'VÍDEO PROMOCIONAL IMAGINALIA',
      imageUrl: 'images/video_promocional.png',
      imgAlt: 'Vídeo promocional Imaginalia',
    }
  ],
  detalle: [
    {
      id: 'dia_mujer',
      title: 'Día internacional de la mujer',
      imageUrl: 'images/dia_mujer.png',
      imgAlt: 'Día internacional de la mujer',
      imgSize: 110,
      detail: 'Campaña creada y consolidada con motivo de potenciar y poner en valor el papel de la mujer en los distintos puestos de trabajo que se pueden desempeñar dentro de la vida laboral y sobre todo del centro comercial. Campaña con gran aceptación por parte de las trabajadoras y de los clientes. <a href="http://albacetecapital.com/el-centro-comercial-imaginalia-se-suma-a-la-conmemoracion-del-dia-internacional-de-las-mujeres-con-la-campana-gracias-por-estar-ahi/" target="_blank" rel="noopener noreferrer">(link)</a>'
    },
    {
      id: 'sorteos_varios',
      title: 'Sorteos varios',
      imageUrl: 'images/sorteos_varios.png',
      imgAlt: 'Sorteos varios',
      imgSize: 120,
      detail: 'Con el objetivo de aumentar seguidores y mejorar el engagement de las redes sociales. Estas acciones las he desarrollado y dirigido tanto en Imaginalia como en Denominación de Origen Manchuela, seleccionando la red social en la que realizar el sorteo en función del tipo de público al que nos queríamos dirigir y analizando resultados posteriores.',
    },
    {
      id: 'video_promocional',
      title: 'Vídeo promocional Imaginalia',
      imageUrl: 'images/video_promocional.png',
      imgAlt: 'Vídeo promocional Imaginalia',
      imgSize: 150,
      detail: 'Dirección del vídeo promocional realizado en Imaginalia para dar a conocer el centro comercial, sus servicios, establecimientos, marketing… y así potenciar la marca. <a href="http://www.youtube.com/watch?time_continue=81&v=gm2ytUER6aI&embeds_euri=https%3A%2F%2Fwww.imaginalia-albacete.com%2F&embeds_origin=https%3A%2F%2Fwww.imaginalia-albacete.com&source_ve_path=MjM4NTE&feature=emb_title&ab_channel=CentroComercialImaginalia" target="_blank" rel="noopener noreferrer">(link al vídeo)</a>',
    },
  ]
};