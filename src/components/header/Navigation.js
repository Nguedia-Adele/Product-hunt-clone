import React from 'react'

class Navigation extends React.Component {
	render() {
		return(
			<nav className="my-auto">
				<ul className="list-inline my-auto">
					<li className="list-inline-item mx-2">
						<a href="./home" className="text-muted">Deals</a>
					</li>
					<li className="list-inline-item mx-2">
						<a href="./home" className="text-muted">Jobs</a>
					</li>
					<li className="list-inline-item mx-2">
						<a href="./home" className="text-muted">Market</a>
					</li>
					<li className="list-inline-item mx-2">
						<a href="./home" className="text-muted">Radio</a>
					</li>
					<li className="list-inline-item mx-2">
						<a href="./home" className="text-muted">Ship</a>
					</li>
					<li className="list-inline-item mx-2">
						<a href="./home" className="text-muted">...</a>
					</li>
				</ul>
			</nav>
		)
	}
}

export default Navigation