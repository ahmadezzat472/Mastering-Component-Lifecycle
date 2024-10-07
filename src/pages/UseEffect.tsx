import { useEffect, useState } from "react"

const UseEffect = () => {
    const [product, setProduct] = useState([])

    /* ** componentDidMount run only one time when component created (Because the Dependency List is free) ** */
    useEffect( () => {
        const controller = new AbortController()
        const signalValue = controller.signal;

        // ** IIFE
        ( async() => {
            try {
                const response = await (await (fetch('https://dummyjson.com/products', {signal: signalValue}))).json()
                setProduct(response.products)
            } catch(error){
                console.log(error);
            }
        })()

        /* The abort() method of the AbortController interface aborts an asynchronous operation 
        before it has completed. This is able to abort fetch requests */
        return () => {
            controller.abort()
        }
    }, [])

    return (
        <div>
            <h1 className="text-2xl">UseEffect page</h1>
            { 
                product.length != 0 ? 
                product.map( ({id, title} : {id: number; title:string}) => <h2 key={id}>{title}</h2>) :
                <h3>Loading ...</h3>
            }
        </div>
    )
}

export default UseEffect