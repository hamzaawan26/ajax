// $(function () {
//   $('#load').click(sendAjax)
// })

// function sendAjax() {
//   console.log('Sending Ajax Request')
//   $.get('students.txt', handleResponse)
//   console.log('sent')
// }

// function handleResponse(Response) {
//   console.log('Response Recieved')
//   //   console.log(Response)
//   $('#result').empty()
//   $('#result').append(Response)
// }

// Anonymous function

$(function () {
  $('#load').click(function () {
    $.get('students.txt', function (Response) {
      $('#result').empty()
      $('#result').append(Response)
    })
  })
})
