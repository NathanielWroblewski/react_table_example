namespace('ReactExample.Shared')

ReactExample.Shared.Row = React.createClass({
  render: function() {
    var data = _.map(this.props.data, function(datum) {
      return <ReactExample.Shared.Cell value={datum} key={datum}/>
    })
    return <tr>{data}</tr>
  }
})
