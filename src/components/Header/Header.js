import React, { Component } from 'react';
import './Header.scss';
import user from './../../assets/images/user.png';
import CartCom from './../cart/cart';
class HeaderCom extends Component { 
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
            console.log(this.props.cartList)
        }
    render() {
        return (
            <div className='mb-5'>
                <nav className="navbar navbar-light navbar-expand-lg bg-light justify-content-between">
                <div className='container'>
                    <span className="navbar-brand mb-0 h1 mr-auto">Navbar</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* cart */}
                        <CartCom 
                            count={this.props.count} 
                            cartList={this.props.cartList} />
                    {/* user actions */}
                    <div className="collapse navbar-collapse" id="navbarNavDropdown" >
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={user} className='pp' />
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Edit/view profile</a>
                                <a className="dropdown-item" href="#">Sign out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
            </div>
        );
    };
}

export default HeaderCom;