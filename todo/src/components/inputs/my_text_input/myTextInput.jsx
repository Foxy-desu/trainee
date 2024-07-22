import cl from './myTextInput.module.scss';

const MyTextInput = (
	{
		label='',
		placeholder='',
		...rest
	}
) => {
	return (
		<>
			<label className={cl.label} htmlFor={rest.id}>
				{label}
			</label>
			<input
				className={cl.input}
				type="text"
				placeholder={placeholder}
				{...rest}/>
		</>
	)
};

export default MyTextInput;