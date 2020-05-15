let counter = 0
const thumbnails = document.querySelector('.chapter-thumbnail')
const mainViewer = document.querySelector('#mainViewer')
const chapterList = document.querySelector('#chapterlist')
const dayMood = document.querySelector('.js-go-day')
const darkMood = document.querySelector('.js-go-night')

darkMood.addEventListener('click',()=>{
    ['body','div','li'].forEach(e => document.querySelectorAll(e).forEach(s =>{
        s.classList.add('night')
    }))
    
})
dayMood.addEventListener('click',()=>{
    ['body','div','li'].forEach(e => document.querySelectorAll(e).forEach(s =>{
        s.classList.remove('night')
    }))
    
})

chapterList.addEventListener('click',(e)=>{

    const text = e.target.innerHTML
    const id = e.target.id
    mainViewer.innerHTML = text
    counter = parseInt(id.slice(-1))
});
document.querySelector('#chapter'+counter).click()
mainViewer.addEventListener('click',(e)=>{
    if(e.offsetX < 200){
        
        counter-=1
    }else{
        counter+=1
    }
    if(counter<0){
        counter = 0
    }
    if(counter >= chapterList.childElementCount){
        counter = chapterList.childElementCount-1
    }
    document.querySelector('#chapter'+counter).click()
    
});
