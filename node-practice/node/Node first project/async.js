// const timeout = 1;
// function loooop(){
// 	for(let i = 0; i < 1000;i++)
// console.log("hey1")
// }
// setTimeout(() => {
	
// 	console.log("hi")
// }, timeout);

// loooop();
// loooop();

const timeout = 1000;
const timeout2 = 1000;
// const fetchdata = () => {
// 	const promise = Promise(resolve,reject);
// 	setTimeout(() => {	
// console.log('hi')
// }, timeout);
// return promise
// }

const cr = ()=>{ return(new Promise((resolve,reject) => {
	setTimeout( () => {console.log('hi');//reject('hehe')
	resolve('khalid yes','2nd arg');/*;console.log('he');*/ reject('hehe'); return 'hoho';}, timeout);
}))
}
const gt = (data,data2='hehe') => {
	setTimeout(() => {
		console.log(data,data2)
	}, timeout2);
}
const try1 = ()=>{
cr().then((data)=>{
	console.log('wassup')
	return data
}).then(gt).catch(err => console.log(err));
console.log('suppies1')
}
const try2 = ()=>console.log('supies2');
{
try1();
}
try2();

// async function printdata()
// {
// 	try
// 	{
// 		let data = await cr();
// 		//let dass = await cr2() // group all awaits for one catch
// 		console.log(data);
// 	}catch(err){
// 		console.log(err);
// 	}
	
// };
//printdata();


