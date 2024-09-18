// console.log("hello from js");
const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid red';
    section.style.marginTop = '10px';
    section.style.padding = '10px';
    section.style.borderRadius = '15px';
    section.style.backgroundColor = 'lightgray';
    section.style.color = 'black';
}