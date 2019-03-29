import React, { Component } from 'react';
import './Products.scss';
import productImg from './../../assets/images/product.jpg'
class ProductsCom extends Component { 
    constructor(props) {
        super(props);
        this.i = 0;
        this.state = {
            error: null,
            isLoaded: false,
            items: []

        };
        };
    // Methods

    updateItem(item) {
        this.props.item(item);
    }

    
    componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/posts?_start=10&_limit=10')
            .then(res => res.json())
            .then(
                (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
                },
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                }
            )
        }


    render() {
        // const { error, isLoaded, items } = this.state;
        const error = this.state.error;
        const isLoaded = this.state.isLoaded;
        const items = this.state.items;
            if (error) {
            return <div>Error: {error.message}</div>;
            } else if (!isLoaded) {
            return <div>Loading...</div>;
            } else {
            return (
                <div className='container'>
                <div className='row'>
                    {items.map(item => (
                        <div className='col-md-4 mb-4'  key={item.id}>   
                                <div className="card" >
                                    <img className="card-img-top" src={productImg}  alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.titel}</h5>
                                        <h5 className="card-title">Category {item.id}</h5>
                                        <h5 className="card-title">Price {item.id * 15}</h5>
                                        <a  className="btn btn-primary" 
                                        onClick={ () => {
                                            this.updateItem(item);
                                            this.props.counter();
                                            } } >Add to card</a>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
                </div>
            );
            }
    }
}

export default ProductsCom;