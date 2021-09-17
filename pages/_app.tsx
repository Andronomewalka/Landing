import type { AppProps } from 'next/app'
import { MediaContextProvider } from "components/Media"
import { createGlobalStyle } from 'styled-components'
import '../preflight.min.css'


const GlobalStyle = createGlobalStyle`
    html,
    body {
	    overflow-x: hidden;
    }

	img,
	svg {
        display: inline;
	}

	a {
	    text-decoration: none;
	    color: inherit;
	}

	* {
	    box-sizing: border-box;
	}

	#__next {
	    height: 100%;
	    width: 100%;
	}
`

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<MediaContextProvider>
				<Component {...pageProps} />
			</MediaContextProvider>
		</>
	)
}
export default MyApp
