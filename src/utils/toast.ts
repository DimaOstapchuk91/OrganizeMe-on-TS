import toast from 'react-hot-toast';

export const errToast = (message: string): void => {
  toast.error(`${message}`, {
    duration: 4000,
    position: 'top-center',

    style: {
      borderRadius: '10px',
      background: 'var(--background)',
      color: 'red',
    },
    icon: '🚩 ',
  });
};

export const successfullyToast = (message: string): void => {
  toast.success(`${message}`, {
    duration: 4000,
    position: 'top-center',

    style: {
      borderRadius: '10px',
      background: 'var(--background)',
      color: 'var(--text-light)',
    },

    className: '',
    icon: '✅ ',
  });
};

export const velcomeToast = (message: string): void => {
  toast.success(`${message}`, {
    duration: 4000,
    position: 'top-right',

    style: {
      borderRadius: '10px',
      background: 'var(--background)',
      color: 'var(--text-light)',
    },

    className: '',
    icon: '👋',
  });
};
