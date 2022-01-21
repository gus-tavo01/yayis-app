import React, { useEffect } from "react";

import { Box, LinearProgress } from "@mui/material";

import RegisterForm from "../components/RegisterForm";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useToast from "../hooks/useToast";

import { register, setError } from "../redux/slices/auth";

import validator from "validator";

import { pwdMinLength } from "../constants/defaults";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const auth = useSelector((store) => store.auth);

  useEffect(() => {
    if (auth.error) {
      toast.error(auth.error);
      return dispatch(setError(null));
    }
  }, [auth.error, dispatch, toast]);

  const validateEmail = (email) => {
    if (!validator.isEmail(email)) {
      return "Ingrese un correo valido";
    }
    return null;
  };

  const validatePassword = (pass) => {
    if (!validator.isLength(pass, { min: pwdMinLength })) {
      return `Ingrese una contraseña valida. Minimo ${pwdMinLength} caracteres.`;
    }
    return null;
  };

  const handleOnSubmit = async (form) => {
    const registerRes = await dispatch(register(form));

    if (registerRes.payload) {
      navigate("/login", {
        state: { pageName: "Inicia sesion con tu nueva cuenta" },
      });
      toast.success("Registro exitoso!");
    }
  };

  return (
    <>
      {auth.loading && <LinearProgress color="secondary" />}
      <Box p={1} display="flex" justifyContent="center">
        <RegisterForm
          onSubmit={handleOnSubmit}
          submitDisabled={auth.loading}
          emailValidator={validateEmail}
          passwordValidator={validatePassword}
        />
      </Box>
    </>
  );
};

export default RegisterPage;
