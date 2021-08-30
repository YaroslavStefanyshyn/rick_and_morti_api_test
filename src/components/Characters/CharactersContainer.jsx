import React from 'react';
import { connect } from 'react-redux';
import { getCharactersThunkCreator, setCurrentPage } from '../../redux/Reducers/CharactersReducer';
import Characters from './Characters';
import Preloader from '../Common/Preloader';

class CharactersContainer extends React.Component {
    componentDidMount() {
        this.props.getCharacters(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getCharacters(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Characters totalCharactersCount={this.props.totalCharactersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    characters={this.props.characters} />
            </>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        characters: state.charactersPage.characters,
        pageSize: state.charactersPage.pageSize,
        totalCharactersCount: state.charactersPage.totalCharactersCount,
        currentPage: state.charactersPage.currentPage,
        isFetching: state.charactersPage.isFetching
    }
}

export default connect(mapStateToProps,
    { setCurrentPage, getCharacters: getCharactersThunkCreator })(CharactersContainer);