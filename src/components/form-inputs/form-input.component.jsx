import {FormInputs, FormInputLabel, Group} from './form-input.style.jsx'

const FormInput = ( {label, ...otherprops}) => {
    return(
        <Group>
            <FormInputs {...otherprops}/>
            { label && (
            <FormInputLabel shrink={otherprops.value.length}> {label}</FormInputLabel>
            )}
        </Group>
    )
}

export default FormInput;