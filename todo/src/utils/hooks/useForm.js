import {useState} from 'react';

export const useForm =()=> {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState({title: '', date: ''});
  
  const handleTitleChange = (e)=> {
    setTitle(e.target.value);
  };
  const handleDateChange = (e)=> {
    setDate(e.target.value);
  };
  const handleDescriptionChange = (e)=> {
    setDescription(e.target.value);
  };

  const resetValues = ()=> {
    setTitle('');
    setDate('');
    setDescription('');
    setError({title: '', date: ''});
  };

  const validateForm = ()=> {
    const error = {title: '', date: ''};
    if(!title.trim()) {
      error.title = 'Поле обязательно для заполнения';
    };
    if(!date) {
      error.date = 'Поле обязательно для заполнения';
    }
    setError(error);

    //return true if no error occurs during validation, and false otherwise
    return Object.values(error).every(error => error === '');
  };

  return {
    title,
    date,
    description,
    error,
    handleTitleChange,
    handleDateChange,
    handleDescriptionChange,
    resetValues,
    validateForm,
  };
}