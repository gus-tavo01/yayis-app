import React, { useEffect } from "react";

import { Box, LinearProgress } from "@mui/material";

import LoginForm from "../components/LoginForm";

import { login, setError } from "../redux/slices/auth";

import { useDispatch, useSelector } from "react-redux";
import useToast from "../hooks/useToast";
import { useNavigate } from "react-router-dom";

import validator from "validator";

import { pwdMinLength } from "../constants/defaults";

const LoginPage = () => {
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    if (auth.error) {
      toast.error(auth.error);
      return dispatch(setError(null));
    }
  }, [auth.error, toast, dispatch]);

  const handleOnEmailBlur = (email) => {
    if (!validator.isEmail(email)) {
      return "Ingrese un correo valido";
    }
    return null;
  };

  const handleOnPwdBlur = (pwd) => {
    if (!validator.isLength(pwd, { min: pwdMinLength })) {
      return "Ingrese una contraseña valida.";
    }
    return null;
  };

  const handleOnSubmit = async (formValues) => {
    const loginRes = await dispatch(login(formValues));

    if (loginRes.payload) {
      navigate("/", { state: { pageName: "Mis listas" } });
      toast.info("Session iniciada con exito");
    }
  };

  console.log("@@ Login page render");

  return (
    <>
      {auth.loading && <LinearProgress color="secondary" />}
      <Box display="flex" justifyContent="center" alignItems="center">
        <LoginForm
          submitDisabled={auth.loading}
          onSubmit={handleOnSubmit}
          onEmailBlur={handleOnEmailBlur}
          onPwdBlur={handleOnPwdBlur}
        />
      </Box>
    </>
  );
};

export default LoginPage;
