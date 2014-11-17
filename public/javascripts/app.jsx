$(document).ready(function() {
  var datasetURL = '/public/datasets/data.json'
    , tableElement = document.getElementById('table')

  $.get(datasetURL, function(response) {
    React.render(<ReactExample.Shared.Table rows={response} />, tableElement)
  })
})
