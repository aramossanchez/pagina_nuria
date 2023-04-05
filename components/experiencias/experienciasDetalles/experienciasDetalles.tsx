import Image from 'next/image';
import style from './experienciasDetalles.module.scss';
import { IconSquareRoundedX } from '@tabler/icons-react';
import {basePath} from '../../../utils/variablesEnv.service';

export default function ExperienciasComponent({ title, imageUrl, imgAlt, imgSize, detail, list = [], setSelectedProject }) {

  return (
    <div className={style.project_details}>
      <h3>{title}</h3>
      <Image
        width={imgSize}
        height={imgSize}
        src={basePath+imageUrl}
        alt={imgAlt}
      />
      <span dangerouslySetInnerHTML={{ __html: detail }} />
      {list.length > 0 &&
        <ul>
          {list.map((item, index) => {
            return (
              <li key={`${index}-${item}`} dangerouslySetInnerHTML={{ __html: item }} />
            );
          })}
        </ul>
      }
      <div className={style.close_button_container} onClick={() => setSelectedProject('')}>
        <IconSquareRoundedX color='rgb(67, 195, 255)' size={54} />
      </div>
    </div>
  );
}