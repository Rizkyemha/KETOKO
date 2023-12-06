export default function Searchitem({product}) {
    return (
        <div className="Result_Search_Item">
            <img src={product.thumbnail} />
            <p>{product.title}</p>
            <p>{product.rating}</p>
        </div>
    )
}