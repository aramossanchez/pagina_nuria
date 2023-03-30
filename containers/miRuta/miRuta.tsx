import Image from 'next/image';
import style from './miRuta.module.scss';
import ButtonArrowRightComponent from '../../components/buttonArrowRight/buttonArrowRight.component';
import { useState } from 'react';
import ButtonArrowLeftComponent from '../../components/buttonArrowLeft/buttonArrowLeft.component';
import useMiRutaHook from './miRuta.hook';
import MiRutaJobComponent from '@/components/miRutaJob/miRutaJob.component';
import MiRutaInformationComponent from '@/components/miRutaInformation/miRutaInformation.component';
import LoaderComponent from '@/components/loader/loader.component';

export default function MiRutaComponent({ previous, next }) {

  const { miRutaJobsArray, miRutaInformationArray } = useMiRutaHook();

  const [selectedSection, setSelectedSection] = useState('inicio');

  const [loading, setLoading] = useState(true);

  return (
    <article className={style.component_container}>
      <Image
        width={250}
        height={250}
        src={'/images/sello.png'}
        alt={'Foto de sello'}
      />
      <div className={style.img_container}>
        {loading && <LoaderComponent />}
        <Image
          fill
          src={'/images/camino_mis_viajes.png'}
          alt={'Foto perfil viajera'}
          onLoadingComplete={() => setLoading(false)}
        />
        <div className={style.section_selector_container}>
          <Image
            width={50}
            height={50}
            src={'/images/googlemaps.svg'}
            alt={'Foto perfil viajera'}
            onClick={() => setSelectedSection('final')}
          />
          <span onClick={() => setSelectedSection('manchuela')}>DENOMINACIÓN DE ORIGEN MANCHUELA</span>
          <span onClick={() => setSelectedSection('imaginalia')}>CENTRO COMERCIAL IMAGINALIA</span>
          <span onClick={() => setSelectedSection('cumar')}>CUMAR S.L.U.</span>
        </div>
      </div>
      {
        selectedSection === 'inicio' &&
        <MiRutaInformationComponent information={miRutaInformationArray[0]} />
      }
      {miRutaJobsArray.map((job) => {
        return (
          selectedSection === job.id &&
          <MiRutaJobComponent job={job} />
        );
      })}
      {
        selectedSection === 'final' &&
        <MiRutaInformationComponent information={miRutaInformationArray[1]} />
      }
      <ButtonArrowLeftComponent onClick={previous} />
      <ButtonArrowRightComponent onClick={next} />
    </article >
  );
}