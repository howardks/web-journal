function Login() {
    return (
        <div id="Login-Div">
            <div className="Input-Header">Login</div>
            <div className="Input-Div">
                Username: 
                <input />
            </div>
            <div className="Input-Div">
                Password: 
                <input type="password" />
            </div>
            <div>
                <button className="Submit-Button">Submit</button>
            </div>
        </div>
    )
}

export default Login;