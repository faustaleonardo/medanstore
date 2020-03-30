export const addItemToCart = ({ id, name, price, pictures }) => {
  let items = [];

  if (localStorage.getItem('items')) {
    items = JSON.parse(localStorage.getItem('items'));
  }

  const index = items.findIndex(item => item.id === id);
  if (index !== -1) {
    const item = items[index];
    item.quantity++;
    item.totalPrice = item.quantity * item.price;
  } else {
    items.push({
      id,
      name,
      price,
      picturePath: pictures[0].path,
      quantity: 1,
      totalPrice: price
    });
  }

  localStorage.setItem('items', JSON.stringify(items));
};

export const removeItemFromCart = id => {
  let items = [];
  const storageItems = JSON.parse(localStorage.getItem('items'));

  const index = items.findIndex(item => item.id === id);
  if (index !== -1 && items[index].quantity > 1) {
    const item = items[index];
    item.quantity--;
    item.totalPrice = item.quantity * item.price;
  } else items = storageItems.filter(item => item.id !== id);

  localStorage.setItem('items', items);
};
