import React,{ Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyAliTbSM5LkceWKu4Jm8KpHfvqBXvDQKOE';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: []};
        YTSearch({ key: API_KEY}, videos => this.setState( { videos }));
    }
    render() {
        <div>
            <SearchBar />
        </div>
    }
}
ReactDOM.render(<App />, document.querySelector('.container'));