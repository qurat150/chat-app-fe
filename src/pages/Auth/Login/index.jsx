import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Grid, Typography } from '@mui/material';

import { useFormData } from 'hooks/useFormData';
import { login } from 'redux/slices/auth/controller';
import { FormCotainer, StyledGrid } from '../ui';

import { UIButton, UILink, UITextField } from 'components';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { formData, handleInputChange } = useFormData({
    userName: '',
    password: '',
  });
  const { userName, password } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        userName,
        password,
      };
      const res = await dispatch(login(payload));
      if (!res.payload.status) alert(res.payload.msg);
      if (res.payload.status) {
        navigate('/');
      }
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <StyledGrid container="true">
      <Grid item xs={12} md={6}>
        <FormCotainer>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <UITextField
                  label="Username"
                  name="userName"
                  value={userName}
                  handleInputChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <UITextField
                  label="Password"
                  name="password"
                  value={password}
                  handleInputChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography textAlign="center">
                  Don&apos;t have an account?{' '}
                  <UILink to="/signup">Signup</UILink>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <UIButton fullWidth type="submit">
                  Login
                </UIButton>
              </Grid>
            </Grid>
          </form>
        </FormCotainer>
      </Grid>
    </StyledGrid>
  );
};
export default Login;

// const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
