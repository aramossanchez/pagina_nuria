import style from './indexMobile.module.scss';
import { IconEPassport, IconFriends, IconGps, IconLuggage, IconTrekking } from '@tabler/icons-react';
import {basePath} from '../../config/config';

export default function IndexMobileContainer({ setPopUpSelected1, setPopUpSelected2, setPopUpSelected3, setPopUpSelected4, setPopUpSelected5}) {

  return (
    <div className={style.mobile_container}>
      <div style={{backgroundImage: `url('${basePath}images/background_index_header.jpg')`}}>
        <h1>¡Hola! ¿Quieres viajar conmigo?</h1>
        <span>Acompáñame en este viaje y descubre todas mis experiencias</span>
      </div>
      <div className={style.sections_container}>
        <div className={style.section_index_mobile}>
          <div><IconTrekking size={56} color='rgb(67, 195, 255)' /></div>
          <h2>Perfil de viajera</h2>
          <span>En este apartado encontrarás todo lo relacionado a mis datos personales y académicos.</span>
          <span onClick={() => {document.documentElement.scrollTop = 0; setPopUpSelected1();}}>+ VER MAS</span>
        </div>
        <div className={style.section_index_mobile}>
          <div><IconGps size={56} color='rgb(67, 195, 255)' /></div>
          <h2>Mi ruta</h2>
          <span>Te invito a visitar este apartado para saber más sobre toda mi experiencia y vida profesional.</span>
          <span onClick={() => {document.documentElement.scrollTop = 0; setPopUpSelected2();}}>+ VER MAS</span>
        </div>
        <div className={style.section_index_mobile}>
          <div><IconEPassport size={56} color='rgb(67, 195, 255)' /></div>
          <h2>Experiencias</h2>
          <span>Una breve descripción sobre la sección Experiencias</span>
          <span onClick={() => {document.documentElement.scrollTop = 0; setPopUpSelected3();}}>+ VER MAS</span>
        </div>
        <div className={style.section_index_mobile}>
          <div><IconLuggage size={56} color='rgb(67, 195, 255)' /></div>
          <h2>Habilidades</h2>
          <span>Una breve descripción sobre la sección Habilidades</span>
          <span onClick={() => {document.documentElement.scrollTop = 0; setPopUpSelected4();}}>+ VER MAS</span>
        </div>
        <div className={style.section_index_mobile}>
          <div><IconFriends size={56} color='rgb(67, 195, 255)' /></div>
          <h2>Compañeros de viaje</h2>
          <span>Una breve descripción sobre la sección Compañeros de viaje</span>
          <span onClick={() => {document.documentElement.scrollTop = 0; setPopUpSelected5();}}>+ VER MAS</span>
        </div>
      </div>
    </div>
  );
}