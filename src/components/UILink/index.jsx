import PropTypes from 'prop-types';

import { StyledLink } from './ui';

const UILink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

export default UILink;

UILink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.any,
};
