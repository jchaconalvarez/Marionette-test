import Mn from 'backbone.marionette'

import template from '../templates/album.jst';
import model from '../models/album';


export default Mn.View.extend({
  template,
  model,
  tagName: 'li',
  className: 'album-card'
})
