import { h } from "preact"

import { jsx } from "@emotion/core"

import Head from "next/head"
import styled from "@emotion/styled"
import { keyframes, css, Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import {
	space,
	color,
	fontSize,
	width,
	fontWeight,
	lineHeight
} from "styled-system"

const theme = {
	fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
	space: [
		// margin and padding
		0,
		4,
		8,
		16,
		32,
		64,
		128,
		256
	],
	colors: {
		blue: "#07c",
		red: "#e10"
	}
}

let SomeComponent = props => {
	return (
		<div
			css={{
				color: "pink"
			}}
			{...props}
		/>
	)
}

const Index = () => {
	return (
		<div>
			<h1>Hello World</h1>
			<p sytle={{ color: "pink" }}>Running on Preact X with Next.js!</p>
			<SomeComponent>hey there</SomeComponent>
		</div>
	)
}

const basicStyles = css`
	background-color: white;
	color: cornflowerblue;
	border: 1px solid lightgreen;
	border-right: none;
	border-bottom: none;
	box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
	transition: all 0.1s linear;
	margin: 3rem 0;
	padding: 1rem 0.5rem;
`
const hoverStyles = css`
	&:hover {
		color: white;
		background-color: lightgray;
		border-color: aqua;
		box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
	}
`
const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`

const Root = styled("div")`
	font-family: system-ui, sans-serif;
	line-height: 1.5;
`

const Box = styled("div")`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
Box.propTypes = {
	...space.propTypes,
	...width.propTypes,
	...fontSize.propTypes,
	...color.propTypes
}

const Text = styled("div")`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`
Text.propTypes = {
	...space.propTypes,
	...fontSize.propTypes,
	...fontWeight.propTypes,
	...lineHeight.propTypes,
	...color.propTypes
}

const Heading = Text.withComponent("h1")

Heading.defaultProps = {
	fontSize: 5,
	lineHeight: 1.5,
	m: 0
}

const Basic = styled.div`
	${basicStyles};
`

const Combined = styled.div`
	${basicStyles};
	${hoverStyles};
	& code {
		background-color: linen;
	}
`
const Animated = styled.div`
	${basicStyles};
	${hoverStyles};
	& code {
		background-color: linen;
	}
	animation: ${props => props.animation} 0.2s infinite ease-in-out alternate;
`

export default () => {
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
						font-family: Helvetica, Arial, sans-serif;
						font-size: 24px;
					}
				`}
			/>
			<Head>
				<title>With Emotion</title>
			</Head>
			<div>
				<Box px={[3, 4]} py={[5, 6]} color="white" bg="blue">
					<Heading fontSize={[4, 5, 6]}>styled-system</Heading>
					<Text fontWeight="bold">Emotion demo</Text>
				</Box>
				<Basic>Cool Styles</Basic>
				<Index></Index>
				<Combined>
					With <code>:hover</code>.
				</Combined>
				<Animated animation={bounce}>Let's bounce.</Animated>
			</div>
		</ThemeProvider>
	)
}
