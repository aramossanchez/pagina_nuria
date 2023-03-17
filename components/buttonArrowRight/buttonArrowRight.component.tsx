import style from './buttonArrowRight.module.scss';
import { IconChevronsRight } from '@tabler/icons-react';

export default function ButtonArrowRightComponent({ onClick }) {

  return (
    <IconChevronsRight color='rgb(67, 195, 255)' size={54} className={style.svg} onClick={onClick} />
  );
}