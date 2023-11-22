export default function Header() {
    return (
        <div className="Header_Section">
            <div className="Header_Container">
                <h1 className="Header_Title">KETOKO</h1>
                <div className="Header_Search_Container">
                    <p className="Header_Search_ByCategory">Kategory</p>
                    <input className="Header_Search_ByText" placeholder="Cari Produk yang kamu suka"/>
                </div>
                <ul className="Header_Nav_Login">
                    <li>Masuk</li>
                    <li>Daftar</li>
                </ul>
            </div>
        </div>
    )
}