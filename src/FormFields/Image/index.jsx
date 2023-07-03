import React from 'react'

function Image({src,alt,...otherProps}) {
  return (
    <img src={`https://salt-mne-be-s8vht.ondigitalocean.app${src}`} alt={alt} {...otherProps} />

  )
}

export default Image