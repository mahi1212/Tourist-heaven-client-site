import React from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";

const NewService = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        axios.post('https://fierce-hamlet-00780.herokuapp.com/services', data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Added successfully')
                reset()
            }
        })
        console.log(data);
    }
    return (
        <div>
            <div className='full-form'>
            <h2 style={{marginBottom :'-5rem'}} >Add New Service</h2>
            <form  className='form-design' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Place' />
                <textarea {...register("description")} placeholder="Description"/>
                <input {...register("price")} placeholder="Trip Fee"/>
                <textarea {...register("img")} placeholder="Viewer redirect link(from imgBB)"/>
                <p className='text-success px-1'>Upload image from:<a href="https://imgbb.com/">Submit redirect link</a></p>
                <input type="submit" value='Confirm Order' className='btn btn-success mb-2' />
            </form>
        </div>
        </div>
    );
};

export default NewService;