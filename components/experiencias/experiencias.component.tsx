import Image from 'next/image';
import style from './experiencias.module.scss';
import ButtonArrowRightComponent from '../buttonArrowRight/buttonArrowRight.component';
import { useState } from 'react';
import ButtonArrowLeftComponent from '../buttonArrowLeft/buttonArrowLeft.component';
import { IconSquareRoundedX } from '@tabler/icons-react';

export default function ExperienciasComponent({ previous, next }) {

  const [selectedSection, setSelectedSection] = useState('inicio');
  const [selectedProject, setSelectedProject] = useState('');

  return (
    <article className={style.component_container}>
      <Image
        width={250}
        height={250}
        src={'/images/sello.png'}
        alt={'Foto de sello'}
      />
      <div className={style.img_container}>
        <div><div onClick={() => setSelectedSection('proyectos')}><span>PROYECTOS</span></div></div>
        <div><div onClick={() => setSelectedSection('eventos')}><span>EVENTOS</span></div></div>
        <div><div onClick={() => setSelectedSection('campañasOffline')}><span>CAMPAÑAS OFFLINE</span></div></div>
        <div><div><span>CAMPAÑAS ONLINE</span></div></div>
      </div>
      {
        selectedSection === 'inicio' &&
        <div className={style.information_container_inicio}>
          <h1>EXPERIENCIAS</h1>
          <div className={style.text_section_inicio}></div>
          <span>
            Tengo que agradecer la ruta escogida, porque gracias a ella he aprendido a gestionar y dirigir proyectos, organizar grandes eventos y desarrollar campañas (offline y online). Aunque he de admitir que el sendero no siempre ha sido un camino de rosas, cada piedra en el camino me ha ayudado a aumentar mi seguridad, intuición y creatividad.
          </span>
          <h2>¡TE INVITO A DESCUBRIRLO!</h2>
        </div>
      }
      {
        selectedSection === 'proyectos' &&
        <div className={style.information_container_project}>
          <h1>EXPERIENCIAS</h1>
          <h2>Proyectos</h2>
          <div className={style.experiences_list_container}>
            <div className={style.experiences_list}>
              <div onClick={() => setSelectedProject('origen')}>
                <span>PROYECTO ORIGEN</span>
                <Image
                  width={250}
                  height={250}
                  src={'/images/origen_project.png'}
                  alt={'Foto de sello'}
                />
                <span>+ VER MÁS</span>
              </div>
              <div onClick={() => setSelectedProject('feetRetail')}>
                <span>6FeetRetail</span>
                <Image
                  width={250}
                  height={250}
                  src={'/images/feetRetail.png'}
                  alt={'Foto de sello'}
                />
                <span>+ VER MÁS</span>
              </div>
              <div onClick={() => setSelectedProject('webImaginalia')}>
                <span>Diseño actual de la página web de Imaginalia</span>
                <Image
                  width={250}
                  height={250}
                  src={'/images/webImaginalia.png'}
                  alt={'Foto de sello'}
                />
                <span>+ VER MÁS</span>
              </div>
            </div>
            {selectedProject === 'origen' &&
              <div className={style.project_details}>
                <h3>Proyecto Origen</h3>
                <Image
                  width={175}
                  height={175}
                  src={'/images/origen_project.png'}
                  alt={'Foto de sello'}
                />
                <span>Dirigido durante mi estancia en <a href="http://www.imaginalia-albacete.com/origen/" target="_blank" rel="noopener noreferrer">Centro Comercial Imaginalia</a>. Implantado en todos los Centros Comerciales gestionados por Cushman & Wakefield a nivel nacional. Proyecto de sostenibilidad y compromiso con el objetivo de mejorar las acciones realizadas por el Centro Comercial cumpliendo con los 17 ODS.</span>
                <ul>
                  <li>Campaña de reducción de uso de plásticos <a href="http://www.imaginalia-albacete.com/novedad/campana-de-reduccion-de-uso-de-plasticos/" target="_blank" rel="noopener noreferrer">(link)</a>.</li>
                  <li>Día del Niño y de la Niña <a href="http://www.imaginalia-albacete.com/novedad/dia-del-nino-y-de-la-nina/" target="_blank" rel="noopener noreferrer">(link)</a></li>
                  <li>Día Mundial de la Lucha contra el Cáncer de Mama <a href="http://www.imaginalia-albacete.com/novedad/dia-mundial-de-la-lucha-contra-el-cancer-de-mama/" target="_blank" rel="noopener noreferrer">(link)</a></li>
                </ul>
                <div className={style.close_button_container} onClick={() => setSelectedProject('')}>
                  <IconSquareRoundedX color='rgb(67, 195, 255)' size={54} />
                </div>
              </div>
            }
            {selectedProject === 'feetRetail' &&
              <div className={style.project_details}>
                <h3>6FeetRetail</h3>
                <Image
                  width={250}
                  height={250}
                  src={'/images/feetRetail.png'}
                  alt={'Foto de sello'}
                />
                <span>Acondicionamiento e implementación de todas las medidas sanitarias establecidas por motivos de la pandemia mundial de la COVID-19, para que el Centro Comercial Imaginalia fuese un lugar seguro tanto para nuestros trabajadores como para nuestros clientes.</span>
                <div className={style.close_button_container} onClick={() => setSelectedProject('')}>
                  <IconSquareRoundedX color='rgb(67, 195, 255)' size={54} />
                </div>
              </div>
            }
            {selectedProject === 'webImaginalia' &&
              <div className={style.project_details}>
                <h3>Diseño actual de la página web de Imaginalia - App móvil y línea gráfica</h3>
                <Image
                  width={250}
                  height={250}
                  src={'/images/webImaginalia.png'}
                  alt={'Foto de sello'}
                />
                <span>Bajo mi dirección, supervisión y en compañía de la Community Manager del centro comercial, se diseña la página web que actualmente Imaginalia tiene en uso. Seleccionando la información a mostrar al cliente y el contenido gráfico en relación a los eventos/campañas. Lo mismo para la Aplicación móvil de Imaginalia. Se desarrolla bajo mi dirección y supervisión, incluyendo el contenido necesario para ser una app útil para los clientes y usuarios del centro comercial. <a href="http://www.imaginalia-albacete.com" target="_blank" rel="noopener noreferrer">(link)</a></span>
                <div className={style.close_button_container} onClick={() => setSelectedProject('')}>
                  <IconSquareRoundedX color='rgb(67, 195, 255)' size={54} />
                </div>
              </div>
            }
          </div>
        </div>
      }
      {
        selectedSection === 'eventos' &&
        <div className={style.information_container_project}>
          <h1>EXPERIENCIAS</h1>
          <h2>Eventos</h2>
          <span>Desde el año 2018 hasta finales del 2022, todas las actividades, acciones y promociones llevadas a cabo en el Centro Comercial Imaginalia son realizadas bajo mi dirección, supervisión y coordinación. Lo mismo pasa con las actividades promocionales llevadas a cabo en Denominación de Origen Manchuela desde finales de 2022 hasta mediados de 2023. De todo lo creado y dirigido, destaco:</span>
          <div className={style.experiences_list_container}>
            <div className={style.experiences_list}>
              <div onClick={() => setSelectedProject('summerFest')}>
                <span>1º IMAGINALIA SUMMER FEST</span>
                <Image
                  width={250}
                  height={250}
                  src={'/images/summerFest.png'}
                  alt={'Foto de sello'}
                />
                <span>+ VER MÁS</span>
              </div>
              <div onClick={() => setSelectedProject('feriaAlbacete')}>
                <span>FERIA DE ALBACETE</span>
                <Image
                  width={250}
                  height={250}
                  src={'/images/feriaAlbacete.png'}
                  alt={'Foto de sello'}
                />
                <span>+ VER MÁS</span>
              </div>
              <div onClick={() => setSelectedProject('espectaculosInfantiles')}>
                <span>ESPECTÁCULOS INFANTILES</span>
                <Image
                  width={250}
                  height={250}
                  src={'/images/espectaculoInfantil.png'}
                  alt={'Foto de sello'}
                />
                <span>+ VER MÁS</span>
              </div>
            </div>
            {selectedProject === 'summerFest' &&
              <div className={style.project_details}>
                <h3>1º Imaginalia Summer Fest</h3>
                <Image
                  width={150}
                  height={150}
                  src={'/images/summerFest.png'}
                  alt={'Foto de sello'}
                />
                <span>Bajo mi dirección y supervisión y con el objetivo de amenizar la zona de Ocio y Restauración del Centro Comercial Imaginalia y potenciar la cultura en la ciudad de Albacete, se crea un festival de música para dar a conocer a las bandas emergentes de la ciudad y provincia y darles la oportunidad de tocar en un espacio con gran cantidad de público. El resultado de la actividad fue muy gratificante para todas las partes cumpliendo con los objetivos marcados.</span>
                <div className={style.close_button_container} onClick={() => setSelectedProject('')}>
                  <IconSquareRoundedX color='rgb(67, 195, 255)' size={54} />
                </div>
              </div>
            }
            {selectedProject === 'feriaAlbacete' &&
              <div className={style.project_details}>
                <h3>Feria de Albacete</h3>
                <Image
                  width={150}
                  height={150}
                  src={'/images/feriaAlbacete.png'}
                  alt={'Foto de sello'}
                />
                <span>Debido a los años de pandemia y a la cancelación de la famosa Feria de Albacete en el año 2021, bajo mi dirección y supervisión, se crea en Imaginalia una agenda repleta de actividades para los días que comprenden la tradicional feria (del 7 al 17 de septiembre). Actividades dirigidas a todos los públicos y, sobre todo, cumpliendo con todas las normas de seguridad y sanitarias establecidas durante esos duros momentos. Gran aceptación por parte de los clientes del centro comercial.</span>
                <div className={style.close_button_container} onClick={() => setSelectedProject('')}>
                  <IconSquareRoundedX color='rgb(67, 195, 255)' size={54} />
                </div>
              </div>
            }
            {selectedProject === 'espectaculosInfantiles' &&
              <div className={style.project_details}>
                <h3>Espectáculos infantiles</h3>
                <Image
                  width={150}
                  height={150}
                  src={'/images/espectaculoInfantil.png'}
                  alt={'Foto de sello'}
                />
                <span>El público objetivo principal para el centro comercial durante mi estancia en él, era las familias jóvenes con hijxs menores a 12 años, por ello, gran parte de las actividades que se planteaban y que dirigía iban destinadas a este target. De ahí, todos los espectáculos infantiles organizados en el centro comercial y todas las actividades llevadas a cabo con el fin de fidelizar al mayor número de clientes con estas características.</span>
                <div className={style.close_button_container} onClick={() => setSelectedProject('')}>
                  <IconSquareRoundedX color='rgb(67, 195, 255)' size={54} />
                </div>
              </div>
            }
          </div>
        </div>
      }
      {
        selectedSection === 'campañasOffline' &&
        <div className={style.information_container_project}>
          <h1>EXPERIENCIAS</h1>
          <h2>Campañas Offline</h2>
          <span>Desde el año 2018 hasta finales del 2022, todas las campañas offline llevadas a cabo en el Centro Comercial Imaginalia son realizadas bajo mi dirección, supervisión. Lo mismo pasa con las campañas llevadas a cabo en Denominación de Origen Manchuela desde finales de 2022 hasta mediados de 2023.De todo lo creado y dirigido, destaco:</span>
          <div className={style.experiences_list_container}>
            <div className={style.experiences_list}>
              <div onClick={() => setSelectedProject('cataShow')}>
                <span>CATA-SHOW &quot;TINTA BLANCA&quot;</span>
                <Image
                  width={250}
                  height={250}
                  src={'/images/cataShow.png'}
                  alt={'Foto de sello'}
                />
                <span>+ VER MÁS</span>
              </div>
              <div onClick={() => setSelectedProject('blackFriday')}>
                <span>BLACK FRIDAY</span>
                <Image
                  width={250}
                  height={250}
                  src={'/images/blackFriday.png'}
                  alt={'Foto de sello'}
                />
                <span>+ VER MÁS</span>
              </div>
              <div onClick={() => setSelectedProject('navidad')}>
                <span>NAVIDAD</span>
                <Image
                  width={250}
                  height={250}
                  src={'/images/navidad.png'}
                  alt={'Foto de sello'}
                />
                <span>+ VER MÁS</span>
              </div>
            </div>
            {selectedProject === 'cataShow' &&
              <div className={style.project_details}>
                <h3>Cata-Show &quot;Tinta Blanca&quot;</h3>
                <Image
                  width={200}
                  height={200}
                  src={'/images/cataShow.png'}
                  alt={'Foto de sello'}
                />
                <span> Acuerdo de colaboración con la Ruta del Vino la Manchuela y Tyrsova Producciones. Espectáculo que une la cultura del vino con el humor. Destinado a promover y promocionar la tierra de la Manchuela con su producto estrella “el vino”. Gran aceptación por parte de los clientes y los propios socios de las entidades nombradas. <a href="http://vinosdecastillalamancha.es/llega-cata-show-tinta-blanca-espectaculo-do-manchuela/" target="_blank" rel="noopener noreferrer">(link)</a></span>
                <div className={style.close_button_container} onClick={() => setSelectedProject('')}>
                  <IconSquareRoundedX color='rgb(67, 195, 255)' size={54} />
                </div>
              </div>
            }
            {selectedProject === 'blackFriday' &&
              <div className={style.project_details}>
                <h3>Black Friday</h3>
                <Image
                  width={200}
                  height={200}
                  src={'/images/blackFriday.png'}
                  alt={'Foto de sello'}
                />
                <span>Campaña consolidada en centro comercial Imaginalia. Con el objetivo de incentivar las compras y dar a conocer todas las ofertas promocionales que llevan a cabo los establecimientos del centro. Además, con estas campañas y por la forma en la que las diseñé y desarrollé se conseguíamos gran cantidad de base de datos.</span>
                <div className={style.close_button_container} onClick={() => setSelectedProject('')}>
                  <IconSquareRoundedX color='rgb(67, 195, 255)' size={54} />
                </div>
              </div>
            }
            {selectedProject === 'navidad' &&
              <div className={style.project_details}>
                <h3>Navidad</h3>
                <Image
                  width={200}
                  height={200}
                  src={'/images/navidad.png'}
                  alt={'Foto de sello'}
                />
                <span>También es una de las acciones más consolidadas por el centro comercial. Dentro de la programación de actividades infantiles y navideñas, bajo mi dirección se creó y desarrolló la llegada oficial de Papá Noel a la ciudad. Acción que tuvo gran éxito entre los habitantes de la ciudad y provincia ya que es la única llegada oficial del personaje navideño. <a href="http://www.facebook.com/watch/?v=4808242155934890" target="_blank" rel="noopener noreferrer">(link)</a> </span>
                <div className={style.close_button_container} onClick={() => setSelectedProject('')}>
                  <IconSquareRoundedX color='rgb(67, 195, 255)' size={54} />
                </div>
              </div>
            }
          </div>
        </div>
      }
      <ButtonArrowLeftComponent onClick={previous} />
      <ButtonArrowRightComponent onClick={next} />
    </article >
  );
}