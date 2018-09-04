import Marionette from 'backbone.marionette';
import template from '../templates/search.jst';

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
    console.log('ALGO')
  }
});