import cl from './myOperateBtn.module.scss';
import editPng from '../../../assets/png/edit.png';
import editSvg from '../../../assets/svg/edit.svg';
import savePng from '../../../assets/png/check.png';
import saveSvg from '../../../assets/svg/check.svg';
import removePng from '../../../assets/png/bin.png';
import removeSvg from '../../../assets/svg/bin.svg';

const MyOperateBtn = ({purpose, ...rest}) => {
  function getBtnData(purpose) {
    switch(purpose) {
      case 'edit': return {
        text: 'Редактировать задачу',
        images: {
          svg: editSvg,
          png: editPng
        }
      };
      case 'save': return {
        text: 'Сохранить изменения',
        images: {
          svg: saveSvg,
          png: savePng
        }
      };
      case 'remove': return {
        text: 'Удалить задачу',
        images: {
          svg: removeSvg,
          png: removePng
        }
      };
      default: return {
        text: '',
        images: {
          svg: '',
          png: ''
        }
      };
    }
  };

  return (
    <button className={cl.btn} {...rest}>
    <span className='visuallyHidden'>
      {getBtnData(purpose).text}
    </span>
    <div className={cl.iconWrap}>
      <picture>
        <source srcSet={getBtnData(purpose).images.svg} type='image/svg'/>
        <img className={cl.icon} src={getBtnData(purpose).images.png} alt="" />
      </picture>
    </div>
  </button>
  )
};
export default MyOperateBtn;