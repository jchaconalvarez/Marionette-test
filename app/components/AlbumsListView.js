import Marionette from 'backbone.marionette';
import template from '../templates/albums.jst';

export default Marionette.View.extend({
  template,
  tagName: 'div',
  className: 'albums-list'
})