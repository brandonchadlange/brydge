import DateInput from "./date";
import EmailInput from "./email";
import FileInput from "./file";
import FormField from "./FormField";
import PasswordInput from "./password";
import SelectInput from "./select";
import TextInput from "./text";
import TextAreaInput from "./TextArea";
// import CheckboxInput from './checkbox';

const Input = {
  Date: DateInput,
  Email: EmailInput,
  Password: PasswordInput,
  Text: TextInput,
  FormField: FormField,
  TextArea: TextAreaInput,
  Select: SelectInput,
  File: FileInput,
  // Checkbox: CheckboxInput,
};

export default Input;
