import logo from "./logo.png"
import Button from 'react-bootstrap/Button';

// Create a function component to return a welcome message to the users who are already signed in.
function Welcome() {
    return (
        <h3 className="welcome">Welcome Back!</h3>
    );
}

// Create a function component that returns a button for the user to sighn in.
function SignIn() {
    return (
        <Button variant="success" type="button" className="sign-in-btn">Sign In</Button>
    );
}

// Create a function component that returns company logo and name.
// This function also returns the Welcome or SignIn component depending on whether the user is signed in or not.
function Header(props) {
    return (
        <div>
            <div className="header">
                <span><img src={logo} className="logo" /></span>
                
                <h1 className="company-name">My Company</h1>
            </div>
            <div className="welcome-signin">
                {props.loggedIn ? <Welcome /> : <SignIn />}
            </div>
        </div>
    );
}

// Export the Header component.
export default Header;