import { useState } from 'react';
import style from './index.module.scss';
import PerfilDeViajeraComponent from '../../components/perfilDeViajera/perfilDeViajera.component';
import MisViajesComponent from '../../components/misViajes/misViajes.component';

export default function IndexContainer() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [popUpSelected, setPopUpSelected] = useState('');

    return (
        <section>
            {popUpSelected.length > 0 &&

                <div className={`${style.popups_container}`}>
                    <div className={style.close_popup} onClick={() => setPopUpSelected('')}></div>
                    <div className={popUpSelected === 'perfilDeViajera' ? style.popup_container_active : style.popup_container_hide}>
                        <PerfilDeViajeraComponent next={() => setPopUpSelected('misViajes')} />
                    </div>
                    <div className={popUpSelected === 'misViajes' ? style.popup_container_active : style.popup_container_hide}>
                        <MisViajesComponent previous={() => setPopUpSelected('perfilDeViajera')} next={() => setPopUpSelected('eventoYCampañas')} />
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
                        <li onClick={() => setPopUpSelected('perfilDeViajera')} className={popUpSelected === 'perfilDeViajera' ?style.menu_link_selected : null}>Perfil de viajera</li>
                        <li onClick={() => setPopUpSelected('misViajes')} className={popUpSelected === 'misViajes' ?style.menu_link_selected : null}>Mis viajes</li>
                        <li>Eventos y campañas</li>
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
    )
}