import React, {useState} from 'react';

// components
import FormFieldInput from './FormFieldInput';

const Form = ({
  handleFormSubmit,
  formFields,
}) => {
  const [formValues, setFormValues] = useState({});

  const handleFormValuesChange = (name, value) => {
    // unpack current and then add to state use name as key
    setFormValues({
      ...formValues,
      [name]: value
    });
    console.log(formValues);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    if(handleFormSubmit) {
      handleFormSubmit(formValues);
    }
  }

  return (
    <form onSubmit={onFormSubmit}>
      {
        formFields.map(fieldDetails =>
            <FormFieldInput
              key={fieldDetails.fieldName}
              handleFieldChange={handleFormValuesChange}
              {...fieldDetails}
            />
        )
      }
      <div className="control">
        <button className="button is-primary">Sign up</button>
      </div>
    </form>
  );
};

export default Form;