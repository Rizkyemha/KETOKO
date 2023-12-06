import { useEffect, useState } from "react"
import api from "../api";
import ResultSearch from "./resultSearch";

export default function Header() {

    const [categories, setCategories] = useState([]);
    const [categoriesToogle, setCategoriesToogle] = useState(false);

    const [keyWord, setKeyWord] = useState('')
    const [result, setResult] = useState([])
    const [isFocus, setIsFocus] = useState(false)

    async function getCategoriesApi() {
        const categories = await api.get_categories()
        return categories;
    }

    async function get_search_result( title ) {
        const res = await api.get_search_result(title)
        return res
    }

    const onChangeHandler = (e) => {
        const res = e.target.value
        setKeyWord(res)
    }

    useEffect(() => {
        get_search_result(keyWord).then(setResult)
    }, [keyWord])

    useEffect(() => {
        getCategoriesApi().then(setCategories);
    }, [])

    console.log(result)

    return (
        <div className="Header_Section">
            <div className="Header_Container">
                <h1 className="Header_Title">KETOKO</h1>
                <div className="Header_Search_Container">
                    <p className="Header_Search_ByCategory"
                    onClick={ () => !categoriesToogle ? setCategoriesToogle(true) : setCategoriesToogle(false) }>
                    Kategori
                    </p>
                    <input 
                    value={keyWord} 
                    onChange={onChangeHandler} 
                    className="Header_Search_ByText" 
                    placeholder="Cari Produk yang kamu suka"
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    />
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
                <ResultSearch result={result} isFocus={isFocus}/>
            </div>
        </div>
    )
}