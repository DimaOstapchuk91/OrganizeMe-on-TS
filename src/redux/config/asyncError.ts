import axios from 'axios';
import { RejectValue } from '../../types/auth';

export function handleAsyncError(error: unknown): RejectValue {
  let message = 'Unknown error';

  if (axios.isAxiosError(error)) {
    message = error.response?.data?.message || error.message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return { message };
}
