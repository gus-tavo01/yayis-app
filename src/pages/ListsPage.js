import React, { useEffect } from "react";

import { Grid, Fab, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";

import { useSelector, useDispatch } from "react-redux";
import { getLists } from "../redux/slices/lists";

import ListItem from "../components/ListItem";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    top: theme.spacing(6),
    right: theme.spacing(1),
  },
}));

const ListsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lists = useSelector((store) => store.lists);

  useEffect(() => {
    dispatch(getLists({ page: 1, pageSize: 20 }));
  }, [dispatch]);

  const renderLists = () => {
    const listItems = lists.items?.map((l) => (
      <Grid
        container
        item
        xs={6}
        sm={4}
        md={3}
        lg={2}
        justifyContent="center"
        key={l.id}
      >
        <ListItem name={l.name} id={l.id} todos={l.todos} />
      </Grid>
    ));

    // TODO: handle when fetch is done and there are no lists

    return listItems;
  };

  const handleOnAdd = () => {
    console.log("Handle modal open");
  };

  console.log("@@ Lists page render");

  return (
    <Box>
      {/* TODO: add loading component */}
      {lists.loading && "LOADING..."}
      <Grid container spacing={1} padding={1}>
        {renderLists()}
      </Grid>
      <Box display="flex" justifyContent="flex-end">
        <Fab onClick={handleOnAdd} color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
};

export default ListsPage;
