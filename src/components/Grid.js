import styled from "@emotion/styled"
import { space, color, fontSize, width } from "styled-system"
export const Box = styled("div")`
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
