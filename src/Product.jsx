import React from "react";
import Card from "./global/card";
import PData from "./global/pdata";

function Product() {
    return (
        <>
            <section className="container-fluid product-section">
            <div className="ppage-heading ms-0">
                    <h1 className="jost fw-500 font-25 text-center ">Best Selling Products</h1>
                    <p className="font-16 font-16 text-center pb-4">At Jodhpuri Furniture, we understand that your home is more than just a physical space.</p>
            </div>
                <div className="container"> 
                    <div className="row d-flex justify-content-center">
                            {PData.map(function pCard(val) {
                                return (
                                    <>
                                      <div className="col-sm-3 col-6">
                                        <Card
                                            imglink={val.imglink}
                                            pName={val.pName}
                                            dPrice={val.dPrice}
                                            sPrice={val.sPrice}
                                            imgurl={val.imgurl}
                                        />
                                        </div>
                                    </>
                                )
                            })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Product;





