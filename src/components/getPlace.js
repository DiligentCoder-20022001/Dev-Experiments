import React from 'react';
import axios from 'axios';
class getPlace extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            place: "",
            temp: 0,
            weatherDescription: "", 
            imageURL: "", 
            feelLike: 0
        }
        this.onChangePlace = this.onChangePlace.bind(this);
        this.submit = this.submit.bind(this);
    }
    onChangePlace(e){
        this.setState({place: e.target.value});
        console.log(this.state.place);
    }
    submit(e)
    {
        e.preventDefault();
        const place = {
            place: this.state.place
        };
        axios.post('http://localhost:5000/', place)
        .then(res => {
            const temp = res.data.temp; 
            const weatherDescription = res.data.weatherDescription;
            const imageURL = res.data.imageURL; 
            const feelLike = res.data.feelLike;
            this.setState({temp: temp});
            this.setState({weatherDescription: weatherDescription});
            this.setState({imageURL: imageURL});
            this.setState({feelLike: feelLike});
        });
    }
    render()
    {
        return (
            <div>
                <form>
                    <h1>Enter the place</h1>
                    <input type = "text" value = {this.state.place} name = "place" onChange = {this.onChangePlace}/>
                    <button type = "submit" onClick = {this.submit}>Go!</button>
                </form>
                <div>
                    <h1>Results!</h1>
                    <img src = {this.state.imageURL}/>
                    <h3>{this.state.temp}</h3>
                    <h3>{this.state.weatherDescription}</h3>
                    <h3>{this.state.feelLike}</h3>

                </div>
            </div>
        )
    }
}
export default getPlace;