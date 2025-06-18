function App() {
  const [tshirts, setTshirts] = React.useState([
    {
    title: 'Blue T-Shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'images/bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'images/cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'images/green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'images/light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'images/purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'images/red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'images/teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
])
 function handleQuantityChange(index, value) {
    const updatedTshirts = [...tshirts];
    updatedTshirts[index].quantity = parseInt(value);
    setTshirts(updatedTshirts);
  }

  function handleBuy(index) {
    const updatedTshirts = [...tshirts];
    const selected = updatedTshirts[index];
    selected.stock -= selected.quantity;
    if (selected.stock < selected.quantity) {
      selected.quantity = 1;
    }
    setTshirts(updatedTshirts);
  }

  return(
    <div>
      <h1>T-Shirt Store</h1>
      <div className="store">
        {tshirts.map((tshirt, index) => (
          <div key={index} className="card">
            <h3>{tshirt.title}</h3>
            <img src={tshirt.image} alt={tshirt.title} width="150" />
            <p>Price: ${tshirt.price.toFixed(2)}</p>
            <p>
              {tshirt.stock === 0
                ? "Out of Stock"
                : `In Stock: ${tshirt.stock}`}
            </p>

            {tshirt.stock > 0 && (
              <div>
                <select
                  value={tshirt.quantity}
                  onChange={(e) =>
                    handleQuantityChange(index, e.target.value)
                  }
                >
                  {[...Array(tshirt.stock).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>
                      {n + 1}
                    </option>
                  ))}
                </select>
                <button onClick={() => handleBuy(index)}>Buy</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}