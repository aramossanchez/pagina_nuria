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

  const { experienciasProyectos, experienciasEventos, experienciasCampañasOffline, experienciasCampañasOnline } = useExperienciasHook();

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
              {experienciasCampañasOffline.verMas.map((verMas, index) => {
                return (
                  <div key={`${index}-verMas-${verMas.id}`} onClick={() => setSelectedProject(verMas.id)}>
                    <ExperienciasVerMasComponent title={verMas.title} imageUrl={verMas.imageUrl} imgAlt={verMas.imgAlt} />
                  </div>
                );
              })}
            </div>
            {experienciasCampañasOffline.detalle.map((detalle) => {
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
        selectedSection === 'campañasOnline' &&
        <div className={style.information_container_project}>
          <h1>EXPERIENCIAS</h1>
          <h2>Campañas Online</h2>
          <span>Desde el año 2018 hasta finales del 2022, todas las publicaciones y campañas online llevadas a cabo en el Centro Comercial Imaginalia son realizadas bajo mi dirección, supervisión. Lo mismo pasa con las publicaciones y campañas llevadas a cabo en Denominación de Origen Manchuela desde finales de 2022 hasta mediados de 2023. De todo lo creado y dirigido, destaco:</span>
          <div className={style.experiences_list_container}>
            <div className={style.experiences_list}>
              {experienciasCampañasOnline.verMas.map((verMas, index) => {
                return (
                  <div key={`${index}-verMas-${verMas.id}`} onClick={() => setSelectedProject(verMas.id)}>
                    <ExperienciasVerMasComponent title={verMas.title} imageUrl={verMas.imageUrl} imgAlt={verMas.imgAlt} />
                  </div>
                );
              })}
            </div>
            {experienciasCampañasOnline.detalle.map((detalle) => {
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
      <ButtonArrowLeftComponent onClick={previous} />
      <ButtonArrowRightComponent onClick={next} />
    </article >
  );
}