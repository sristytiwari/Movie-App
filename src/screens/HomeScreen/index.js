import React, { Component } from "react";
import "./styles.css";
import DisplayCard from "../../components/DisplayCard";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      data: {},
      id: "",
      loading: false
    };
  }

  componentDidMount() {}

  getOmdbData = () => {
      this.setState({loading: true})
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=c3ebb779&t=${this.state.title}`
    )
      .then(resp => resp.json())
      .then(response => {
        this.setState({
          data: response,
          loading: false
        });
      });
  };

  getDataById = async() => {
    this.setState({loading: true})
     let data = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=c3ebb779&i=${this.state.id}`);
     let response = await data.json();
     this.setState({
        data: response,
        loading: false
     })
  }

  // setTitle = value => {
  //   console.log(value);
  //   this.setState({
  //     title: value
  //   });
  // };

  render() {
    console.log(this.state);

    let { data, title, id, loading } = this.state;

    return (
      <div className="mainContainer">
        <div className="input-wrapper">
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={event => this.setState({title:event.target.value})}
            />
          </label>
          <div onClick={this.getOmdbData}>
            <p>Fetch</p>
          </div>
        </div>
        <div className="input-wrapper">
          <label>
            Movie Id:
            <input
              type="text"
              value={id}
              onChange={event => this.setState({id: event.target.value})}
            />
          </label>
          <div onClick={this.getDataById}>
            <p>Fetch by id</p>
          </div>
        </div>
        <div>
            {
               
                loading ? 
                <div>Loading....</div> :
                 Object.keys(data).length?
                 <DisplayCard title={data.Title} year={data.Year} poster={data.Poster} plot={data.Plot} />: null
            }
          
        </div>
      </div>
    );
  }
}
