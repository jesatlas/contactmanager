import React from 'react';
import classnames from 'classnames';

const TextInputGroup = ({
	label,
	name,
	value,
	placeholder,
	type,
	changer,
	error
}) => {
	return (
		<div>
			<div className="form-group">
				<label htmlFor={name}>{label}</label>
				<input
					type={type}
					name={name}
					className={classnames("form-control form-control-lg mb-2", { 'is-invalid': error })}
					placeholder={placeholder}
					value={value}
					onChange={changer}
				/>
				{error && <div className="invalid-feedback">{error}</div>}
			</div>
		</div>
	)
}

export default TextInputGroup