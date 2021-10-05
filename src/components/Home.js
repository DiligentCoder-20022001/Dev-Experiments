import React from 'react';
import './styles.css';
import Nav from './Nav';
import {Link} from 'react-router-dom';
class Home extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            uid : this.props.history.location.pathname.substr(1)
        };
    }
    render()
    {
        return (
            <div>
                <Nav/>
                <div class="row1-container">
                    <div class="box box-down cyan">
                    <h2>DSA</h2>
                    <p>Topic wise problems from Leetcode, GFG for data structures and algorithms</p>
                    <Link to = {'/' + this.state.uid + '/DSA'}><button class = "button1" onClick = {this.dsa}>Go!</button></Link>
                    <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/>
                    </div>

                    <div class="box red">
                    <h2>Competitive Programming</h2>
                    <p>Solutions to CP practice problems</p>
                    <Link to = {'/' + this.state.uid + '/CP'} style = {{textDecoration:"none"}}><button class = "button1">Go!</button></Link>
                    <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
                    </div>

                    <div class="box box-down blue">
                    <h2>Contests</h2>
                    <p>Solutions for contests from sites like Codechef, Codeforces and Leetcode</p>
                    <button class = "button1">Go!</button>
                    <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
                    </div>
                </div>
                <div class="row2-container">
                    <div class="box orange">
                    <h2>Doubts</h2>
                    <p>Problems in which difficulties were encountered along with the explanation</p>
                    <button class = "button1">Go!</button>
                    <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;