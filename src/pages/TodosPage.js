import React from "react";
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router";

const TodosPage = () => {
  const params = useParams();

  console.log("@@ Todos page render");

  return (
    <Grid>
      <Typography variant="h4" component="h2">
        Todos from list {params.listId}
      </Typography>
    </Grid>
  );
};

export default TodosPage;
