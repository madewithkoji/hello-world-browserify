/**
 * index.js
 * 
 * What it Does:
 *   It also loads the .internals/config.json which is a bundle of current customization
 *   to the json files in the .koji directory
 * 
 * How to Use:
 *   Make sure this file has a script tag in index.html
 *   eg. <script src="./index.js"></script>
 */

// import and load koji configs
import Koji from '@withkoji/vcc';

// render app
const render = () => {
    document.body.innerHTML = `
        <h1>
            ${Koji.config.settings.name}
        </h1>
    `
};

// render
render();
