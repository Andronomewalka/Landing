import { useCallback } from 'react'
import StoreButton, { StoreButtonType } from 'components/Harbor/Shared/StoreButton'
import { PlayStoreLogo, AppStoreLogo } from 'components/Harbor/Shared/Svg'
import { mobile } from 'components/Media'
import styled from "styled-components"


export default function Join() {
    const onStoreButtonClick = useCallback((type: StoreButtonType) => {
        window?.open(type === 'apple' ? "https://www.apple.com/app-store/" : "https://play.google.com/", "_blank")
    }, [])

    return (
        <TopStoreWrapper>
            <TopStoreTitle>Stay one step ahead with harbor</TopStoreTitle>
            <TopStoreButtons>
                <StoreButton
                    type='apple'
                    title='App Store'
                    logo={<AppStoreLogo />}
                    isAvailable={true}
                    onClick={onStoreButtonClick} />
                <StoreButton
                    type='google'
                    title='Play Store'
                    logo={<PlayStoreLogo />}
                    isAvailable={false}
                    onClick={onStoreButtonClick} />
            </TopStoreButtons>
            <TopStoreImageContainer><TopStoreImage /></TopStoreImageContainer>
        </TopStoreWrapper>
    )
}

const TopStoreWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(auto, 235px));
    grid-template-rows: repeat(3, minmax(auto, 116px));
    grid-auto-rows: 0;
    align-items:center;
    height: 348px;
    background: #F8E6BE;

    @media only screen and (max-width: ${mobile}px) {
        height: 300px;
    }
`

const TopStoreTitle = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;

    max-width: 350px;
    font-size: 40px;
    line-height: 47px;
    color: #333333;
    text-align: left;
    margin: 0 auto;
    padding: 0 0.5rem 1rem;

    @media only screen and (max-width: ${mobile}px) {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 1;
        grid-row-end: 3;

        font-size: 24px;
        line-height: 35px;
        max-width: none;
    }
`

const TopStoreButtons = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 5;
    align-self: center;
    
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 29px;

    @media only screen and (max-width: ${mobile}px) {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 3;
        grid-row-end: 5;
        gap: 10px;
    }
`

const TopStoreImageContainer = styled.div`
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 5;
    align-items: flex-end;
    height: 348px;

    @media only screen and (max-width: ${mobile}px) {
        display:none;
    }
`

const TopStoreImage = styled.div`
    height: 100%;
    background: url(harbor/join-img.png) 100% 100% no-repeat;
    background-size: contain;
`