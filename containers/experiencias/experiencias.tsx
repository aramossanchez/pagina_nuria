import Image from 'next/image';
import style from './experiencias.module.scss';
import ButtonArrowRightComponent from '../../components/buttonArrowRight/buttonArrowRight.component';
import { useState } from 'react';
import ButtonArrowLeftComponent from '../../components/buttonArrowLeft/buttonArrowLeft.component';
import { IconSquareRoundedX } from '@tabler/icons-react';
import useExperienciasHook from './experiencias.hook';
import ExperienciasVerMasComponent from '@/components/experiencias/experienciasVerMas/experienciasVerMas';
import ExperienciasDetalleComponent from '@/components/experiencias/experienciasDetalles/experienciasDetalles';

export default function ExperienciasComponent({ previous, next }) {

  const { experienciasProyectos, experienciasEventos } = useExperienciasHook();

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
        <div><div onClick={() => setSelectedSection('campañasOnline')}><span>CAMPAÑAS ONLINE</span></div></div>
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
              {experienciasProyectos.verMas.map((verMas, index) => {
                return (
                  <div key={`${index}-verMas-${verMas.id}`} onClick={() => setSelectedProject(verMas.id)}>
                    <ExperienciasVerMasComponent title={verMas.title} imageUrl={verMas.imageUrl} imgAlt={verMas.imgAlt} />
                  </div>
                );
              })}
            </div>
            {experienciasProyectos.detalle.map((detalle) => {
              return (
                selectedProject === detalle.id &&
                <ExperienciasDetalleComponent
                  title={detalle.title}
                  imageUrl={detalle.imageUrl}
                  imgAlt={detalle.imgAlt}
                  imgSize={detalle.imgSize}
                  detail={detalle.detail}
                  list={detalle?.list}
                  setSelectedProject={() => setSelectedProject('')} />
              );
            })}
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
              {experienciasEventos.verMas.map((verMas, index) => {
                return (
                  <div key={`${index}-verMas-${verMas.id}`} onClick={() => setSelectedProject(verMas.id)}>
                    <ExperienciasVerMasComponent title={verMas.title} imageUrl={verMas.imageUrl} imgAlt={verMas.imgAlt} />
                  </div>
                );
              })}
            </div>
            {experienciasEventos.detalle.map((detalle) => {
              return (
                selectedProject === detalle.id &&
                <ExperienciasDetalleComponent
                  title={detalle.title}
                  imageUrl={detalle.imageUrl}
                  imgAlt={detalle.imgAlt}
                  imgSize={detalle.imgSize}
                  detail={detalle.detail}
                  setSelectedProject={() => setSelectedProject('')} />
              );
            })}
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
                  width={150}
                  height={150}
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
                  width={150}
                  height={150}
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
                  width={150}
                  height={150}
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
      {
        selectedSection === 'campañasOnline' &&
        <div className={style.information_container_project}>
          <h1>EXPERIENCIAS</h1>
          <h2>Campañas Online</h2>
          <span>Desde el año 2018 hasta finales del 2022, todas las publicaciones y campañas online llevadas a cabo en el Centro Comercial Imaginalia son realizadas bajo mi dirección, supervisión. Lo mismo pasa con las publicaciones y campañas llevadas a cabo en Denominación de Origen Manchuela desde finales de 2022 hasta mediados de 2023. De todo lo creado y dirigido, destaco:</span>
          <div className={style.experiences_list_container}>
            <div className={style.experiences_list}>
              <div onClick={() => setSelectedProject('dia_mujer')}>
                <span>DÍA INTERNACIONAL DE LA MUJER</span>
                <Image
                  width={250}
                  height={250}
                  src={'/images/dia_mujer.png'}
                  alt={'Foto de sello'}
                />
                <span>+ VER MÁS</span>
              </div>
              <div onClick={() => setSelectedProject('sorteos_varios')}>
                <span>SORTEOS VARIOS</span>
                <Image
                  width={250}
                  height={250}
                  src={'/images/sorteos_varios.png'}
                  alt={'Foto de sello'}
                />
                <span>+ VER MÁS</span>
              </div>
              <div onClick={() => setSelectedProject('video_promocional')}>
                <span>VÍDEO PROMOCIONAL IMAGINALIA</span>
                <Image
                  width={250}
                  height={250}
                  src={'/images/video_promocional.png'}
                  alt={'Foto de sello'}
                />
                <span>+ VER MÁS</span>
              </div>
            </div>
            {selectedProject === 'dia_mujer' &&
              <div className={style.project_details}>
                <h3>Día internacional de la mujer</h3>
                <Image
                  width={150}
                  height={150}
                  src={'/images/dia_mujer.png'}
                  alt={'Foto de sello'}
                />
                <span>Campaña creada y consolidada con motivo de potenciar y poner en valor el papel de la mujer en los distintos puestos de trabajo que se pueden desempeñar dentro de la vida laboral y sobre todo del centro comercial. Campaña con gran aceptación por parte de las trabajadoras y de los clientes. <a href="http://albacetecapital.com/el-centro-comercial-imaginalia-se-suma-a-la-conmemoracion-del-dia-internacional-de-las-mujeres-con-la-campana-gracias-por-estar-ahi/" target="_blank" rel="noopener noreferrer">(link)</a></span>
                <div className={style.close_button_container} onClick={() => setSelectedProject('')}>
                  <IconSquareRoundedX color='rgb(67, 195, 255)' size={54} />
                </div>
              </div>
            }
            {selectedProject === 'sorteos_varios' &&
              <div className={style.project_details}>
                <h3>Sorteos varios</h3>
                <Image
                  width={120}
                  height={120}
                  src={'/images/sorteos_varios.png'}
                  alt={'Foto de sello'}
                />
                <span>Con el objetivo de aumentar seguidores y mejorar el engagement de las redes sociales. Estas acciones las he desarrollado y dirigido tanto en Imaginalia como en Denominación de Origen Manchuela, seleccionando la red social en la que realizar el sorteo en función del tipo de público al que nos queríamos dirigir y analizando resultados posteriores.</span>
                <div className={style.close_button_container} onClick={() => setSelectedProject('')}>
                  <IconSquareRoundedX color='rgb(67, 195, 255)' size={54} />
                </div>
              </div>
            }
            {selectedProject === 'video_promocional' &&
              <div className={style.project_details}>
                <h3>Vídeo promocional</h3>
                <Image
                  width={180}
                  height={180}
                  src={'/images/video_promocional.png'}
                  alt={'Foto de sello'}
                />
                <span>Dirección del vídeo promocional realizado en Imaginalia para dar a conocer el centro comercial, sus servicios, establecimientos, marketing… y así potenciar la marca. <a href="http://www.youtube.com/watch?time_continue=81&v=gm2ytUER6aI&embeds_euri=https%3A%2F%2Fwww.imaginalia-albacete.com%2F&embeds_origin=https%3A%2F%2Fwww.imaginalia-albacete.com&source_ve_path=MjM4NTE&feature=emb_title&ab_channel=CentroComercialImaginalia" target="_blank" rel="noopener noreferrer">(link al vídeo)</a></span>
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