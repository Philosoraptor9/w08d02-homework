import React, { Component } from 'react';

/**
 * const NewsList = props => {
 *  const newsList = props.news.articles.map((article, i) =>{
            return( <li key={i}>
                Author:{article.author}<br/>
                Title:{article.title}<br/>
                Description:{article.description}<br/>
                Link:{article.url}<br/>
                    </li> )
        })
        return (
            <div>
                <h4>Today's News</h4>
                <ul>
                    {newsList}
                </ul>
            </div>
        )
 * }
 */
class NewsList extends Component {
    constructor(props) {
        super(props)
        this.state ={
            news: [{foo: 'bar'}]
        }
    }
    render(){
        console.log(this.props.news)
        console.log(this.state.news)
        const newsList = this.props.news.articles.map((article, i) =>{
            return( <li key={i}>
                Author:{article.author}<br/>
                Title:{article.title}<br/>
                Description:{article.description}<br/>
                Link:{article.url}<br/>
                    </li> )
        })
        return (
            <div>
                <h4>Today's News</h4>
                <ul>
                    {newsList}
                </ul>
            </div>
        )
    }
}

export default NewsList;