import Image from 'next/image';
import style from './perfilDeViajera.module.scss';
import { IconChevronsRight } from '@tabler/icons-react';

type FuncionVacia = () => void;

interface PerfilDeViajeraComponentProps {
  next: FuncionVacia;
}

export default function PerfilDeViajeraComponent({next}: PerfilDeViajeraComponentProps) {

    return (
        <article className={style.component_container}>
            <Image
                width={250}
                height={250}
                src={'/images/sello.png'}
                alt={'Foto de sello'}
            />
            <Image
                width={500}
                height={700}
                src={'/images/perfil_viajera.jpg'}
                alt={'Foto perfil viajera'}
            />
            <div>
                <h1>PERFIL DE VIAJERA</h1>
                <p>
                    Soy Nuria Zamora, manchega y villamalense desde 1994, enamorada de mi tierra, la Manchuela, aunque durante los últimos 10 años he estado viviendo en Albacete, la cuidad que me ha visto crecer profesionalmente y a la que tengo grandes cosas que agradecer.
                </p>
                <p>
                    Graduada en Administración y Dirección de Empresas en el año 2018 por la Universidad de Castilla-La Mancha. De esta etapa de mi vida, resalto el esfuerzo y sacrificio, además de las grandes amistades que logré conseguir ahí. En mi último año de carrera, tuve la oportunidad de especializarme en Dirección Estratégica y Marketing. Gracias a esta decisión, descubrí cuál era mi verdadera pasión y cuál era el ámbito al que me quería dedicar el resto de mi vida, “EL MARKETING”.
                </p>
                <p>
                    Continué mi andadura como estudiante de máster en la Universidad Internacional de La Rioja formándome como directora de Marketing Estratégico y, ¡esto no acaba aquí! Actualmente, me encuentro especializándome en Marketing Digital dentro de la misma Universidad.
                </p>
                <p>
                    El inglés es un idioma que domino con Certificado de B1 Preliminary Cambrigde, aunque sigo en constante aprendizaje y formación.
                </p>
                <p>
                    <span className={style.chip}>#estrategia</span>
                    <span className={style.chip}>#eventos</span>
                    <span className={style.chip}>#marketing_digital</span>
                    <span className={style.chip}>#comunicación</span>
                    <span className={style.chip}>#campañas</span>
                </p>
            </div>
            <IconChevronsRight color='rgb(67, 195, 255)' size={64} onClick={next}/>
        </article>
    )
}