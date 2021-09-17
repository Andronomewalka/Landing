import Title from 'components/Harbor/Shared/Title'
import Description from 'components/Harbor/Shared/Description'
import AboutCard, { AboutCardProp } from './AboutCard'
import ClassNameProp from 'models/ClassNameProp'
import { tablet } from 'components/Media'
import styled from 'styled-components'

const cards: AboutCardProp[] = [
    {
        id: 0,
        title: "Create your family's emergency plan",
        description: 'Our app is tailored to you, your family and your little dog, too. We tell you what you need to stay safe from hurricanes to wildfires and everything in between.',
        isTitleFirst: false,
        iconProp: {
            src: '/harbor/plan-icon.png',
            alt: 'about plan icon',
            width: 25,
            height: 25
        },
        imageProp: {
            src: '/harbor/plan-img.png',
            alt: 'about plan image',
            width: 360,
            height: 321
        },
        background: '#DAE1F4'
    },
    {
        id: 1,
        title: "Access and share important information, even offline",
        description: 'View critical information, family plans, and documents at the push of a button, both online and offline - no worries if cell towers go out.',
        isTitleFirst: true,
        iconProp: {
            src: '/harbor/offline-icon.png',
            alt: 'about offline icon',
            width: 25,
            height: 25
        },
        imageProp: {
            src: '/harbor/offline-img.png',
            alt: 'about offline image',
            width: 360,
            height: 391
        },
        background: '#D0E6F3'
    },
    {
        id: 2,
        title: "Know exactly what to do when an emergency strikes",
        description: 'When disasters happen, harbor automatically activates your readiness plan and sends you personalized, on-demand info when it matters the most.',
        isTitleFirst: false,
        iconProp: {
            src: '/harbor/emergency-icon.png',
            alt: 'about emergency icon',
            width: 25,
            height: 25
        },
        imageProp: {
            src: '/harbor/emergency-img.png',
            alt: 'about emergency image',
            width: 360,
            height: 391
        },
        background: '#E0F0E6'
    },
    {
        id: 3,
        title: 'Get peace-of-mind with automatic risk assessments',
        description: 'We use data from NOAA, FEMA, and USGS to pinpoint what your household is at risk for. No more guessing.',
        isTitleFirst: true,
        iconProp: {
            src: '/harbor/risk-icon.png',
            alt: 'about risk icon',
            width: 25,
            height: 25
        },
        imageProp: {
            src: '/harbor/risk-img.png',
            alt: 'about risk image',
            width: 360,
            height: 346
        },
        background: '#F4F0E9'
    }
]

const title = "The right plan for when things don't go as planned"
const description = "Not prepared? You're not alone. Emergency planning is overwhelming. We work with experts to make the hard parts easy, so you can have confidence when it matters most."

export default function About({ className }: ClassNameProp) {
    return (
        <Wrapper className={className}>
            <Title text={title} />
            <Description text={description} />
            <Cards>
                {cards.map(card =>
                    <li key={card.id}>
                        <AboutCard {...card} />
                    </li>
                )}
            </Cards>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    text-align: center;

    @media only screen and (max-width: 460px) {
        padding: 0;
    }
`

const Cards = styled.ul`
    display: grid;
    gap: 1.25rem;
    margin-top: 6rem;
    width:940px;
    grid-template-columns: repeat(auto-fill, minmax(375px, 460px));
    transition: all 0.3s ease;

    li:first-child {
        align-self: flex-end;
    }

    @media only screen and (max-width: ${tablet}px) {
        width: auto;
    }
`