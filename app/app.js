class StrobeLight extends React.Component {
	
	state = {					
		color: this.props.color, // kolor z propsów
	}	
	
	componentDidMount() {
		this.intervalId = setInterval(() => {
           	let newColor; 							// zmienna dla koloru
           	if (this.state.color === this.props.color) { // jeśli kolor stanu jest taki jak kolor z propsów
           		newColor = "#ff3322"				// zmień go na ten drugi 
           	}
           	else { 								// w innym przypadku...
           		newColor = this.props.color 	// ...zmień kolor na ten z propsów 
           	}									
           
            this.setState({ 			// stan zmieniamy na nowy kolor
                color: newColor
            })
        }, this.props.frequency); 		// częstotoliwość zmieniamy z prosów - wpisany w 'function App'
	}
	/* interwał trzeba zamknąć: */
	componentWillUnmount() {
        clearInterval(this.intervalId)
    }

	render() { 	// renderuj 'div' z właściwościami (kolor tła ze stanu)
		return (
			<div className="colorChange" style={{backgroundColor:this.state.color}}>
				
			</div>
		);
	}
}

const Header = () => {
	return (
		<header>
			<h1>UWAGA!</h1>
			<p>Naprzemienna zmiana kolorów</p>
		</header>
	)
}

const Footer = () => {
	return (
		<footer>
			<p>Niestety, zielony tu się nie pojawi :-(</p>
		</footer>
	)
}

/* poniżej przekazujemy 'props': kolor i częstość */
function App() {
	return (
		<React.Fragment>
			<Header />
			<StrobeLight color={"#ffe135"} frequency={1000} />
			<Footer />
		</React.Fragment>
	)
	
}

ReactDOM.render(
	<App />, 
	document.getElementById("root")
);








