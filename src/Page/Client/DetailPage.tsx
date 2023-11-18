import { Link, useParams } from 'react-router-dom'

const DetailPage = ({products}) => {
  const {id} = useParams()
  const current = products.find((item)=>item.id == Number(id))
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-white shadow-lg">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <a className="navbar-brand" href="index.html">
                    Crispy Kitchen
                </a>

                <div className="d-lg-none">
                    <button type="button" className="custom-btn btn btn-danger" data-bs-toggle="modal" data-bs-target="#BookingModal">Reservation</button>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/"}>Home</Link>
                        </li>

                        <li className="nav-item">
                           <Link className="nav-link" to={"/"}>About</Link> 
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to={"/"}>Contact</Link> 
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to={"/signup"}> Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/signup"}> Sign In</Link>
                        </li>
                        

                    </ul>
                </div>

              

            </div>
            
        </nav>
        <main>
    
    <div style={{gap:"20px",textAlign:"center"}}>
    <div style={{fontSize:"20pt",fontWeight:"bold",margin:" 30px 0px"}}>{current?.name}</div>
      <div>
        <img style={{width:"400px",height:"400px"}}  src={current?.image} alt="" />
        </div>
        <div>
        <h6><span style={{color:"red",fontWeight:"bolder",fontSize:"14pt" }}>Name:</span>{current?.name}</h6>
        <h6>Price:<span className="price-tag bg-white shadow-lg ms-4"><small>$</small>{current?.price}</span></h6>
        <p> <h6 className="reviews-text mb-0 me-3">{current?.description}</h6></p>
        <button>Oder</button>
        </div>
    </div>
    <hr />
    </main>
    <div>
      <section className="menu section-padding">
      
    <div className="container">
        <div className="row">
        <div style={{fontSize:"20pt",marginBottom:"30px",textAlign:"center"}}>Seller</div>
           {products.map((item,index)=>{
            return(
              <div key={index + 1} className="col-lg-4 col-md-6 col-12">
              <div className="menu-thumb">
                  <div className="menu-image-wrap">
                      <Link to={`/detail/${item.id}`}> <img style={{maxWidth:"100%",height:"auto"}} src={item.image} className="img-fluid menu-image" alt=""/></Link>

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
    </div>
        <footer className="site-footer section-padding">
            
            <div className="container">
                
                <div className="row">

                    <div className="col-12">
                        <h4 className="text-white mb-4 me-5">Crispy Kitchen</h4>
                    </div>

                    <div className="col-lg-4 col-md-7 col-xs-12 tooplate-mt30">
                        <h6 className="text-white mb-lg-4 mb-3">Location</h6>

                        <p>121 Einstein Loop N, Bronx, NY 10475, United States</p>

                        <a href="https://goo.gl/maps/wZVGLA7q64uC1s886" className="custom-btn btn btn-dark mt-2">Directions</a>
                    </div>

                    <div className="col-lg-4 col-md-5 col-xs-12 tooplate-mt30">
                        <h6 className="text-white mb-lg-4 mb-3">Opening Hours</h6>

                        <p className="mb-2">Monday - Friday</p>

                        <p>10:00 AM - 08:00 PM</p>

                        <p>Tel: <a href="tel: 010-02-0340" className="tel-link">010-02-0340</a></p>
                    </div>

                    <div className="col-lg-4 col-md-6 col-xs-12 tooplate-mt30">
                        <h6 className="text-white mb-lg-4 mb-3">Social</h6>

                        <ul className="social-icon">
                            <li><a href="#" className="social-icon-link bi-facebook"></a></li>

                            <li><a href="#" className="social-icon-link bi-instagram"></a></li>

                            <li><a href="https://twitter.com/search?q=tooplate.com&src=typed_query&f=live" target="_blank"
                            	 className="social-icon-link bi-twitter"></a></li>

                            <li><a href="#" className="social-icon-link bi-youtube"></a></li>
                        </ul>
                    
                        <p className="copyright-text tooplate-mt60">Copyright © 2022 Crispy Kitchen Co., Ltd.</p>
                        <span>Design: <a rel="nofollow" href="https://www.tooplate.com/" target="_blank"/>Tooplate</span>
                        
                    </div>

                </div>
                
             </div>
             
        </footer>

        <div className="modal fade" id="BookingModal"  aria-labelledby="BookingModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="mb-0">Reserve a table</h3>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body d-flex flex-column justify-content-center">
                        <div className="booking">
                            
                            <form className="booking-form row" role="form" action="#" method="post">
                                <div className="col-lg-6 col-12">
                                    <label  className="form-label">Full Name</label>

                                    <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required/>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <label  className="form-label">Email Address</label>

                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="your@email.com" required/>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <label  className="form-label">Phone Number</label>

                                    <input type="telephone" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" placeholder="123-456-7890"/>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <label  className="form-label">Number of persons</label>

                                    <input type="text" name="people" id="people" className="form-control" placeholder="12 persons"/>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <label  className="form-label">Date</label>

                                    <input type="date" name="date" id="date" value="" className="form-control"/>
                                </div>

                                <div className="col-lg-6 col-12">
                                    <label  className="form-label">Time</label>

                                    <select className="form-select form-control" name="time" id="time">
                                      <option value="5" selected>5:00 PM</option>
                                      <option value="6">6:00 PM</option>
                                      <option value="7">7:00 PM</option>
                                      <option value="8">8:00 PM</option>
                                      <option value="9">9:00 PM</option>
                                    </select>
                                </div>

                                <div className="col-12">
                                    <label  className="form-label">Special Request</label>

                                    <textarea className="form-control"  id="message" name="message" placeholder=""></textarea>
                                </div>

                                <div className="col-lg-4 col-12 ms-auto">
                                    <button type="submit" className="form-control">Submit Request</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="modal-footer"></div>
                    
                </div>
                
            </div>
        </div>
    
    </>
  )
}

export default DetailPage