import DateInput from './date';
import EmailInput from './email';
import FormField from './form-field';
import PasswordInput from './password';
import TextInput from './text';
import TextAreaInput from './text-area';
import SelectInput from './select';
import FileInput from './file';

const Input = {
  Date: DateInput,
  Email: EmailInput,
  Password: PasswordInput,
  Text: TextInput,
  FormField: FormField,
  TextArea: TextAreaInput,
  Select: SelectInput,
  FileInput,
};

export default Input;
