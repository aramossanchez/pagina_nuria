import Image from 'next/image';
import style from './habilidadesMovil.module.scss';
import {basePath} from '../../config/config';
import { IconBook, IconBulbFilled, IconHeart, IconMicrophone2, IconMilitaryRank, IconRocket, IconSettingsFilled, IconUsers } from '@tabler/icons-react';

export default function HabilidadesMovilContainer() {

  return (
    <article className={style.component_container}>
      <div className={style.img_container}>
        <Image
          fill
          src={`${basePath}images/maleta.png`}
          alt={'Foto habilidades'}
        />
      </div>
      <div className={style.habilidades_container}>
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
    </article>
  );
}