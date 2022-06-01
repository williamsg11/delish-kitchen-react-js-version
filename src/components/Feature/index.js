import React from 'react'
import{FeatureContainer, FeatureButton} from './featureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Meal Of The Day</h1>
      <p>Fried Rice And Chicken</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  )
}

export default Feature
