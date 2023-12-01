import { useContext, useRef } from "react"
import { ProductsContext } from "../context"
import CardProduct from "./cardProduct"
import CountDown from "./countDown"
import arrow from "../assets/arrow.svg"


export default function CardContainer({ type_promo }) {

    const slader = useRef(0)

    const scrollRight = () => {
        console.log(slader.current.scrollLeft)
        slader.current.scrollTo({
            left: slader.current.scrollLeft - 800,
            behavior: 'smooth',
          });
    };

    const scrollLeft = () => {
        console.log(slader.current.scrollLeft)
        slader.current.scrollTo({
            left: slader.current.scrollLeft + 800,
            behavior: 'smooth',
          });
    };

    const products = useContext(ProductsContext);

    return (
        <>
            <div className="section_container">
                <div className="section_header">
                    <p className="section_header_title">KEJAR PROMO!!</p>
                    <p>Berakhir dalam</p>
                    <CountDown />
                    <p className="section_header_link"><u>Lihat Semua</u></p>
                </div>
                <div className="section_body">
                    <div className="section_products_highlight">
                        <h3>{type_promo}</h3>
                    </div>
                    <div className="section_products" ref={slader}>
                        {
                            products.map((product) => <CardProduct product={product} key={product.id}/>)
                        }
                    </div>
                    <img onClick={scrollLeft} className="button_left" src={arrow}/>
                    <img onClick={scrollRight} className="button_right" src={arrow}/>
                </div>
            </div>
        </>
    )
}