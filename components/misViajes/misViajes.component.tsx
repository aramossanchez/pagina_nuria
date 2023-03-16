import Image from 'next/image';
import style from './misViajes.module.scss';
import ButtonArrowRightComponent from '../buttonArrowRight/buttonArrowRight.component';
import { useState } from 'react';
import ButtonArrowLeftComponent from '../buttonArrowLeft/buttonArrowLeft.component';

type FuncionVacia = () => void;

interface FuncionVaciaInterface {
    next: FuncionVacia;
    previous: FuncionVacia;
}

export default function MisViajesComponent({ previous }: FuncionVaciaInterface, { next }: FuncionVaciaInterface) {

    const [selectedSection, setSelectedSection] = useState('principal');

    return (
        <article className={style.component_container}>
            <Image
                width={250}
                height={250}
                src={'/images/sello.png'}
                alt={'Foto de sello'}
            />
            <div className={style.img_container}>
                <Image
                    fill
                    src={'/images/perfil_viajera.jpg'}
                    alt={'Foto perfil viajera'}
                />
                <div className={style.section_selector_container}>
                    <span onClick={() => setSelectedSection('test4')}>test4</span>
                    <span onClick={() => setSelectedSection('test3')}>test3</span>
                    <span onClick={() => setSelectedSection('test2')}>test2</span>
                    <span onClick={() => setSelectedSection('test1')}>test1</span>
                </div>
            </div>
            {selectedSection === 'principal' &&
                <div className={style.information_container}>
                    <h1>MIS VIAJES</h1>
                    <span>
                        Gracias
                    </span>
                </div>
            }
            {selectedSection === 'test1' &&
                <div className={style.information_container}>
                    <h1>MIS VIAJES 1</h1>
                    <span>
                        Test1
                    </span>
                </div>
            }
            {selectedSection === 'test2' &&
                <div className={style.information_container}>
                    <h1>MIS VIAJES 2</h1>
                    <span>
                        Test2
                    </span>
                </div>
            }
            {selectedSection === 'test3' &&
                <div className={style.information_container}>
                    <h1>MIS VIAJES 3</h1>
                    <span>
                        Test3
                    </span>
                </div>
            }
            {selectedSection === 'test4' &&
                <div className={style.information_container}>
                    <h1>MIS VIAJES 4</h1>
                    <span>
                        Test4
                    </span>
                </div>
            }
            <ButtonArrowLeftComponent onClick={previous} />
            <ButtonArrowRightComponent onClick={next} />
        </article>
    )
}