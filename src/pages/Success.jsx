import React from 'react'
import { useSearchParams } from 'react-router'

const Success = () => {
    const[SearchParams]=useSearchParams();
  const encoded=  SearchParams.get("data");
  const decoded=JSON.parse (atob(encoded));
  return (
    <div> 
        {decoded.status}
    </div>
  )
}

export default Success


// make payment page using tailwind css