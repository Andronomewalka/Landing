import Title from 'components/Harbor/Shared/Title'
import Description from 'components/Harbor/Shared/Description'
import { BaseWrapper } from 'components/Harbor/Shared/BaseStyled'
import ReadyReview, { ReadyReviewProp } from './ReadyReview'
import ClassNameProp from 'models/ClassNameProp'
import styled from 'styled-components'

const title = "We're ready, are you?"
const description = "Here's what people are saying about harbor."

const reviews: ReadyReviewProp[] = [
    {
        id: 0,
        text: "It's beautiful, easy to use, and is genuinely growing my confidence for crisis preparation.",
        user: "Antonea",
        appVersion: "iOS Beta Tester"
    },
    {
        id: 1,
        text: "This app is something I’ve been hoping for for a while now. So I’m excited to be beta testing it.",
        user: "Kathryn",
        appVersion: "iOS Beta Tester"
    },
    {
        id: 2,
        text: "It’s a great app and I can’t wait to use it more and see what all content you add.",
        user: "Gabriel",
        appVersion: "iOS Beta Tester"
    }
]

export default function Ready({ className }: ClassNameProp) {
    return (
        <BaseWrapper className={className}>
            <Title text={title} />
            <Description text={description} />
            <Reviews>
                {reviews.map(review =>
                    <ReadyReview key={review.id} {...review} />
                )}
            </Reviews>
            <Pip />
        </BaseWrapper>
    )
}

const Reviews = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap:1.25rem;
    margin-top:6rem;
`

const Pip = styled.div`
    width: 25px;
    height: 14px;
    margin-top: 1.5rem;
    background: #008c6e;
    border: 2px solid #008c6e;
    border-radius: 30px;
`