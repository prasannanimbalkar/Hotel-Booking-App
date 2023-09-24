import logo from '../../assets/images/logos/logo.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="navLogo">
          <img src={logo} alt="Company Logo"/>
        </span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar