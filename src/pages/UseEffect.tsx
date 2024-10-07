import { useEffect, useState } from "react"

const UseEffect = () => {
    const [product, setProduct] = useState([])

    useEffect( () => {
        const controller = new AbortController()
        const signalValue = controller.signal;

        /* ** componentDidMount run only one time when component created (Because the Dependency List is free) ** */
        const fetchProduct = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products', {signal: signalValue})
                const jsonData = await response.json();
                setProduct(jsonData.products)
            } catch(error){
                console.log(error);
            }
        }

        fetchProduct()

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