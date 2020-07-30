import React from 'react';
import { Component } from "react";
import './App.css';
import data from "./Components/data"
import Post from "./Components/Post"
import { Item, Button, Divider } from 'semantic-ui-react'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      ordenAscendente: false,
    }
  }
  componentDidMount() {
    this.setState({
      posts: data.sort(function (a, b) { return b.votes - a.votes; })
    })
  }
  setAscendente() {
    this.setState({
      posts: data.sort(function (a, b) { return a.votes - b.votes; }),
      ordenAscendente: true
    })
  }
  setDescendente() {
    this.setState({
      posts: data.sort(function (a, b) { return b.votes - a.votes; }),
      ordenAscendente: false
    })
  }
  substractVote(id) {
    const index = this.state.posts.findIndex(post =>
      post.id === id)
    this.setState({
      posts: this.state.posts.map((post, i) => {
        if (index === i) {
          post.votes -= 1;
        }
        return post;
      })
    })
    this.state.ordenAscendente ? this.setAscendente() : this.setDescendente()
  }
  addVote(id) {
    const index = this.state.posts.findIndex(post =>
      post.id === id)
    this.setState({
      posts: this.state.posts.map((post, i) => {
        if (index === i) {
          post.votes += 1;
        }
        return post;
      })
    })
    this.state.ordenAscendente ? this.setAscendente() : this.setDescendente()
  }
  render() {

    const { state, setAscendente, setDescendente, substractVote, addVote } = this;
    const { posts, } = state;
    return (
      <div className="App">
        <br></br>
        <h1 class="ui dividing header">Popular blog Posts</h1>

        Ordenar de manera: <Button.Group>
          <Button onClick={setAscendente.bind(this)}>Ascendente</Button>
          <Button.Or text='o' />
          <Button onClick={setDescendente.bind(this)}>Descendente</Button>
        </Button.Group>
        <Divider />

        <Item.Group divided relaxed >
          {posts.map(post => <Post
            key={post.id}
            title={post.title}
            description={post.description}
            writer_avatar_url={post.writer_avatar_url}
            url={post.url}
            votes={post.votes}
            post_image_url={post.post_image_url}
            substractVote={substractVote.bind(this, post.id)}
            addVote={addVote.bind(this, post.id)}
          />
          )}
        </Item.Group >
      </div>

    );
  }
}

export default App;
