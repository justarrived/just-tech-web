import React, { Component } from "react";
import showdown from "showdown";
import "./Content.css";

const converter = new showdown.Converter();

function createURL(name) {
  return `https://raw.githubusercontent.com/justarrived/skill-training/master/technologies/${name}.md`;
}

function fetchMarkdown(name) {
  return fetch(createURL(name)).then(r => r.text());
}

export default class Content extends Component {
  state = {
    html: ""
  };

  async componentDidMount() {
    const markdown = await fetchMarkdown(this.props.name);
    console.log(markdown);
    this.setState({
      html: converter.makeHtml(markdown)
    });
  }

  render() {
    return (
      <div className="markdown">
        <div className="body">
          <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
        </div>
      </div>
    );
  }
}
