import Marionette from 'backbone.marionette';
import albumCard from '../templates/albumCard.jst';
import albumModel from '../models/Album';

export default Marionette.View.extend({
  template: albumCard,
  tagName: 'li',
	model: albumModel,
  triggers: {
    'click a': 'select:item'
  }
});