

$('.aside_task').on('click', () => {
  let title = $('.aside_title').val()
  let desc = $('.aside_desc').val()
  var task = new List(title, desc)
  $('.main_section').append(`<div class='task'> <h1 class='task_h1'>${task.title}</h2> <p class='task_body'>${task.desc}</p> </div>`)
  clearInputs()
})

$('.aside_clear').on('click', () => {
  clearInputs()
})

function clearInputs() {
  $('.aside_title').val('')
  $('.aside_desc').val('')
}