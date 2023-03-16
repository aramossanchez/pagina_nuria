import style from './buttonArrowRight.module.scss';
import { IconChevronsRight } from '@tabler/icons-react';

type FuncionVacia = () => void;

interface FuncionVaciaInterface {
    onClick: FuncionVacia;
}

export default function ButtonArrowRightComponent({onClick}: FuncionVaciaInterface) {

    return (
        <IconChevronsRight color='rgb(67, 195, 255)' size={54} className={style.svg} onClick={onClick}/>
    )
}