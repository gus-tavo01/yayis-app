import React, { useMemo } from "react";

import { Box, Typography, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CheckIcon from "@mui/icons-material/Check";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.text,
  },
  name: {
    color: theme.palette.secondary.main,
  },
  nameChecked: {
    textDecoration: "line-through",
    color: theme.palette.secondary.text,
    display: "flex",
  },
}));

const ExportableList = React.forwardRef(({ list, removeFinished }, ref) => {
  const classes = useStyles();

  const items = useMemo(() => {
    if (removeFinished) {
      return list.todos.filter((to) => to.isDone !== true);
    }
    return list.todos;
  }, [list.todos, removeFinished]);

  return (
    <div ref={ref}>
      <Paper className={classes.root} id="exportable-img">
        <Box className={classes.header}>
          <Typography variant="h6" color="inherit">
            {list.name?.toUpperCase()}
          </Typography>
        </Box>
        <ol>
          {items.map((t, i) => (
            <li key={i}>
              <Typography
                className={!!t.isDone ? classes.nameChecked : classes.name}
              >
                {t.name} {!!t.isDone && <CheckIcon color="success" />}
              </Typography>
            </li>
          ))}
        </ol>
      </Paper>
    </div>
  );
});

export default ExportableList;
