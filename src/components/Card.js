import React from 'react';
import './styles.css';
class Card extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            title : this.props.title, 
            prevComp : this.props.prev
        }
    }
    render()
    {
        return (
            <div>
                <div class="card">
                    <div class="infos">
                    <div class="name">
                        <h1>{this.state.title}</h1>
                    </div>
                    <ul class="stats">
                        <li>
                        <h3>15K</h3>
                        <h4>Problems</h4>
                        </li>
                        <li>
                        <h3>82</h3>
                        <h4>Completed</h4>
                        </li>
                        <li>
                        <h3>1.3M</h3>
                        <h4>Percent</h4>
                        </li>
                    </ul>
                    <button class = "button1" >Go!</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;