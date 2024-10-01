import { Alert, AlertColor, Snackbar } from "@mui/material";
import React, { PropsWithChildren, createContext, useState } from "react";

export interface Snack {
  severity: AlertColor;
  message: string;
  autoHideDuration?: number;
}

const DEFAULT_SNACK: Snack = {
  severity: "info",
  message: "",
  autoHideDuration: 5000,
};

function useSnackbarContextFactory() {
  const [snack, setSnack] = useState<Snack>(DEFAULT_SNACK);

  return {
    snack,
    setSnack,
  };
}

export const SnackbarContext = createContext<
  ReturnType<typeof useSnackbarContextFactory> | undefined
>(undefined);

export const SnackbarContextWrapper: React.FC<PropsWithChildren> = (props) => {
  const { snack, setSnack } = useSnackbarContextFactory();

  return (
    <SnackbarContext.Provider value={{ snack, setSnack }}>
      {props.children}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={!!snack.message}
        autoHideDuration={snack.autoHideDuration || DEFAULT_SNACK.autoHideDuration}
        onClose={() => setSnack(DEFAULT_SNACK)}
      >
        {/* div wrapper is required to avoid errors https://mui.com/material-ui/guides/composition/#caveat-with-refs */}
        <div>
          <Alert severity={snack.severity}>{snack.message}</Alert>
        </div>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
