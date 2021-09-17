import Image from 'next/image'
import { BaseWrapper } from "./Shared/BaseStyled";
import { STitle } from "./Shared/Title";
import { SDescription } from "./Shared/Description";
import { mobile } from 'components/Media'
import ClassNameProp from 'models/ClassNameProp'
import styled from "styled-components";

const title = "Our mission is to encourage readiness for all"
const description = "It's our dream that one day, everyday readiness will be quite ordinary \n- like brushing your teeth."
const subDescription = "A little bit of effort with a big payoff."

export default function Mission({ className }: ClassNameProp) {
    return (
        <Wrapper className={className}>
            <ThumbUp><Image src='/harbor/thumb-up.png' alt='' width={173} height={196} /></ThumbUp>
            <Title>{title}</Title>
            <Description withTopMargin={true}>{description}</Description>
            <Description withTopMargin={false}>{subDescription}</Description>
            <Button>Learn more about us</Button>
            <BackgroundImage />
        </Wrapper>
    )
}

const Wrapper = styled(BaseWrapper)`
    width: 100%;
    background: ${props => props.theme.mainColor};
    padding: 0;
`

const Title = styled(STitle)`
    max-width: 610px;
    margin-top: 9rem;
    color: #ffffff;
    padding: 0 1rem;
    
    @media only screen and (max-width: ${mobile}px) {
        margin-top: 4rem;
    }
`

const Description = styled(SDescription)`
    max-width: 615px;
    color: #ffffff;
    padding: 0 1rem;
    white-space: pre-line;
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 204px;
    height: 55px;
    border-radius: 50px;
    color: ${props => props.theme.mainColor};
    background: #ffffff;
    margin-top: 4rem;
    transition: all 0.3s ease-out;

    :hover {
        background: #AEB4B6;
    }
`

const BackgroundImage = styled.div`
    width:100%;
    height: 270px;
    background-image: url(harbor/mission-background.png);
    margin-top: 3rem;
`

const ThumbUp = styled.div`
    position: relative;
    top: -98px;
`