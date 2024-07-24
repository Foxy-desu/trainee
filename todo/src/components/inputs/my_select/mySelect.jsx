import React from "react";
const MySelect =({label="", options, currentOption, ...rest})=> {
  
  const renderOptions =(options)=> {
    return options.map(option=> {
      if(option.value === '') {
        return (
          <option key={option.value} value={option.value} disabled={true}>
            {option.label}
          </option>
        )
      }
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      )
    })
  }

  return (  
    <>
      <label className='visuallyHidden' htmlFor={rest.id}>
        {label}
      </label>
      <select value={currentOption} {...rest}>
        {renderOptions(options)}
      </select>
    </>
  )
};

export default MySelect;