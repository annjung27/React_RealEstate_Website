import React from 'react'
import './ListingSection.css'
import ListingItem from './ListingItem'
import { Button } from './Button'

function ListingSection() {
  return (
    <div className='listings'>
        <h1>FEATURED LISTINGS</h1>
        <div className='listings__container'>
            <div className='listings__wrapper'>
                <ul className='listings__items'>
                    <ListingItem
                    src="images/img_5.jpg"
                    text="115 Harrison Ave Apt 4,Sausalito, CA 94965 "
                    price ='$1,250,000 | 2bed | 2bath | 1,000sqft'
                    label="For Sale"
                    path="/properties"
                    />
                    <ListingItem
                    src="images/img_6.jpg"
                    text="4476 Harrison Ave,San Francisco, CA 94118"
                    price ='$1,595,000 | 5bed | 3bath | 2,554sqft'
                    label="For Sale"
                    path="/properties"
                    />
                    <ListingItem
                    src="images/img_7.jpg"
                    text="119 Harrison Ave Apt 4,Sausalito, CA 94965"
                    price ='$3,988,000 | 6bed | 6bath | 4,042sqft'
                    label="For Sale"
                    path="/properties"
                    />
                </ul>
                <ul className='listings__items'>
                    <ListingItem
                    src="images/img_8.jpg"
                    text="117 Harrison Ave Apt 4,Sausalito, CA 94965"
                    price ='$1,250,000 | 2bed | 2bath | 1,000sqft'
                    label="For Sale"
                    path="/properties"
                    />
                    <ListingItem
                    src="images/img_9.jpg"
                    text="338 Main St Unit, San Francisco, CA 94105"
                    price ='$3,295,000 | 3bed | 3bath | 1,791sqft'
                    label="For Sale"
                    path="/properties"
                    />
                    <ListingItem
                    src="images/img_10.jpg"
                    text="115 Harrison Ave Apt 4,Sausalito, CA 94965"
                    price ='$3,784,000 | 6bed | 5bath | 2,911sqft'
                    label="For Sale"
                    path="/properties"
                    />
                </ul>
            </div>
            <div className='listing-button'>
                <Button
                path='/properties'
                className='btn'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    VIEW ALL
                </Button>
            </div>
        </div>
    </div>
  )
}

export default ListingSection