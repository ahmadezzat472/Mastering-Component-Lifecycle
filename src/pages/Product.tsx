import { Component } from 'react'
import { constructorStyle, didMountingStyle, didUpdatingStyle, renderingStyle, unmountingStyle } from '../styles/style';

interface IProps {}
interface IState {
    counter: number;
    products: []
}

class Product extends Component <IProps, IState> {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            products: []
        }

        console.log("%cMounting - Constructor() - #1", constructorStyle);
    }

    componentDidMount(): void {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => this.setState({products: data.products}));

        console.log("%cMounting - componentDidMount() - #3 - API", didMountingStyle);
    }

    componentDidUpdate(): void {
        console.log("%cDid Update - componentDidUpdate() - After re-ender", didUpdatingStyle);
    }

    componentWillUnmount(): void {
        console.log("%cWill Unmounting - componentWillUnmount() - Destroyed", unmountingStyle);
    }

    render() {
        console.log("%cRendering - render() || re-ender - #2", renderingStyle);
        return (
            <div>
                <h1 className="text-2xl">Products Page</h1>
                {
                    this.state.products.map(({id, title} : {id: number; title:string}) => <h3 key={id}>{title}</h3>)
                }
            </div>
        )
    }
}

export default Product;
