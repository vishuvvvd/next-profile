import { CACHE_MAX_AGE, API_KEY } from '@/config';
import { RequestOptions } from '@/types';

import { logger } from '../logger';

export default function requestInterceptor(
  url: string,
  options: RequestOptions
): [string, RequestOptions] {
  /* Set default method to GET if not provided */
  if (!options.method) {
    options.method = 'GET';
  }

  const { next: { revalidate } = {} } = options;

  if (revalidate === 0) {
    const { next = {} } = options;
    options.cache = 'no-store';
    options.next = {
      ...next,
      revalidate,
    };
  } else if (CACHE_MAX_AGE) {
    const { next = {} } = options;
    options.next = {
      ...next,
      revalidate: Number(CACHE_MAX_AGE),
    };
  }

  const { noAuth = false, ...restOptions } = options;
  const { headers = {} } = restOptions;
  let { Authorization = '' } = headers;

  if (!Authorization) {
    Authorization = `Basic ${API_KEY}`;
  }

  if (noAuth) {
    Authorization = '';
  }

  restOptions.headers = {
    ...headers,
    ...(Authorization && { Authorization }),
  };

  logger.info(
    JSON.stringify({
      message: 'API Request',
      apiOptions: restOptions,
      url,
    })
  );

  return [url, restOptions];
}
