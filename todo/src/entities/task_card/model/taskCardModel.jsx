import TaskCard from "../ui/taskCard";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useForm } from "../../../utils/hooks/useForm";
import {
  changeTaskStatus,
  editTask,
  removeTask,
} from "../../../store/taskSlice";

const TaskCardModel = ({ cardData }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const { title, date, description, error, ...formFn } = useForm(
    cardData,
    editMode,
  );

  const save = () => {
    const isValid = formFn.validateForm();
    if (isValid) {
      dispatch(
        editTask({ title, description, completionTime: date, id: cardData.id }),
      );
    }
    setEditMode(false);
  };

  const edit = () => {
    setEditMode(true);
  };

  const remove = () => {
    editMode && setEditMode(false);
    dispatch(removeTask(cardData.id));
  };

  const changeStatus = () => {
    dispatch(
      changeTaskStatus({ id: cardData.id, isComplete: !cardData.isComplete }),
    );
  };

  return (
    <>
      <TaskCard
        cardData={cardData}
        editForm={{ title, date, description, error, editMode, ...formFn }}
        handlers={{ save, edit, remove, changeStatus }}
      />
    </>
  );
};

export default TaskCardModel;
