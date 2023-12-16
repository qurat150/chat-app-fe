import { useDispatch } from 'react-redux';
import { Grid, Typography } from '@mui/material';

import { useFormData } from 'hooks/useFormData';
import { register } from 'redux/slices/auth/controller';
import { UIButton, UILink, UITextField } from 'components';
import { FormCotainer, StyledGrid } from '../ui';

const Signup = () => {
  const dispatch = useDispatch();

  const { formData, handleInputChange } = useFormData({
    userName: '',
    email: '',
    password: '',
  });
  const { userName, email, password } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        userName,
        email,
        password,
      };
      const res = await dispatch(register(payload));
      // console.log('signup res', res.payload.status);
      if (!res.payload.status) alert(res.payload.msg);
      // or agr payload success hai tw navigate humny mainlayout se krwa dia
    } catch (error) {
      alert('error during signup', error);
    }
  };

  return (
    <StyledGrid container="true">
      <Grid item xs={12} md={6}>
        <FormCotainer>
          <Typography variant="h5" align="center" gutterBottom>
            Signup
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
                  label="Email address"
                  name="email"
                  value={email}
                  handleInputChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <UITextField
                  label="Password"
                  name="password"
                  type="password"
                  value={password}
                  handleInputChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography textAlign="center">
                  Already have an account? <UILink to="/login">login</UILink>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <UIButton fullWidth type="submit">
                  Signup
                </UIButton>
              </Grid>
            </Grid>
          </form>
        </FormCotainer>
      </Grid>
    </StyledGrid>
  );
};

export default Signup;
