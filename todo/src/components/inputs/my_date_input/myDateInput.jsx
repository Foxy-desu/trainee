import cl from "./myDateInput.module.scss";

const MyDateInput = ({ label = "", ...rest }) => {
  function getMinDate() {
    const now = new Date(Date.now());
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
  }

  return (
    <>
      <label className={cl.label} htmlFor={rest.id}>
        {label}
      </label>
      <input className={cl.input} type="date" min={getMinDate()} {...rest} />
    </>
  );
};

export default MyDateInput;
