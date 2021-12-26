import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SignInElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">WebFarda</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>به حساب خود وارد شوید</FormH1>
                            <FormLabel htmlFor="for">ایمیل</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor="for">رمز ورود</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">ورود</FormButton>
                            <Text>فراموشی رمز ورود</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
