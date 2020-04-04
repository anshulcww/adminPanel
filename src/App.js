import React, { Component } from 'react';
import './App.css';
import history from './history';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import DashboardComponent from './components/DashboardComponent/DashboardComponent'
import DownloadComponent from './components/DashboardComponent/DownloadComponent'
import DoctorComponent from './components/DashboardComponent/DoctorComponent'
import HospitalComponent from './components/DashboardComponent/HospitalComponent'
import BookingComponent from './components/DashboardComponent/BookingComponent'
import PlockrComponent from './components/DashboardComponent/PlockrComponent'
import CovidComponent from './components/DashboardComponent/CovidComponent'
import { saveSpecialities } from './actions/doctorActions'
import { fetchAllUsers } from './actions/userActions'
import { fetchBookings } from './actions/userActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  async componentDidMount(){
    // await this.props.saveCatalogue();
    await this.props.saveSpecialities()
    await this.props.fetchAllUsers();
    await this.props.fetchBookings();
    // console.log('Asnhul')
    // toast("Wow so easy !")
    // console.log('Anshul')
  }
  
  render() {
    const App = () => (
      <Router history={history}>
        <div className='container-fluid'>
          <Switch>
            <Route exact path='/' component={DashboardComponent} />
            <Route exact path='/downloads' component={DownloadComponent} />
            <Route exact path='/doctors' component={DoctorComponent} />
            <Route exact path='/hospitals' component={HospitalComponent} />
            <Route exact path='/bookings' component={BookingComponent} />
            <Route exact path='/covid' component={CovidComponent} />
            <Route exact path='/plockr-tracker' component={PlockrComponent} />
          </Switch>
        </div>
      </Router>
    )
    return (
      <Switch>
        <App />
      </Switch>
    )
  }
}

export default connect(null, {saveSpecialities, fetchAllUsers, fetchBookings})(App)

