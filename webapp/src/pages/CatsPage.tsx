import { Box } from "@mui/material";

export function CatsPage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Box id="cats-container"></Box>
    </Box>
  );
}
