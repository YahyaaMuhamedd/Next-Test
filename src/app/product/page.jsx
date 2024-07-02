'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function Products() {
    const [allProducts, setAllProducts] = useState([]);
 
    

    useEffect(() => {
        fetchProducts();
    }, []);


    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setAllProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

   

    return (
        <>
            <div className="row container m-auto mt-5">
                <h1 className='text-center text-white'>Products</h1>
                {allProducts.map((product) => (
                    <div key={product.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <div className="card h-100">
                            <Image src={product.image} className="card-img-top" height={400} width={300} alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">${product.price}</p>
                                <Link href={`/products/${product.id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
        </>
    );
}


