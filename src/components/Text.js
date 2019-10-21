import styled from "@emotion/styled"
import { space, color, fontSize, fontWeight, lineHeight } from "styled-system"
export const Text = styled("div")`
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
