
// let x = {	
// a : 1,
// func : ()=> {
// 	b = 2;
// 	console.log('this.b');
// }
// }
// x.func();


//let x = 5
//let x = new Number(5)

//btn.addEventListener('button',func.bind(this));
function func (age, name) {
	return ({age : age, name : name})
}
let a = new func(15,'lol')

//console.log(a)
let person = {
	age : 10,
	name : 'dickhead',
	height : 7
}

const printage = ({age}) =>
{
	console.log(age);
}

printage(person)