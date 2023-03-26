import { useEffect, useState } from 'react';
import style from './index.module.scss';
import PerfilDeViajeraComponent from '../../components/perfilDeViajera/perfilDeViajera.component';
import MiRutaComponent from '../../components/miRuta/miRuta.component';
import ExperienciasComponent from '../../components/experiencias/experiencias.component';
import { IconArrowBigUpFilled, IconEPassport, IconFriends, IconGps, IconHome2, IconLuggage, IconMessage, IconTrekking } from '@tabler/icons-react';
import IndexMobileContainer from '../indexMobile/indexMobile.tsx';
import PerfilDeViajeraMovilComponent from '@/containers/perfilDeViajeraMovil/perfilDeViajeraMovil.component';
import MiRutaMovilContainerContainer from '@/containers/miRutaMovil/miRutaMovil';

export default function IndexContainer() {

  const [popUpSelected, setPopUpSelected] = useState('');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <div onClick={() => setPopUpSelected('')}>
            <IconHome2 />
          </div>
          <span>Nuria Zamora Fernandez</span>
          <div>
            <IconMessage />
          </div>
        </div>
        <header>
          <ul>
            <li onClick={() => {setPopUpSelected('perfilDeViajera'); document.documentElement.scrollTop = 0;}} className={popUpSelected === 'perfilDeViajera' ? style.menu_link_selected : null}>
              <div><IconTrekking /></div>
              <span>Perfil de viajera</span>
            </li>
            <li onClick={() => {setPopUpSelected('miRuta'); document.documentElement.scrollTop = 0;}} className={popUpSelected === 'miRuta' ? style.menu_link_selected : null}>
              <div><IconGps /></div>
              <span>Mi ruta</span>
            </li>
            <li onClick={() => {setPopUpSelected('eventosYCampañas'); document.documentElement.scrollTop = 0;}} className={popUpSelected === 'eventosYCampañas' ? style.menu_link_selected : null}>
              <div><IconEPassport /></div>
              <span>Experiencias</span>
            </li>
            <li onClick={() => {setPopUpSelected('habilidades'); document.documentElement.scrollTop = 0;}} className={popUpSelected === 'habilidades' ? style.menu_link_selected : null}>
              <div><IconLuggage /></div>
              <span>Habilidades</span>
            </li>
            <li onClick={() => {setPopUpSelected('compañerosDeViaje'); document.documentElement.scrollTop = 0;}} className={popUpSelected === 'compañerosDeViaje' ? style.menu_link_selected : null}>
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
        <div className={style.container_section_mobile}>
          {popUpSelected === '' &&
            <IndexMobileContainer
              setPopUpSelected1={() => setPopUpSelected('perfilDeViajera')}
              setPopUpSelected2={() => setPopUpSelected('miRuta')}
              setPopUpSelected3={() => setPopUpSelected('eventosYCampañas')}
              setPopUpSelected4={() => setPopUpSelected('habilidades')}
              setPopUpSelected5={() => setPopUpSelected('compañerosDeViaje')}
            />
          }
          {popUpSelected === 'perfilDeViajera' &&
            <PerfilDeViajeraMovilComponent />
          }
          {popUpSelected === 'miRuta' &&
            <MiRutaMovilContainerContainer />
          }
        </div>
      </article>
      <div onClick={() => document.documentElement.scrollTop = 0} className={scrollY > 350 ? style.arrow_to_up_show : style.arrow_to_up_closed}>
        <IconArrowBigUpFilled />
      </div>
    </section >
  );
}