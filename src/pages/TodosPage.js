import React, { useState } from "react";

import { useLocation } from "react-router";
import { useSelector } from "react-redux";

import { Box, Fab, LinearProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";

import TodoItem from "../components/TodoItem";
import AddTodoModal from "../components/modals/AddTodoModal";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    // top: theme.spacing(6),
    // right: theme.spacing(1),
  },
}));

const TodosPage = () => {
  const classes = useStyles();
  const { state: currentList } = useLocation();

  const [addTodoOpen, setAddTodoOpen] = useState(false);

  // TODO:
  // const todos = useSelector((store) => store.todos);
  const todos = { loading: false };

  const renderTodos = () => {
    return [{ id: "asdad", name: "test", isDone: true }].map((t) => (
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
    // TODO
    // dispatch(createTodo(newTodo));
    console.log("## on TODO submit", newTodo);
  };

  const handleOnUpdate = (todoId, update) => {
    // TODO
    // dispatch(updateTodo(listId, todoId, update));
    console.log("# will update ", todoId, update);
  };

  const handleOnDelete = (todoId) => {
    // TODO
    // dispatch(removeTodo(listId, todoId));
    console.log("# will remove ", todoId);
    console.log("from ", currentList.id);
  };

  console.log("@@ Todos page render");

  return (
    <Box>
      {todos.loading && <LinearProgress />}
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
