const dots1 = document.querySelector(".material-icons[data-index='1']");
const dots2 = document.querySelector(".material-icons[data-index='2']");
const dots3 = document.querySelector(".material-icons[data-index='3']");

const leftArrow = document.querySelector(".left-arrow")
const rightArrow = document.querySelector(".right-arrow")

import Siema from 'siema';

let index = 1
let isActive = false;
let secondIsActive = false;
let thirdIsActive = false;
dots1.classList.add("iaActive")
  leftArrow.classList.add("notActive")
const mySiema = new Siema({
  duration: 600,
  easing: 'cubic-bezier(.17,.67,.68,1.73)'
});
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => {
    mySiema.prev()
    index = index - 1
    
    getcolor()
}
);
next.addEventListener('click', () => {
    mySiema.next()
 index = index + 1

    getcolor()

}
)

function getcolor() {
 
    if (index <= 1) {
        index = 1
        dots1.isActive = true
        dots2.isActive = false
        dots3.isActive = false
    }
    else if (index >= 3) {
        index = 3
        dots3.isActive = true
        dots1.isActive = false
        dots2.isActive = false
        
    }
    else if (index === 2){
        index = 2
        dots1.isActive = false
        dots3.isActive = false
        dots2.isActive = true

    }

  if (dots1.isActive == true) {
    dots1.classList.add("iaActive")
       dots2.classList.remove("iaActive")
    dots3.classList.remove("iaActive")
    leftArrow.classList.add("notActive")
    }
  else if (dots2.isActive == true) {
    dots2.classList.add("iaActive")
    dots1.classList.remove("iaActive")
    dots3.classList.remove("iaActive")
    leftArrow.classList.remove("notActive")
      rightArrow.classList.remove("notActive")
    
    }
  else if (dots3.isActive == true) {
    dots3.classList.add("iaActive")
    dots1.classList.remove("iaActive")
    dots2.classList.remove("iaActive")
     rightArrow.classList.add("notActive")
 
    }
};
