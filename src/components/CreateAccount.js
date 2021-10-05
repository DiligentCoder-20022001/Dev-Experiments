import React from 'react';
import './styles.css';
import Nav from './Nav';
import {auth} from '../firebase/firebase';
import {db} from '../firebase/firebase';
import {Link} from 'react-router-dom';
import problemList from './DsaProblems';
class Create extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            uid: "", 
            email : "",
            password : ""
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.register = this.register.bind(this);
        
    }
    register(e)
    {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          // ...
          console.log(user.uid);
          this.setState({uid : user.uid});
          //adding data in database 
          let cntr = 0;
          problemList.map(topic => {
              topic.problems.map(problem => {
                  db.collection(user.uid).doc('DSA').collection(topic).doc(problem).set({
                      problem: problem, 
                      link : "", 
                      status: "unsolved"
                  })
              })
          })
          console.log("Finished");
          this.props.history.replace({pathname : "/users/" + user.uid});
        })
        .catch((err) => {
            switch (err.code) {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                window.alert("Please try again! Invalid email id or email already in use")
                break;
                case "auth/weak-password":
                window.alert("Please enter a stronger password");
                break;
                default: ////console.log("Hello");
          }
        });
    }
    onChangeInput(e)
    {
        e.preventDefault();
        const name = e.target.name; 
        const value = e.target.value;
        this.setState({[name] : value});
    }
    render() {
        return (
            <div>
                <Nav />
                <div style={{ paddingTop: '2%' }}></div>
                {console.log(this.props)}
                <div class="container" style={{ textAlign: "center" }}>
                    <h4 style={{ fontWeight: 'bolder' }}>Create account!</h4>
                    <main class="form-signin">
                        <form onChange = {this.onChangeInput}>

                            <div class="form-floating">
                                <input type="email" class="form-control" id="floatingInput" name = "email" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input type="password" class="form-control" id="floatingPassword" name = "password" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <button class="button1" type="submit" onClick = {this.register}>Create</button>{ " " }<Link to = "/"><button class = "button1">Login</button></Link>
                            <p class="mt-5 mb-3 text-muted">&copy; 2021-2022</p>
                        </form>
                    </main>
                </div>
            </div>
        )
    }
}
export default Create;