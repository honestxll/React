import React from 'react';

class CommentForm extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log('提交😄');

    let author = this.refs.author.value,
        text = this.refs.text.value;
    console.log(author, text);
    this.props.onCommentSubmit({author, text, date: '刚刚'});
    this.refs.author.value = this.refs.text.value = null;
  }
  render() {
    return (
      <form className="ui reply form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="field">
          <input type="text" placeholder="姓名" ref="author"/>
        </div>
        <div className="field">
          <textarea placeholder="评论内容" ref="text"></textarea>
        </div>
        <button type="submit" className="ui blue button">添加评论</button>
      </form>
    );
  }
}

export { CommentForm as default };
