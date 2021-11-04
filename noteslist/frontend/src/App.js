import React from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import AuthorList from "./components/Author.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'authors': []
    }
  }

  componentDidMount() {
    // const authors = [
    //   {
    //     'first_name': 'Федор',
    //     'last_name': 'Достоевский',
    //     'birthday_year': 1821
    //   },
    //   {
    //     'first_name': 'Михаил',
    //     'last_name': 'Лермонтов',
    //     'birthday_year': 1814
    //   }
    // ]
    axios.get('http://127.0.0.1:8000/api/authors/')
      .then(response =>{
        const authors = response.data
      

        this.setState(
          {
            'authors':authors
          }
        )
      }).catch(error => console.log(error))
  }


  render() {
    return (
      <div>
        <AuthorList authors={this.state.authors}/>
      </div>
    )
  }
}

export default App;
