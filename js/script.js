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
          newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }
  
        inp.value = newValue;
      })
    })
  
  }
  
  counter();