import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    list-style: none;
}

body {
    background-color: black;
}

form {
    display: flex;
    flex-direction: column;
    width: 90%;
    border-radius: 3px;
    background-color: var(--gray3);
    color: var(--gray0);
    }

button {
    font-family: 'Inter', sans-serif;
    cursor: pointer;
}

input {
    height: 48px;
    border: none;
    border-radius: 4px;
    background-color: var(--gray2);
    color: var(--gray0);
}

input:focus {
    background-color: var(--gray2);
}

select {
    background-color: var(--gray2);
    height: 38px;
    color: #868E96;
    border: none;
    border-radius: 3px;
}

a {
    text-decoration: none;
    color: var(--gray0);
}

h2 {
    font-size: 18px;
    font-weight: bold;
    color: var(--color-primary);
}

h3 {
    font-size: 16px;
    font-weight: bold;
    color: var(--gray0);
}

label {
    font-size: 12px;
    font-weight: 400;
}

span {
    font-size: 10px;
    color: var(--gray1)
}

.btn1 {
    height: 38px;
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: 4px;
}

:root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    /* gray */
    --gray4: #121214;
    --gray3: #212529;
    --gray2: #343B41;
    --gray1: #868E96;
    --gray0: #F8F9FA;
}

`