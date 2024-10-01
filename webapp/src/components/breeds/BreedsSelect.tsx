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
      <InputLabel id="demo-simple-select-label">Filter cats by breed</InputLabel>
      <Select
        sx={{ backgroundColor: "white" }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.selectedBreed}
        label="Filter cats by breed"
        onChange={({ target }) => props.setSelectedBreed?.(target.value)}
      >
        {props.breeds?.map((breed) => (
          <MenuItem value={breed.id}>{breed.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
