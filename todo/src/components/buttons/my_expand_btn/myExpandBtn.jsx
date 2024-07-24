import cl from "./myExpandBtn.module.scss";

const myExpandBtn = ({ state = "toBeOpen", ...rest }) => {
  function getCurrentClass(state) {
    switch (state) {
      case "toBeOpen": {
        return cl.collapsed;
      }
      case "toBeClosed": {
        return cl.expanded;
      }
      default: {
        return cl.collapsed;
      }
    }
  }
  return (
    <button className={`${cl.btn} ${getCurrentClass(state)}`} {...rest}>
      <span className={`${cl.line} ${getCurrentClass(state)}`} />
      <span className={`${cl.line} ${getCurrentClass(state)}`} />
    </button>
  );
};

export default myExpandBtn;
