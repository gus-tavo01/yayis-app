import React, { useMemo, useState } from "react";

import { Paper, InputLabel, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    maxWidth: 500,
    minWidth: 330,
  },
}));

const RegisterForm = ({
  onSubmit,
  emailValidator,
  passwordValidator,
  submitDisabled,
}) => {
  const [email, setEmail] = useState({ value: "" });
  const [password, setPassword] = useState({ value: "" });

  const classes = useStyles();
  const submitIsDisabled = useMemo(() => {
    if (email.error || password.error || submitDisabled) return true;
    return false;
  }, [email, password, submitDisabled]);

  const handleOnEmailBlur = () => {
    const error = emailValidator(email.value);

    if (error) {
      setEmail({ ...email, error });
    } else {
      setEmail({ ...email, error: null });
    }
  };

  const handleOnPwdBlur = () => {
    const error = passwordValidator(password.value);

    if (error) {
      setPassword({ ...password, error });
    } else {
      setPassword({ ...password, error: null });
    }
  };

  const handleOnEmailChange = ({ target }) => {
    setEmail({ ...email, value: target.value });
  };

  const handleOnPwdChange = ({ target }) => {
    setPassword({ ...password, value: target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (email.error || password.error) return;

    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Paper className={classes.root}>
        <InputLabel required>Correo</InputLabel>
        <TextField
          onChange={handleOnEmailChange}
          onBlur={handleOnEmailBlur}
          name="email"
          placeholder="email"
          value={email.value}
          error={!!email.error}
          helperText={email.error}
          sx={{ marginBottom: 2 }}
          autoFocus
        />
        <InputLabel required>Contraseña</InputLabel>
        <TextField
          onChange={handleOnPwdChange}
          onBlur={handleOnPwdBlur}
          name="pwd"
          placeholder="password"
          type="password"
          value={password.value}
          error={!!password.error}
          helperText={password.error}
        />

        <Button
          color="primary"
          type="submit"
          variant="contained"
          sx={{ marginY: 2 }}
          disabled={submitIsDisabled}
        >
          Registrarme
        </Button>
      </Paper>
    </form>
  );
};

export default RegisterForm;
