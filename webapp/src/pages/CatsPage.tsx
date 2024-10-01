import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import { listBreeds } from "../api/breeds";
import { addFavorite, listCats, removeFavorite } from "../api/cats";
import { Breed, Cat } from "../api/types";
import { BreedsSelect } from "../components/breeds/BreedsSelect";
import { CatCard } from "../components/cats/CatCard";
import { errorMessage, successMessage } from "../components/generic/constants";
import { useSnackbar } from "../components/generic/hooks/useSnackbar";

export function CatsPage() {
  const [selectedBreed, setSelectedBreed] = useState<string | undefined>("");
  const [breeds, setBreeds] = useState<Array<Breed>>();
  const [cats, setCats] = useState<Array<Cat>>();
  const { setSnack } = useSnackbar();

  async function fetchCatsData(breed_id: string | undefined = undefined) {
    try {
      const { data } = await listCats(breed_id);
      setCats(data);
    } catch (error) {
      setSnack(errorMessage("Couldn't fetch cats data."));
    }
  }

  async function fetchBreedsData() {
    try {
      const { data } = await listBreeds();
      setBreeds([{ id: "", name: "NONE" }, ...data]);
    } catch (error) {
      setSnack(errorMessage("Couldn't fetch breeds data."));
    }
  }

  const breedsMap = useMemo(() => {
    const map: Map<string, string> = new Map();
    breeds?.forEach(({ id, name }) => {
      map.set(id, name);
    });
    return map;
  }, [breeds]);

  useEffect(() => {
    !cats && fetchCatsData();
    !breeds && fetchBreedsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cats, breeds]);

  useEffect(() => {
    fetchCatsData(selectedBreed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBreed]);

  function setFavorite(id: string, favorite: boolean) {
    setCats((catsData) =>
      catsData?.map((cat: Cat) => (cat.id === id ? { ...cat, favorite: favorite } : cat))
    );
  }

  const toggleFavoriteRequest = useCallback(
    async (id: string) => {
      const cat = cats?.filter((cat) => cat.id === id)[0];
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
    [cats, setSnack]
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#8a8463" }}>
        <Toolbar sx={{ p: 1 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cats API
          </Typography>
          <Box sx={{ width: "200px" }}>
            <BreedsSelect
              breeds={breeds}
              selectedBreed={selectedBreed}
              setSelectedBreed={setSelectedBreed}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: "100%", height: "100vh", backgroundColor: "#e9e5cd" }}>
        <Box id="cats-container" sx={{ display: "ruby" }}>
          {cats?.map((cat) => (
            <CatCard
              id={cat.id}
              breed={breedsMap?.get(cat.breed_id) ?? cat.breed_id}
              altText={cat.id}
              favorite={cat.favorite}
              imageUrl={cat.url}
              toggleFavorite={toggleFavoriteRequest}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
