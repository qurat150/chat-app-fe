import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  register,
  setUserProfilePicture,
  verifyToken,
} from './controller';
import { getLocalAccessToken, setLocalAccessToken } from 'utlis';

const initialState = {
  isLoading: false,
  isLoggedIn: getLocalAccessToken() !== null,
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth-slice',
  initialState,
  reducers: {
    userlogout: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = initialState.user;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, authenticationActionHelper)
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, authenticationActionHelper)
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(verifyToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        if (state) {
          state.currentUser = action.payload;
        }
      })
      .addCase(verifyToken.rejected, (state) => {
        state.isLoading = false;
      })

      .addCase(setUserProfilePicture.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setUserProfilePicture.fulfilled, (state, action) => {
        if (state) {
          const { data, cb } = action.payload;
          state.currentUser.avatarImage = data.image;
          state.currentUser.isAvatarImageSet = true;
          cb();
        }
      })
      .addCase(setUserProfilePicture.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

const authenticationActionHelper = (state, action) => {
  const { token, status } = action.payload;
  // console.log(action);
  if (status) {
    state.isLoading = false;
    state.isLoggedIn = true;
    setLocalAccessToken(token);
  }
};

export default authSlice.reducer;
export const { userlogout } = authSlice.actions;

// export const logout = (state) => {
//   localStorage.clear();
//   state.isLoggedIn = false;
// };
