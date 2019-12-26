import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDocDetails } from '../../actions/doctorActions'

class DocFormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: 'Dr. ',
            email: '',
            specialities: [] ,
            address: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault()
        this.state.specialities.push({
            specialityId : '123456789'
        })
        this.setState({
            specialities: this.state.specialities,
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount() {
        if (Object.keys(this.props.docDetail).length === 0) {
            let mobileNumber = localStorage.getItem('mobileNumber');
            await this.props.fetchDocDetails(mobileNumber);
            this.setState({
                fullName: this.props.docDetail.name,
                email: this.props.docDetail.email,
                specialities: this.props.docDetail.specialities,
                address: this.props.docDetail.address
            })
        } else {
            this.setState({
                fullName: this.props.docDetail.name,
                email: this.props.docDetail.email,
                specialities: this.props.docDetail.specialities,
                address: this.props.docDetail.address
            })
        }
    }

    render() {
        return (
            <div className='container-fluid'>
                <br></br>
                <h1 className='justify text-center'>Add/Edit Doctor Profile</h1>
                <hr style= {{width:'50%'}}></hr>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputName1">Full Name:</label>
                        <input type="text" className="form-control" id="exampleInputName1" name='fullName' placeholder="Enter Full Name" value={this.state.fullName} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Email ID:</label>
                        <input type="email" className="form-control" id="exampleInputPassword1" name='email' placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className='form-group'>
                        <label>Specialities:</label>
                        {
                            this.state.specialities.map((item, i) => (
                                <li key={i}>
                                    {item.specialityName}
                                </li>
                            ))
                        }
                    </div>
                    <div className='form-group'>
                    <button type="button" class="btn btn-success" onClick= {this.handleClick}>Add Speciality</button>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Address:</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name='address' placeholder="Address" value={this.state.address} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <a className="btn btn-primary" href="/doctors" role="button">Back</a>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    docDetail: state.doctor.doctor,
})

export default connect(mapStateToProps, { fetchDocDetails })(DocFormComponent);
