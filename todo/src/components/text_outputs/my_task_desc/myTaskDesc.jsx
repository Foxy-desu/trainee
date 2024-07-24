import cl from './myTaskDesc.module.scss';

const MyTaskDesc = ({desc=""}) => {

  return (
    <p className={cl.desc}>
      {desc}
    </p>
  )
};

export default MyTaskDesc;