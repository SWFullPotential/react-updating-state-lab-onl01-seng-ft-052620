import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    handleBitClick = () => {
        this.setState({
            settings: { 
                ...this.state.settings, 
                bitrate: 12
            }
        })
    }
    handleResClick = () => {
        this.setState({
            settings: {
                bitrate: 8,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render () {
        return (
            //if you want multiple buttons you need to wrap it in a div!
            <div>
            <button className="bitrate" onClick={this.handleBitClick}>Bitrate</button>
            <button className="resolution" onClick={this.handleResClick}>Resolution</button>
            </div>
            )
    }
}

export default YouTubeDebugger;
