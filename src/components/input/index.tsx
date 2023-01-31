import DateInput from './date';
import EmailInput from './Email';
import FormField from './FormField';
import PasswordInput from './Password';
import TextInput from './Text';
import TextAreaInput from './TextArea';
import SelectInput from './Select';
import FileInput from './File';
import CheckboxInput from './checkbox';

const Input = {
  Date: DateInput,
  Email: EmailInput,
  Password: PasswordInput,
  Text: TextInput,
  FormField: FormField,
  TextArea: TextAreaInput,
  Select: SelectInput,
  File: FileInput,
  Checkbox: CheckboxInput,
};

export default Input;
