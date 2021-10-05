import React from 'react';
import './styles.css';
import Nav from './Nav';
import { auth } from '../firebase/firebase';
import { Link } from 'react-router-dom';
import Create from './CreateAccount';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "login",
            uid: "",
            email: "",
            password: ""
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.login = this.login.bind(this);
        this.changeToRegister = this.changeToRegister.bind(this);
    }
    changeToRegister(e) {
        e.preventDefault();
        this.setState({ status: "register" });
    }
    login(e) {
        e.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
                this.setState({ uid: user.uid });
                this.props.history.push('/users/' + user.uid);
            })
            .catch((error) => {
                if (
                    error.code === "auth/invalid-email" ||
                    error.code === "auth/user-not-found"
                ) {
                    window.alert("User not found");
                } else if (error.code === "auth/wrong-password") {
                    window.alert("Wrong password");
                }
            });
    }
    onChangeInput(e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div>
                <Nav />
                <div style={{ paddingTop: '2%' }}></div>

                <div class="container" style={{ textAlign: "center" }}>
                    <h4 style={{ fontWeight: 'bolder' }}>Login to your account!</h4>
                    <main class="form-signin">
                        <form onChange={this.onChangeInput}>

                            <div class="form-floating">
                                <input type="email" class="form-control" id="floatingInput" name="email" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" name="password" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <button class="button1" type="submit" onClick={this.login}>Login</button>{" "}<Link to = "/register"><button class="button1">Register</button></Link>
                            <p class="mt-5 mb-3 text-muted">&copy; 2021-2022</p>
                        </form>
                    </main>
                </div>
            </div>
        )
    }
}
export default Login;