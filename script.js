let element = document.getElementsByClassName("faqbox")[0];
element.addEventListener("click",()=>{
    let ele = document.getElementsByClassName("faqbox")[1];
    ele.classList.toggle("visibility");
})
