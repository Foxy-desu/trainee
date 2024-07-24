import { useForm } from "../../../utils/hooks/useForm";
import { useDispatch } from "react-redux";
import { addTask } from "../../../store/taskSlice";
import TaskCreateForm from "../ui/taskCreateForm";

const TaskCreateFormModel = () => {
  const dispatch = useDispatch();
  const { title, date, description, error, ...formFn } = useForm();
  const formData = {
    title: title,
    completionDate: date,
    description: description,
  };
  const changeHandlers = {
    title: formFn.handleTitleChange,
    date: formFn.handleDateChange,
    description: formFn.handleDescriptionChange,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    formFn.validateForm() && handleValidatedFormSubmition();
  };
  const handleValidatedFormSubmition = () => {
    const newTask = {
      ...formData,
      id: Date.now(),
      isComplete: false,
    };
    dispatch(addTask(newTask));
    formFn.resetValues();
  };

  return (
    <>
      <TaskCreateForm
        data={formData}
        handlers={{ ...changeHandlers, submit: submitHandler }}
        errors={error}
      />
    </>
  );
};

export default TaskCreateFormModel;
