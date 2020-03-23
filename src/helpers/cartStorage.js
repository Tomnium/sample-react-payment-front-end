export const saveCart = cart => {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function getCart(){
  return JSON.parse(localStorage.getItem('cart'));
}

export function removeCart(){
  localStorage.removeItem('cart');
}