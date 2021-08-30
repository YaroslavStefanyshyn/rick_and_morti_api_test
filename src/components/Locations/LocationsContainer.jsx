import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, getLocations } from '../../redux/Reducers/LocationReducer';
import Locations from './Locations';

class LocationsContainer extends React.Component {
    componentDidMount() {
        this.props.getLocations(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getLocations(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber)
    }
    render() {
        return (
            <Locations totalLocationsCount={this.props.totalLocationsCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                locations={this.props.locations} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        locations: state.locationsPage.locations,
        pageSize: state.locationsPage.pageSize,
        totalLocationsCount: state.locationsPage.totalLocationsCount,
        currentPage: state.locationsPage.currentPage
    }
}

export default connect(mapStateToProps, { setCurrentPage, getLocations })(LocationsContainer);