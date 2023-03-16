import style from './buttonArrowLeft.module.scss';
import { IconChevronsLeft } from '@tabler/icons-react';

type FuncionVacia = () => void;

interface FuncionVaciaInterface {
    onClick: FuncionVacia;
}

export default function ButtonArrowLeftComponent({onClick}: FuncionVaciaInterface) {

    return (
        <IconChevronsLeft color='rgb(67, 195, 255)' size={54} className={style.svg} onClick={onClick}/>
    )
}