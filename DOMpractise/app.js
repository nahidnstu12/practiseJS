// $(document).ready(function(){  
//     $("button").click(function(){  
//         $("p").text("Welcome to javatpoint.com!");  
//     });  
// });  

const el ={
    addClass : document.querySelector('#addClass'),
    list : document.querySelector('.list'),
    li : document.querySelector('.li'),
    li2 : document.querySelector('.li2'),
    li3 : document.querySelector('.li3'),
    p : document.querySelector('.search'),
    form : document.querySelector('.form'),
    message : document.getElementById('message'),
    counter : document.getElementById('counter'),
    pass : document.getElementById('pass'),
    toggle : document.getElementById('toggle'),
}

// Add a class to an element
el.addClass.classList.add('text-center');
document.querySelector('#button').classList.add('btn','btn-danger')
// Append to an element to the end of the target element
const node = document.createElement("li"); 
const textnode = document.createTextNode("Pak"); 
node.appendChild(textnode); 
el.list.appendChild(node);

// count the nummber of character from textarea
el.message.addEventListener('input',e =>{
    const target = e.target
    const maxLength = target.getAttribute('maxlength')
    const current = target.value.length

    el.counter.innerHTML = `${maxLength}/${current}` 
})

// Select the text of a textarea automatically
el.message.addEventListener('focus',e=>{
    e.target.select()
})

const fields = [].slice.call(el.form.elements, 0);


// outside cliked

// document.addEventListener('click',e=>{
//     const outside = !el.message.contains(e.target)
//     if(outside){
//         console.log('outside Cliked')
//     }
// })

// const hasFocus = el.message === document.activeElement ? 'Focused':'Not'
// console.log(hasFocus)

// mouse CLick detect

// document.addEventListener('mousedown',e =>{
//     let c
//     e.button === 0 ? console.log('left Clik'):''
//     e.button === 2 ? console.log('right Click') : ''
//     e.button === 1 ? console.log('middle Clik'):''
//     e.button === 3 ? console.log('Browser Back') : ''
//     e.button === 4 ? console.log('Browser Forward') : ''

// })

// document.title = "Hello Nahid"

el.p.setAttribute('title','text')

el.p.dataset.message = 'ramadan'
// delete el.p.dataset.message

// get all sublings (Not Working)

// const parent = el.li.parentNode
// const siblings = [].slice.call(parent.Children).filter(child =>{
//     return child !== el.li
// })
// console.log(siblings)

el.list.insertAdjacentElement('afterbegin',el.li)

// remove child nodes

// while(el.list.firstChild){
//     el.list.removeChild(el.list.firstChild)
// }


// el.list.remove()

// if(el.list.parentNode){
//     el.list.parentNode.removeChild(el.list)
// }

el.counter.style.cssText = 'background-color: #000; color: white';

// Toggle password visibility
el.toggle.addEventListener('click',(e)=>{
    e.preventDefault()
    const type = el.pass.getAttribute('type')
    el.pass.setAttribute('type',type === 'password' ?'text' :'password')
})


