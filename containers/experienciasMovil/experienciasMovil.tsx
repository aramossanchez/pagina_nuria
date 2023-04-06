import Image from 'next/image';
import Link from 'next/link';
import style from './experienciasMovil.module.scss';
import useExperienciasMovilHook from './experienciasMovil.hook';
import ExperienciasMovilSliderComponent from '@/components/experienciasMovilSlider/experienciasMovilSlider';
import {basePath} from '../../config/config';

export default function ExperienciasMovilContainer() {

  const { experienciasProyectos, experienciasEventos, experienciasCampañasOffline, experienciasCampañasOnline } = useExperienciasMovilHook();

  return (
    <article className={style.component_container}>
      <div className={style.miRutaMovil_links}>
        <Link href={`/#${experienciasProyectos.section}`} scroll={false}>
          Proyectos
        </Link>
        <Link href={`/#${experienciasEventos.section}`} scroll={false}>
          Eventos
        </Link>
        <Link href={`/#${experienciasCampañasOffline.section}`} scroll={false}>
          Campañas Offline
        </Link>
        <Link href={`/#${experienciasCampañasOnline.section}`} scroll={false}>
          Campañas Online
        </Link>
        <div className={style.white_opacity_right}>asd</div>
        <div className={style.white_opacity_left}>asd</div>
      </div>
      <div className={style.img_container}>
        <Image
          fill
          src={`${basePath}images/experiencias.png`}
          alt={'Foto mi ruta'}
        />
      </div>
      <h1>EXPERIENCIAS</h1>
      <div id='inicio' className={style.destiny_link}></div>
      <div className={style.inicio_experiencia_container}>
        <span>
          Tengo que agradecer la ruta escogida, porque gracias a ella he aprendido a gestionar y dirigir proyectos, organizar grandes eventos y desarrollar campañas (offline y online). Aunque he de admitir que el sendero no siempre ha sido un camino de rosas, cada piedra en el camino me ha ayudado a aumentar mi seguridad, intuición y creatividad.
        </span>
        <h2>¡TE INVITO A DESCUBRIRLO!</h2>
      </div>
      <ExperienciasMovilSliderComponent experiencias={experienciasProyectos} />
      <ExperienciasMovilSliderComponent experiencias={experienciasEventos} introduccion='Desde el año 2018 hasta finales del 2022, todas las actividades, acciones y promociones llevadas a cabo en el Centro Comercial Imaginalia son realizadas bajo mi dirección, supervisión y coordinación. Lo mismo pasa con las actividades promocionales llevadas a cabo en Denominación de Origen Manchuela desde finales de 2022 hasta mediados de 2023. De todo lo creado y dirigido, destaco:' />
      <ExperienciasMovilSliderComponent experiencias={experienciasCampañasOffline} introduccion='Desde el año 2018 hasta finales del 2022, todas las campañas offline llevadas a cabo en el Centro Comercial Imaginalia son realizadas bajo mi dirección, supervisión. Lo mismo pasa con las campañas llevadas a cabo en Denominación de Origen Manchuela desde finales de 2022 hasta mediados de 2023.De todo lo creado y dirigido, destaco:' />
      <ExperienciasMovilSliderComponent experiencias={experienciasCampañasOnline} introduccion='Desde el año 2018 hasta finales del 2022, todas las publicaciones y campañas online llevadas a cabo en el Centro Comercial Imaginalia son realizadas bajo mi dirección, supervisión. Lo mismo pasa con las publicaciones y campañas llevadas a cabo en Denominación de Origen Manchuela desde finales de 2022 hasta mediados de 2023. De todo lo creado y dirigido, destaco:' />
      <div className={style.final_experiencia_container}>
        <span>
          Me encantaría seguir aprendiendo y creciendo tanto a nivel personal como a nivel profesional. Por eso, te invito a que me conozcas.
        </span>
        <h2>¡HAREMOS GRANDES COSAS!</h2>
      </div>

    </article>
  );
}