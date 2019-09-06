import React from "react";
import { withRouter } from "react-router-dom";

const GoBack = ({ onClick, history, staticContext, ...props }) => {
	const handleClick = e => {
		e.preventDefault();
		history.goBack();
		if (onClick) {
			onClick(e);
		}
	};
	return <a {...props} onClick={handleClick} />;
};

export default withRouter(GoBack);
