import React from 'react'

function Card(props) {
    return (
        <>
            <div className='mt-4'>
                <div className="sec4-box" >
                    <a href={props.imgurl} >
                    <img src={props.imglink} alt='loading' className="img-fluid" />
                    <h3 className="font-16 jost color-22222">{props.pName}</h3>
                    <span className="jost font-16 fw-600">₹{props.dPrice}</span> <strike className="font-14">₹{props.sPrice}</strike>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Card;
