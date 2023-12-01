import { useState } from "react";
import HeaderCategory from "./headerCategory"
import AllProductsItem from "./allProductsItems"

export default function AllProducts() {

    const [ filterValue, setFilterValue] = useState([])

    function onClickHandler(e) {
        const catFilter = e.target.innerText;

        const isCatFilterIncluded = filterValue.some(item => item === catFilter);

        // Periksa apakah nilai sudah ada dalam array filterValue
        if (isCatFilterIncluded) {
          setFilterValue(filterValue.filter(item => item !== catFilter));
        } else {
          // Gunakan spread operator untuk membuat salinan array dan tambahkan nilai baru
          setFilterValue([...filterValue, catFilter]);
        }
    }

    function resetHandler() {
        setFilterValue([])
    }

    console.log(filterValue)

    return (
        <div className="Section_Allproducts">
            <HeaderCategory 
            onClickHandler={ onClickHandler } 
            resetHandler={ resetHandler }
            />
            <AllProductsItem filterValue={ filterValue }/>
        </div>
    )
}