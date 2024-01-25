import { AES } from 'crypto-js';

export const encryptPayload = (data) => {
  try {
    if (typeof data === 'object') {
      return AES.encrypt(JSON.stringify(data), 'secret').toString();
    }
    if (typeof data === 'string') {
      return AES.encrypt(data, 'secret').toString();
    }
  } catch (error) {
    Promise.reject(error);
  }
};
