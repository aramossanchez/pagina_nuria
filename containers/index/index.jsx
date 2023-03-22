import { useState } from 'react';
import style from './index.module.scss';
import PerfilDeViajeraComponent from '../../components/perfilDeViajera/perfilDeViajera.component';
import MiRutaComponent from '../../components/miRuta/miRuta.component';
import ExperienciasComponent from '../../components/experiencias/experiencias.component';

export default function IndexContainer() {

  const [menuOpen, setMenuOpen] = useState(false);
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
        <div className={style.button_menu_navigation_container}>
          <div
            className={menuOpen ? style.button_menu_navigation_open : style.button_menu_navigation_closed}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <header className={menuOpen ? style.header_open : style.header_closed}>
          <ul>
            <li onClick={() => setPopUpSelected('perfilDeViajera')} className={popUpSelected === 'perfilDeViajera' ? style.menu_link_selected : null}>Perfil de viajera</li>
            <li onClick={() => setPopUpSelected('miRuta')} className={popUpSelected === 'miRuta' ? style.menu_link_selected : null}>Mi ruta</li>
            <li onClick={() => setPopUpSelected('eventosYCampañas')} className={popUpSelected === 'eventosYCampañas' ? style.menu_link_selected : null}>Experiencias</li>
            <li>Habilidades</li>
            <li>Compañeros de viaje</li>
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
      </article>
    </section >
  );
}