import { CountUp } from './js/countUp.min.js';

const num1 = document.getElementById('stats-num1')
const num2 = document.getElementById('stats-num2')
const num3 = document.getElementById('stats-num3')
const num4 = document.getElementById('stats-num4')


const countUp1 = new CountUp(num1, 23).start();
const countUp2 = new CountUp(num2, 1234).start();
const countUp3 = new CountUp(num3, 5234).start();
const countUp4 = new CountUp(num4, 99.6, {decimalPlaces: 1}).start();