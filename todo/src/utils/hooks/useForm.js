import { useState, useEffect } from "react";

export const useForm = (initialState, isEdit = false) => {
  const [title, setTitle] = useState(initialState?.title || "");
  const [date, setDate] = useState(initialState?.completionDate || "");
  const [description, setDescription] = useState(
    initialState?.description || "",
  );
  const [error, setError] = useState({ title: "", date: "" });

  useEffect(() => {
    if (isEdit) resetValues();
  }, [isEdit]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const resetValues = () => {
    setError({ title: "", date: "" });
    if (initialState) {
      setTitle(initialState?.title);
      setDate(initialState?.completionDate);
      setDescription(initialState?.description);
    } else {
      setTitle("");
      setDate("");
      setDescription("");
    }
  };
  const validateForm = () => {
    const error = { title: "", date: "" };
    if (!title.trim()) {
      error.title = "Поле обязательно для заполнения";
    }
    if (!date) {
      error.date = "Поле обязательно для заполнения";
    }
    setError(error);

    //return true if no error occurs during validation, and false otherwise
    return Object.values(error).every((error) => error === "");
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
};
