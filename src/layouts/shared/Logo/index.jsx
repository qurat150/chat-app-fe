import { Images } from 'assets';
import { UIImageContainer } from 'components';
import React from 'react';

const UILogo = () => {
  return (
    <UIImageContainer
      objectFit="contain"
      width="15.625rem"
      imageSrc={Images.logo}
    />
  );
};

export default UILogo;
