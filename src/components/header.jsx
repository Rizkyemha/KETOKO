import { useEffect, useState } from "react"
import api from "../api";

export default function Header() {

    const [categories, setCategories] = useState([]);
    const [categoriesToogle, setCategoriesToogle] = useState(false);

    async function getCategoriesApi() {
        const categories = await api.get_categories()
        return categories;
    }

    useEffect(() => {
        getCategoriesApi().then(setCategories);
    }, [])

    return (
        <div className="Header_Section">
            <div className="Header_Container">
                <h1 className="Header_Title">KETOKO</h1>
                <div className="Header_Search_Container">
                    <p className="Header_Search_ByCategory"
                    onClick={ () => !categoriesToogle ? setCategoriesToogle(true) : setCategoriesToogle(false) }>
                    Kategori
                    </p>
                    <input className="Header_Search_ByText" placeholder="Cari Produk yang kamu suka"/>
                </div>
                <span>chart</span>
                <span>|</span>
                <ul className="Header_Nav_Login">
                    <li>Masuk</li>
                    <li>Daftar</li>
                </ul>
                <ul className="Header_Category" style={
                    !categoriesToogle ? {display: 'none'} : {display: 'flex'}
                }>
                {
                    categories.map((category, index) => <li key={index}>{category}</li>)
                }
            </ul>
            </div>
        </div>
    )
}