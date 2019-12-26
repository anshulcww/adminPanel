import React, { Component } from 'react';
import { connect } from 'react-redux';


class MasterCatalogueComponent extends Component {

    render() {
        return (
            <div className='container-fluid'>
                <h1 className='justify text-center'>Upload Master Catalogue</h1>
                <hr className='70%'></hr>
                <h3>List of specialities</h3>
                <hr></hr>
                <div className = 'row'>
                    <div className='col-8'>
                    {
                        this.props.specialities.map((speciality, index) => (
                            <li key= {index}>{speciality.specialityName}</li>
                        ))
                    }
                    </div>
                    <div className= 'col-4'>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    specialities : state.doctor.specialities,
})


export default connect(mapStateToProps, {})(MasterCatalogueComponent);
