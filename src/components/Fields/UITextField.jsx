import PropTypes from 'prop-types';
import { StyledTextField } from './ui';

const UITextField = ({ value, label, name, handleInputChange, type }) => {
  return (
    <StyledTextField
      label={label}
      fullWidth
      name={name}
      value={value}
      type={type ? 'password' : 'text'}
      onChange={handleInputChange}
      InputLabelProps={{
        style: { color: 'white' },
      }}
      inputProps={{
        style: { color: 'white' },
      }}
    />
  );
};

export default UITextField;
UITextField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  handleInputChange: PropTypes.func,
};
