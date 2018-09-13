import React, {Component} from 'react';
import { graphql } from "react-apollo";
import gql from 'graphql-tag';
import addLyrics from "../queries/addLyrics"


class LyricCreate extends Component {
    constructor(props){
        super(props);
        this.state= {content: ''};
    }
    onSubmit(event){
        event.preventDefault();
        this.props.mutate({
            variables: {
                content: this.state.content,
                songId: this.props.id
            }
        }).then(()=>{this.setState({content:''})})
    }
    render(){
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add A Lyric</label>
                <input
                    value = {this.state.content}
                    onChange={event => this.setState({content: event.target.value})}
                />
            </form>
        )
    }
}

export default graphql(addLyrics)(LyricCreate);