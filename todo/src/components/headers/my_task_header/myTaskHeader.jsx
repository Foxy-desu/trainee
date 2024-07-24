import cl from "./myTaskHeader.module.scss";

const MyTaskHeader = ({ title = "" }) => {
  return <h2 className={cl.title}>{title}</h2>;
};

export default MyTaskHeader;
