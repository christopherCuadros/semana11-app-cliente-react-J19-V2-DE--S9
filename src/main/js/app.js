const React = require('react');
const ReactDOM = require('react-dom');

const client = require('./client');

class App extends React.Component {
	constructor(props) {
		super(props);
		// este state de instrumentosVariable es el nombre de la variable
		this.state = {instrumentosvariable: []};
	}
	componentDidMount() {
		client({method: 'GET', path: '/api/instrumentos'}).done(response => {
			this.setState({instrumentosvariable: response.entity._embedded.instrumentos});//este instrumento hago referencia a la coleccion que esta en el repository
		});
	}
	render() {
		return (
			// instrumentoQuePaso es la variable que le paso al instrumento list al cual le paso la variable instrumentoVariable
			<InstrumentoList instrumentosQuePaso={this.state.instrumentosvariable}/>
		)
	}
}

class InstrumentoList extends React.Component{
	render() {
		const instrumentos = this.props.instrumentosQuePaso.map(instrumento =>
			<Instrumento key={instrumento._links.self.href} instrumento={instrumento}/>
		);
		return (
			<table class="table-bordered table-striped table-primary">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Categoria</th>
						<th>Descripcion</th>
					</tr>
				</thead>
				<tbody>
					{instrumentos}
				</tbody>
			</table>
		)
	}
}

class Instrumento extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.instrumento.nombre}</td>
				<td>{this.props.instrumento.categoria}</td>
				<td>{this.props.instrumento.descripcion}</td>
			</tr>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('react'))
