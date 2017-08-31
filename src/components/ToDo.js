import React from 'react';
import List from './list.js';

const myinventory = localStorage;

export default class App extends React.Component {
    constructor(props) {
      super(props);
      let items;
      if (myinventory.getItem('items')){
       items = JSON.parse(myinventory.getItem('items'));
      }
      else{
        items = [];
      }
      this.state = {
        term: '',
        items
      };
    }
    onChange = (event) => {
        this.setState({term: event.target.value});
      }

    onSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.items);
        const items = [...this.state.items, this.state.term]
        this.setState({
          term: '',
          items
        });
        myinventory.setItem('items',JSON.stringify(items));
      }
    
      onDelete = (key) => {
        let items=this.state.items;
        items = items.filter((item, index) => index !== key);
        this.setState({...this.state, items });
      }
  
    render() {
        const {items, term} = this.state;
      return (
        <div>
            <form className="App" onSubmit={this.onSubmit}>
                <input value={this.state.term} onChange={this.onChange} />
                <button type="submit">Add New</button>
            </form>
            {items.map ((item, index) => <List value={index} item={item} onClick={this.onDelete}/>)}
        </div>
      );
    }
  }