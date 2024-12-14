import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState()
    const [productsLength, setProductsLength] = useState(6)

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <div id='products' className='my-28'>
            <div className='text-center w-full flex flex-col items-center space-y-6'>
                <p className='text-lg font-bold text-orange-600 '>Popular Products</p>
                <h1 className='text-5xl font-bold '>Browse Our Products</h1>
                <p className='w-1/2'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>


                <div className='grid grid-cols-1 w-full lg:grid-cols-3 gap-10'>
                    {
                        products?.slice(0, productsLength).map(product => <div className='card card-compact shadow-xl'
                            key={product.id}>
                            <figure className='bg-base-200 p-4'><img src={product.image} className='w-full h-56' alt="" /></figure>
                            <div className='card-body text-center'>
                                <div className="rating flex justify-center">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <h1 className='text-2xl font-bold'>{product.title}</h1>
                                <p className='text-xl text-orange-600 font-bold'>${product.price}</p>
                            </div>
                        </div>)
                    }
                </div>

                {
                    <div className={productsLength === products?.length && 'hidden'}>
                        <button onClick={()=>setProductsLength(products.length)} className='btn border-2 border-orange-600 text-orange-600 text-xl'>More products</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Products;