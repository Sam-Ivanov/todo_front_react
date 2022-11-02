import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

import styles from "./Login.module.css";
import { fetchUserData } from "../../redux/slices/authSlice";

const Login = () => {
  const isAuth = useSelector(state => state.auth.data)
  const dispatch = useDispatch();


  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'all'
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchUserData(values))
    if (!data.payload) {
      alert('Не удалось авторизоваться.')
    } else if (data.payload.token) {
      window.localStorage.setItem('token', data.payload.token)
    } 
  }
  // console.log(errors, isValid);
  // if (isAuth) {
  //   return <Navigate to='/' />
  // }
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="E-Mail"
          type='email'
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', { required: 'Укажите почту' })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Пароль"
          type='password'
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          fullWidth
          {...register('password', { required: 'Укажите пароль' })}
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Войти
        </Button>
      </form>
    </Paper>
  );
};

export default Login;