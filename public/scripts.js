const modalOverlay = document.querySelector('.modal-overlay');
const posts = document.querySelectorAll('.post')

for(let post of posts) {
  post.addEventListener("click", function(){
    const url = post.getAttribute("id")
    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${url}`
  })
}

document.querySelector('.close-modal').addEventListener("click", function(){
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector('iframe').src = ""
})
