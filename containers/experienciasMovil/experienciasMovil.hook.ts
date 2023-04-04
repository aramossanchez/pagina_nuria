import { getExperienciasEventos, getExperienciasProyectos } from '@/services/experiencias.service';

export default function useExperienciasMovilHook() {

  const experienciasProyectos = getExperienciasProyectos();

  const experienciasEventos = getExperienciasEventos();

  return { experienciasProyectos, experienciasEventos };
}