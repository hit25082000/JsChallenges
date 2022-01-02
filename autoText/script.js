const text = "Robo do governo para controlar a população"

let index = 0;

function autoText(){
  document.body.innerText = text.slice(0,index)

  index++

  if(index > text.length){
    index = 0
  }
}

setInterval(autoText,100)