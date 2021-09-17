import Image from 'next/image'
import ImageProp from 'models/ImageProp'
import styled from 'styled-components'
import { mobile } from 'components/Media'

export interface AboutCardProp {
    id: number,
    title: string,
    description: string,
    isTitleFirst: boolean
    iconProp: ImageProp,
    imageProp: ImageProp,
    background: string,
}

export default function AboutCard({ title, description, isTitleFirst, iconProp, imageProp, background }: AboutCardProp) {
    return (
        <Wrapper background={background}>
            <SImage isTitleFirst={isTitleFirst}>
                <Image src={imageProp.src} alt={imageProp.alt} width={imageProp.width} height={imageProp.height} />
            </SImage>
            <Icon isTitleFirst={isTitleFirst}>
                <Image src={iconProp.src} alt={iconProp.alt} width={iconProp.width} height={iconProp.height} />
            </Icon>
            <Title isTitleFirst={isTitleFirst}>{title}</Title>
            <Description isTitleFirst={isTitleFirst}>{description}</Description>
        </Wrapper>
    )
}

interface WrapperProp {
    background: string
}

const Wrapper = styled.div<WrapperProp>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 60px 50px 55px;
    border-radius: 20px;
    color: ${props => props.theme.datkColor};
    font-family: 'Roboto', sans-serif;
    background: ${props => props.background};
    transition: all 0.3s ease;

    @media only screen and (max-width: ${mobile}px) {
        padding: 40px 20px 45px;
    }

    @media only screen and (max-width: 460px) {
        border-radius: 0px;
    }
`

interface CardItemProp {
    isTitleFirst: boolean
}

const SImage = styled.div<CardItemProp>`
    margin-top: ${props => props.isTitleFirst ? "2.25rem" : "0"};
    order: ${props => props.isTitleFirst ? 4 : 1};
    align-self: center;
`

const Icon = styled.div<CardItemProp>`
    margin-top: ${props => props.isTitleFirst ? "0" : "2.5rem"};
    order: ${props => props.isTitleFirst ? 1 : 2};
`

const Title = styled.div<CardItemProp>`
    margin-top: 1rem;
    order: ${props => props.isTitleFirst ? 2 : 3};
    min-height:130px;
    font-size: 40px;
    font-weight: 700;
    line-height: 47px;

    @media only screen and (max-width: ${mobile}px) {
        min-height:100px;
        font-size: 30px;
        line-height: 32px;
    }
`

const Description = styled.div<CardItemProp>`
    margin-top: 0.75rem;
    order: ${props => props.isTitleFirst ? 3 : 4};
    font-size: 17px;
    line-height: 24px;

    @media only screen and (max-width: ${mobile}px) {
        font-size: 14px;
        line-height: 18px;
    }
`