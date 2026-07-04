// variables of Product Confirmation Button

let btnConf = document.querySelector('.check');

let done = document.querySelector('.done');

let returnBtn = document.getElementById('return');

//variables of total price
let cardsBtn = document.querySelector('.cards');

let totalPrice = document.getElementById('price');

let total = 0;

//variables of count numbers products

let countCart = document.getElementById('count');

let count = 0;

//variables of cart

const cart = document.getElementById('cart');

let emptyCart = true;

cardsBtn.addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    
    //add price in total
    
    const card = e.target.closest('.card');
    const priceText = card.querySelector('p').innerText;
    const price = parseInt(priceText.replace('$', '').trim());
    total += price;
    totalPrice.innerText = `$ ${total}`;
    
    //add product number in cart
    
    count += 1;
    countCart.innerText = count;
    
    //add flag of product in container
    
    const imgProduct = card.querySelector('img').src;
    const productName = card.querySelector('h3').innerText;
    
    if (emptyCart) {
      cart.innerHTML = '';
      emptyCart = false;
    }
    let div = document.createElement('div');
    div.classList.add('pro');
    div.innerHTML = `
    <img src='${imgProduct}' alt='${productName}'><span>${productName}</span><button>Delete</button>
    `;
    cart.appendChild(div);
    let deleteBtn = div.querySelector('button');
    deleteBtn.onclick = () => {
      div.remove()
      
      total -= price;
      totalPrice.innerText = `$ ${total}`;
      if (total === 0) {
        totalPrice.innerText = '$ 0.00';
      }
      
      count -= 1;
      countCart.innerText = count;
      
      if (cart.children.length === 0) {
       cart.innerText = 'the cart empty!';
       emptyCart = true;
    }
  }
 }
});

btnConf.addEventListener('click', function () {
  if (!emptyCart) {
    done.style.top = '0%';
    cart.innerHTML = 'the cart empty!';
    count = 0;
    countCart.innerText = count;
    emptyCart = true;
    total = 0;
    totalPrice.innerText = '$ 0.00';
    returnBtn.onclick = () => {
      done.style.top = '-200%';
    }
  } else {
    alert('you should buy anything');
  }
});
