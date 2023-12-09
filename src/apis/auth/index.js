import { axios } from 'services/http.service';

export const loginUser = async (data) => {
  const res = await axios.post('/auth/login', data);
  return res;
};

export const registerUser = async (data) => {
  const res = await axios.post('/auth/register', data);
  return res;
};

export const getUserDetail = async () => {
  const res = await axios.get('/auth/me');
  return res;
};

export const getAllUsers = async (id) => {
  const res = await axios.get(`/auth/allUsers/${id}`);
  return res;
};

// '/api/auth/setProfilePicture'
