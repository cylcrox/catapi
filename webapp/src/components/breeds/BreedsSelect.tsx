import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { SetStateAction } from "react";
import { Breed } from "../../api/types";

export interface BreedsSelectProps {
  breeds?: Array<Breed>;
  selectedBreed?: string;
  setSelectedBreed?: React.Dispatch<SetStateAction<string | undefined>>;
}

export function BreedsSelect(props: BreedsSelectProps) {
  return (
    <FormControl fullWidth>
      <InputLabel id="breeds-select-label">Filter cats by breed</InputLabel>
      <Select
        id="breeds-select"
        sx={{ backgroundColor: "white" }}
        labelId="breeds-select-label"
        value={props.selectedBreed}
        label="Filter cats by breed"
        onChange={({ target }) => props.setSelectedBreed?.(target.value)}
      >
        {props.breeds?.map((breed) => (
          <MenuItem key={breed.id} id={`breeds-select-item-${breed.id}`} value={breed.id}>
            {breed.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
