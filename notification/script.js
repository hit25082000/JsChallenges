const btn = document.getElementById("btn")
const container = document.getElementById("container")

btn.addEventListener("click", ()=>{
  const notif = document.createElement('div')
  notif.classList.add('toast')

  notif.innerText = "this is madness"

  container.appendChild(notif)

  setTimeout(() => {
    notif.remove();

  },3000)
})