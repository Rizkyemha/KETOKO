import './style.css'
import { useEffect, useMemo, useState } from "react"
import api from "./api"
import { ProductsContext } from "./context"
import HomePage from "./views/HomePage"

function App() {

  const [products, setProducts] = useState([])

  async function getProducts() {
    const response = await api.get_products()
    return response
  }

  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  const productsContextValue = useMemo(() => products, [products])

  return (
    <>
      <ProductsContext.Provider value={productsContextValue}>
        <HomePage />
      </ProductsContext.Provider>
    </>
  )
}

export default App
