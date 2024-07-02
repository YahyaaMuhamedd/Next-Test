'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { delay, motion } from 'framer-motion';



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


    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 200, opacity: 0, duration: 5 },
        visible: {
            y: 0,
            opacity: 1,
            delay: 10,

        }
    };

    return (
        <>
                <div className="row container m-auto mt-5">
                    <h1 className='text-center text-white'>Products</h1>
                    {allProducts.map((product) => (
            <motion.ul
                className="container"
                variants={item}
                initial="hidden"
                animate="visible"
            >
                        <motion.div key={product.id} className="col-sm-12 col-md-6 col-lg-4 mb-4"

                            variants={container}
                            initial="hidden"
                            animate="visible">
                            <motion.div className="card h-100" key={index}>
                                <Image src={product.image} className="card-img-top" height={400} width={300} alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">${product.price}</p>
                                    <Link href={`/products/${product.id}`} className="btn btn-primary">View Details</Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.ul>
                    ))}
                </div>

        </>
    );
}


