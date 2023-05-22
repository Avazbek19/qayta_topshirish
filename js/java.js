// 1 -- vazifa --------------------------------------------------------------------------------------------------------

// let a = parseFloat(prompt("1 - son kiriting"))
// let b = parseFloat(prompt("2 - son kiriting"))
// let sum = 0
// for(let i = a; i <= b; i++) {
//     if(i % 2 == 1) {
//         sum += i
//     }
//     console.log(sum);
// }




// 3 -- vazifa ------------------------------------------------------------------------------------------------------------


// let form = document.querySelector('.text-black')

// let products = []


// form.addEventListener('click' , function(e) {
//     e.preventDefault()

//     let name = document.querySelector('.name').value
//     let cost = document.querySelector('.costt').value

//     let item = {
//         productsName: name,
//         cost: cost,
//     }
//     products.push(item)
//     render(products)

//     document.querySelector('.name').value = ''
//     document.querySelector('.costt').value = ''
// })

// function render (data){
//     let table = document.querySelector('.table tbody')
//     table.innerHTML = ''
//     let index = 0
//     data.map(item=> {
//         let qator = document.createElement('tr')
//         let name = document.createElement('td')
//         name.innerText = item.productsName
//         let cost = document.createElement('td')
//         cost.innerText = item.cost

//         let td_btn1 = document.createElement('td')
//         let update = document.createElement('button')
//         update.classList.add('btn' , 'btn-outline-warning', 'tahrirlash')
//         update.innerText = 'Tahrirlash'
//         update.setAttribute('data-bs-toggle', 'modal')
//         update.setAttribute('data-bs-toggle', 'modal')
//         update.setAttribute('data-bs-target', '#exampleModal')
//         update.setAttribute('click' , `tahrirla()`)

//         let td_btn2 = document.createElement('td')
//         let remove = document.createElement('button')
//         remove.classList.add('btn' , 'btn-outline-danger')
//         remove.setAttribute('onclick' , `deleteFun(${index})`)
//         remove.innerText = "O'chirish"

//         td_btn1.appendChild(update)
//         td_btn2.appendChild(remove)
//         qator.appendChild(name)
//         qator.appendChild(cost)
//         qator.appendChild(td_btn1)
//         qator.appendChild(td_btn2)
//         table.appendChild(qator)
//         index++
//     })

// }

// function deleteFun(myIndex){
//     products.splice(myIndex , 1)
//     render(products)
// }

// function tahrirla() {
//     let name = document.querySelector('.name').value
//     let cost = document.querySelector('.costt').value

//     console.log(name);
//     console.log(cost);
// }



// 2 -- vazifa --------------------------------------------------------------------------------------------------------------------

// function numbers() {
//     let a = parseFloat(prompt("son kitiring"))
//     if(a >100 & a <= 999){
//         let b = parseInt(a / 100)
//         let c = parseInt((a - (b * 100)) / 10)
//         let d = (((a - (b * 100)) - c * 10))
//         let e = d * 100 + c * 10 + b
//         console.log(e);
//     } else {
//         alert("100 dan katta va 999 dan kichik son kiriting")
//     }
// }
// numbers()