import React, { Component } from 'react';
import logo from './logo.svg';
import HeaderCom from './components/Header/Header'
import ProductsCom from './components/products/product'
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0 , // initial value
      item: {},
      cartList: []
    }
  }
// --------------------- METHODS --------------------
  /* 
    update products counter "triger this func from cart component"
    each time the user click on add-to-cart btn the counter will be increament
    and update the state
  */ 
  updateCount(){
    this.setState({
      count: this.state.count+=1
    })
  }
  
  /* 
    psuh each clicked item in cartlist array 
  */ 
  updateItem( newItem ) {
    this.state.cartList.push(newItem);
    this.setState(
      this.state
    )
    console.log(this.state.cartList)
  }

  render() {
    return (
      <div className="App">
        <HeaderCom 
          count={this.state.count}
          cartList={this.state.cartList}
        />
        <ProductsCom  
          counter={this.updateCount.bind(this)}
          item={this.updateItem.bind(this)}/>
      </div>
    );
  }
}

export default App;
