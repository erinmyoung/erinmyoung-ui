import "styled-components";
import type { AppTheme } from "../theme/portfolioThemes";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
