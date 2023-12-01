import { useEffect, useState, useRef } from "react"
import api from "../api"
import arrow from "../assets/arrow.svg"

export default function HeaderCategory({ onClickHandler, resetHandler }) {

    const [ categories, setCategories ] = useState([])

    async function getCategories() {
        const categories = await api.get_categories()
        return categories
    }

    useEffect(() => {
        getCategories().then(setCategories)
    }, [])

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

    return (
        <>
        <h3>SEMUA PRODUK</h3>
        <button onClick={resetHandler}>ini reset</button>
        <div className="all_product_header">
            <div className="categories_container_header" ref={slader}>
                <ul className="all_product_categories">
                    {
                        categories.map((category, index) => <li key={index} className="all_product_category" onClick={onClickHandler} >{category}</li>)
                    }
                </ul>
            </div>
            <img 
            className="button_left2" 
            onClick={scrollLeft} 
            src={arrow}
            />
            <img 
            className="button_right2" 
            onClick={scrollRight} 
            src={arrow}
            />
        </div>
        </>
    )
}