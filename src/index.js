
import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
// debugger; use this to add breakpoints so u can view ur code sourcemap
console.log(`i will pay ${courseValue} for this course!`); // eslint-disable-line no-console


