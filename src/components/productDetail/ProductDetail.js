
import "./ProductDetail.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useDispatch } from "react-redux";
import { add } from "../../reducers/cartReducer";
const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    
    useEffect(() => {

        const getProduct = () => {
            setLoading(true);
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(json => {
                    setProduct(json);
                    //console.log(json);
                    setLoading(false);
                })

        }
        getProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAddCart = (product) => {
        dispatch(add(product));
    }

    const Loading = () => {
        return (

            <SkeletonTheme baseColor="#e6e6e6" highlightColor="#ffffff">
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={40} count={3} />
                    <Skeleton height={20} width={150} />
                    <Skeleton height={55} width={150} />
                    <Skeleton height={20} count={3} />
                    <div className="d-flex gap-3">
                        <Skeleton height={50} width={100} />
                        <Skeleton height={50} width={100} />
                    </div>
                </div>
            </SkeletonTheme>

            

        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="p-div col-md-6 col-sm-12 col-xs-12 ">
                    <img className="p-img" src={product.image} alt={product.title} height="350px" width="350px" />
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <h4 className="text-uppercase text-black-50 mt-3">{product.category}</h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        ${product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button className=" cart-btn addto me-3 " onClick={() => { handleAddCart(product) }}>Add to Cart</button>
                    <Link className="cart-btn goto" to="/cart">Go to Cart</Link>
                </div>
            </>
        )
    }

    return (

        <div className="container-fluid product-container py-3 ">
            <div className="row py-5 w-75 mx-auto">
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>

    )
}
export default ProductDetail;