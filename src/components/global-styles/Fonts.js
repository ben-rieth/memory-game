import { createGlobalStyle } from "styled-components";

import SpongeWoff from './../../fonts/spongeboy_me_bob-webfont.woff';
import SpongeWoff2 from './../../fonts/spongeboy_me_bob-webfont.woff2';

const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Spongebob';
        src: 
            url(${SpongeWoff}) format('woff'),
            url(${SpongeWoff2}) format('woff2');

    }
`;

export default Fonts;