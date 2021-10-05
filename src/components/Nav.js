import React from 'react';
import './styles.css';
class Nav extends React.Component {
    render() {
        return (
            <div className="whole">
                <div className="first">
                    <div className="container">
                        <div style={{ paddingTop: '2%' }}></div>
                        <h1 style={{ fontSize: '3rem', fontWeight: 'bolder' }}>Leet-Us-Code</h1>
                        <p style = {{fontSize:'1.5rem', fontWeight:'bold'}}>Your companion for interviews!!⚡</p>
                    </div>
                </div>

            </div>
        )
    }
}
export default Nav;