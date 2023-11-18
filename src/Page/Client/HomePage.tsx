import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = ({products}) => {
  return (
    <section className="menu section-padding">
      
    <div className="container">
        <div className="row">

            <div className="col-12">
                <h2 className="text-center mb-lg-5 mb-4">Món Ăn Ngon</h2>
            </div>

           {products.map((item,index)=>{
            return(
              <div key={index + 1} className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                  <div className="menu-image-wrap">
                      <Link to={`/detail/${item.id}`}> <img  style={{maxWidth:"100%",height:"auto"}} src={item.image} className="img-fluid menu-image" alt=""/></Link>

                      <span className="menu-tag bg-warning">Best Seller</span>
                  </div>

                  <div className="menu-info d-flex flex-wrap align-items-center">
                      <h4 className="mb-0">{item.name}</h4>

                      <span className="price-tag bg-white shadow-lg ms-4"><small>$</small>{item.price}</span>

                      <div className="d-flex flex-wrap align-items-center w-100 mt-2">
                          <h6 className="reviews-text mb-0 me-3">{item.description}</h6>

                          

                          <p className="reviews-text mb-0 ms-4">102 Reviews</p>
                      </div>
                  </div>
              </div>
          </div>
            )
           })}
        </div>
    </div>
</section>
  )
}

export default HomePage