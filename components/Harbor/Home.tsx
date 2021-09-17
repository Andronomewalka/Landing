import React, { useCallback } from 'react'
import Image from 'next/image'
import harborHelloPic from 'public/harbor/hello-img.png'
import Title from './Shared/Title'
import Description from './Shared/Description'
import StoreButton, { StoreButtonType } from './Shared/StoreButton'
import { AppStoreLogo, PlayStoreLogo } from './Shared/Svg'
import ClassNameProp from 'models/ClassNameProp' 
import styled from 'styled-components'

const title = "Reimagining readiness for life's uncertain moments."
const description = "The app that makes disaster preparedness easy and accessible. Because sometimes tomorrow doesn't look like today."

export default function Home({className} : ClassNameProp) {
    const onStoreButtonClick = useCallback((type: StoreButtonType) => {
        window?.open(type === 'apple' ? "https://www.apple.com/app-store/" : "https://play.google.com/", "_blank")
    }, [])

    return (
        <Wrapper className={className}>
            <Title text={title} />
            <Description text={description} />
            <Buttons>
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
            </Buttons>
            <ImageWrapper>
                <Image src={harborHelloPic} alt="App example" width={721} quality={100}/>
            </ImageWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    text-align: center;
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    margin-top: 2.5rem;
`

const ImageWrapper = styled.div`
    margin-top: 7rem;
    transform: translateX(-6%);
`