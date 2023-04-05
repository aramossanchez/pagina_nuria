import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import style from './experienciasMovilSlider.module.scss';
import { IconCircle, IconCircleFilled } from '@tabler/icons-react';
import ExperienciasMovilDetalleComponent from './experienciasMovilDetalle/experienciasMovilDetalle';
import {basePath} from '../../utils/variablesEnv.service';

export default function ExperienciasMovilSliderComponent({ experiencias, introduccion = '' }) {

  const sliderContainerRef = useRef(null);
  const [activePointSlider, setActivePointSlider] = useState(0);
  const [openVerMas, setOpenVerMas] = useState('');

  const setScrollInSlider = (scroll) => {
    sliderContainerRef.current.scrollTo({
      left: scroll,
      behavior: 'smooth',
    });
  };

  const watchActivePointSlider = () => {
    setActivePointSlider(sliderContainerRef.current.scrollLeft);
  };

  useEffect(() => {
    const sliderContainer = sliderContainerRef.current;
    sliderContainer.addEventListener('scroll', watchActivePointSlider);

    return () => {
      sliderContainer.removeEventListener('scroll', watchActivePointSlider);
    };
  }, []);

  const [loading, setLoading] = useState(true);

  return (
    <>
      {experiencias.detalle.map((detalle) => {
        return (
          openVerMas === detalle.id &&
          <ExperienciasMovilDetalleComponent detalle={detalle} onClick={() => setOpenVerMas('')} />
        );
      })}
      <div id={experiencias.section} className={style.destiny_link}></div>
      <div className={style.experiencia_container}>
        <h2>{experiencias.name}</h2>
        <div className={style.introduccion}>{introduccion}</div>
        <div className={style.slider_container} ref={sliderContainerRef}>
          {experiencias.verMas.map((verMas) => {
            return (
              <div key={verMas.id} className={style.slider_card_container}>
                <div className={style.slider_card}>
                  <span>{verMas.title}</span>
                  <Image
                    width={250}
                    height={250}
                    src={basePath+verMas.imageUrl}
                    alt={verMas.imgAlt}
                  />
                  <span onClick={() => setOpenVerMas(verMas.id)}>+ VER MÁS</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className={style.points_slider_container}>
          {activePointSlider < (window.innerWidth - ((window.innerWidth / 3))) ?
            <IconCircleFilled onClick={() => setScrollInSlider(0)} />
            :
            <IconCircle onClick={() => setScrollInSlider(0)} />
          }
          {activePointSlider > (window.innerWidth - ((window.innerWidth / 3))) && activePointSlider < ((window.innerWidth - 70) * 2) ?
            <IconCircleFilled onClick={() => setScrollInSlider(window.innerWidth)} />
            :
            <IconCircle onClick={() => setScrollInSlider(window.innerWidth)} />
          }
          {activePointSlider > ((window.innerWidth - 70) * 2) ?
            <IconCircleFilled onClick={() => setScrollInSlider(window.innerWidth * 2)} />
            :
            <IconCircle onClick={() => setScrollInSlider(window.innerWidth * 2)} />
          }
        </div>
      </div>
    </>
  );
}