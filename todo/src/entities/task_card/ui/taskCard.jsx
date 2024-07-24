import { MyOperateBtn, MyTaskDescription, MyTaskTitle } from '../../../components';
import EditForm from '../../edit_form/ui/editForm';
import cl from './taskCard.module.scss';

const TaskCard =({cardData, editForm, handlers})=> {
  const isComplete = cardData.isComplete;


  const getEditBtnHandler=(editMode, handlers) =>{
    return editMode
      ? handlers.save
      : handlers.edit;
  };

  const getEditBtnPurpose =(editMode)=> {
    return editMode? 'save' : 'edit';
  };

  const getStatusBtnPurpose = (isTaskComplete)=> {
    return isTaskComplete? 'complete' : 'incomplete';
  }

  return (
    <article className={cl.card}>
      <div className={cl.statusBar}>
        <div className={cl.info}>
          <div>
            <span className={`${cl.status} ${isComplete? cl.complete : cl.incomplete}`}>
            {cardData.isComplete? 'завершена ' : 'незавершена '}
            </span>
          </div>
          <div>
            {!editForm.editMode && (
              <span className={`${cl.deadline} ${isComplete ? cl.inactive : cl.active}`}>
                дедлайн: {cardData.completionDate}
              </span>
            )}
          </div>
        </div>
        <div className={cl.controlls}>
          <div className={cl.btnsWrap}>
            <MyOperateBtn
              purpose='remove'
              onClick={handlers.remove}
            />
            <MyOperateBtn
              purpose={getEditBtnPurpose(editForm.editMode)}
              onClick={getEditBtnHandler(editForm.editMode, handlers)}
            />
            <MyOperateBtn
              purpose={getStatusBtnPurpose(cardData.isComplete)}
              onClick={handlers.changeStatus}
            />
          </div>
        </div>
      </div>
      <div className={cl.taskDescription}>
        {editForm.editMode
          ? <EditForm data={cardData} editForm={editForm}/>
          : <>
              <MyTaskTitle
                title={cardData.title}/>
              <MyTaskDescription
                desc={cardData.description}/>
          </>}
      </div>
    </article>
  )
};

export default TaskCard;