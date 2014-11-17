namespace('ReactExample.Shared')

ReactExample.Shared.Cell = React.createClass({
  render: function() {
    return <td>{this.props.value}</td>
  }
})
