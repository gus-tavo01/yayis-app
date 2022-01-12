import React, { useEffect, useState } from "react";

import { Grid, Fab, Box, LinearProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";

import { useSelector, useDispatch } from "react-redux";
import { createList, fetchUserLists } from "../redux/slices/lists";

import ListItem from "../components/ListItem";
import AddListModal from "../components/modals/AddListModal";

import useAuth from "../hooks/useAuth";
import useToast from "../hooks/useToast";

const useStyles = makeStyles((theme) => ({
  fab: {
    right: theme.spacing(2),
    bottom: theme.spacing(2),
  },
}));

const ListsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lists = useSelector((store) => store.lists);
  const auth = useAuth();

  const [modalOpen, setModalOpen] = useState(false);

  const toast = useToast();

  useEffect(() => {
    if (auth.user) {
      dispatch(fetchUserLists());
    }
  }, [auth.user, dispatch]);

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
        <ListItem name={l.name} id={l.id} todos={l.todos || []} />
      </Grid>
    ));

    // TODO: handle when fetch is done and there are no lists

    return listItems;
  };

  const handleOnAddClick = () => {
    setModalOpen(true);
  };

  const handleOnSubmit = (list) => {
    if (!list.name || !list.name.length) return;
    setModalOpen(false);
    dispatch(createList(list));
    toast.success("Se ha creado la lista con exito!");
  };

  console.log("@@ Lists page render");

  return (
    <Box>
      {lists.loading && <LinearProgress color="secondary" />}
      <Grid container spacing={1} padding={1}>
        {renderLists()}
      </Grid>

      <AddListModal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onSubmit={handleOnSubmit}
      />

      <Fab
        sx={{ position: "fixed" }}
        onClick={handleOnAddClick}
        color="primary"
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default ListsPage;
