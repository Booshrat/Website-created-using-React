import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack';

// Create a function component.
function Navigation() {
    return (
      <Stack direction="horizontal" gap={3}>
        <div className=" ms-auto"><Link className='nav-item' to="/">Home</Link></div>
        <div><Link className='nav-item' to="/products">Shop</Link></div>
        <div><Link className='nav-item' to="/profile">Profile</Link></div>
        <div><Link className='nav-item' to="/legal">Legal</Link></div>
        <div><Link className='nav-item' to="/interest">Interest Calculator</Link></div>
    </Stack>
    );
}

// Export Navigation component.
export default Navigation;