
import { useState } from 'react';
import './App.css';
import Card from './Card';
import Cart from './Cart';
function App() {

  const [value,setValue]=useState([
    {
      no:1,
      title:"Tesla Cyber Truck",
      price:150000,
      photo:"http://placehold.it/300x300?text=tesla"
    },
    {
      no:2,
      title:"Tesla Car",
      price:100000,
      photo:"http://placehold.it/300x300?text=tesla"
    },
    {
      no:3,
      title:"Starlink",
      price:1000,
      photo:"http://placehold.it/300x300?text=tesla"
    }
  ])  
  const [cartItem, setCartItem] = useState([])
  //const [final,setFinal]=useState(0)
  let hand = (pro) => 
  {
    setCartItem([...cartItem,pro])
    // setFinal(final + pro.price)
  }
  
  let delect=(cadDelect) =>{
    // setFinal(final - cadDelect.price)
    let close=cartItem.filter(objj => objj.no !== cadDelect.no)
    setCartItem([...close])
  }


  return (
    <div className="container">
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
            
            {
              value.map((item)=><Card data={item} hand={hand}></Card> )
            }

          </div>
        </div>
        <div className='col-lg-4 mt-5'>
          <div className='row'>
            <h4 className="border border-5 text-center">Cart details</h4>
            <Cart cartItem={cartItem} delect={delect}/>
           

          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
