import React, {Component} from 'react';

class ArticlesPage extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
               Article {this.props.match.params.id}
            </div>
        );
    }
}

export default ArticlesPage;