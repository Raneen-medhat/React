import React, { Component } from 'react';
import './cart.scss';
import cart from './../../assets/images/cart.png'
class CartCom extends Component { 
    constructor(props) {
    super(props);
    this.state = {
        count: props.count,
        cartList: props.cartList
        }
    }
    componentWillReceiveProps() {
        this.setState({
            cartList: this.props.cartList
        })
        console.log(this.state.cartList)
    }
    render() {
        return (
            <div className="dropdown show " id='cart'>
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={cart} className='cart' />
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">{this.props.count}</a>
                        
                    <ul>
                      

                        {this.state.cartList.map(item => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                        
                        
                    </ul>

                </div>
            </div>
        );
    }
}

export default CartCom;