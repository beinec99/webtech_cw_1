class Comments {
    constructor() {
        this.comments = [];
        this.errorText = '';
    }

    createCommentsDatabase() {
        localStorage.setItem('comments', [])
    }

    addComment(name, email, message, date) {
        if (this.validate(name, email, message)) {
            this.errorText = ''
            this.comments.push({name: name, email: email, message: message.trim(), date: date})
            localStorage.setItem('comments', JSON.stringify(this.comments))
        } else {
            this.errorText = 'Fields are empty or message already exists'
        }
        return this.errorText
    }

    getComments() {
        return localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : []
    }

    validate(name, email, message) {
        return name.trim() !== '' && email.trim() !== '' && message.trim() !== '' && this.comments.filter(comment => comment.message.trim() === message.trim()).length === 0
    }
}