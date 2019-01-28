import React from 'react';
import { connect } from 'react-redux';
import { setTerm } from '../actions'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.props.setTerm(this.refs.pathInput.value);
        this.props.onSearchTermChange(this.refs.pathInput.value);
    }

    render() {
        return (
                <input className="form-control"
                    value={this.props.term}
                    onChange={this.onInputChange}
                    ref="pathInput"
                />
        );
    }
}

const mapStateToProps = (state) => {
    const { term } = state.searchBar;
    return { term };
};

export default connect(mapStateToProps, { setTerm })(SearchBar);