import Marionette from 'backbone.marionette';
import template from '../templates/layout.jst';

//Views imports:
import SearchView from './SearchView';
import AlbumsListView from './AlbumsListView';

export default Marionette.View.extend({
  template,
  regions: {
    search: {
      el: '.search-field',
      replaceElement: true
    },
    albums: {
      el: '.albums-list',
      replaceElement: true
    },
  },
  onRender () {
    this.showChildView('search', new SearchView());
    this.showChildView('albums', new AlbumsListView());
  }
})
