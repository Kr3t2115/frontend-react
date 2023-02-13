import './navbar.css';

import { Link } from 'react-router-dom';

export default function Navbar() {
    return <div className="container text-center">
    <div className="row">
      <div className="col-2 kamm">
        Logo
      </div>
      <div className="col kamm">

        <div className='nav'>
            <Link to=''>Home</Link>
            <Link to=''>Home</Link>
            <Link to=''>Home</Link>
            <Link to=''>Home</Link>
            <Link to=''>Home</Link>
        </div>


      </div>
      <div className="col-2 kamm">
        Przycyski
      </div>
    </div>
    </div>
}