import { useContext } from "react"
import { ProductsContext } from "../context"
import CardProduct from "../components/cardProduct"

export default function AllProductsItem({ filterValue }) {

    const products = useContext(ProductsContext);

    console.log('produk body', filterValue)

    return (
        <div className="all_product_body">
                {
                    filterValue.length == 0 ? 
                    products.map((product) => <CardProduct key={product.id} product={product}/>) 
                    : products.filter((product) => filterValue.includes(product.category)).map((product) => <CardProduct key={product.id} product={product}/>)
                }
        </div>
    )
}