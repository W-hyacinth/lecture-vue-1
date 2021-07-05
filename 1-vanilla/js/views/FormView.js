import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
    this.init(el)
    this.inputEl = el.querySelector('input[type="text"]')
    this.resetEl = el.querySelector('.btn-reset')
    this.showResetBtn(false)
}

FormView.showResetBtn = function (show = true) {
    this.resetEl.style.display = show ? 'block' : 'none'
}

export default FormView
