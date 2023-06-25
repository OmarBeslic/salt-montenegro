import React from 'react'

function Image({src,alt,...otherProps}) {
  return (
    <img src={`http://localhost:1337${src}`} alt={alt} {...otherProps} />

  )
}

export default Image