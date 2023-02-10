import { Stack, Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ThemeProvider } from "@mui/material/styles";

import { useWindowSize } from "hooks";

import * as s from "./MoviePaginationTheme";

const MoviePagination = () => {
  const { width } = useWindowSize();

  return (
    <Stack spacing={1} sx={{ mt: width >= 768 ? "50px" : "40px" }}>
      <ThemeProvider theme={s.theme}>
        <Pagination
          sx={{ justifyContent: "center" }}
          count={width >= 768 ? 10 : 5}
          shape="rounded"
          siblingCount={width >= 768 ? 2 : 1}
          size={width >= 768 ? "large" : "medium"}
          color="primary"
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </ThemeProvider>
    </Stack>
  );
};

export default MoviePagination;
