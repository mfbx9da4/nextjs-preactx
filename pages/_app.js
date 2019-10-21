import { h } from "preact"
import { jsx } from "@emotion/core"
import NextApp from "next/app"
import styled from "@emotion/styled"
import { css, Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { theme } from "../src/theme"

const Root = styled("div")`
	font-family: system-ui, sans-serif;
	line-height: 1.5;
`

class App extends NextApp {
	render() {
		const { Component, pageProps } = this.props
		return (
			<ThemeProvider theme={theme}>
				<Global
					styles={css`
						html,
						body {
							padding: 3rem 1rem;
							margin: 0;
							background: papayawhip;
							min-height: 100%;
							font-size: 10px;
						}
					`}
				/>
				<Root>
					<Component {...pageProps} />
				</Root>
			</ThemeProvider>
		)
	}
}

export default App
