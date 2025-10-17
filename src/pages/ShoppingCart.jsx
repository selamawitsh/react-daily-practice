import React, {useState} from 'react'
import ProductItem from '../components/ProductItem.jsx';
import CartSummary from '../components/CartSummary.jsx';

function ShoppingCart() {
    const initialProducts = [
        { id: 1, name: "Notebook", price: 9.99, qty: 1 },
        { id: 2, name: "Pen", price: 1.5, qty: 2 },
        { id: 3, name: "Water Bottle", price: 12.0, qty: 0 },
        { id: 4, name: "Sticker Pack", price: 3.25, qty: 0 },
        { id: 5, name: "Back Bag", price: 10.25, qty: 0 }
    ];
    const [products, setProducts] = useState(initialProducts)
    const [search, setSearch] = useState("");

    const filtered = products.filter((product=>product.name.toLowerCase().includes(search.toLowerCase())))

    function handleIncrement(id){
        setProducts(products=> products.map(product=>product.id === id ? {...product, qty:product.qty +1} : product))
    }

    function handleSetQty(id, value){
        const qty = Math.max(0, Number.isNaN(Number(value)) ? 0 : Math.floor(Number(value)))
        setProducts(products => products.map(product=> product.id === id ? {...product, qty}: product))
    }

    function handleDecrement(id){
        setProducts(products => products.map(product => product.id === id ? {...product, qty: Math.max(0, product.qty - 1)} : product))
    }

    function handleRemove(id){
        setProducts(products => products.map(product => product.id === id ? {...product, qty: 0} : product))
    }

    const totalItem = products.reduce((total, product) => total + product.qty, 0)
    const totalPrice = products.reduce((total, product) => total + product.price * product.qty, 0).toFixed(2)

    function handleClear(){
        setProducts(products => products.map(product => ({...product, qty: 0})))
    }

  return (
    <div>
        <header>
            <h1 className='font-bold text-2xl'>Mini Shopping Cart</h1>
            <p className='text-gray-500'>Lifting state up: App holds product + cart state</p>
        </header>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <main className="md:col-span-2 space-y-4">
            <div className=''>
                <div className="flex gap-2">
                <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search products..."
                    className="flex-1 p-2 border rounded"
                />
                <button 
                    onClick={() => setSearch("")} 
                    className="px-3 py-2 bg-gray-200 rounded"
                >
                    Clear
                </button>
                </div>

                {filtered.length === 0 ? (
                    <div className="p-4 bg-white rounded shadow text-gray-500">No products found.</div>
                ):(
                    <div className="space-y-3">
                        {filtered.map(product => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            onSetQty={handleSetQty}
                            onIncrement = {handleIncrement}
                            onDecrement = {handleDecrement}
                            onRemove = {handleRemove}
                        />
                        ))}
                    </div>
                    
                )}
            </div>
        </main>

        <aside className="space-y-4">
            <CartSummary
            products={products}
            totalItem={totalItem}
            totalPrice={totalPrice}
            onClear={handleClear}
            />
        </aside>

         </div>

   
      
    </div>
  )
}

export default ShoppingCart

