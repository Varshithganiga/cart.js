import React from 'react';
import iteamcard from "./itemcard";
import data from "./data";
const Home = () => {
    console.warn(data.productData)
  return (
    <>
    <h1 className="text-center mt-3">All items</h1>
        <section className="py-4 container">
            <div className="row justify-content-center">

                <itemcard img="" title="title" desc="desc"/>

             </div>
         </section>
         </>
  )
}

export default Home