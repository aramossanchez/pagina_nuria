import Image from 'next/image';
import style from './experiencias.module.scss';
import ButtonArrowRightComponent from '../buttonArrowRight/buttonArrowRight.component';
import { useState } from 'react';
import ButtonArrowLeftComponent from '../buttonArrowLeft/buttonArrowLeft.component';

export default function ExperienciasComponent({ previous, next }) {

  const [selectedSection, setSelectedSection] = useState('inicio');

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
        <div><div><span>EVENTOS</span></div></div>
        <div><div><span>CAMPAÑAS OFFLINE</span></div></div>
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
        selectedSection === 'cumar' &&
        <div className={style.information_container_job}>
          <h1>MIS VIAJES</h1>
          <h2>CUMAR S.L.U</h2>
          <h6>06/2014 - 09/2017</h6>
          <div className={style.functions_list}>
            <span>
              Funciones a destacar:
            </span>
            <ol>
              <li>Realización de ciclos contables.</li>
              <li>Contabilidad de facturas con proveedores y clientes.</li>
              <li>Preparación de impuestos oficiales y créditos bancarios.</li>
              <li>Elaboración y presentación de cuentas y libros de contabilidad anual.</li>
              <li>Atención al cliente.</li>
            </ol>
          </div>
          <div className={style.chips_container}>
            <span className={style.chip}>#administración_financiera</span>
            <span className={style.chip}>#nóminas</span>
            <span className={style.chip}>#impuestos</span>
          </div>
        </div>
      }
      {
        selectedSection === 'imaginalia' &&
        <div className={style.information_container_job}>
          <h1>MIS VIAJES</h1>
          <h2>CENTRO COMERCIAL IMAGINALIA</h2>
          <h6>05/2018 - 09/2022</h6>
          <div className={style.functions_list}>
            <span>
              Funciones a destacar:
            </span>
            <ol>Desarrollo y ejecución del Plan de Marketing Anual.
              <li>Control de Marketing Budget.</li>
              <li>Coordinación y control de acciones/campañas promocionales/ eventos ligados al Marketing Estratégico.</li>
              <li>Gestión y realización de proyectos port-folio a nivel nacional con Cushman & Wakefield.</li>
              <li>Acuerdos de colaboración con entidades e instituciones oficiales.</li>
              <li>Responsable y supervisora del Marketing Digital (análisis de resultados).</li>
              <li>Gestión de medios de comunicación y representante de actos promocionales.</li>
              <li>Atención y trato con más de 50 establecimientos y agencia de marketing.</li>
              <li>Responsable de un equipo formado por más de 10 personas.</li>
            </ol>
          </div>
          <div className={style.chips_container}>
            <span className={style.chip}>#marketing</span>
            <span className={style.chip}>#eventos</span>
            <span className={style.chip}>#dirección</span>
            <span className={style.chip}>#adjunta_de_gerencia</span>
          </div>
        </div>
      }
      {
        selectedSection === 'final' &&
        <div className={style.information_container_inicio}>
          <h1>MIS VIAJES</h1>
          <div className={style.text_section_inicio}></div>
          <span>
            Me encantaría seguir aprendiendo y creciendo tanto a nivel personal como a nivel profesional. Por eso, te invito a que me conozcas.
          </span>
          <h2>¡HAREMOS GRANDES COSAS!</h2>
        </div>
      }
      {
        selectedSection === 'manchuela' &&
        <div className={style.information_container_job}>
          <h1>MIS VIAJES</h1>
          <h2>DENOMINACIÓN DE ORIGEN MANCHUELA</h2>
          <h6>10/2022 - 02/2023</h6>
          <div className={style.functions_list}>
            <span>
              Funciones a destacar:
            </span>
            <ol>Desarrollo y ejecución del Plan de Marketing Anual.
              <li>Desarrollo e implementación del Plan Estratégico y de Comunicación Anual (online y offline).</li>
              <li>Coordinación, control y ejecución de eventos para la promoción y el posicionamiento de la marca.</li>
              <li>Creación de acuerdos promocionales con organismos oficiales.</li>
              <li>Gestión de medios de comunicación (realización de entrevistas).</li>
              <li>Control y supervisión del Marketing Digital.</li>
              <li>Acuerdos de colaboración con entidades e instituciones oficiales.</li>
              <li>Gestión y realización de proyectos coordinados con más de 35 bodegas.</li>
              <li>Atención y trato directo con agencia de marketing y clientes.</li>
            </ol>
          </div>
          <div className={style.chips_container}>
            <span className={style.chip}>#marketing</span>
            <span className={style.chip}>#eventos</span>
            <span className={style.chip}>#administración</span>
          </div>
        </div>
      }
      <ButtonArrowLeftComponent onClick={previous} />
      <ButtonArrowRightComponent onClick={next} />
    </article >
  );
}