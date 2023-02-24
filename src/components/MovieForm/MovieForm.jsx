import { Box, Button, Card, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import React, { useContext } from "react";
import { MovieContext } from "../../store/MovieContext";

export const MovieForm = () => {
  const { setMovies } = useContext(MovieContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>
    setMovies((val) => (val ? [...val, data] : [data]));

  return (
    <Card sx={{ minWidth: "auto", width: "42rem", mt: 5 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="p-5 !grid gap-3">
          <TextField
            className="w-[100%]"
            id="filled-textarea"
            label="Movie Name"
            placeholder="Enter movie name"
            multiline
            variant="filled"
            {...register("name", { required: true })}
          />

          <TextField
            className="w-[100%]"
            id="filled-textarea"
            label="Ratings"
            placeholder="Enter movie name"
            type="number"
            variant="filled"
            {...register("ratings", { required: true })}
          />

          <TextField
            className="w-[100%]"
            id="filled-textarea"
            label="Duration"
            placeholder="Enter movie name"
            multiline
            variant="filled"
            {...register("duration", {
              pattern: /^(\d+(?:\.\d+)?h)?(\d+?m)?$/,
              required: true,
            })}
          />
          {errors.duration && <p>Please specify time in hours or mintes</p>}
          <div className="flex justify-end">
            <Button
              type="submit"
              sx={{ textTransform: "none", background: "green" }}
              className="hover:!bg-[#128512]"
              variant="contained"
            >
              Add Movie
            </Button>
          </div>
        </Box>
      </form>
    </Card>
  );
};
