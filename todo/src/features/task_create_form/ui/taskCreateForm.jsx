import { MyTextInput, MyDateInput, MyTextArea, MyAddBtn } from "../../../components"
import cl from './taskCreateForm.module.scss';

const TaskCreateForm =({data, handlers, errors})=> {

  return (
    <form>
      <div className={cl.rowWrap}>
        <div className={cl.titleWrap}>
          <MyTextInput
            label="Заголовок:"
            placeholder="Купить корм для рыб"
            id="titleInput"
            value={data.title}
            onChange={handlers.title}
            style={errors.title ? {borderColor: 'orange'} : {}}/>
        </div>
        <div className={cl.dateWrap}>
          <MyDateInput
            label="Выполнить до:"
            id="timePicker"
            value={data.completionDate}
            onChange={handlers.date}
            style={errors.date ? {borderColor: 'orange'} : {}}/>
        </div>
      </div>
      <div className={cl.columnWrap}>
        <MyTextArea
          label="Описание:"
          placeholder="У Васи закончился корм - нужно купить."
          id="descriptionArea"
          value={data.description}
          onChange={handlers.description}/>
      </div>
      <div className={cl.btnBlock}>
        <div className={cl.btnWrap}>
          <MyAddBtn onClick={handlers.submit}/>
        </div>
      </div>
    </form>
  )
};

export default TaskCreateForm;