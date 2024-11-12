import './Navbar.css'

export const Navbar = () => {
  return (
    // nav > ul > li * 4 > a [atributo] {texto $}
    <header>
      <a href="#" className='logo'>Logo</a>
      <nav>
        <ul className='navbar-list'>
          <li><a href="#">Item 1</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 3</a></li>
          <li><a href="#">Item 4</a></li>
        </ul>
      </nav>
    </header>
  )
}
