export interface ResponseData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  message?: string;
  statusText?: string;
  status: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: string | any;
}

export class HttpError extends Error {
  /* eslint-disable-next-line no-unused-vars */
  constructor(public status: number, message: string) {
    super(message);
  }
}

export interface RequestOptions {
  headers?: { [key: string]: string };
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  cache?: RequestCache | undefined;
  next?: {
    revalidate?: number;
  };
  noAuth?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  redirect?: 'manual'
}

// export type RevalidateOption = {
//   revalidate?: string | null;
//   id?: string;
//   locale?: string;
// };

export interface LayoutWrapper {
  children: React.ReactNode;
  backgroundColor?: string;
}

export interface BouncingBlockType {
  name: string;
  side: string;
}

export interface ColoredBorderBox {
  note: string;
  borderGradient?: string;
  sx?: object;
}

export interface CustomeImageType { 
  src: string; 
  alt?: string; 
  fallback?: string, 
  sx?: object 
}
