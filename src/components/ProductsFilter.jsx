import { useState } from "react";

const products = [
    { id: 1, name: "Laptop", category: "electronics", price: 800 },
    { id: 2, name: "T-Shirt", category: "clothing", price: 20 },
    { id: 3, name: "Camera", category: "electronics", price: 300 },
    { id: 4, name: "Jeans", category: "clothing", price: 40 },
    { id: 5, name: "Smartphone", category: "electronics", price: 600 },
    { id: 6, name: "Sweater", category: "clothing", price: 50 },
    { id: 7, name: "Headphones", category: "electronics", price: 150 },
    { id: 8, name: "Jacket", category: "clothing", price: 120 },
    { id: 9, name: "Tablet", category: "electronics", price: 400 },
    { id: 10, name: "Sneakers", category: "clothing", price: 80 },
];

const ProductsFilter = () => {
    const [category, setCategory] = useState("");
    const [maxPrice, setMaxPrice] = useState(0);

    const filteredProducts = products.filter((product) => {
        const matchesCategory = !category || product.category === category;
        const matchesPrice = maxPrice === 0 || product.price <= maxPrice;
        return matchesCategory && matchesPrice;
    });

    return (
        <div>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
            </select>

            <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
            />
            <span>Max Price: ${maxPrice}</span>

            <div>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id}>
                            {product.name} - ${product.price}
                        </div>
                    ))
                ) : (
                    <div>No products found</div>
                )}
            </div>
        </div>
    );
};

export default ProductsFilter;
