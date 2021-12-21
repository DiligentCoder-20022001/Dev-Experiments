import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)
export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.state = {exercises: []};
  }
  componentDidMount()
  {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({exercises: response.data});//adds the list of exercises to state
      })
      .catch((error) => {
        console.log(error);
      })
  }
  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(res => console.log(res.data));
    //deleting from the exercises list of the state
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }
  //The exercieses will appear in a table on the page. You’ll notice that the body of the table just calls theexercieseList() method. We need to implement that method to return the rows of the table. Directly above the render function add:
  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }
  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}