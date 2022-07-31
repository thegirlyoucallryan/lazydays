import type { Treatment } from '../../../../../shared/types';
import { useQuery } from 'react-query';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';
import { useCustomToast } from '../../app/hooks/useCustomToast';

// for when we need a query function for useQuery
async function getTreatments(): Promise<Treatment[]> {
  const { data } = await axiosInstance.get('/treatments');
  console.log(data);
  return data;
}

export function useTreatments(): Treatment[] {
  const fallback = [];

  const { data = fallback } = useQuery(queryKeys.treatments, getTreatments);
  console.log(data);
  return data;
}
