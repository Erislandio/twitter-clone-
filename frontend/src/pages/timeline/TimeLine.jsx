import React, { Component } from 'react'
import { Logo } from '../../assets/icons/Logo';
import './timeline.css'
import api from '../../services/service'


export default class TimeLine extends Component {


    state = {
        newTweet: ''
    }

    handleChangeInputValue = e => {
        this.setState({ newTweet: e.target.value })
    }

    handleNewTweet = async e => {
        if (e.keyCode !== 13) return;

        const content = this.state.newTweet
        const author = localStorage.getItem('username')

        await api.post('tweets', {
            content, author
        })

        this.setState({ newTweet: '' })

    }

    render() {
        return (
            <div className="timeline-wrapper">
                <Logo color="#fff" />
                <form>
                    <textarea
                        value={this.state.newTweet}
                        onChange={e => this.handleChangeInputValue(e)}
                        onKeyDown={this.handleNewTweet}
                        placeholder="O que está acontecendo" />
                </form>
                <ul>

                </ul>
            </div>
        )
    }
}
