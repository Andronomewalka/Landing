import Image from 'next/image'
import { GreenAppStoreLogo } from 'components/Harbor/Shared/Svg'
import { BaseWrapper } from 'components/Harbor/Shared/BaseStyled'
import styled from 'styled-components'

export interface ReadyReviewProp {
    id: number,
    text: string,
    user: string,
    appVersion: string
}

export default function ReadyReview({ text, user, appVersion }: ReadyReviewProp) {
    return (
        <Wrapper as="li">
            <Text>{text}</Text>
            <Stars><Image src='/harbor/stars.png' alt='' width={131} height={23} /></Stars>
            <Reviewer>
                <SGreenAppStoreLogo />
                <User>{user}</User>
                <AppVersion>{appVersion}</AppVersion>
            </Reviewer>
        </Wrapper>
    )
}

const Wrapper = styled(BaseWrapper)`
    align-items: flex-start;
    padding: 2rem;
    text-align: left;
    background: #ffffff;
    width: 294px;
    height: 230px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 20px;
`

const Text = styled.div`
    flex-grow: 1;
    font-size: 13px;
    line-height: 20px;
    color: ${props => props.theme.datkColor};
`

const Stars = styled.div`
    padding-top: 1rem
`

const Reviewer = styled.div`
    display: grid;
    column-gap: 0.5rem;
    padding-top: 1.5rem;
    grid-template-columns: 40px 1fr;
    grid-template-rows: repeat(2, 1fr);
`

const SGreenAppStoreLogo = styled(GreenAppStoreLogo)`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 3;
`

const User = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;

    font-size: 16px;
    line-height: 19px;
    color: ${props => props.theme.datkColor};
`

const AppVersion = styled.div`
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;

    font-size: 16px;
    line-height: 19px;
    color: ${props => props.theme.datkColor};
`