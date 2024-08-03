import React, { useEffect, useState } from 'react'
import UserNavbar from '../../../components/UserNavbar'
import Categories from '../../../components/Categories'
import { getProductsByMacrameandKnottingApi } from '../../../apis/Api';

const MacrameAndKnotting = () => {
 
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductsByMacrameandKnottingApi().then((res) => {
      console.log(res.data)
      setProducts(res.data.products)
    })
  }, [])

  return (
    <div>
      <UserNavbar />
      <div className='main-body'>
        <Categories />
        <div>
          {products.length === 0 ? (
            <p>This category is empty.</p>
          ) : (
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {products.map((item) => (
                <div key={item._id} className="col mb-4">
                  <a href={`/user/productDetails/${item._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="card">
                      <img src={item.productImageURL} className="card-img-top" alt={`Card logo for ${item.productName}`} />
                      <div className="card-body">
                        <h5 className="card-title">{item.productName}</h5>
                        <p className="card-price-range">NPR. {item.productPrice}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MacrameAndKnotting
