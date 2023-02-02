import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPannel from '../search-pannel/search-pannel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "John C.", salary: 800, increase: true, id: 1 },
				{ name: "ALex M.", salary: 3300, increase: false, id: 2 },
				{ name: "Carl W.", salary: 5000, increase: false, id: 3 }
			]
		}
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			// const index = data.findIndex(elem => elem.id === id);
			// const before = data.slice(0, index);
			// const after = data.slice(index + 1);
			// const newArr = [...before, ...after];

			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	onAdd = (name, salary) => {
		const info = {
			name: name,
			salary: salary,
			increase: false,
			id: 10
		}
		this.setState(({data}) => {
			const newData = [...data, info];
			return {
				data: newData
			}
		} )
	}
	
	render() {
		return (
			<div className="app">
				<AppInfo />

				<div className="search-panel">
					<SearchPannel />
					<AppFilter />
				</div>

				<EmployeesList
					data={this.state.data}
					onDelete={this.deleteItem} />
				<EmployeesAddForm onAdd={this.onAdd} />
			</div>
		);
	}
}


export default App;