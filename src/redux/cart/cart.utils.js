//to increase the quantity of the same item inside of cart
export const addItemToCart = (cartItems, cartItemToAdd) => {
  //returns true or false
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //if cart item does not exist, return the cart items with a new quantity propterty
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
