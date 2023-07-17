const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const products = document.querySelector('.cards-container');
const productDetail = document.getElementById('productDetail');
const productDetailClose = document.querySelector('.product-detail-close');
console.log("a")
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailClose.addEventListener('click',closeProductDetailAside);


function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');

  if(!shoppingCartContainer.classList.contains('inactive')){
    shoppingCartContainer.classList.add('inactive');
  }
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  if (!shoppingCartContainer.classList.contains('inactive')) {
    shoppingCartContainer.classList.add('inactive')
  }

  closeProductDetailAside();

}

function toggleCarritoAside() {
  shoppingCartContainer.classList.toggle('inactive')

  if (!mobileMenu.classList.contains('inactive')) {
    mobileMenu.classList.add('inactive')
  }

  if(!desktopMenu.classList.contains('inactive')){
    desktopMenu.classList.add('inactive');
  }

  if(!productDetail.classList.contains('inactive')){
    productDetail.classList.add('inactive');
  }
}

function openProductDetailAside() {
    productDetail.classList.remove('inactive');

    if (!shoppingCartContainer.classList.contains('inactive')) {
      shoppingCartContainer.classList.add('inactive');
    }
};

function closeProductDetailAside() {
  productDetail.classList.add('inactive');
}

const productList = [];

productList.push({
  name:"Bike",
  price:120,
  image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
  name:"Pantalla",
  price:220,
  image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
  name:"Compu",
  price:620,
  image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


for(product of productList){
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const img = document.createElement('img');
  img.setAttribute('src',product.image);
  img.addEventListener('click',openProductDetailAside)

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');

  const productName = document.createElement('p');
  productName.innerText = product.name;
  const productPrice= document.createElement('p');
  productPrice.innerText = product.price;

  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');

  productInfoDiv.append(productName);
  productInfoDiv.append(productPrice);

  productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
  productInfoFigure.appendChild(productImgCart);
  

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(img);
  productCard.appendChild(productInfo);

  products.appendChild(productCard);
}

