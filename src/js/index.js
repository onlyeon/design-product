// **************************** //
// test
// **************************** //

const testConsole = () => {
  console.log("hello");
}

testConsole();

// **************************** //
// SCSS
// **************************** //

import '../scss/index.scss';

// **************************** //
// svg icon
// **************************** //
const requireSvgAll = (r) => {
  r.keys().forEach(r);
}

requireSvgAll(require.context('../images/icon/', true, /\.svg$/));

// **************************** //
// png img
// **************************** //
const requirePngAll = (r) => {
  r.keys().forEach(r);
}

requirePngAll(require.context('../images/common/', true, /\.png$/));
