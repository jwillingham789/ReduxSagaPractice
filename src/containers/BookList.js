import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook, clearVotes, fetchBooklistRequest } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  componentWillMount() {
    this.props.fetchBooklistRequest()
  }
  renderList() {
    return this.props.bookList.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'>
          {book.title}
        </li>
      )
    })
  }
  render() {
    const loadingMessage = () => {
      if (this.props.bookList.books.length === 0) {
        return <div>Loading Books...</div>
      }
    }
    return (
      <div className='row'>
        <div className='col-sm-5'>
          <ul className='list-group'>
            {loadingMessage()}
            {this.renderList()}
          </ul>
          <button onClick={() => this.props.clearVotes()} className='btn btn-secondary'>Clear Votes</button>
        </div>
        <div className='col-sm-5'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    bookList: state.bookList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectBook: selectBook,
    clearVotes: clearVotes,
    fetchBooklistRequest: fetchBooklistRequest
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
