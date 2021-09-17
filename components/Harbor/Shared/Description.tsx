import styled from 'styled-components'
import { mobile } from 'components/Media'

const Description = ({ text, withTopMargin = true }: { text: string, withTopMargin?: boolean }) =>
    <SDescription withTopMargin={withTopMargin}>{text}</SDescription>

export default Description;

interface DescriptionStyledProp {
    withTopMargin: boolean
}

export const SDescription = styled.div<DescriptionStyledProp>`
    display: inline-block;
    color: ${props => props.theme.altColor};
    max-width: 550px;
    font-family: Source Sans Pro;
    font-size: 21px;
    line-height: 32px;
    margin-top: ${props => props.withTopMargin ? "2.25rem" : "0"};

    @media only screen and (max-width: ${mobile}px) {
        font-size: 18px;
        line-height: 25px;
        margin-top: ${props => props.withTopMargin ? "1.5rem" : "0"};
    }
`