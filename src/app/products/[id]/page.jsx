import Image from 'next/image';
import Link from 'next/link';
import React from 'react';




async function fetchProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
}
export async function generateMetadata({ params }) {
    const { productId } = params;
    return {
      title: `Product Number ${productId}`,
    };
  }

export default async function ProductPage({ params }) {
    const product = await fetchProduct(params.id);

    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-lg-6'>
                    <Image src={product.image} alt={product.title} width={600} height={150} className='img-fluid rounded' />
                </div>
                <div className='col-lg-6 w-50'>
                    <h1 className='my-3 text-white' style={{ fontSize: '2.5rem' }}>{product.title}</h1>
                    <p className='text-white' style={{ fontSize: '1.2rem' }}>{product.description}</p>
                    <p className='h4 text-white'>Price: <span className='text-primary'>${product.price}</span></p>
                    <p className='h5 text-white'>Category: <span className='text-secondary'>{product.category}</span></p>
                    <div className=" d-flex justify-content-between ">

                    <p></p>
                    <Link href="/product" className="btn btn-primary mt-3">Back to Products</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
