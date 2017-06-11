import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
const API_KEY = 'AIzaSyAliTbSM5LkceWKu4Jm8KpHfvqBXvDQKOE';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideos: null
        };
        this.videoSearch('manchesterUnited');
    }
    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videos => this.setState({
            videos: videos,
            selectedVideo: videos[0]
        }));
    };
    render() {
        const throttledSearch = _.debounce((term) => this.videoSearch(term),600);
        return (
            <div>
                <SearchBar onSearch = {throttledSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={(selectedVideo) => { this.setState({ selectedVideo }) }}
                    videos={this.state.videos} />
            </div>
        )
    };
}
ReactDOM.render(<App />, document.querySelector('.container'));