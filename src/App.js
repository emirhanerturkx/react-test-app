import React, { Component } from 'react'
import Footer from "./Components/Partials/Footer";
import Navbar from "./Components/Partials/Navbar";
import './App.css';
import Content from "./Components/Pages/HomeContent";
import AboutContent from "./Components/Pages/AboutContent";
import ContactContent from "./Components/Pages/ContactContent";
export default class App extends Component {


  state = {
    blogs: [],
  }

  componentDidMount(){
    this.getBlogs()
  }
  getBlogs = () => {
    fetch('http://localhost:8080/api/v1/all-blogs')
      .then(response => response.json)
      .then(data => this.setState({blogs:data}))
  }


  render() {

    let information = { nameSurname: 'Emirhan ERTÜRK', phoneNumber: '+90 553 882 6018', mailAddress: 'info@emirhanerturk.com.tr', aboutText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" };
    let component
    let pageName = window.location.pathname


    //Routing
    switch (pageName) {
      case '/':
        component = <Content />
        break;
      case '/about-us':
        component = <AboutContent info={information} />
        break;
      case '/contact-us':
        component = <ContactContent />
        break;
      default:
        component = <Content />
        break;
    }


    return (
      <div className="App">
        <Navbar />
        {component}
        <Footer />
      </div>
    );

  }


}