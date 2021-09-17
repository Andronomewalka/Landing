import type { NextPage } from 'next'
import Head from 'next/head'
import Header from 'components/Harbor/Header'
import Home from 'components/Harbor/Home'
import About from 'components/Harbor/About'
import Ready from 'components/Harbor/Ready'
import Mission from 'components/Harbor/Mission'
import Join from 'components/Harbor/Join'
import Footer from 'components/Harbor/Footer'
import { mobile } from 'components/Media'
import styled, { ThemeProvider } from 'styled-components'

const theme = {
    mainColor: "#28514F",
    altColor: "#65727B",
    darkColor: "#1B1F2B"
};

const Harbor: NextPage = () => {
    return (
        <>
            <Head>
                <title>Harbor</title>
                <meta name="description" content="Reimagining readiness" />
                <link rel="icon" href="harbor/favicon.ico" />
            </Head>

            <ThemeProvider theme={theme}>
                <Header />
                <Wrapper>
                    <SHome />
                    <Dash />
                    <SAbout />
                    <Dash />
                    <SReady />
                    <SMission />
                    <SJoin />
                    <FooterDash />
                    <Footer />
                </Wrapper>
            </ThemeProvider>
        </>
    )
}

export default Harbor

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Dash = styled.div`
    width: 157px;
    height: 3px;
    background: #aeb4b6;
    border-radius: 40px;
    margin-top: 10rem;

    @media only screen and (max-width: ${mobile}px) {
        margin-top: 5rem;
    }
`

const FooterDash = styled(Dash)`
    width: 940px;
    margin-top: 12rem;

    @media only screen and (max-width: ${mobile}px) {
        margin-top: 7rem;
    }
`

const SHome = styled(Home)`
    margin-top: 8rem;  

    @media only screen and (max-width: ${mobile}px) {
        margin-top: 4rem;
    }
`

const SJoin = styled(Join)`
    width:100%;
    margin-top: 2.5rem;
`

const BaseComponentWrapper = `
    width: 100%;
    margin-top: 10rem;

    @media only screen and (max-width: ${mobile}px) {
        margin-top: 5rem
    }
`

const SAbout = styled(About)`
    ${BaseComponentWrapper}
`

const SReady = styled(Ready)`
    ${BaseComponentWrapper}
`

const SMission = styled(Mission)`
    ${BaseComponentWrapper}
`
