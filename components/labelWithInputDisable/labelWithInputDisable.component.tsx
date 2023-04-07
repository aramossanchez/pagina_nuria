import style from './labelWithInputDisable.module.scss';

export default function LabelWithInputDisableComponent({ label = '', value = '', link = '' }) {

  return (
    <div className={style.label_and_value_container}>
      <span>{label}</span>
      {link === '' ?
        <span>{value}</span>
        :
        <a href={link} target="_blank" rel="noopener noreferrer">{value}</a>
      }
    </div>
  );
}