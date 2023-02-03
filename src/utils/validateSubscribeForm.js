export const validateSubscribeForm = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (values.email === /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,6})+$/) {
        errors.email = 'Invalid email'
    }

    return errors;
};
