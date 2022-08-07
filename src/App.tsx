import React from "react";
import styled, {
  createGlobalStyle,
  css,
  ThemeProvider,
} from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isChangeThemeAtom } from "./atoms";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

*{
  box-sizing: border-box;
}

body{
  font-family: 'Source Sans Pro', sans-serif;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
}

a{
  text-decoration: none;
  color: inherit;
}

`;

const ChangeThemeBtn = styled.button<{ toggle: boolean }>`
  width: 60px;
  height: 35px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.theme.toggle ? "white" : "#2f3640")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  top: 10px;
  right: -80%;
`;
const Circle = styled.div<{ toggle: boolean }>`
  background-color: ${(props) => (props.theme.toggle ? "#2f3640" : "white")};
  width: 25px;
  height: 25px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(30px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;

function App() {
  const isChangeTheme = useRecoilValue(isChangeThemeAtom);
  const setChangeTheme = useSetRecoilState(isChangeThemeAtom);
  const toggleTheme = () => setChangeTheme((prev) => !prev);
  return (
    <>
      <ThemeProvider theme={isChangeTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <ChangeThemeBtn onClick={toggleTheme} toggle={isChangeTheme}>
          <Circle toggle={isChangeTheme} />
        </ChangeThemeBtn>
        <Router />
        <ReactQueryDevtools />
      </ThemeProvider>
    </>
  );
}

export default App;
