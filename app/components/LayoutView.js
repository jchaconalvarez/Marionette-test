import Marionette from 'backbone.marionette';
import template from '../templates/layout.jst';

//Views imports:
import SearchView from './SearchView';

export default Marionette.View.extend({
  template,
  regions: {
    search: {
      el: '.search-field',
      replaceElement: true
    },
  },
  onRender () {
    this.showChildView('search', new SearchView())
  }
})
