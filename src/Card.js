import React from "react"    
export default function Card(props) {

    return (
        <div className='col-lg-4 mt-5'>
            <div class="card">
                {/* <img src={props.data.photo} class="card-img-top" alt="img" /> */}
                <div class="card-body">
                    <h5 class="card-title">{props.data.title}</h5>
                    <p class="card-text">$ {props.data.price}</p>
                    <button  onClick={()=>{props.hand(props.data)}} class="btn btn-primary">Add</button>
                </div>
            </div>
        </div>

    )
}