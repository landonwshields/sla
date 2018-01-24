import React, { Component } from 'react';
import logo from '../SLA_logo.png';
import '../Styling/App.css';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Programs from './Programs';
import Staff from './Staff';
import News from './News';
import Specials from './Specials';
import Forms from './Forms';
import Contact from './Contact';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      homePage: true,
      aboutUs: false,
      programs: false,
      staff: false,
      gallery: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false,
      staffData: [],
      specialsData: []
    }
  }

  goToHome = (e) => {
    // console.log('success')
    this.setState({
      homePage: true,
      aboutUs: false,
      programs: false,
      staff: false,
      gallery: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToAbout = (e) => {
    // console.log('success')
    this.setState({
      homePage: false,
      aboutUs: true,
      programs: false,
      staff: false,
      gallery: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToPrograms = (e) => {
    // console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: true,
      staff: false,
      gallery: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToGallery = (e) => {
    // console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: false,
      gallery: true,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToStaff = (e) => {
    // console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: true,
      gallery: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToNews = (e) => {
    // console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: false,
      gallery: false,
      newsEvents: true,
      specialOffers: false,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToSpecials = (e) => {
    // console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: false,
      gallery: false,
      newsEvents: false,
      specialOffers: true,
      forms: false,
      contact: false
    })
    e.preventDefault();
  }

  goToForms = (e) => {
    // console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: false,
      gallery: false,
      newsEvents: false,
      specialOffers: false,
      forms: true,
      contact: false
    })
    e.preventDefault();
  }

  goToContact = (e) => {
    // console.log('success')
    this.setState({
      homePage: false,
      aboutUs: false,
      programs: false,
      staff: false,
      gallery: false,
      newsEvents: false,
      specialOffers: false,
      forms: false,
      contact: true
    })
    e.preventDefault();
  }

//Gets all data from staff API and sets state to Result
  async componentDidMount() {
    const response = await fetch('https://sla-db.herokuapp.com/api/staff')
    const json = await response.json()
    this.setState({staffData: json})
    // console.log("staff api is working");
    // console.log(this.state.staffData);
  }
//Gets all data from Specials API and sets state to Result
  async componentWillMount() {
    const response = await fetch('https://sla-db.herokuapp.com/api/specials')
    const json = await response.json()
    this.setState({specialsData: json})
    console.log("specials api is working");
    console.log(this.state.specialsData);
  }

  render() {
    return (
      <div className="App">
        <Header
          goToHome={this.goToHome.bind(this)}
          goToAbout={this.goToAbout.bind(this)}
          goToPrograms={this.goToPrograms.bind(this)}
          goToStaff={this.goToStaff.bind(this)}
          goToGallery={this.goToGallery.bind(this)}
          goToNews={this.goToNews.bind(this)}
          goToSpecials={this.goToSpecials.bind(this)}
          goToForms={this.goToForms.bind(this)}
          goToContact={this.goToContact.bind(this)}
        />
        {
          this.state.homePage ? <Home /> : null
        }
        {
          this.state.aboutUs ? <About /> : null
        }
        {
          this.state.programs ? <Programs /> : null
        }
        {
          this.state.staff ? <Staff data={this.state.staffData} /> : null
        }
        {
          this.state.newsEvents ? <News /> : null
        }
        {
          this.state.gallery ? <Gallery /> : null
        }
        {
          this.state.specialOffers ? <Specials data={this.state.specialsData} /> : null
        }
        {
          this.state.forms ? <Forms /> : null
        }
        {
          this.state.contact ? <Contact /> : null
        }
        <img src={logo} className="App-logo-btm" alt="logo" />
        <Footer />
      </div>
    );
  }
}
