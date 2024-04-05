import { useState } from "react";

function Admin() {

    const [newProduct, setNewProduct] = useState<string>("")
    
    const saveProduct = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({productName: newProduct})
        })
        .then(() => setNewProduct(""))
    }

    return (
        <div>
            <h3>ADMIN</h3>

            <form onSubmit={saveProduct}>
                <input type="text" value={newProduct} onChange={((e) => setNewProduct(e.target.value))}></input>
                <button>Spara</button>
            </form>

        </div>
    );
}

export default Admin;