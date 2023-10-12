import Product from "./Product";
import Discount from "./global/Discount";
import Header from "./global/Header";

function Home() {
    return(
        <>
            <Discount/>
            <Header/>
            <Product/>
        </>
    );
}
export default Home;