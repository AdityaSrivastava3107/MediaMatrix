import React, { Component } from 'react'
import NewsList from './NewsItem'

export class News extends Component {
  articles = [
    {
    "source": {
    "id": null,
    "name": "CBS Sports"
    },
    "author": "",
    "title": "Listen as CBS Sports' Jim Nantz caps legendary run as voice of March Madness: 'Thank you for being my friend' - CBS Sports",
    "description": "Nantz called his final game as the voice of March Madness, ending a 37-year run across 355 broadcasts",
    "url": "https://www.cbssports.com/college-basketball/news/listen-as-cbs-sports-jim-nantz-caps-legendary-run-as-voice-of-march-madness-thanks-for-being-my-friend/",
    "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/04/04/336d7e5f-a65a-439e-92ad-b66559249889/thumbnail/1200x675/6f618df73a673e532d4fb97aff21ae91/jim-nantz.jpg",
    "publishedAt": "2023-04-04T04:21:31Z",
    "content": "The man most affectionately known for his friendly hello bid a warm and thoughtful goodbye. Legendary sportscaster and NCAA Tournament mainstay, Jim Nantz, called his final game as the voice of March… [+2489 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "247Sports"
    },
    "author": "Kipp Adams",
    "title": "2023 NFL Draft first round includes four Georgia football players - 247Sports",
    "description": "Another NFL Draft takeover for Georgia football.",
    "url": "https://247sports.com/college/georgia/Article/2023-NFL-Draft-first-round-includes-four-Georgia-football-players-207791199/",
    "urlToImage": "https://s3media.247sports.com/Uploads/Assets/62/419/11419062.jpg?fit=bounds&crop=1200:630,offset-y0.50&width=1200&height=630",
    "publishedAt": "2023-04-03T21:36:27Z",
    "content": "With the 2023 NFL Draft just three weeks away, the discussion around Georgia football is how many players will go in the first round. It appears that three players are a safe bet to make it among the… [+3453 chars]"
    }
    ]
  constructor(){
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className="container my-3 ">
        <h2>Top Headlines of Today</h2>
        <div className="row">
          <div className="col-md-4">
          <NewsList title = "Cricket" description = "Everything about sports" imgurl = "https://sportshub.cbsistatic.com/i/r/2023/04/04/336d7e5f-a65a-439e-92ad-b66559249889/thumbnail/1200x675/6f618df73a673e532d4fb97aff21ae91/jim-nantz.jpg"/>
          </div>
          <div className="col-md-4">
          <NewsList title = "Rugby" description = "Everything about sports" imgurl = "https://s3media.247sports.com/Uploads/Assets/62/419/11419062.jpg?fit=bounds&crop=1200:630,offset-y0.50&width=1200&height=630"/>
          </div>
          <div className="col-md-4">
          <NewsList title = "Football" description = "Everything about sports" imgurl = "https://cdn.images.express.co.uk/img/dynamic/67/590x/secondary/4670612.avif?r=1680618148120"/>
          </div>
        </div>
      </div>
    )
  }
}

export default News
