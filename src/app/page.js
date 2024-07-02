'use client'
import  { useEffect } from 'react'
import Slider from './component/slider';
import Products from './product';


const Page = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div>
     
     <Slider />
     <Products />
    </div>
  )
}

export default Page
