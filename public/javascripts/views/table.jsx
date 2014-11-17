namespace('ReactExample.Shared')

ReactExample.Shared.Table = React.createClass({
  getInitialState: function() {
    return { sortedColumn: null, sortOrder: 'ascending' }
  },

  columns: function() {
    return _.keys(this.props.rows[0] || [])
  },

  handleSort: function(clickedHeader) {
    if (this.isCurrentSortedColumn(clickedHeader)) {
      this.toggleSortOrder()
    } else {
      this.sortByNewColumn(clickedHeader)
    }
  },

  isCurrentSortedColumn: function(clickedHeader) {
    return clickedHeader === this.state.sortedColumn
  },

  toggleSortOrder: function() {
    var order = (this.state.sortOrder === 'ascending' ? 'descending' : 'ascending')
    this.setState({sortOrder: order}, this.sort)
  },

  sortByNewColumn: function(column) {
    this.replaceState({sortedColumn: column, sortOrder: 'ascending'}, this.sort)
  },

  sort: function() {
    var column = this.state.sortedColumn
      , orderValue = (this.state.sortOrder === 'ascending' ? -1 : 1)

    var sortedRows = this.props.rows.sort(function(first, second) {
      if (first[column].toLowerCase() < second[column].toLowerCase()) return orderValue
      if (first[column].toLowerCase() > second[column].toLowerCase()) return -orderValue
      return 0
    })

    this.replaceProps({rows: sortedRows})
  },

  render: function() {
    var headers = _.map(this.columns(), function(column, index) {
      return <ReactExample.Shared.Header value={column} key={column} onSort={this.handleSort} active={this.isCurrentSortedColumn(column)} />
    }, this)
    var rows = _.map(this.props.rows, function(row) {
      return <ReactExample.Shared.Row data={row} key={JSON.stringify(row)}/>
    })

    return (
      <table>
        <thead>
            <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
})
