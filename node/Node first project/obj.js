var person = {height:1,space:2};
person.printheight = function(){
	console.log("height is :"+this.height)
}
// x = 'space'
// if(x in person)
// console.log(person['height']);
// else
// console.log("no");
person.printheight();
console.log(person instanceof Object)