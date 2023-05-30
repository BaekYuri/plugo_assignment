export const getCart = () => {
  let cart = localStorage.getItem("cart");
  if (cart) return JSON.parse(cart);
  return [];
};

export const addCart = (product, count) => {
  let cart = getCart();

  let idx = cart.findIndex((nowProduct) => nowProduct.id === product.id);

  if (idx === -1) {
    cart.push({ ...product, count: count });
  } else {
    cart[idx].count += count;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateCart = (product, count) => {
  let cart = getCart();

  let idx = cart.findIndex((nowProduct) => nowProduct.id === product.id);

  if (idx !== -1) {
    cart[idx] = { ...product, count: count };
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const deleteCart = (id) => {
  let cart = getCart();

  let idx = cart.findIndex((nowProduct) => nowProduct.id === id);

  if (idx !== -1) {
    cart.splice(idx, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};
