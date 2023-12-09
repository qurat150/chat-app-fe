import { useState } from 'react';

export const useFormData = (formInitialState) => {
  const [formData, setFormData] = useState(formInitialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return { formData, handleInputChange };
};
