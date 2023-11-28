/*
{
    "id": 29,
    "title": "Handcraft Chinese style",
    "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
    "price": 60,
    "discountPercentage": 15.34,
    "rating": 4.44,
    "stock": 7,
    "brand": "luxury palace",
    "category": "home-decoration",
    "thumbnail": "https://i.dummyjson.com/data/products/29/thumbnail.webp",
    "images": [
        "https://i.dummyjson.com/data/products/29/1.jpg",
        "https://i.dummyjson.com/data/products/29/2.jpg",
        "https://i.dummyjson.com/data/products/29/3.webp",
        "https://i.dummyjson.com/data/products/29/4.webp",
        "https://i.dummyjson.com/data/products/29/thumbnail.webp"
    ]
}
*/

export default function CardProduct({product}) {
    return (
        <>
            <div className="card_product_container">
                <img src={product.thumbnail} className="card_product_image"/>
                <div className="card_product_body">
                    <p className="card_product_title">{product.title}</p>
                    <p className="card_product_price">$. {product.price}</p>
                    <div className="card_product_diskon">
                        <p>$. {product.price}</p>
                        <p>{product.discountPercentage}%</p>
                    </div>
                    <div className="card_product_review">
                        <p>bintang : {product.rating}</p>
                        <p>stok {product.stock}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

