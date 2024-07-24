import cl from "./myTaskDesc.module.scss";

const MyTaskDesc = ({ desc = "" }) => {
  return (
    <p className={cl.desc} tabIndex={0}>
      {desc}
    </p>
  );
};

export default MyTaskDesc;
