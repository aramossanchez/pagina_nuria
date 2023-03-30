import LoaderComponent from '@/components/loader/loader.component';
import Image from 'next/image';
import { useState } from 'react';
import style from './perfilDeViajeraMovil.module.scss';

export default function PerfilDeViajeraMovilComponent() {

  const [loading, setLoading] = useState(true);

  return (
    <article className={style.component_container}>
      <div className={style.img_container}>
        {loading && <LoaderComponent />}
        <Image
          fill
          src={'/pagina_nuria/images/perfil_viajera.jpg'}
          alt={'Foto perfil viajera'}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <div className={style.information_container}>
        <h1>PERFIL DE VIAJERA</h1>
        <span>
          Soy Nuria Zamora, manchega y villamalense desde 1994, enamorada de mi tierra, la Manchuela, aunque durante los últimos 10 años he estado viviendo en Albacete, la cuidad que me ha visto crecer profesionalmente y a la que tengo grandes cosas que agradecer.
        </span>
        <span>
          Graduada en Administración y Dirección de Empresas en el año 2018 por la Universidad de Castilla-La Mancha. De esta etapa de mi vida, resalto el esfuerzo y sacrificio, además de las grandes amistades que logré conseguir ahí. En mi último año de carrera, tuve la oportunidad de especializarme en Dirección Estratégica y Marketing. Gracias a esta decisión, descubrí cuál era mi verdadera pasión y cuál era el ámbito al que me quería dedicar el resto de mi vida, “EL MARKETING”.
        </span>
        <span>
          Continué mi andadura como estudiante de máster en la Universidad Internacional de La Rioja formándome como directora de Marketing Estratégico y, ¡esto no acaba aquí! Actualmente, me encuentro especializándome en Marketing Digital dentro de la misma Universidad.
        </span>
        <span>
          El inglés es un idioma que domino con Certificado de B1 Preliminary Cambrigde, aunque sigo en constante aprendizaje y formación.
        </span>
        <div>
          <span className={style.chip}>#estrategia</span>
          <span className={style.chip}>#eventos</span>
          <span className={style.chip}>#marketing_digital</span>
          <span className={style.chip}>#comunicación</span>
          <span className={style.chip}>#campañas</span>
        </div>
      </div>
    </article>
  );
}