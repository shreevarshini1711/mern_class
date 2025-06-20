console.log("Hello world");
console.warn("Warning!");
console.error("Error!");
console.table([{name: "shree",age: "19"},{name: "Shree",age:"20"}])
//eval function
eval("let a=5;console.log(\"Hello world!\");console.log(a);");
let x=3.14;
console.log(x);
//JSON->JS OBJECT NOTATION
let obj={ name: "Jhon"};
let str= JSON.stringify(obj);
console.log(str);
let back=JSON.parse(str);
console.log(back);
//localStorage.setItem("username","varshini");
//localStorage.setItem("firstname",username);
//delect
//localStorage.removeItem("username");
//console.log(localStorage.getItem("username"));
//promise
let promise=new Promise((resolve) =>{
let=true;
//if (commit==true){
    setTimeout(()=>{resolve("Hello")}, 10000);
    //resolve("Done");
});
promise.then(res=> console.log(res)).catch(err => console.log(err));
//closure
function outer(){
    let name="JS";
    return function inner(){
        console.log(name);
    }
}
//DOM
let divClass=document.getElementById("DOM");
let =document.querySelector("div");//list
DOM.style.color="blue"
let eleCreate=document.createElement("div");//element
eleCreate.innerHTML="click here";//data added

eleCreate.addEventListener("click", () => {
  eleCreate.innerHTML = "hello!";
});


//append
divClass.appendChild(eleCreate);
//remove child
//setTimeout(()=>{divClass.removeChild(eleCreate), 10000});
// setTimeout(,1000000);
