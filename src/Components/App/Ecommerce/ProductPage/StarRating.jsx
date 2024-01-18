import React, { Fragment, useState } from 'react';
import { H3 } from '../../../../AbstractElements';
import { ProductReview, Womenpinkshirt } from '../../../../Constant';
import { Rating } from 'react-simple-star-rating'

const StarRatings = () => {
    const [rating, setRating] = useState(1);
    const changeRating = (newRating) => {
        setRating(newRating);
    };
    return (
        <Fragment>
            <div className="product-page-details mt-0">
                <H3>{Womenpinkshirt}</H3>
                <div className="pro-review">
                    <div className="d-flex">
                        <div className='rating'>
                            <Rating onClick={changeRating} initialValue={rating} size='17px' style={{padding:'0'}}/>                       
                        </div>
                        <span>{ProductReview}</span> 
                    </div> 
                </div>
            </div>
        </Fragment>
    );
};
export default StarRatings;