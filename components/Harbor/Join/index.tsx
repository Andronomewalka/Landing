import { useCallback } from 'react'
import { BaseWrapper } from "../Shared/BaseStyled"
import { mobile } from 'components/Media'
import { STitle } from 'components/Harbor/Shared/Title'
import { SDescription } from 'components/Harbor/Shared/Description'
import ClassNameProp from 'models/ClassNameProp'
import JoinStore from './JoinStore'
import JoinEmail from './JoinEmail'
import styled from "styled-components"

const title = "Join harbor high fives"
const description = "Up high. Down low. Tips on how to find your way through any disaster in the best way possible: together. And be the first in line for Android."



export default function Join({ className }: ClassNameProp) {

    const onEmailSubmit = useCallback(email => {
        console.log('submited', email)
    }, [])

    return (
        <BaseWrapper className={className}>
            <JoinStore />
            <Title>{title}</Title>
            <Description withTopMargin={true}>{description}</Description>
            <SJoinEmail onSubmit={onEmailSubmit}/>
        </BaseWrapper>
    )
}

const Title = styled(STitle)`
    margin-top: 12rem;
`

const Description = styled(SDescription)`
    max-width: 620px;

    @media only screen and (max-width: ${mobile}px) {
        max-width: none;
    }
`

const SJoinEmail = styled(JoinEmail)`
    margin-top: 2rem;
`