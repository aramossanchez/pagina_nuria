import Image from 'next/image';
import Link from 'next/link';
import style from './miRutaMovil.module.scss';

export default function MiRutaMovilContainer() {

  return (
    <article className={style.component_container}>
      <div className={style.miRutaMovil_links}>
        <Link href="/#inicio" scroll={false}>
          Agradecimientos
        </Link>
        <Link href="/#cumar" scroll={false}>
          Cumar
        </Link>
        <Link href="/#imaginalia" scroll={false}>
          Centro comercial Imaginalia
        </Link>
        <Link href="/#manchuela" scroll={false}>
          Denominación de origen Manchuela
        </Link>
        <Link href="/#destino" scroll={false}>
          Destino
        </Link>
        <div className={style.white_opacity_right}>asd</div>
        <div className={style.white_opacity_left}>asd</div>
      </div>
      <div className={style.img_container}>
        <Image
          fill
          src={'/pagina_nuria/images/camino_mis_viajes.png'}
          alt={'Foto mi ruta'}
        />
      </div>
      <h1>MI RUTA</h1>
      <div id='inicio' className={style.destiny_link}></div>
      <div className={style.information_container_inicio}>
        <div className={style.text_section_inicio}></div>
        <span>
          Antes de hablar sobre mi ruta profesional, me gustaría dar las gracias a todas y cada una de las personas que han confiado en mí y me han dado la oportunidad de crecer como profesional a su lado.
        </span>
        <h2>¡GRACIAS, DE VERDAD!</h2>
      </div>
      <div id='cumar' className={style.destiny_link}></div>
      <div className={style.information_container_job}>
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
      <div id='imaginalia' className={style.destiny_link}></div>
      <div className={style.information_container_job}>
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
      <div id='manchuela' className={style.destiny_link}></div>
      <div className={style.information_container_job}>
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
      <div id='destino' className={style.destiny_link}></div>
      <div className={style.information_container_inicio}>
        <div className={style.text_section_inicio}></div>
        <span>
          Me encantaría seguir aprendiendo y creciendo tanto a nivel personal como a nivel profesional. Por eso, te invito a que me conozcas.
        </span>
        <h2>¡HAREMOS GRANDES COSAS!</h2>
      </div>

    </article>
  );
}