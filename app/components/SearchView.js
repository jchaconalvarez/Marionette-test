import Marionette from 'backbone.marionette';
import template from '../templates/search.jst';
import Albums from '../collections/Albums'

export default Marionette.View.extend({
  template,
  tagName: 'div',
  className: 'search-field',

  ui: {
    input: '#search-input',
    button: '#search-button'
  },

  events: {
    'click @ui.button': 'onSave'
  },

  onSave() {
    console.log(a) 
  }
});