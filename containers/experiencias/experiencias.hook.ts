import { getExperienciasEventos, getExperienciasProyectos } from '@/services/experiencias.service';

export default function useExperienciasHook() {

  const experienciasProyectos = getExperienciasProyectos();

  const experienciasEventos = getExperienciasEventos();

  return { experienciasProyectos, experienciasEventos };
}