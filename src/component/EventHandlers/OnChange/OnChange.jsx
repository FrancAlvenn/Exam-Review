import React, {useState} from "react";


function OnChange(){

    //input text
    const [name, setName] = useState("Guest");
    //input number
    const [quantity , setQuantity] = useState(1);
    //textarea
    const [comment, setComment] = useState("");
    //select
    const [payment, setPayment] = useState("");
    //radio
    const [shipping, setShipping] = useState("");

    function handleNameChange (event){
        setName(event.target.value);
    }

    function handleQuantityChange (event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"></input>
            <p>Name: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Add additional instruction"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping == "Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label>

            <label>
                <input type="radio" value="Delivery" checked={shipping == "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>

            
        </div>
    );

}

export default OnChange;