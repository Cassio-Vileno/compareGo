import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import ModalResult from '../components/molecules/ModalResult';

type DialogContextData = {
  visibleDialog: boolean;
  openDialog: (data: DialogContentProps) => void;
  closeDialog: () => void;
  buttonCloseDialogFunction: () => void;
};

type DialogContentProps = {
  title?: string;
  specifications: any;
  buttonCloseText?: string;
  groupButtonDisposition?: 'row' | 'column';
  buttonConfirmPress?: () => void;
  buttonClosePress?: () => void;
  buttonCloseDialog?: boolean;
};

type DialogProviderProps = {
  children: ReactNode;
};

const DialogContext = createContext<DialogContextData>({} as DialogContextData);

export const DialogProvider = ({children}: DialogProviderProps) => {
  const [visibleDialog, setVisibleDialog] = useState<boolean>(false);
  const [dialogData, setDialogData] = useState<DialogContentProps>(
    {} as DialogContentProps,
  );

  const openDialog = useCallback((data: DialogContentProps) => {
    setVisibleDialog(true);
    setDialogData(data);
  }, []);

  const buttonCloseDialogFunction = useCallback(() => {
    setVisibleDialog(false);
  }, []);

  const closeDialog = useCallback(() => {
    if (dialogData.buttonClosePress) {
      dialogData.buttonClosePress();
    }
    setVisibleDialog(false);
  }, [dialogData]);

  return (
    <DialogContext.Provider
      value={{
        visibleDialog,
        openDialog,
        closeDialog,
        buttonCloseDialogFunction,
      }}>
      {children}
      <ModalResult
        show={visibleDialog}
        specifications={dialogData.specifications}
        close={closeDialog}
      />
    </DialogContext.Provider>
  );
};

export function useDialog() {
  const context = useContext(DialogContext);
  return context;
}
