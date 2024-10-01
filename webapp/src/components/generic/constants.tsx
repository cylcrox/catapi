import { Snack } from "./SnackbarContextProvider";

export function errorMessage(message: string): Snack {
  return {
    message,
    severity: "error",
  };
}

export function successMessage(message: string): Snack {
  return {
    message,
    severity: "success",
  };
}

export function infoMessage(message: string): Snack {
  return {
    message,
    severity: "info",
  };
}
