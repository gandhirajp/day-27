import React from 'react'

function Cart(props) {
    return (
        <ol class="list-group list-group-numbered">
              {
               props.cartItem.map((items) => {
                  return <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                      <div class="fw-bold">{items.title}</div>
                      ${items.price}
                    </div>
                    <button onClick={()=>(props.delect(items))} class="badge bg-danger rounded-pill">X</button>
                  </li>
                })
              }

            </ol>
    )
}

export default Cart
