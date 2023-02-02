import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	addItem = (e) => {
		e.preventDefault();
		this.props.onAdd(this.state.name, this.state.salary)
	}

	render() {
		const { name, salary } = this.state;
		return (
			<div className="app-add-form">
				<h3>Add a new employee</h3>
				<form
					onSubmit={this.addItem}
					className="add-form d-flex">
					<input type="text"
						className="form-control new-post-label"
						placeholder="Employee's name" 
						name="name"
						value={name}
						onChange={this.onValueChange}/>
					<input type="number"
						className="form-control new-post-label"
						placeholder="salary ($)" 
						name="salary"
						value={salary}
						onChange={this.onValueChange}/>

					<button type="submit"
						className="btn btn-outline-light"
						>Add</button>
				</form>
			</div>
		)
	}
}

export default EmployeesAddForm;