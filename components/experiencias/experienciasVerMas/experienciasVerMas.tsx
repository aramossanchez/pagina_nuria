import Image from 'next/image';

export default function ExperienciasVerMasComponent({ title, imageUrl, imgAlt }) {

  return (
    <>
      <span>{title}</span>
      <Image
        width={250}
        height={250}
        src={imageUrl}
        alt={imgAlt}
      />
      <span>+ VER MÁS</span>
    </>

  );
}