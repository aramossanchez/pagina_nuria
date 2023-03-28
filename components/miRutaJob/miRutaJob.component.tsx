import style from './miRutaJob.module.scss';

export default function MiRutaJobComponent({ job }) {

  return (
    <div className={style.mi_ruta_container_job}>
      <h1>MI RUTA</h1>
      <h2>{job.job}</h2>
      <h6>{job.date}</h6>
      <div className={style.functions_list}>
        <span>
          Funciones a destacar:
        </span>
        <ol>
          {job.functions.map((functionItem, index) => {
            return (
              <li key={`${index}-function`}>{functionItem}</li>
            );
          })}
        </ol>
      </div>
      <div className={style.chips_container}>
        {job.chips.map((chip, index) => {
          return (
            <span key={`${index}-chip`} className={style.chip}>{chip}</span>
          );
        })}
      </div>
    </div>

  );
}