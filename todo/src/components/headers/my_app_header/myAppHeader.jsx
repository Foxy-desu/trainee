import cl from './myAppHeader.module.scss';

const MyAppHeader =({title})=> {
  return (
    <h1 className={cl.title}>{title}</h1>
  )
};

export default MyAppHeader;