export * from '@azure/functions'
declare module '@azure/functions' {
  export interface Response {
    res?: {
      status: number;
      body: any;
      headers?: {
        'content-type'?: string;
        'content-length'?: number;
        'content-disposition'?: string;
        'content-encoding'?: string;
        'content-language'?: string;
        'content-range'?: string;
        'content-location'?: string;
        'content-md5'?: Buffer;
        'expires'?: Date;
        'last-modified'?: Date;
        [key: string]: any;
      };
      isRaw?: boolean;
    };
  }
}