import { useState } from "react";
import Modal from "./modal";
import Image from "next/image";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormField from "./input/FormField";
import Input from "./input";
import Button from "./Button";

const InviteModal = () => {
    const [show, setShow] = useState(true);

return(
    <>
    <Modal show={show} setShow={setShow}>
            <div className="flex flex-col m-5">
            <div className="flex justify-between mb-7">
            <div className="text-base font-medium">Invite Members</div>
            <Image
            src='/close.svg'
            alt='Close Button'
            width={25}
            height={25}
            onClick={()=>setShow(false)}
            />
            
            </div>
            <Formik
                initialValues={{email: ""}}
                validationSchema={Yup.object().shape({email: Yup.string().email().required()})}
                onSubmit={(onSubmitValues) => console.log(onSubmitValues)}
            >
                <Form>
                    <FormField>
                    <Input.Text
                        placeholder="Enter member's email"
                        name="email"
                    />
                    </FormField>
                    <div className="font-medium m-auto text-center text-xs tracking-tighter">Hit Enter after each email to input more than one email</div>
                    <Button className="m-auto" type="submit" >
                    Submit
                    </Button>
                </Form>
            </Formik>
            </div>
            </Modal>
    </>
)
}

export default InviteModal;