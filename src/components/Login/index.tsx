import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from 'react-hook-form';
import styles from "./Login.module.css";
import { fetchUserData } from "../../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { LoginType } from "../../api/api";
import Loader from "../common/Loader";

const Login: React.FC = () => {
   console.log('Login component render');

   // const authStatus = useAppSelector(state => state.auth.status);
   // console.log('authStatus - login: ', authStatus);

   const dispatch = useAppDispatch();

   const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: {
         email: '',
         password: ''
      },
      mode: 'all'
   });

   const onSubmit = async (values: LoginType) => {
      try {
         const data = await dispatch(fetchUserData(values));

         if (!data.payload) {
            alert('Не удалось авторизоваться.');
         }
      }
      catch (e) {
         console.warn(e);
      }
   };

   return (
      <>
         {/* {authStatus === 'loading' && <Loader />} */}
         <Paper classes={{ root: styles.root }} >
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
                  {...register('password', { required: 'Укажите пароль' })}
                  fullWidth
               />
               <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  fullWidth>
                  Войти
               </Button>
            </form>
         </Paper>
      </>
   );
};

export default React.memo(Login);