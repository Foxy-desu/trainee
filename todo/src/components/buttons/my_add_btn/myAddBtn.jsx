import cl from "./myAddBtn.module.scss";

const MyAddBtn = ({ ...rest }) => {
  return (
    <button className={cl.btn} {...rest}>
      <span className={cl.line} />
      <span className={cl.line} />
    </button>
  );
};

export default MyAddBtn;
