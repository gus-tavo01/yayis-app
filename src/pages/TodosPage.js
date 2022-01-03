import React, { useState } from "react";

import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { Box, Fab, LinearProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";

import TodoItem from "../components/TodoItem";
import AddTodoModal from "../components/modals/AddTodoModal";

import { createTodo, updateTodo, removeTodo } from "../redux/slices/lists";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    // top: theme.spacing(6),
    // right: theme.spacing(1),
  },
}));

const TodosPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { listId } = useParams();

  const currentList = useSelector((store) =>
    store.lists.items.find((li) => li.id === listId)
  );
  const listsLoading = useSelector((store) => store.lists.loading);

  const [addTodoOpen, setAddTodoOpen] = useState(false);

  const renderTodos = () => {
    if (!currentList.todos) return [];

    return currentList.todos.map((t) => (
      <TodoItem
        key={t.id}
        id={t.id}
        name={t.name}
        isDone={t.isDone}
        description={t.description}
        onUpdate={handleOnUpdate}
        onDelete={handleOnDelete}
      />
    ));
  };

  const handleOnCreate = (newTodo) => {
    if (!newTodo.name) return;
    setAddTodoOpen(false);
    dispatch(createTodo({ ...newTodo, listId }));
    // display toast message
  };

  const handleOnUpdate = (todoId, update) => {
    if (!update.name) return;
    dispatch(updateTodo({ listId, todoId, ...update }));
    // TODO
    // display toast
  };

  const handleOnDelete = (todoId) => {
    dispatch(removeTodo({ listId, todoId }));
    // TODO
    // display toast
  };

  console.log("@@ Todos page render");

  return (
    <Box>
      {listsLoading && <LinearProgress />}
      {renderTodos()}

      <AddTodoModal
        open={addTodoOpen}
        onCancel={() => setAddTodoOpen(false)}
        onSubmit={handleOnCreate}
      />

      <Box display="flex" justifyContent="flex-end">
        <Fab
          onClick={() => setAddTodoOpen(true)}
          color="primary"
          className={classes.fab}
        >
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
};

export default TodosPage;
