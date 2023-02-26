import React from "react";
import { Stack, Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ThemeProvider } from "@mui/material/styles";

import { useWindowSize } from "hooks";

import * as s from "./MoviePaginationTheme";

interface IProps {
  page: number;
  count: number;
  setPage: (page: number) => number;
}

const MoviePagination: React.FC<IProps> = (props) => {
  const { page, count, setPage } = props;

  const onChangeHandler = async (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setPage(page);
  };

  const { width } = useWindowSize();

  return (
    <Stack spacing={1} sx={{ mt: width >= 768 ? "50px" : "40px" }}>
      <ThemeProvider theme={s.theme}>
        <Pagination
          onChange={onChangeHandler}
          page={page}
          sx={{ justifyContent: "center" }}
          count={count}
          shape="rounded"
          siblingCount={width >= 768 ? 2 : 1}
          size={width >= 768 ? "large" : "small"}
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
