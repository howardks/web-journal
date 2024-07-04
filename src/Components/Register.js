function Register() {
    return (
        <div id="Register-Div">
            <div className="Input-Header">Register</div>
            <div className="Input-Div">
                Username:
                <input />
            </div>
            <div className="Input-Div">
                Password:
                <input type="password" />
            </div>
            <div className="Input-Div">
                Re-enter Password:
                <input type="password" />
            </div>
            <div className="Input-Div">
                Email:
                <input />
            </div>
            <div className="Input-Div">
                Re-enter Email:
                <input />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Register;