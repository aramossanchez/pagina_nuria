import Image from 'next/image';
import {basePath} from '../../../config/config';

export default function ExperienciasVerMasComponent({ title, imageUrl, imgAlt }) {

  return (
    <>
      <span>{title}</span>
      <Image
        width={250}
        height={250}
        src={basePath+imageUrl}
        alt={imgAlt}
      />
      <span>+ VER MÁS</span>
    </>

  );
}