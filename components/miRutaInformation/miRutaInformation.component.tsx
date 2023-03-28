import style from './miRutaInformation.module.scss';

export default function MiRutaInformationComponent({ information }) {

  return (
    <div className={style.mi_ruta_container_information}>
      <h1>MI RUTA</h1>
      <div className={style.text_section_inicio}>
        <span>
          {information.information}
        </span>
      </div>
      <h2>{information.big_message}</h2>
    </div>
  );
}