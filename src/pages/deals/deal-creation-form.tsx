import Button from '@/components/Button';
import Input from '@/components/input';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import states from '@/frontend/utility/nigerian-states';
import Progress from '@/components/progress';

const getDealForm = () => {
  return {
    companyName: '',
    transactionType: '',
    dealSize: '',
    allocation: '',
    spvTerms: '',
    goalClosingDate: '',
  };
};

const getDealFormValidation = () => {
  return Yup.object().shape({
    companyName: Yup.string().required('Company name is required'),
    transactionType: Yup.string().required('Please select transaction type'),
    dealSize: Yup.string().required('Deal size is required'),
    allocation: Yup.string().required('Syndicate head is required'),
    spvTerms: Yup.string().required('Required'),
    goalClosingDate: Yup.date().required('Please add a goal closing date'),
  });
};

const DealForm = () => {
  const onSubmit = (values: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };

  return (
    <div className="max-h-screen overflow-y-hidden">
      <Progress value={50} />
      <Formik initialValues={getDealForm()} validationSchema={getDealFormValidation()} onSubmit={onSubmit}>
        {({ errors, values, setFieldValue, setFieldTouched }) => (
          <Form>
            <Input.FormField label="Company Name">
              <Input.Text placeholder="Name of Company" name="companyName" />
            </Input.FormField>
            <Input.FormField label="Transaction Type">
              <Input.Select name="transactionType" placeholder="select">
                {states.length &&
                  states.map(state => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
              </Input.Select>
            </Input.FormField>
            <Input.FormField description="The total amount the company wants to raise this round" label="Deal Size">
              <Input.Text placeholder="Enter Goal Amount" name="dealSize" />
            </Input.FormField>
            <Input.FormField
              description="To wire this amount to the company, your total raise must cover any fees"
              label="Your Allocation"
            >
              <Input.Text placeholder="Enter Goal Amount" name="allocation" />
            </Input.FormField>
            <Input.FormField
              description="Not shown to LPs. Non standard liquidation preferences, interest rates, redemtion rights, etc."
              label="SPV Terms"
            >
              <Input.TextArea placeholder="Write or paste terms here" name="spvTerms" />
            </Input.FormField>

            <Input.FormField label="Goal Closing Date">
              <input
                type="date"
                className="w-full px-5 py-2 my-3 border-2 rounded-lg focus:outline-none focus:border-dark-300 focus:ring-1 focus:ring-dark-300"
                onBlur={() => setFieldTouched('goalClosingDate')}
                onChange={event => {
                  setFieldValue('goalClosingDate', event.target.value);
                }}
              />
              {errors.goalClosingDate && <div className="text-red-500 text-xs">{errors.goalClosingDate}</div>}
            </Input.FormField>

            <Button type="submit" full>
              Save and Continue
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DealForm;
