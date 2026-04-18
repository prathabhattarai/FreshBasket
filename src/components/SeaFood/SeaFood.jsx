import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgSeaFood from '../../assets/Grocery Website Assets/seafood-banner.jpg'
const SeaFood = () => {
  return (
    <div>
      <CategoryPage title="Meat &Sea Food" bgImage={BgSeaFood} categories={['Meat','SeaFood']} />
          </div>
  )
}

export default SeaFood