
import React,{useState} from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import ApiRoutes from "../utils/ApiRoutes";
import AxiosService from "../utils/AxiosService";
import toast from "react-hot-toast";
import { useEffect } from "react";


function Home() {
  const [cart, setCart] = useState(0);
  const [products, setProducts] = useState([]);
  
  const productDetails = async () => {
    try {
      const res = await AxiosService.get(ApiRoutes.GETCART.path);
      setProducts(res.data);
    } catch (error) {
      toast.error(error.response.data.message || error.message);
    }
  };

  useEffect(() => {
    productDetails();
  }, []);

  return (
    <>
      <Navbar cart={cart} setCart={setCart} />
     
      <section className="py-5 home">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product, id) => (
              <Card cart={cart} setCart={setCart} product={product} key={id} />
            ))}
          </div>
        </div>
      </section>
    
    </>
  );
}

export default Home;
