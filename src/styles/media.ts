/*
 * Media queries utility
 */

import {
  css,
  DefaultTheme,
  CSSObject,
  InterpolationFunction,
  ThemedStyledProps,
  Interpolation,
  FlattenInterpolation,
} from 'styled-components/macro';

/*
 * Taken from https://github.com/DefinitelyTyped/DefinitelyTyped/issues/32914
 */

// Update your breakpoints if you want
export const sizes = {
  small: 600,
  medium: 1024,
  large: 1440,
  xlarge: 1920,
};

export const colors = {
  primary: '#55CFA2',
  secondary: '#303539',
  third: '#fofofo',
  gray: '#828282',
  gray1: '#f7f7f9',
  gray2: '#D3D3D3',
  gray3: '#BBBBBB',
  gray4: '#EEF0F1',
  red: '#F1685E',
};

// Iterate through the sizes and create a media template
export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as { [key in keyof typeof sizes]: MediaFunction },
);

/*
 * @types/styled-component is not working properly as explained in the github issue referenced above.
 * We must overcome this with custom typings, however, this might not work in time as the styled-components update.
 * Be carefull and keep an eye on the issue and the possible improvements
 */
type MediaFunction = <P extends object>(
  first:
    | TemplateStringsArray
    | CSSObject
    | InterpolationFunction<ThemedStyledProps<P, DefaultTheme>>,
  ...interpolations: Array<Interpolation<ThemedStyledProps<P, DefaultTheme>>>
) => FlattenInterpolation<ThemedStyledProps<P, DefaultTheme>>;

/* Example
const SomeDiv = styled.div`
  display: flex;
  ....
  ${media.medium`
    display: block
  `}
`;
*/
