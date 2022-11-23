let btn = document.getElementById('post_comment')
let commentsDb = new Comments()
btn.addEventListener('click', () => {
    let commenter_name = document.getElementById('commenter_name').value
    let commenter_email = document.getElementById('commenter_email').value
    let commenter_message = document.getElementById('commenter_message').value

    let response = commentsDb.addComment(commenter_name, commenter_email, commenter_message, new Date())

    response === '' ? alert('Comment added successfully') : alert(response)

})

