// ****************************
// test
// ****************************

const testConsole = () => {
  console.log("Test Success");
}
testConsole();

// ****************************
// SCSS
// ****************************

// Core
import '../core-style/scss/index.scss'
// Project
import '../product-style/scss/index.scss'

// ****************************
// svg icon
// ****************************

const requireSvgAll = (r) => {
  r.keys().forEach(r);
}
requireSvgAll(require.context('../core-style/images/icon/', true, /\.svg$/));
requireSvgAll(require.context('../product-style/images/icon/', true, /\.svg$/));

// ****************************
// png img
// ****************************

const requirePngAll = (r) => {
  r.keys().forEach(r);
}
requirePngAll(require.context('../core-style/images/common/', true, /\.png$/));
requirePngAll(require.context('../product-style/images/common/', true, /\.png$/));
