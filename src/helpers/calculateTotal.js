const calculateTotal = (locations, property) => {
  const add = (accumulator, digit) => accumulator + digit;
  const totalPrice = locations.map(item => item[property]).reduce(add);
  return totalPrice;
};

export default calculateTotal;
