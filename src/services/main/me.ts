import { INTERNAL_API } from '@/constants/api';
import API from '@/helpers/fetch';

export const getUserMeData = async () => {
  const { data = {} } = await API(INTERNAL_API.ME, { noAuth: true });
  return data ?? {};
};
