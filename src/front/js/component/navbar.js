import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/signup">
					<span className="navbar-brand mb-0 h1">Register</span>
				</Link>
					<div className="ml-auto">
						<Link to="/login">Login</Link>
					</div>
			</div>
		</nav>
	);
};
