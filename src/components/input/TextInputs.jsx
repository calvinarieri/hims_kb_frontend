import React from 'react'
import { Field } from 'formik'

export default function TextInputs({
    name,
    placeholder,
    label,
    options,
    type = 'text'
}) {
  return (
    <div className="form-group">
        {label && <label htmlFor={name}>{label}</label>}
        
        {options && options.length > 0 ? (
            <Field
                as="select"
                id={name}
                name={name}
                className="form-control"
            >
                {/* Optional: Placeholder option for the dropdown */}
                {placeholder && <option value="">{placeholder}</option>}
                
                {/* Map through the options array using key and value */}
                {options.map((option) => (
                    <option key={option.key} value={option.key}>
                        {option.value}
                    </option>
                ))}
            </Field>
        ) : (
            <Field
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                className="form-control"
            />
        )}
    </div>
  )
}