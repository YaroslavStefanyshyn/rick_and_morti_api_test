import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, getEpisodes } from '../../redux/Reducers/EpisodesReducer';
import Episodes from './Episodes';

class EpisodesContainer extends React.Component {
    componentDidMount() {
        this.props.getEpisodes(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getEpisodes(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber)
    }

    render() {


        return (
            <Episodes totalEpisodesCount={this.props.totalEpisodesCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                episodes={this.props.episodes} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        episodes: state.episodesPage.episodes,
        pageSize: state.episodesPage.pageSize,
        totalEpisodesCount: state.episodesPage.totalEpisodesCount,
        currentPage: state.episodesPage.currentPage
    }
}

export default connect(mapStateToProps, { setCurrentPage, getEpisodes })(EpisodesContainer);