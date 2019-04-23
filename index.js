const firstnamebox= document.getElementById("first")
function onkeydownfirst(){
const text= firstnamebox.value
const firstname= document.getElementById("firstname")
if (firstnamebox.value){
firstname.innerHTML= firstnamebox.value[0]
}
else{
  firstname.innerHTML= ""
}
const kerb= document.getElementById("kerb")
kerb.innerHTML=firstnamebox.value
}
firstnamebox.addEventListener("keyup",onkeydownfirst)

const secondnamebox= document.getElementById("second")
function onkeydownsecond(){
const text2= secondnamebox.value
const secondname= document.getElementById("secondname")
if (secondnamebox.value){
secondname.innerHTML= secondnamebox.value[0]
}
else{
  secondname.innerHTML= ""
}
const berm= document.getElementById("berm")
berm.innerHTML=secondnamebox.value
}
secondnamebox.addEventListener("keyup",onkeydownsecond)

const lastnamebox= document.getElementById("last")
function onkeydownlast(){
const text3= lastnamebox.value
const lastname= document.getElementById("lastname")
lastname.innerHTML= lastnamebox.value
}
lastnamebox.addEventListener("keyup",onkeydownlast)

const dateofbox= document.getElementById("day")
function onkeydowndate(){
const text4= dateofbox.value
const secondname= document.getElementById("dateof")
dateof.innerHTML= dateofbox.value
}
dateofbox.addEventListener("keyup",onkeydowndate)

const placebox= document.getElementById("where")
function onkeydownplace(){
const text5= placebox.value
const place= document.getElementById("place")
place.innerHTML= placebox.value
}
placebox.addEventListener("keyup",onkeydownplace)




const styles = document.getElementById('styles')
const formalButton = document.getElementById('formal')
const springButton = document.getElementById('spring')
const artdecoButton = document.getElementById('artdeco')
const template= document.getElementById("template")
function onFormalClick(){
  template.classList.add('formal')
  template.classList.remove('spring')
  template.classList.remove('artdeco')
}
formalButton.addEventListener("click",onFormalClick)

function onSpringClick(){
  template.classList.add('spring')
  template.classList.remove('formal')
  template.classList.remove('artdeco')
}
springButton.addEventListener("click",onSpringClick)

function onArtdecoClick(){
  template.classList.add('artdeco')
  template.classList.remove('spring')
  template.classList.remove('formal')
}
artdecoButton.addEventListener("click",onArtdecoClick)
