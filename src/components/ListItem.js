import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { Box, Typography, LinearProgress } from "@mui/material";

import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CircleIcon from "@mui/icons-material/Circle";

const ListItem = ({ id, name, todos }) => {
  const navigate = useNavigate();

  const finishedTodos = useMemo(() => {
    const length = todos.filter((t) => t.isDone).length;
    const percentage = (length * 100) / todos.length;

    return { length, percentage };
  }, [todos]);

  const handleOnClick = () => {
    navigate(`/list/${id}`, { state: { id, name, todos } });
  };

  const renderCheckIcon = () => {
    if (finishedTodos.length === todos.length && todos.length > 0)
      return <CheckOutlinedIcon color="success" />;

    return <CircleIcon color="disabled" />;
  };

  return (
    <Box
      onClick={handleOnClick}
      bgcolor="lightskyblue"
      minWidth={110}
      minHeight={140}
      maxWidth={180}
      maxHeight={220}
      borderRadius={3}
      padding={1}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box alignSelf="flex-end">{renderCheckIcon()}</Box>
      <Typography fontSize={12}>{name?.toUpperCase()}</Typography>
      <Box>
        <Typography fontSize={12} marginBottom={1}>
          Terminados {finishedTodos.length} de {todos.length}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={finishedTodos.percentage || 0}
        />
      </Box>
    </Box>
  );
};

export default ListItem;
