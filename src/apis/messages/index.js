import { axios } from 'services/http.service';

export const sendMessage = async (data) => {
  const res = await axios.post('/messages/addMessage', data);
  return res;
};

export const getMessages = async (data) => {
  const res = await axios.post('/messages/getMessage', data);
  return res;
};
