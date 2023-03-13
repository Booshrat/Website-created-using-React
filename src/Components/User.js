// Create a function component.
function User() {
    return (
        <div>
            <button type="button" className="logout-btn" onClick={logOut}>Log Out</button>
        </div>
    );
}

// Create a function that will be triggered when button is clicked.
function logOut() {
    return alert("User has logged out!");
}

// Export User component.
export default User;