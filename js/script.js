let toggleBurger = document.querySelector('.header__burger')
let mobMenu = document.querySelector('.menu')
let bodyLock = document.getElementsByTagName('html')[0]


toggleBurger.addEventListener('click', (event) => {
  const target = event.target
  mobMenu.classList.toggle('active-burger')
  bodyLock.classList.toggle('lock')
  toggleBurger.classList.toggle('active-span')
})




let mobMenuItems = document.querySelectorAll('.menu')
for (let i = 0; i < mobMenuItems.length; i++) {
  mobMenuItems[i].onclick = function () {
    mobMenu.classList.toggle('active-burger')
    bodyLock.classList.toggle('lock')
    toggleBurger.classList.toggle('active-span')

  }
}

const counter = function () {
  const btns = document.querySelectorAll('.counter__btn');


  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter__value');
      const currentValue = +inp.value;
      let newValue;

      if (direction === 'plus') {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 1 ? currentValue - 1 : 1;
      }

      inp.value = newValue;
    })
  })

}

counter();




const inpForms = document.querySelectorAll('.inp-form')
const stepForms = document.querySelectorAll('.step__items')
for (let input of inpForms) {
  input.addEventListener( 'input', function () {
    let value = this.value


    if (inpForms[0].value != '') {
      inpForms[1].classList.remove("disabled");
      inpForms[1].removeAttribute("disabled");
      stepForms[1].classList.add("choose-step");
    }
    else {
      inpForms[1].value = ''
      inpForms[1].classList.add("disabled");
      inpForms[1].setAttribute("disabled", "disabled");
      stepForms[1].classList.remove("choose-step");
      stepForms[0].classList.add("choose-step");


    }
    if (inpForms[1].value != '') {
      inpForms[2].classList.remove("disabled");
      inpForms[2].removeAttribute("disabled");
      stepForms[2].classList.add("choose-step");
    }
    else {
      inpForms[2].value = ''
      inpForms[2].classList.add("disabled");
      inpForms[2].setAttribute("disabled", "disabled");
      stepForms[2].classList.remove("choose-step");
    }



  })
}
