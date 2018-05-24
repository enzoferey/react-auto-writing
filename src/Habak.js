import React from "react";
import ReactDOM from "react-dom";
import "habak.css";

const Habak = () => <p className="habak-component">Habak</p>

class HabakClass extends React.Component {
	render() {
		return (
			<div>
				<Habak />
				<Habak data-cy="to-be-removed" />
			</div>
		);
	}
}

HabakClass.propTypes = {
	myProp: React.PropTypes.string,
}

ReactDOM.render(<Habak />, document.getElementById("app"));
