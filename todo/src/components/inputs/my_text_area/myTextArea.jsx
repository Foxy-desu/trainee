import cl from './myTextArea.module.scss';

const MyTextsArea = (
  {
    label="",
    placeholder="",
    ...rest
  }
) => {
  return (
    <>
    <label className={cl.label} htmlFor={rest.id}>
      {label}
    </label>
    <textarea className={cl.textArea} placeholder={placeholder} {...rest}>
    </textarea>
    </>
  )
};

export default MyTextsArea;