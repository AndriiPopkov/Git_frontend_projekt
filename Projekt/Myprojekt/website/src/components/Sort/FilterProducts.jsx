import React from 'react'

export default function FilterProducts() {
    function handleSaleBox(e) {
        console.log(e.target.checked);
    }

  return (
    <div>
        <input onClick={handleSaleBox} type="checkbox" />
    </div>
  )
}
