const btn=document.getElementsByTagName("button")
const div=document.getElementById('main')
const input=document.getElementById('input')

 function btnValue() {
    if(this.innerText==="="){
        input.value=eval(input.value)
        return
    }
    // alert("alert")
    // console.log(this);
// console.log(this.innerText);
// input.value+=this.innerText
input.value=input.value+this.innerText

 }

//  div.addEventListener('click',btnValue)

Array.from(btn).forEach(element => {
    element.addEventListener('click',btnValue)
})

