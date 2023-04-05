import LoaderComponent from '@/components/loader/loader.component';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import style from './experienciasMovil.module.scss';
import useExperienciasMovilHook from './experienciasMovil.hook';
import ExperienciasMovilSliderComponent from '@/components/experienciasMovilSlider/experienciasMovilSlider';

export default function ExperienciasMovilContainer() {

  const { experienciasProyectos, experienciasEventos } = useExperienciasMovilHook();

  const [loading, setLoading] = useState(true);

  return (
    <article className={style.component_container}>
      <div className={style.miRutaMovil_links}>
        <Link href="/#inicio" scroll={false}>
          Agradecimientos
        </Link>
        <Link href={`/#${experienciasProyectos.section}`} scroll={false}>
          Proyectos
        </Link>
        <Link href="/#eventos" scroll={false}>
          Eventos
        </Link>
        <Link href="/#campañasOffline" scroll={false}>
          Campañas Offline
        </Link>
        <Link href="/#campañasOnline" scroll={false}>
          Campañas Online
        </Link>
        <div className={style.white_opacity_right}>asd</div>
        <div className={style.white_opacity_left}>asd</div>
      </div>
      <div className={style.img_container}>
        {loading && <LoaderComponent />}
        <Image
          fill
          src={'/pagina_nuria/images/camino_mis_viajes.png'}
          alt={'Foto mi ruta'}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h1>EXPERIENCIAS</h1>
      <div id='inicio' className={style.destiny_link}></div>
      <div className={style.inicio_experiencia_container}>
        <div className={style.text_section_inicio}></div>
        <span>
          Tengo que agradecer la ruta escogida, porque gracias a ella he aprendido a gestionar y dirigir proyectos, organizar grandes eventos y desarrollar campañas (offline y online). Aunque he de admitir que el sendero no siempre ha sido un camino de rosas, cada piedra en el camino me ha ayudado a aumentar mi seguridad, intuición y creatividad.
        </span>
        <h2>¡TE INVITO A DESCUBRIRLO!</h2>
      </div>
      <ExperienciasMovilSliderComponent experiencias={experienciasProyectos} />
      <ExperienciasMovilSliderComponent experiencias={experienciasEventos} />
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