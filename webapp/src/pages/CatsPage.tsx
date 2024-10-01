import { Box } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Cat } from "../api/types";
import { addFavorite, listCats, removeFavorite } from "../api/cats";
import { CatCard } from "../components/cats/CatCard";
import { useSnackbar } from "../components/generic/hooks/useSnackbar";
import { errorMessage, successMessage } from "../components/generic/constants";

export function CatsPage() {
  const [catsData, setCatsData] = useState<Array<Cat> | undefined>();
  const { setSnack } = useSnackbar();

  useEffect(() => {
    !catsData &&
      (async () => {
        try {
          const { data } = await listCats();
          setCatsData(data);
        } catch (error) {}
      })();
  }, [catsData]);

  function setFavorite(id: string, favorite: boolean) {
    setCatsData((catsData) =>
      catsData?.map((cat: Cat) => (cat.id === id ? { ...cat, favorite: favorite } : cat))
    );
  }

  const toggleFavoriteRequest = useCallback(
    async (id: string) => {
      const cat = catsData?.filter((cat) => cat.id === id)[0];
      if (cat) {
        if (!cat.favorite) {
          try {
            await removeFavorite(id);
            setFavorite(id, true);
            setSnack(successMessage("Added to favorites!"));
          } catch {
            setSnack(errorMessage("An error ocurred adding to favorites."));
          }
        } else {
          try {
            await addFavorite(id);
            setFavorite(id, false);
            setSnack(successMessage("Removed from favorites!"));
          } catch {
            setSnack(errorMessage("An error ocurred removing from favorites."));
          }
        }
      }
    },
    [catsData, setSnack]
  );

  return (
    <Box
      id="cats_page"
      sx={{
        width: "100%",
        height: "",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "blue",
      }}
    >
      <Box id="cats-container">
        {catsData?.map((cat) => (
          <CatCard
            id={cat.id}
            breed={cat.breed_id}
            altText={cat.id}
            favorite={cat.favorite}
            imageUrl={cat.url}
            toggleFavorite={toggleFavoriteRequest}
          />
        ))}
      </Box>
    </Box>
  );
}
