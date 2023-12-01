import Header from "../components/header";
import CardContainer from "../components/cardContainer";
import AllProducts from "../components/allProductsContainer";
import { TYPE_PROMO } from "../static";

export default function HomePage() {
    return (
        <>
            <Header />
            <CardContainer type_promo = {TYPE_PROMO.DISKON_BESAR} />
            <CardContainer type_promo = {TYPE_PROMO.UNTUK_KAMU} />
            <AllProducts />
        </>
    )
}

// CardContainer props = {type promo product}
//
// 