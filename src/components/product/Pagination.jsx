import { Pagination, Stack, Typography } from "@mui/material";
import React from "react";

export default function PaginationControlled(props) {
  const { page, count, handleChange } = props;
  return (
    <Stack
      spacing={2}
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "10%",
        alignItems: "baseline",
      }}
    >
      <Typography>Page: {page}</Typography>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
      ></Pagination>
    </Stack>
  );
}
