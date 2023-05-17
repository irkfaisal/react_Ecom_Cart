import React from 'react'
import { Card, Button } from "react-bootstrap";
import Rating from './Rating'
import { CartState } from '../Context/Context';

const SingleProduct = ({ item }) => {
    const { state: { cart }, dispatch, } = CartState();
    console.log("cart", cart)
    return (
        <div className="products">
            <Card>
                <Card.Img variant="top" src={item.image} alt={item.name} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>₹ {item.price.split(".")[0]}</span>
                        {item.fastDelivery ? (
                            <div>Fast Delivery</div>
                        ) : (
                            <div>4 days delivery</div>
                        )}
                        <Rating rating={item.ratings} />
                    </Card.Subtitle>
                    {cart.some((p) => p.id === item.id) ? (
                        <Button
                            variant="danger"
                            onClick={() =>
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: item,
                                })
                            }
                        >
                            Remove from Cart
                        </Button>
                    ) : (
                        <Button
                            onClick={() =>
                                dispatch({
                                    type: "ADD_TO_CART",
                                    payload: item,
                                })
                            }
                            disabled={!item.inStock}
                        >
                            {!item.inStock ? "Out of Stock" : "Add to Cart"}
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProduct