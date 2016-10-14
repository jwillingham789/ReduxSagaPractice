import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upvoteBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookDetail extends Component {
  render() {
    let initLoad = this.props.book
    if (Object.keys(initLoad).length === 0) {
      return <div>Select a book to get started</div>
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
        <button className='btn btn-primary' onClick={() => this.props.upvoteBook(this.props.book)}>{this.props.book.votes}</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    bookList: state.bookList,
    book: state.bookList.activeBook
  }
}

function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all our reducers
  return bindActionCreators({ upvoteBook: upvoteBook }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(BookDetail)
