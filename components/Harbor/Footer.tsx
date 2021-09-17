import Image from 'next/image'
import styled from 'styled-components'
import { BaseWrapper } from 'components/Harbor/Shared/BaseStyled'
import ClassNameProp from 'models/ClassNameProp'
import { tablet } from 'components/Media'

export default function Footer({ className }: ClassNameProp) {
    return (
        <Wrapper className={className}>
            <div>
                <Image src='/harbor/logo.png' width={153} height={35} alt='harbor logo' />
                <TrademarkDescription>© 2020 harbor. All rights reserved</TrademarkDescription>
                <TermsLinks>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">FAQ</a>
                    <a href="#">Journal</a>
                    <a href="#">Contact</a>
                    <a href="#">Shop</a>
                </TermsLinks>
            </div>
            <MiddleWrapper>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Risks</a>
            </MiddleWrapper>
            <RightWrapper>
                <a href="#"><Image src='/harbor/twitter-logo.png' width={20} height={21} layout='fixed' alt='twitter logo' /></a>
                <a href="#"><Image src='/harbor/instagram-logo.png' width={20} height={21} layout='fixed' alt='twitter logo' /></a>
                <a href="#"><Image src='/harbor/facebook-logo.png' width={20} height={21} layout='fixed' alt='twitter logo' /></a>
            </RightWrapper >
        </Wrapper >
    )
}

const Wrapper = styled.div`
    display:flex;
    flex-wrap: wrap;
    color: ${props => props.theme.altColor};
    font-family: "Roboto";
    max-width: 940px;
    width: 100%;
    height: 240px;
    text-align:left;
    justify-content:space-between;
    align-items:center;

    @media only screen and (max-width: ${tablet}px) {
        height: auto;
        justify-content: center;
        gap: 50px;
        padding: 3rem 6rem;
    }
`

const TrademarkDescription = styled.div`
    font-size: 13px;
    line-height: 20px;
`

const TermsLinks = styled.div`
    width: 286px;
    height: auto;
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    font-size: 13px;
    line-height: 20px;
    color: ${props => props.theme.mainColor};
    column-gap: 81px;
    margin-top: 0.5rem;
    text-decoration: underline;
`

const MiddleWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 40px;
    font-size: 19px;
    line-height: 20px;
    color: ${props => props.theme.altColor};
`

const RightWrapper = styled(MiddleWrapper)`
    @media only screen and (max-width: ${tablet}px) {
        justify-content: center!important;
        width:100%!important;
    }
`