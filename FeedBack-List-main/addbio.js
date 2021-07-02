
let nameInput = document.querySelector('#name')
let surnameInput = document.querySelector('#surname')
let emailInput = document.querySelector('#email')
let textareaInput = document.querySelector('#textarea')

const button = document.querySelector('#btn')

let bioPlacehoder = document.querySelector('.bio-placeholder')





const imagePreview = document.querySelector('#imgPreview')

let imageFile = document.querySelector('#imageFile')

imageFile.addEventListener('change', (event) => {

  let currentUrl = URL.createObjectURL(imageFile.files[0])

  button.addEventListener('click', (e)=> {
    
    e.preventDefault()
    
    let html = `
    <div class="divBorder">
      <img class="roundImage" src=${currentUrl}> <br>
      Name : ${nameInput.value} <br>
      Surname : ${surnameInput.value} <br>
      Email : ${emailInput.value} <br>
      About Me : ${textareaInput.value} <br>
    </div>
    `
    bioPlacehoder.innerHTML += html

    localStorage.setItem('newbio', bioPlacehoder.innerHTML)})
  })


let save = localStorage.getItem('newbio')

if(save) {
  bioPlacehoder.innerHTML = save
}