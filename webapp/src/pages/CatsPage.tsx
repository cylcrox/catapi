import { Box } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { listBreeds } from "../api/breeds";
import { addFavorite, listCats, removeFavorite } from "../api/cats";
import { Cat } from "../api/types";
import { CatCard } from "../components/cats/CatCard";
import { errorMessage, successMessage } from "../components/generic/constants";
import { useSnackbar } from "../components/generic/hooks/useSnackbar";

export function CatsPage() {
  const [breeds, setBreeds] = useState<Map<string, string> | undefined>();
  const [catsData, setCatsData] = useState<Array<Cat>>();
  const { setSnack } = useSnackbar();

  async function fetchCatsData() {
    try {
      const { data } = await listCats();
      setCatsData(data);
    } catch (error) {
      setSnack(errorMessage("Couldn't fetch cats data."));
    }
  }

  async function fetchBreedsData() {
    try {
      const { data } = await listBreeds();
      const map: Map<string, string> = new Map();
      data.forEach(({ id, name }) => {
        map.set(id, name);
      });
      setBreeds(map);
    } catch (error) {
      setSnack(errorMessage("Couldn't fetch breeds data."));
    }
  }

  useEffect(() => {
    !catsData && fetchCatsData();
    !breeds && fetchBreedsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catsData, breeds]);

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
            await addFavorite(id);
            setFavorite(id, true);
            setSnack(successMessage("Added to favorites!"));
          } catch {
            setSnack(errorMessage("An error ocurred adding to favorites."));
          }
        } else {
          try {
            await removeFavorite(id);
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
            breed={breeds?.get(cat.breed_id) ?? cat.breed_id}
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
