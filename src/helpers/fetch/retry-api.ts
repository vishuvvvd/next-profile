import { HttpError, RequestOptions, ResponseData } from '@/types';

export default async function retryFetch(
  url: string,
  options: RequestOptions
): Promise<ResponseData> {
  const retryResponse = await fetch(url, options);

  if (!retryResponse.ok) {
    throw new HttpError(retryResponse.status, retryResponse.statusText);
  }

  const retryData = await retryResponse.json();
  if (
    typeof retryData === 'object' &&
    !Array.isArray(retryData) &&
    retryData !== null &&
    'data' in retryData
  ) {
    return {
      ...retryData,
      status: retryResponse.status,
      statusText: retryResponse.statusText,
    };
  } else {
    return {
      data: retryData,
      status: retryResponse.status,
      statusText: retryResponse.statusText,
    };
  }
}
