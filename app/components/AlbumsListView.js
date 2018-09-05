import Marionette from 'backbone.marionette';
import template from '../templates/album.jst';
import Albums from '../collections/Albums';
import MyChildView from '../components/AlbumView'

const collection = new Albums();

export default Marionette.CollectionView.extend({
  childView: MyChildView,
  collection: collection,
  tagName: 'ul',

  initialize: () => {
    console.log('COLLECTION VIEW INIT');
    collection.fetch();
  },

  
})