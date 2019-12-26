import React, { Component } from 'react';
import './App.css';
import history from './history';
// import connect from 'connect'
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import DashboardComponent from './components/DashboardComponent/DashboardComponent'
import LoginComponent from './components/LoginComponent/LoginComponent'
import EditDoctorComponent from './components/DashboardComponent/EditDoctorComponent'
import DocFormComponent from './components/DashboardComponent/DocFormComponent'
import MasterCatalogueComponent from './components/DashboardComponent/MasterCatalogueComponent'
import DownloadComponent from './components/DashboardComponent/DownloadComponent'
import DoctorComponent from './components/DashboardComponent/DoctorComponent'
import HospitalComponent from './components/DashboardComponent/HospitalComponent'
import { saveCatalogue } from './actions/doctorActions'
import { fetchAllUsers } from './actions/userActions'


class App extends Component {
  async componentDidMount(){
    await this.props.saveCatalogue();
    await this.props.fetchAllUsers();
    // console.log('1')
  }
  
  render() {
    const App = () => (
      <Router history={history}>
        <div className='container-fluid'>
          <Switch>
            <Route exact path='/' component={DashboardComponent} />
            <Route exact path='/login' component={LoginComponent} />
            <Route exact path='/downloads' component={DownloadComponent} />
            <Route exact path='/doctors' component={DoctorComponent} />
            <Route exact path='/hospitals' component={HospitalComponent} />
            <Route exact path='/editdoctordetails' component={EditDoctorComponent} />
            <Route exact path='/docform' component={DocFormComponent} />
            <Route exact path='/masterCatalogue' component={MasterCatalogueComponent} />
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

export default connect(null, {saveCatalogue, fetchAllUsers})(App)

