import React from 'react'

const Gallery = (props) => {
    const name = props.name;
    const category = props.category;
    const image = props.image;
    const link = props.link;
  return (
    <div>
        <div class="container pt-24 lg:pl-48 md:pl-32 sm:pl-10">
      <div class="column-1">
        <h4 className='text-2xl font-bold'>{name}</h4>
        <hr className='w-10 mt-4'/>
        <h5 className='text-md font-medium pt-2'>{category}</h5>
        
      </div>
      <div class="column-2">
        <dic className="color">
        <a href={link}><img className="rounded image" src={image}/></a>
        </dic>
      </div>
    </div>
    </div>
  )
}

export default Gallery