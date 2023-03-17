const url = "https://jsonplaceholder.typicode.com/posts/1";
async function fetchData(callback){
	return new Promise((resolve,reject)=>{
		resolve("Promise Resolved")
	},1500)
	document.getElementByID("btn").addEventListener('click',callback);
}
const result=function(){
	const fetchApi=await fetch(url);
	const data=await fetchApi.json();
	const title=return `${data.title}`;
	document.getElementByID("output").innerHTML=title;
}