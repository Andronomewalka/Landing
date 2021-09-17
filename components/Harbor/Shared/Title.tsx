import styled from 'styled-components'
import { mobile } from 'components/Media'


const Title = ({ text }: { text: string }) =>
    <STitle>{text}</STitle>

export default Title;

export const STitle = styled.div`
    display: inline-block;
    color: ${props => props.theme.mainColor};
    max-width: 600px;
    font-size: 48px;
    line-height: 56px;

    @media only screen and (max-width: ${mobile}px) {
        font-size: 32px;
        line-height: 35px;
    }
`