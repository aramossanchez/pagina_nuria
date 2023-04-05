import Image from 'next/image';
import style from './experienciasMovilDetalle.module.scss';

export default function ExperienciasMovilDetalleComponent({ detalle, onClick }) {

  return (
    <>
      <div className={style.popup_verMas_container} onClick={onClick}></div>
      <div className={style.popup_verMas}>
        <h3>{detalle.title}</h3>
        <Image
          width={detalle.imgSize}
          height={detalle.imgSize}
          src={detalle.imageUrl}
          alt={detalle.imgAlt}
        />
        <span dangerouslySetInnerHTML={{ __html: detalle.detail }} />
        {detalle.list?.length > 0 &&
          <ul>
            {detalle.list.map((item, index) => {
              return (
                <li key={`${index}-${item}`} dangerouslySetInnerHTML={{ __html: item }} />
              );
            })}
          </ul>
        } </div>
    </>
  );
}