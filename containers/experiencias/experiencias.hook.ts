import { getExperienciasCampañasOffline, getExperienciasCampañasOnline, getExperienciasEventos, getExperienciasProyectos } from '@/services/experiencias.service';

export default function useExperienciasHook() {

  const experienciasProyectos = getExperienciasProyectos();

  const experienciasEventos = getExperienciasEventos();
  
  const experienciasCampañasOffline = getExperienciasCampañasOffline();

  const experienciasCampañasOnline = getExperienciasCampañasOnline();

  return { experienciasProyectos, experienciasEventos, experienciasCampañasOffline, experienciasCampañasOnline };
}