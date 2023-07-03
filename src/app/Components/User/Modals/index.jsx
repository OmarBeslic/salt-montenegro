import React from 'react'
import ImageModal from './ImageModal'
import Booking from './BookingModal'

function Modals({modal}) {
    const allModals ={
        image: <ImageModal />,
        booking: <Booking />
    }
  return allModals[modal]
}

export default Modals