namespace('ReactExample.Shared')

ReactExample.Shared.Header = React.createClass({
  handleClick: function() {
    return this.props.onSort(this.props.value)
  },

  render: function() {
    return(
      <th className={this.props.active ? 'active' : ''} onClick={this.handleClick}>
        {this.props.value}
      </th>
    )
  }
})
