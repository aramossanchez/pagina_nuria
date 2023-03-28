import {getMiRutaInformation, getMiRutaJobs} from '@/services/miRuta.service';

export default function useMiRutaHook() {

  const miRutaJobsArray = getMiRutaJobs();

  const miRutaInformationArray = getMiRutaInformation();

  return { miRutaJobsArray, miRutaInformationArray };
}