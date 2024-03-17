let tabs = document.querySelectorAll(".tab");
let links = document.querySelectorAll(".link");
let parent = document.querySelector('#parent');
parent.addEventListener('click',(e)=>{
    let elTarget = e.target;
    console.log(elTarget);
})

for (let link of links) {
    link.addEventListener('click',(e)=>{
    e.preventDefault();
    let par = link.closest('.tab');
    for (let tab of tabs) {
        tab.classList.remove('active');
        par.classList.add('active');
        }
    })
}
