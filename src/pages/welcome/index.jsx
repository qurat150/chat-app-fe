import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { UIButton } from 'components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setUserProfilePicture } from 'redux/slices/auth/controller';

const SetAvatar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedPfp, setSelectedPfp] = useState(undefined);

  const getSelectedImage = async () => {
    const input = event.target;
    if (input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const showPfp = document.getElementById('selectedPfp');
        showPfp.src = e.target.result;
        setSelectedPfp(e.target.result);
        showPfp.style.display = 'block';
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  const setProfilePicture = async () => {
    if (selectedPfp === undefined) {
      alert('Please select Image first');
    } else {
      try {
        const payload = {
          image: selectedPfp,
        };
        const cb = () => navigate('/');

        await dispatch(setUserProfilePicture({ data: payload, cb }));
      } catch (error) {
        console.log(error);
        alert('Error setting profile picture, please try again');
      }
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
      }}
    >
      <Typography variant="h4">Pick your Profile Picture</Typography>
      <img id="selectedPfp" style={{ display: 'none' }} src="" alt="pfp" />
      <input type="file" onChange={() => getSelectedImage(event)} />

      <UIButton onClick={setProfilePicture}>Set Profile Picture</UIButton>
    </Box>
  );
};

export default SetAvatar;
