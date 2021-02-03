import taskThree from './taskThree';
import taskTwo from './taskTwo';
import taskOne from './taskOne';

const btnThree = document.querySelector('#taskThree-js');
const btnOne = document.querySelector('#taskOne-js');
const btnTwo = document.querySelector('#taskTwo-js');

btnThree.addEventListener('click', taskThree);
btnTwo.addEventListener('click', taskTwo);
btnOne.addEventListener('click', taskOne);
