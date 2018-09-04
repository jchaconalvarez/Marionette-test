import Marionette from 'backbone.marionette';
import albumCard from '../templates/albumCard.jst';
import albumsList from '../templates/albumsList.jst';
import Albums from '../collections/Albums';

export default Marionette.View.extend({
  childView: albumCard,
  collection: Albums,
  tagName: 'ul',
  template: albumsList
});