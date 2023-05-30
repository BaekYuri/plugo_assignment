export const addCart = (product, count) => {
  let cart = localStorage.getItem("cart");
  if (!cart) cart = "[]";

  const formatProduct = { ...product, count: count };
  cart = JSON.parse(cart);

  let idx = cart.findIndex(product.id);

  if (idx === -1) {
    cart.push(formatProduct);
  } else {
    cart[idx].count += count;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const deleteCart = (id) => {
  let cart = localStorage.getItem("cart");
  if (!cart) return;
  cart = JSON.parse(cart);

  let idx = cart.findIndex(id);

  if (idx !== -1) {
    cart.splice(idx, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateCart = (product, count) => {
  let cart = localStorage.getItem("cart");
  if (!cart) return;
  cart = JSON.parse(cart);

  let idx = cart.findIndex(product.id);

  if (idx !== -1) {
    cart[idx] = { ...product, count: count };
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};
