import Logo from"./Logo";
import Nav from "./Navitem";
import Button from"./Btnitems";


export default function Navbar( ){
    return (
        <nav className="navbar bg-indigo-600">
          <div className="container flex mx-auto py-12">
            <div className="w-3/12">
              <Logo/>
            </div>
            <div className="w-6/12">
              <Nav/>
            </div>
            <div className="w-3/12">
                  <Button/>
                  </div>
                </div>
        </nav>
      )
}