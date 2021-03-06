import React from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import './PlaceOrder.css'
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

const PlaceOrder = () => {
    const [service, setService] = useState([])
    const { orderId } = useParams()
    // Fetch service
    useEffect(() => {
        fetch(`https://lit-brushlands-74039.herokuapp.com/orders/${orderId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [orderId])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://lit-brushlands-74039.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset()
                }
            })
        console.log(data);
    }
    return (
        <div className='full-form'>
            <form className='form-design' style={{ backgroundColor: '#9c9c', padding: '1rem' }} onSubmit={handleSubmit(onSubmit)}>
                <h2>Place your order</h2>
                <input {...register("serviceName")} value={service.name} defaultValue={orderId} />
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <input {...register("address")} placeholder="Address" />
                <input {...register("phone")} placeholder="Phone Number" />
                <input type="email" {...register("email")} placeholder="Email" />
                <input type="submit" value='Confirm Order' className='btn btn-success mb-2' />
            </form>
        </div>
    );
};

export default PlaceOrder;