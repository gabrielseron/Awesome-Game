const body=document.querySelector('body')
const div=document.querySelector('div')
const button=document.createElement('button')
div.appendChild(button)
const a=document.createElement('a')
button.appendChild(a)
a.setAttribute('href','index.html')
const text=document.createTextNode('Jouer')
a.appendChild(text)
button.appendChild(a)
a.setAttribute('href','index.html')
console.log(a)
/*
function over()
        {
            document.getElementByTagName("button").style.transform="scale(1)";
            document.getElementByTagName("button").style.transition=".2s ease-in-out";
        }
*/
/*
div.onmouseenter = function() {
  document.getElementByName("button").style.transform="scale(1)";
  document.getElementByName("button").style.transition=".2s ease-in-out";;
}

div.onmouseleave = function() {
    document.getElementByName("button").style.transform="scale(1.3)";
}
*/
