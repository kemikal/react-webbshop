import { useEffect, useState } from "react";

interface Product {
    id: string,
    productName: string
}

function Products() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    })

    return (
        <div>
            <h3>PRODUCTS</h3>
            {products.map((product: Product) => (
                <div key={product.id}>{product.productName}</div>
            ))}
        </div>
    );
}

export default Products;