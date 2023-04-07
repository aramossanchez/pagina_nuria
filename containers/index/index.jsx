import { useEffect, useState } from 'react';
import style from './index.module.scss';
import PerfilDeViajeraComponent from '../perfilDeViajera/perfilDeViajera';
import MiRutaComponent from '../miRuta/miRuta.tsx';
import ExperienciasComponent from '../experiencias/experiencias.tsx';
import { IconArrowBigUpFilled, IconArrowNarrowLeft, IconEPassport, IconFriends, IconGps, IconHome2, IconLuggage, IconMessage, IconTrekking } from '@tabler/icons-react';
import IndexMobileContainer from '../indexMobile/indexMobile.tsx';
import PerfilDeViajeraMovilComponent from '@/containers/perfilDeViajeraMovil/perfilDeViajeraMovil.component';
import MiRutaMovilContainerContainer from '@/containers/miRutaMovil/miRutaMovil';
import HabilidadesComponent from '../habilidades/habilidades';
import HablamosComponent from '../hablamos/hablamos';
import ExperienciasMovilContainer from '../experienciasMovil/experienciasMovil';
import { basePath } from '../../config/config';
import HabilidadesMovilContainer from '../habilidadesMovil/habilidadesMovil.container';
import LabelWithInputDisableComponent from '@/components/labelWithInputDisable/labelWithInputDisable.component';
import Image from 'next/image';

export default function IndexContainer() {

  const [popUpSelected, setPopUpSelected] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [hablamosMobileOpen, setHablamosMobileOpen] = useState(false);

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
          <div className={popUpSelected === 'hablamos' ? style.hablamos_container_active : style.hablamos_container_hide}>
            <HablamosComponent />
          </div>
          <div className={popUpSelected === 'perfilDeViajera' ? style.popup_container_active : style.popup_container_hide}>
            <PerfilDeViajeraComponent next={() => setPopUpSelected('miRuta')} />
          </div>
          <div className={popUpSelected === 'miRuta' ? style.popup_container_active : style.popup_container_hide}>
            <MiRutaComponent previous={() => setPopUpSelected('perfilDeViajera')} next={() => setPopUpSelected('eventosYCampañas')} />
          </div>
          <div className={popUpSelected === 'eventosYCampañas' ? style.popup_container_active : style.popup_container_hide}>
            <ExperienciasComponent previous={() => setPopUpSelected('miRuta')} next={() => setPopUpSelected('habilidades')} />
          </div>
          <div className={popUpSelected === 'habilidades' ? style.popup_container_active : style.popup_container_hide}>
            <HabilidadesComponent previous={() => setPopUpSelected('eventosYCampañas')} next={() => setPopUpSelected('compañeros')} />
          </div>
        </div>
      }
      <article className={style.presentation_container}>
        <div className={style.background_image} style={{ backgroundImage: `url('${basePath}images/background_index_header.jpg')` }}></div>
        <div className={style.header_mobile}>
          <div onClick={() => { setPopUpSelected(''); document.documentElement.scrollTop = 0; }}>
            <IconHome2 />
          </div>
          <span>Nuria Zamora Fernandez</span>
          <div>
            <IconMessage onClick={() => setHablamosMobileOpen(true)}/>
          </div>
        </div>
        <div className={ hablamosMobileOpen ? style.hablamos_mobile_open : style.hablamos_mobile_closed}>
          <div className={style.arrow_and_first_message_container}>
            <IconArrowNarrowLeft onClick={() => setHablamosMobileOpen(false)}/>
            <span>DATOS PÚBLICOS</span>
          </div>
          <div className={style.hablamos_mobile_img_container}>
            <span>Foto de perfil</span>
            <Image
              width={100}
              height={100}
              src={`${basePath}images/foto_perfil_mobile.jpg`}
              alt={'Foto mi ruta'}
            />
          </div>
          <LabelWithInputDisableComponent label='Nombre' value='Nuria' />
          <LabelWithInputDisableComponent label='Apellidos' value='Zamora Fernandez' />
          <LabelWithInputDisableComponent label='Teléfono' value='608 44 95 65' />
          <LabelWithInputDisableComponent label='Correo electrónico' value='nuriazamora94@gmail.com' />
          <LabelWithInputDisableComponent label='Perfil de Linkedin' value='nuria-zamora-fernández' link='https://www.linkedin.com/in/nuria-zamora-fern%C3%A1ndez-76020315a/' />
        </div>
        <header>
          <ul>
            <li onClick={() => { setPopUpSelected('perfilDeViajera'); document.documentElement.scrollTop = 0; }} className={popUpSelected === 'perfilDeViajera' ? style.menu_link_selected : null}>
              <div><IconTrekking /></div>
              <span>Perfil de viajera</span>
            </li>
            <li onClick={() => { setPopUpSelected('miRuta'); document.documentElement.scrollTop = 0; }} className={popUpSelected === 'miRuta' ? style.menu_link_selected : null}>
              <div><IconGps /></div>
              <span>Mi ruta</span>
            </li>
            <li onClick={() => { setPopUpSelected('eventosYCampañas'); document.documentElement.scrollTop = 0; }} className={popUpSelected === 'eventosYCampañas' ? style.menu_link_selected : null}>
              <div><IconEPassport /></div>
              <span>Experiencias</span>
            </li>
            <li onClick={() => { setPopUpSelected('habilidades'); document.documentElement.scrollTop = 0; }} className={popUpSelected === 'habilidades' ? style.menu_link_selected : null}>
              <div><IconLuggage /></div>
              <span>Habilidades</span>
            </li>
            <li onClick={() => { setPopUpSelected('compañerosDeViaje'); document.documentElement.scrollTop = 0; }} className={popUpSelected === 'compañerosDeViaje' ? style.menu_link_selected : null}>
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
            <div onClick={() => setPopUpSelected('hablamos')}>¿Hablamos?</div>
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
          {popUpSelected === 'eventosYCampañas' &&
            <ExperienciasMovilContainer />
          }
          {popUpSelected === 'habilidades' &&
            <HabilidadesMovilContainer />
          }
        </div>
      </article>
      <div onClick={() => document.documentElement.scrollTop = 0} className={scrollY > 350 ? style.arrow_to_up_show : style.arrow_to_up_closed}>
        <IconArrowBigUpFilled />
      </div>
    </section >
  );
}