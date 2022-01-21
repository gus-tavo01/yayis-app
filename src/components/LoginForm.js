import React, { useState, useMemo } from "react";

import {
  Paper,
  TextField,
  Button,
  InputLabel,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    maxWidth: 500,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.secondary.main,
  },
}));

const initialValue = { value: "", error: false, helperText: null };

const LoginForm = ({ submitDisabled, onSubmit, onEmailBlur, onPwdBlur }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState(initialValue);
  const [pwd, setPwd] = useState(initialValue);

  const submitIsDisabled = useMemo(() => {
    if (email.error || pwd.error || submitDisabled) return true;

    return false;
  }, [email, pwd, submitDisabled]);

  const handleOnEmailChange = ({ target }) => {
    setEmail({ ...email, value: target.value });
  };

  const handleOnEmailBlur = () => {
    const error = onEmailBlur(email.value);

    if (error) {
      setEmail({
        ...email,
        error: true,
        helperText: error,
      });
    } else {
      setEmail({ ...initialValue, value: email.value });
    }
  };

  const handleOnPwdChange = ({ target }) => {
    setPwd({ ...pwd, value: target.value });
  };

  const handleOnPwdBlur = () => {
    const error = onPwdBlur(pwd.value);

    if (error) {
      setPwd({
        ...pwd,
        error: true,
        helperText: error,
      });
    } else {
      setPwd({ ...initialValue, value: pwd.value });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (email.error || pwd.error) return;

    onSubmit({ email: email.value, password: pwd.value });
  };

  const handleOnForgotPwdClick = () => {
    navigate("/forgot-pwd", { state: { pageName: "Recuperar contraseña" } });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Paper className={classes.formContainer}>
        <InputLabel required>Correo</InputLabel>
        <TextField
          onChange={handleOnEmailChange}
          onBlur={handleOnEmailBlur}
          name="email"
          placeholder="email"
          value={email.value}
          error={email.error}
          helperText={email.helperText}
          sx={{ marginBottom: 2 }}
          autofocus
        />
        <InputLabel required>Contraseña</InputLabel>
        <TextField
          onChange={handleOnPwdChange}
          onBlur={handleOnPwdBlur}
          name="pwd"
          placeholder="password"
          type="password"
          value={pwd.value}
          error={pwd.error}
          helperText={pwd.helperText}
        />

        <Button
          color="primary"
          type="submit"
          variant="contained"
          sx={{ marginY: 2 }}
          disabled={submitIsDisabled}
        >
          Login
        </Button>

        <Button
          onClick={handleOnForgotPwdClick}
          color="secondary"
          sx={{ marginBottom: 3 }}
        >
          Olvide mi contraseña
        </Button>
        <Typography>
          Aun no tienes una cuenta? crea una{" "}
          <Link
            to="/register"
            className={classes.link}
            state={{ pageName: "Crea tu cuenta" }}
          >
            aqui
          </Link>
        </Typography>
      </Paper>
    </form>
  );
};

export default LoginForm;
