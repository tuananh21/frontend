import React, { useState, useEffect } from 'react';
import { fetchPopularItems } from '../../services/api';
import { Link } from 'react-router-dom';

const ViewPopularItems = () => {
    const [popularItems, setPopularItems] = useState([]);

    const loadPopularItems = async () => {
        try {
            const products = await fetchPopularItems();
            setPopularItems(products);
        } catch (err) {
            console.error('Error loading popular items:', err);
        }
    };

    useEffect(() => {
        loadPopularItems();
    }, []);

    return (
        <div className="row g-3">
            {popularItems.length > 0 ? (
                popularItems.map((e, i) => (
                    <div className="col-md-6 col-lg-4 col-xl" key={i}>
                        <div className="product-item">
                            <div className="product-img">
                                <span className="type new">New</span>
                                <Link to={`/Product/${e.id}`}>
                                    <img src={e.image} alt={e.name} />
                                </Link>
                                <div className="product-action-wrap">
                                    <div className="product-action">
                                        <Link to="#" data-bs-toggle="modal" data-bs-target="#quickview" data-bs-placement="top" title="Quick View">
                                            <i className="far fa-eye" />
                                        </Link>
                                        <Link to="#" data-bs-placement="top" title="Add To Wishlist">
                                            <i className="far fa-heart" />
                                        </Link>
                                        <Link to="#" data-bs-placement="top" title="Add To Compare">
                                            <i className="far fa-arrows-repeat" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="product-content">
                                <h3 className="product-title">
                                    <Link to={`/Product/${e.id}`}>{e.name}</Link>
                                </h3>
                                <div className="product-rate">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <i key={index} className={index < (e.rating || 0) ? "fas fa-star" : "far fa-star"} />
                                    ))}
                                </div>
                                <div className="product-bottom">
                                    <div className="product-price">
                                        <span>${e.price}</span>
                                    </div>
                                    <button type="button" className="product-cart-btn" data-bs-placement="left" title="Add To Cart">
                                        <i className="far fa-shopping-bag" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>
                    <p>Popular items are empty.</p>
                </div>
            )}
        </div>
    );
};

export default ViewPopularItems;
