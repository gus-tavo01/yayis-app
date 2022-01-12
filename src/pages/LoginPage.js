import React, { useState, useMemo, useEffect } from "react";

import {
  Box,
  TextField,
  Button,
  InputLabel,
  Paper,
  Typography,
  LinearProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import { login, setError } from "../redux/slices/auth";

import { useDispatch, useSelector } from "react-redux";
import useToast from "../hooks/useToast";
import { useNavigate, Link } from "react-router-dom";

import validator from "validator";

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

const minPwd = 5;
const initialValue = { value: "", error: false, helperText: null };

const LoginPage = () => {
  const [email, setEmail] = useState(initialValue);
  const [pwd, setPwd] = useState(initialValue);

  const classes = useStyles();
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const toast = useToast();

  const submitIsDisabled = useMemo(() => {
    if (!validator.isEmail(email.value)) return true;
    if (email.error) return true;

    if (!validator.isLength(pwd.value, { min: minPwd })) return true;
    if (pwd.error) return true;

    return false;
  }, [email, pwd]);

  useEffect(() => {
    if (auth.error) {
      toast.error(auth.error);
      return dispatch(setError(null));
    }
  }, [auth.error, toast, dispatch]);

  const handleOnEmailBlur = () => {
    if (!validator.isEmail(email.value)) {
      setEmail({
        ...email,
        error: true,
        helperText: "Ingrese un correo valido",
      });
    } else {
      setEmail({ ...initialValue, value: email.value });
    }
  };

  const handleOnPwdBlur = () => {
    if (!validator.isLength(pwd.value, { min: minPwd })) {
      setPwd({
        ...pwd,
        error: true,
        helperText: "Ingrese una contraseña valida",
      });
    } else {
      setPwd({ ...initialValue, value: pwd.value });
    }
  };

  const handleOnEmailChange = ({ target }) => {
    setEmail({ ...email, value: target.value });
  };

  const handleOnPwdChange = ({ target }) => {
    setPwd({ ...pwd, value: target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (email.error || pwd.error) return;

    const credentials = { email: email.value, password: pwd.value };
    const loginRes = await dispatch(login(credentials));

    if (loginRes.payload) {
      navigate("/", { state: { pageName: "Mis listas" } });
      toast.info("Session iniciada con exito");
    }
  };

  const handleOnForgotPwdClick = () => {
    // TODO
    navigate("/forgot-pwd", { state: { pageName: "Recuperar contraseña" } });
  };

  console.log("@@ Login page render");

  return (
    <>
      {auth.loading && <LinearProgress color="secondary" />}
      <Box display="flex" justifyContent="center" alignItems="center">
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
                state={{ pageName: "Crear una cuenta" }}
              >
                aqui
              </Link>
            </Typography>
          </Paper>
        </form>
      </Box>
    </>
  );
};

export default LoginPage;
