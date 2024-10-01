import { useContext } from "react";
import { SnackbarContext } from "../SnackbarContextProvider";

// Separate file for context helper methods, to support react-refresh

export function useSnackbar() {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error("Could not get snackbar context");
  }

  return context;
}
