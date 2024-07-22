import { useForm } from "../../../utils/hooks/useForm";
import { useDispatch} from 'react-redux';
import { useEffect} from 'react';
import { addTask } from '../../../store/taskSlice';
import TaskForm from "../ui/taskForm";

const TaskFormModel =()=> {
  const dispatch = useDispatch();
  const {title, date, description, error,...formFn} = useForm();
  const formData = {title: title, completionDate: date, description: description};
  const changeHandlers = {title: formFn.handleTitleChange, date: formFn.handleDateChange, description: formFn.handleDescriptionChange};

  const submitHandler =(e)=> {
    e.preventDefault();
    formFn.validateForm() && handleValidatedFormSubmition();
  };

  const handleValidatedFormSubmition =()=> {
    const newTask = {
      id: Date.now(),
     ...formData,
    };
    dispatch(addTask(newTask));
    formFn.resetValues();
  };

  return (
    <>
      <TaskForm
        data={formData}
        handlers={{...changeHandlers, submit: submitHandler}}
        errors={error}
      />
    </>
  )
};

export default TaskFormModel;