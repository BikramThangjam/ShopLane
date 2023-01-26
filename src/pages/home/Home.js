
import './Home.css';
import Products from "../../components/products/Products"
import { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import $ from "jquery";

function Home({catProduct,catName}) {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    const getProducts = () => {

      setLoading(true);

      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          setData(json);
          //console.log(json);
          setError();
          setLoading(false);
        })
        .catch(err => {
          console.log("Oops! error occurred!")
          setError(err);
          setLoading(false);
        })
    }

    getProducts();

  }, [])

  useEffect(()=>{
    setFilter(catProduct);
  },[catProduct,catName])




  const Loading = () => {
    return (
      <div className='row pt-5 ps-4 pe-4'>
        <SkeletonTheme baseColor="#e6e6e6" highlightColor="#ffffff">
          <div className="col-12 col-xl-3 col-md-4 col-sm-6 mb-3 ">
            <Skeleton height={494} width={339} />
          </div>
          <div className="col-12 col-xl-3 col-md-4 col-sm-6 mb-3 ">
            <Skeleton height={494} width={339} />
          </div>
          <div className="col-12 col-xl-3 col-md-4 col-sm-6 mb-3 ">
            <Skeleton height={494} width={339} />
          </div>
          <div className="col-12 col-xl-3 col-md-4 col-sm-6 mb-3 ">
            <Skeleton height={494} width={339} />
          </div>        
        </SkeletonTheme>
      </div>
    )
  }

  const productFilter = (cat) => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${cat}`)
            .then(res=>res.json())
            .then(json=>{
              setFilter(json);
              setLoading(false);
            })

  }

  //Keeping button active clicked on another button
  $(document).ready(function(){
    $('.category-btn').click(function(){
      $('.category-btn').removeClass('active');
      $(this).addClass('active');
    });
  });


  return (
    <div>
      <div className="sticky-top mt-1 pt-4 pb-4 shadow-sm category-main d-flex justify-content-center gap-3">
        <button type="button" className="btn btn-outline-dark category-btn" onClick={() => { setFilter(data) }}>All</button>
        <button type="button" className="btn btn-outline-dark category-btn" onClick={() => productFilter("men's clothing")}>Men's Clothing</button>
        <button type="button" className="btn btn-outline-dark category-btn" onClick={() => productFilter("women's clothing")}>Women's Clothing</button>
        <button type="button" className="btn btn-outline-dark category-btn" onClick={() => productFilter("jewelery")}>Jewelery</button>
        <button type="button" className="btn btn-outline-dark category-btn" onClick={() => productFilter("electronics")}>Electronics</button>
      </div>
      {
        error ? (
          <div className="pt-5 fs-4 text-center">
            Sorry! No Products to show
          </div>
        ) : (
          loading ? <Loading /> : <Products items={filter.length > 0 ? filter : data} categoryName={catName}/>
        )
      }

    </div>
  );
}

export default Home;
