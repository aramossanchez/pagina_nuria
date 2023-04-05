import { IconBrandLinkedin, IconMail, IconPhone } from '@tabler/icons-react';
import Image from 'next/image';
import style from './hablamos.module.scss';
import {basePath} from '../../utils/variablesEnv.service';

export default function HablamosComponent() {

  return (
    <article className={style.component_container}>
      <div className={style.svg_container_1}>
        <Image
          width={500}
          height={500}
          src={`${basePath}images/hablamosImg1.svg`}
          alt={'Imagen de tarjeta de visita'}
        />
      </div>
      <div className={style.svg_container_2}>
        <Image
          width={500}
          height={500}
          src={`${basePath}images/hablamosImg2.svg`}
          alt={'Imagen de tarjeta de visita'}
        />
      </div>
      <h2>NURIA ZAMORA FERNANDEZ</h2>
      <h3>Marketing - Dirección - Eventos</h3>
      <div>
        <IconPhone size={30} />
        <span>608 44 95 65</span>
      </div>
      <div>
        <IconMail size={30} />
        <span>nuriazamora94@gmail.com</span>
      </div>
      <div>
        <IconBrandLinkedin size={30} />
        <div>
          <span>Perfil de Linkedin</span>
          <a href="https://www.linkedin.com/in/nuria-zamora-fern%C3%A1ndez-76020315a/" target="_blank" rel="noopener noreferrer">(link)</a>
        </div>
      </div>
    </article>
  );
}