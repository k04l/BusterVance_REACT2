import { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button
} from 'reactstrap';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import {validateSubscribeForm} from '../../utils/validateSubscribeForm';

const SubscribeForm = () => {
    const [subscribeModalOpen, setSubscribeModalOpen] = useState(false)

    const handleSubscribe = () => {
        // const subscriber = {
        //     id: Date.now(),
        //     email: values.username,
        // }
        setSubscribeModalOpen(false);
    }

    return (
        <>
            <span className='navbar-text ml-auto'>
                <Button
                    outline
                    onClick={() => setSubscribeModalOpen(true)}
                    style={{ color: 'white', border: '1px solid white' }}
                >
                    <i className='fa fa-bell fa-lg' /> Subscribe
                </Button>
            </span>
            <Modal isOpen={subscribeModalOpen}>
                <ModalHeader toggle={()=>setSubscribeModalOpen(false)}>
                    Subscribe
                </ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            email: ''
                        }}
                        onSubmit={handleSubscribe}
                        validate={validateSubscribeForm}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='email'>
                                    email:
                                </Label>
                                <Field 
                                    id='eamil'
                                    name='email'
                                    placeholder='email'
                                    className='form-control'
                                />
                                <ErrorMessage name='email'>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Subscribe
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
}

export default SubscribeForm

