import Logo from "../src/assets/images/logo.svg"

export default function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="logo" className="nav--logo"/>
      <h3 className="nav--logoText">My Travel Journal</h3>
    </nav>
  )
}