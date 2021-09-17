import { useState, useCallback } from 'react'
import styled from "styled-components"
import { BaseWrapper } from 'components/Harbor/Shared/BaseStyled'
import ClassNameProp from 'models/ClassNameProp'
import { mobile } from 'components/Media'

export interface JoinEmailProp extends ClassNameProp {
    onSubmit(email: string): void
}

export default function JoinEmail({ className, onSubmit }: JoinEmailProp) {
    const [email, setEmail] = useState('')

    const onSubmitInternal = useCallback(e => {
        e.preventDefault()
        onSubmit(email)
    }, [email, onSubmit])

    return (
        <BaseWrapper className={className} as='form' onSubmit={onSubmitInternal}>
            <InputWrapper>
                <Input inputMode='email'
                    type='text'
                    value={email}
                    placeholder='Email address'
                    onChange={(e) => setEmail(e.target.value)} />
                <Submit type="submit" value='SIGN UP &gt;' />
            </InputWrapper>
            <Description>Our commitment to protecting your <a href="#">Data privacy</a>.</Description>
        </BaseWrapper>
    )
}

const InputWrapper = styled(BaseWrapper)`
    font-family: "Roboto";
    flex-direction: row;
`

const Input = styled.input`
    width: 276px;
    height: 60px;
    padding: 0.8rem 1rem 0.8rem 2rem;
    background: #ffffff;
    box-shadow: 0px 4px 0px rgba(207, 199, 199, 0.16);
    border-radius: 40px 0px 0px 40px;
    transition: box-shadow 0.2s ease;

    ::placeholder {
        color:${props => props.theme.mainColor};
        opacity:0.5;
    }

    :focus {
        outline: none;
        box-shadow: 0px 4px 20px 10px rgba(207, 199, 199, 0.16);
    }

    @media only screen and (max-width: ${mobile}px) {
        width: 245px;
    }
`

const Submit = styled.input`
    width: 117px;
    height: 60px;
    box-shadow: 0px 4px 0px rgba(167, 167, 167, 0.16);
    border-radius: 0px 40px 40px 0px;
    color: #ffffff;
    background-color: ${props => props.theme.mainColor};
    transition: background-color .2s ease;

    :hover {
        background-color: ${props => props.theme.altColor};
    }

    @media only screen and (max-width: ${mobile}px) {
        width: 100px;
        font-size: 14px;
    }
`

const Description = styled.span`
    color: ${props => props.theme.altColor};
    font-family: "Roboto";
    font-size: 14px;
    line-height: 20px;
    margin-top: 0.7rem;

    a:hover {
        text-decoration: underline;
    }
`
