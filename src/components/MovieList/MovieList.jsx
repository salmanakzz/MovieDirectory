import { Card, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { MovieContext } from "../../store/MovieContext";

export const MovieList = () => {
  const { movies, setMovies, searchItems } = useContext(MovieContext);

  useEffect(() => {
    if (movies) {
      const sortedObjects = [...movies].sort((a, b) => b?.name - a?.name);
      setMovies(sortedObjects);
    }
  }, [movies]);

  return (
    <Container>
      {movies && searchItems
        ? searchItems?.map((movie, idx) => (
            <Card
              key={idx}
              sx={{ minWidth: "auto", width: "42rem", mt: 5 }}
              className="flex justify-between p-2 items-center"
            >
              <Box>
                <Typography variant="h5" component="h6">
                  {movie.name}
                </Typography>
                <Typography variant="h7" component="h7">
                  Ratings:{movie.ratings}/100
                </Typography>
              </Box>
              <Box>
                <Typography variant="h7" component="h7">
                  {movie.duration}
                </Typography>
              </Box>
            </Card>
          )) 
        : movies?.map((movie, idx) => (
            <Card
              key={idx}
              sx={{ minWidth: "auto", width: "42rem", mt: 5 }}
              className="flex justify-between p-2 items-center"
            >
              <Box>
                <Typography variant="h5" component="h6">
                  {movie.name}
                </Typography>
                <Typography variant="h7" component="h7">
                  Ratings:{movie.ratings}/100
                </Typography>
              </Box>
              <Box>
                <Typography variant="h7" component="h7">
                  {movie.duration}
                </Typography>
              </Box>
            </Card>
          ))}
    </Container>
  );
};
