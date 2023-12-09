import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { UIButton } from 'components';
// import axios from 'axios';
// import { setPfpRoute } from 'utlis/ApiRoutes';
import { useNavigate } from 'react-router-dom';
import { axios } from 'services/http.service';
import { useDispatch } from 'react-redux';
import { verifyToken } from 'redux/slices/auth/controller';

const SetAvatar = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [selectedPfp, setSelectedPfp] = useState(undefined);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getSelectedImage = async () => {
    const input = event.target;
    if (input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const showPfp = document.getElementById('selectedPfp');
        showPfp.src = e.target.result;
        setSelectedPfp(e.target.result);
        showPfp.style.display = 'block';
        // console.log(e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  useEffect(() => {
    // console.log(selectedPfp);
  }, [getSelectedImage]);

  const setProfilePicture = async () => {
    if (selectedPfp === undefined) {
      alert('Please select Image first');
    } else {
      const res = await dispatch(verifyToken());
      // console.log(res.payload.user._id);
      const { data } = await axios.post(
        `auth/setProfilePicture/${res.payload.user._id}`,
        {
          image: selectedPfp,
        }
      );
      console.log(data);
      console.log(data.isSet);
      if (data.isSet) {
        res.payload.user.isAvatarImageSet = true;
        res.payload.user.avatarImage = data.image;
        navigate('/');
      } else {
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
