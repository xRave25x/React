import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: "John A." , salary: 800, increase: false, rise: true, id: 1},
        {name: "Antony W." , salary: 3000, increase: true, rise: false, id: 2},
        {name: "Smith S." , salary: 15000, increase: false, rise: false, id: 3}
      ],
      maxId: 4,
    }
  }
  
  deleteItem = (id) => {
    this.setState(({data}) => {
      return{
        data: data.filter(item => item.id !== id)
      }
    })
  };

  addItem = (item) => {
    this.setState(({data}) => {
       const newItem = {
          id: this.state.maxId,
          name: item.name,
          salary: item.salary,
          increase: false
       }
       return {
          data: [...data, newItem],
          maxId: this.state.maxId + 1,
       }
    })
 }

  onToggleIncrease = (id) => {
    console.log(`Increase this ${id}`);
  }

  onToggleRise = (id) => {
    console.log(`Rise this ${id}`);
  }


  render() {
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}/>
          <EmployeesAddForm
          id={this.state.maxId}
          onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
