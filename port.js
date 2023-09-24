let career = document.getElementById("idone");
let mycareerh3 = document.getElementById("mycareerh3");



function functionformycareer(){
    career.classList.add("animationforidone");
}
window.addEventListener('scroll', functionformycareer);


window.addEventListener('scroll', () =>{
    console.log(window.scrollY);
})


function functionformycareerh3(){
    mycareerh3.classList.add("animationformycareerh3");
}
window.addEventListener('scroll', functionformycareerh3);


