import { h } from "preact"

import { jsx } from "@emotion/core"
import Link from "next/link"
import Head from "next/head"
import styled from "@emotion/styled"
import { keyframes, css, Global } from "@emotion/core"
import { Text } from "../src/components/Text"
import { Box } from "../src/components/Grid"

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
		<div>
			<Head>
				<title>Web</title>
			</Head>
			<Box px={[3, 4]} py={[5, 6]} color="white" bg="blue">
				<Heading fontSize={[4, 5, 6]}>Page 2</Heading>
				<Text fontWeight="bold">
					<Link href="/">
						<a>Go to homepage</a>
					</Link>
				</Text>
			</Box>
			<Basic>Page 2 Cool Styles</Basic>
			<Combined>
				With <code>:hover</code>.
			</Combined>
			<Animated animation={bounce}>Let's bounce.</Animated>
		</div>
	)
}
