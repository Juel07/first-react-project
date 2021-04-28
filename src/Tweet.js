import React from 'react';
import './App.css';

class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {likes: 0};
        this.likeMe = this.likeMe.bind(this)
    }

    likeMe(){
        this.setState({
            likes: this.state.likes + 1
        })
    }

    render() {
        return (
            <div className="tweet">
                <h3>{this.props.name}</h3>
                <p>{this.props.message}</p>
                <p> ❤ {this.state.likes}</p>
                <button className="button" onClick={this.likeMe}>Like</button>
            </div>
        )
    }

}

export default Tweet;