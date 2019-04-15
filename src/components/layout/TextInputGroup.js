import React from 'react'

const TextInputGroup = ({
	label,
	name,
	value,
	placeholder,
	type,
	changer
}) => {
	return (
		<div>
			<div className="form-group">
				<label htmlFor={name}>{label}</label>
				<input
					type={type}
					name={name}
					className="form-control form-control-lg mb-2"
					placeholder={placeholder}
					value={value}
					onChange={changer}
				/>
			</div>
		</div>
	)
}

export default TextInputGroup