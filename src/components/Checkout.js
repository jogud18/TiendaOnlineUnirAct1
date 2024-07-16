import React from 'react';

function Checkout() {
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form>
        <label>Nombre</label>
        <input type="text" />
        <label>Direccion</label>
        <input type="text" />
        <label>Metodo de pago</label>
        <input type="text" />
        <button>orden</button>
      </form>
    </div>
  );
}

export default Checkout;