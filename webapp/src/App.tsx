import { Box } from "@mui/material";
import "./App.css";
import { CatsPage } from "./pages/CatsPage";
import { SnackbarContextWrapper } from "./components/generic/SnackbarContextProvider";

function App() {
  return (
    <SnackbarContextWrapper>
      <Box sx={{ display: "flex" }}>
        <CatsPage />
      </Box>
    </SnackbarContextWrapper>
  );
}

export default App;
