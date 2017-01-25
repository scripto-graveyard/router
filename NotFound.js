const React = require('react')

const Base = require('@scriptollc/base-components')

const NotFound = React.createClass({
  changeSearch: function (e) {
    this.setState({search: e.target.value})
  },
  handleSubmit: function (e) {
    e.preventDefault()
    window.alert('You searched for: ' + this.state.search)
  },
  render: function () {
    return (
      <article>
        <h1>You look lost.</h1>
        <h2>We're lost too.</h2>

        <Base.Form onSubmit={this.handleSubmit}>
          <Base.Input
            label='Let&#8217;s search'
            type='text'
            onChange={this.changeSearch} />
          <Base.Button text='Search' />
          <p><Base.Link href='/app'>Take me home</Base.Link></p>
        </Base.Form>
      </article>
    )
  }
})

module.exports = NotFound
