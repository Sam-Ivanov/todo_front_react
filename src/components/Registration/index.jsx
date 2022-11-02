import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import styles from './Registration.module.css';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchRegistration } from '../../redux/slices/authSlice';

const Registration = () => {
  // const isAuth = useSelector(state => state.auth.data)
  const dispatch = useDispatch();


  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: ''
    },
    mode: 'all'
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegistration(values))
    if (!data.payload) {
      alert('Не удалось зарегестрироваться.')
    } else if (data.payload.token) {
      window.localStorage.setItem('token', data.payload.token)
    }
  }


  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Создание аккаунта
      </Typography>
      {/* <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          error={Boolean(errors.fullName?.message)}
          helperText={errors.fullName?.message}
          {...register('fullName', { required: 'Укажите полное имя' })}
          label="Полное имя"
          fullWidth />
        <TextField
          className={styles.field}
          type='email'
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          {...register('email', { required: 'Укажите почту' })}
          label="E-Mail"
          fullWidth />
        <TextField
          className={styles.field}
          type='password'
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', { required: 'Укажите пароль' })}
          label="Пароль"
          fullWidth />
        <Button
          type='submit'
          size="large"
          variant="contained"
          fullWidth>
          Зарегистрироваться
        </Button>
      </form>
    </Paper>
  );
};

export default Registration;