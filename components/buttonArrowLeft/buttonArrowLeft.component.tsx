import style from './buttonArrowLeft.module.scss';
import { IconChevronsLeft } from '@tabler/icons-react';

export default function ButtonArrowLeftComponent({ onClick }) {

  return (
    <IconChevronsLeft color='rgb(67, 195, 255)' size={54} className={style.svg} onClick={onClick} />
  );
}