const one = { b: 5, i: 5 }
const two = { i: 5, b: 5 }

function compare(one, two) {
  const keys1 = Object.keys(one)
  const keys2 = Object.keys(two)
  const result = []
  if (keys1.length !== keys2.length) {
    result.push(false)
  } else {
    keys1.forEach((key) => {
      if (keys2.includes(key)) {
        if (one[key] === two[key]) {
          
          result.push(true)
        } else {
              result.push(false)}
      } else{
         result.push(false)}
    })
  }
  //якщо всі елементи тру - обєкти однакові, якщо хоч один елемент false то об'єкти різні
if(result.includes(false)) {
    console.log("Обєкти різні")
} else console.log("Обєкти однакові")
}

compare(one, two)

// тернарний оператор
// умова розділяєтся на дві частини

const user = {isHaveCar: false}

const showBlock = user.isHaveCar ? 'Показати блок' : 'Не показувати'


const title = document.querySelector('h1')


// DOM - document object model
// DOM дерево

console.log(window.screen.orientation)

const div = document.querySelector('div')
function callBack (e) {

  console.log('Ми клікнули по', e.target.tagName, e.target.textContent )

  if(e.target.textContent === 'Зберегти'){
    save()
  }
}
//прослуховувач подій
div.addEventListener('click', callBack)

//1) назва події яку ми відстежуємо 'click'
//2) колбек-функція - будь яка функція яка передається параметром в іншу функцію

//делегування подій 

const button = document.querySelector('button')

button.addEventListener('click', (e)=> {
  e.stopPropagation()
  e.preventDefault()
  console.log('Був клік на кнопці номер один')
})

//bubbling - вспливання

document.body.addEventListener('click', ()=> {
  console.log('Це клік по баді')
})