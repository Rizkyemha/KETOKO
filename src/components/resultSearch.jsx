import { useState } from "react"
import api from "../api"
import Searchitem from "../components/searchItem"

export default function ResultSearch ({ result, isFocus}) {

    return (
        <div className="Result_Search_Container" style={
            !isFocus ? {display: 'none'} : {display: 'flex'}
        }>
            {
                result.slice(0, 5).map((item) => < Searchitem product={item} key={item.id} />)
            }
            <p>Lihat semua...</p>
        </div>
    )
}