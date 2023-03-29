import Image from 'next/image';
import style from './habilidades.module.scss';
import ButtonArrowRightComponent from '../../components/buttonArrowRight/buttonArrowRight.component';
import { IconBook, IconBulbFilled, IconHeart, IconMicrophone2, IconMilitaryRank, IconRocket, IconSettingsFilled, IconUsers } from '@tabler/icons-react';
import ButtonArrowLeftComponent from '@/components/buttonArrowLeft/buttonArrowLeft.component';
import { useState } from 'react';
import LoaderComponent from '@/components/loader/loader.component';

export default function HabilidadesComponent({ previous, next }) {

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
          src={'/images/maleta.png'}
          alt={'Foto de maleta'}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <div className={style.information_container}>
        <h1>HABILIDADES</h1>
        <div className={style.soft_skills}>

          <div>
            <div>
              <span>1</span>
              <span>Trabajo en equipo</span>
            </div>
            <IconUsers size={90} />
          </div>

          <div>
            <div>
              <span>2</span>
              <span>Comunicación</span>
            </div>
            <IconMicrophone2 size={90} />
          </div>

          <div>
            <div>
              <span>3</span>
              <span>Resolutiva / proactiva</span>
            </div>
            <IconSettingsFilled size={90} />
          </div>
          <div>
            <div>
              <span>4</span>
              <span>Liderazgo</span>
            </div>
            <IconMilitaryRank size={90} />
          </div>
          <div>
            <div>
              <span>5</span>
              <span>Aprendizaje constante</span>
            </div>
            <IconBook size={90} />
          </div>
          <div>
            <div>
              <span>6</span>
              <span>Superación</span>
            </div>
            <IconRocket size={90} />
          </div>
          <div>
            <div>
              <span>7</span>
              <span>Compromiso</span>
            </div>
            <IconHeart size={90} />
          </div>
          <div>
            <div>
              <span>8</span>
              <span>Creatividad</span>
            </div>
            <IconBulbFilled size={90} />
          </div>
        </div>
      </div>
      <ButtonArrowLeftComponent onClick={previous} />
      <ButtonArrowRightComponent onClick={next} />
    </article>
  );
}