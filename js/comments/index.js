let comments = new Comments()

let content = document.querySelector('#comments_page_welcome .content')

let allComments = comments.getComments()

let commentsHTML = ''
allComments.forEach(comment => {
    // language=HTML
    commentsHTML += `
        <div class="comment">
            <div class="commenter">
                <div class="name_logo">
                    <span>${comment.name[0]}<span>
                </div>
                <div class="name">
                    <span>${comment.name}<span>
                </div>
            </div>
            <div class="commenter_message">
                <p>${comment.message}</p>
            </div>
            <div class="commenter_date">
                ${comment.date.slice(0, 10)}
            </div>
        </div>
    `
})

content.innerHTML = commentsHTML