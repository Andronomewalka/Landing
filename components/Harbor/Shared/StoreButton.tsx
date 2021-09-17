import { ReactNode } from 'react'
import styled from 'styled-components'

export type StoreButtonType = 'apple' | 'google'

export interface StoreButtonProp {
    type: StoreButtonType,
    title: string,
    logo: ReactNode,
    isAvailable: boolean,
    onClick(type: StoreButtonType): void
}

const StoreButton = ({ type, title, logo, isAvailable, onClick }: StoreButtonProp) =>
    <div>
        <Button isAvailable={isAvailable} onClick={() => onClick(type)}>
            <IconWrapper>{logo}</IconWrapper>
            {title}
        </Button>
        {!isAvailable && <NotAvailibleDescription>Join the Waitlist</NotAvailibleDescription>}
    </div>

export default StoreButton

interface StoreButtonStyledProp {
    isAvailable: boolean
}

const Button = styled.button<StoreButtonStyledProp>`
    width: 156px;
    height: 56px;
    background: ${props => props.isAvailable ? props.theme.mainColor : "#aeb4b6"};
    border-radius: 50px;
    font-size: 16px;
    color: #ffffff;
`

const IconWrapper = styled.div`
    display:inline-block;
    margin-right: 0.75rem

`

const NotAvailibleDescription = styled.div`
    text-align: center;
    color: ${props => props.theme.altColor};
    font-size: 14px;
`