import style from './loader.module.scss';

export default function LoaderComponent() {
  return (
    <div className={style.loader_container}>
      <div className={style.lds_spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
}