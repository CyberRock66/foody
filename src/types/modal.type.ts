import { SetStateAction } from 'react';

export type ModalType = {
  open: boolean;
  setOpen: (value: SetStateAction<boolean>) => void;
};
