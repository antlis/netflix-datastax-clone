import Logo from '../logo.png'

const NavBar = () => {
	return (
		<div className="navbar">
			<ul>
				<li>
					<div className="logo">
						<img src={Logo} alt="netflix-clone" />
					</div>
				</li>
				<li><a href="/">Home</a></li>
			</ul>
		</div>
	)
}

export default NavBar
