import { useState } from 'react';
import style from './index.module.scss';
import PerfilDeViajeraComponent from '../../components/perfilDeViajera/perfilDeViajera.component';
import MiRutaComponent from '../../components/miRuta/miRuta.component';
import ExperienciasComponent from '../../components/experiencias/experiencias.component';
import { IconEPassport, IconFriends, IconGps, IconHome2, IconLuggage, IconMessage, IconTrekking } from '@tabler/icons-react';

export default function IndexContainer() {

  const [popUpSelected, setPopUpSelected] = useState('');

  return (
    <section>
      {popUpSelected.length > 0 &&

        <div className={`${style.popups_container}`}>
          <div className={style.close_popup} onClick={() => setPopUpSelected('')}></div>
          <div className={popUpSelected === 'perfilDeViajera' ? style.popup_container_active : style.popup_container_hide}>
            <PerfilDeViajeraComponent next={() => setPopUpSelected('miRuta')} />
          </div>
          <div className={popUpSelected === 'miRuta' ? style.popup_container_active : style.popup_container_hide}>
            <MiRutaComponent previous={() => setPopUpSelected('perfilDeViajera')} next={() => setPopUpSelected('eventosYCampañas')} />
          </div>
          <div className={popUpSelected === 'eventosYCampañas' ? style.popup_container_active : style.popup_container_hide}>
            <ExperienciasComponent previous={() => setPopUpSelected('miRuta')} next={() => setPopUpSelected('eventosYCampañas')} />
          </div>
        </div>
      }
      <article className={style.presentation_container}>
        <div className={style.background_image}></div>
        <div className={style.header_mobile}>
          <div>
            <IconHome2 />
          </div>
          <span>Nuria Zamora Fernandez</span>
          <div>
            <IconMessage />
          </div>
        </div>
        <header>
          <ul>
            <li onClick={() => setPopUpSelected('perfilDeViajera')} className={popUpSelected === 'perfilDeViajera' ? style.menu_link_selected : null}>
              <div><IconTrekking /></div>
              <span>Perfil de viajera</span>
            </li>
            <li onClick={() => setPopUpSelected('miRuta')} className={popUpSelected === 'miRuta' ? style.menu_link_selected : null}>
              <div><IconGps /></div>
              <span>Mi ruta</span>
            </li>
            <li onClick={() => setPopUpSelected('eventosYCampañas')} className={popUpSelected === 'eventosYCampañas' ? style.menu_link_selected : null}>
              <div><IconEPassport /></div>
              <span>Experiencias</span>
            </li>
            <li onClick={() => setPopUpSelected('habilidades')} className={popUpSelected === 'habilidades' ? style.menu_link_selected : null}>
              <div><IconLuggage /></div>
              <span>Habilidades</span>
            </li>
            <li onClick={() => setPopUpSelected('compañerosDeViaje')} className={popUpSelected === 'compañerosDeViaje' ? style.menu_link_selected : null}>
              <div><IconFriends /></div>
              <span>Compañeros de viaje</span>
            </li>
          </ul>
        </header>
        <div className={style.text_presentation_container}>
          <h1>¡Hola! ¿Quieres viajar conmigo?</h1>
          <span>Acompáñame en este viaje y descubre todas mis experiencias</span>
          <span>#marketing - #eventos - #dirección</span>
          <article className={style.buttons_presentation_container}>
            <div>¿Hablamos?</div>
          </article>
        </div>
        <div className={style.text_presentation_container_mobile}>
          <div>
            <h1>¡Hola! ¿Quieres viajar conmigo?</h1>
            <span>Acompáñame en este viaje y descubre todas mis experiencias</span>
          </div>
          <div className={style.sections_container}>
            <div className={style.section_index_mobile}>
              <div><IconTrekking size={56} color='rgb(67, 195, 255)' /></div>
              <h2>Perfil de viajera</h2>
              <span>Una breve descripción sobre la sección Perfil de viajera</span>
              <span>+ VER MAS</span>
            </div>
            <div className={style.section_index_mobile}>
              <div><IconGps size={56} color='rgb(67, 195, 255)' /></div>
              <h2>Mi ruta</h2>
              <span>Una breve descripción sobre la sección Mi ruta</span>
              <span>+ VER MAS</span>
            </div>
            <div className={style.section_index_mobile}>
              <div><IconEPassport size={56} color='rgb(67, 195, 255)' /></div>
              <h2>Experiencias</h2>
              <span>Una breve descripción sobre la sección Experiencias</span>
              <span>+ VER MAS</span>
            </div>
            <div className={style.section_index_mobile}>
              <div><IconLuggage size={56} color='rgb(67, 195, 255)' /></div>
              <h2>Habilidades</h2>
              <span>Una breve descripción sobre la sección Habilidades</span>
              <span>+ VER MAS</span>
            </div>
            <div className={style.section_index_mobile}>
              <div><IconFriends size={56} color='rgb(67, 195, 255)' /></div>
              <h2>Compañeros de viaje</h2>
              <span>Una breve descripción sobre la sección Compañeros de viaje</span>
              <span>+ VER MAS</span>
            </div>
          </div>
        </div>
      </article>
    </section >
  );
}