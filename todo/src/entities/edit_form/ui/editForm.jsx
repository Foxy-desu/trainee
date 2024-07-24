import { MyTextInput, MyDateInput, MyTextArea, MyAddBtn } from "../../../components"
import cl from './editForm.module.scss';

const EditForm =({editForm})=> {

  return (
    <form>
      <div className={cl.rowWrap}>
        <div className={cl.titleWrap}>
          <MyTextInput
            label="Заголовок:"
            placeholder="Для сохранения изменений не оставляйте поле пустым"
            id="titleEditInput"
            value={editForm.title}
            onChange={editForm.handleTitleChange}
            style={editForm.error.title ? {borderColor: 'orange'} : {}}/>
        </div>
        <div className={cl.dateWrap}>
          <MyDateInput
            label="Выполнить до:"
            id="timeEditPicker"
            value={editForm.date}
            onChange={editForm.handleDateChange}
            style={editForm.error.date ? {borderColor: 'orange'} : {}}/>
        </div>
      </div>
      <div className={cl.columnWrap}>
        <MyTextArea
          label="Описание:"
          placeholder="Новое Описание"
          id="descriptionEditArea"
          value={editForm.description}
          onChange={editForm.handleDescriptionChange}/>
      </div>
    </form>
  )
};

export default EditForm;