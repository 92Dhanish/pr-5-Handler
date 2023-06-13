import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UseRef from './Components/UseRef/UseRef';

function App() {

  return (
    <>

      <div className="container">
        <div className="row">
          <div className="card col-md-3" >
            <div className="card-img">
            <img src="../public/images/pizza.jpg" alt="" />
            </div>
              <h3 className='card-title'>Pizza</h3>
              <h4 className='card-p'>250/-rs</h4>
              <UseRef/>

              <a href="" className='btn btn-primary'>Submit</a>
          </div>
          <div className="card col-md-3" >
            <div className="card-img">
            <img src="../public/images/burger.jpg" alt="" />
            </div>
              <h3 className='card-title'>Burger</h3>
              <h4 className='card-p'>350/-rs</h4>
             <UseRef/>
              <a href="" className='btn btn-primary'>Submit</a>
          </div>
          <div className="card col-md-3" >
            <div className="card-img">
            <img src="../public/images/m.jpg" alt="" />
            </div>
              <h5 className='card-title'>your number</h5>
              <h4 className='card-p'>150/-rs</h4>
              <UseRef/>
              <a href="" className='btn btn-primary'>Submit</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
