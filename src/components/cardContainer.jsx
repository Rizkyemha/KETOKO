import { useContext } from "react"
import { ProductsContext } from "../context"
import CardProduct from "./cardProduct"


export default function CardContainer() {

    const products = useContext(ProductsContext);

    return (
        <>
            <div className="section_container">
                <div className="section_header">
                    <p className="section_header_title">Kejar DISKON</p>
                    <p>Berakhir dalam</p>
                    <p className="section_header_timestamp">12 : 40</p>
                    <p className="section_header_link">Lihat Semua</p>
                </div>
                <div className="section_body">
                    <div className="section_products_highlight">
                        <h3>DISKON BESAR BESARAN HINGGA 90%</h3>
                    </div>
                    <div className="section_products">
                        {
                            products.map((product) => <CardProduct product={product} key={product.id}/>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}