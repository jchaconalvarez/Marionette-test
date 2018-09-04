import Mn from 'backbone.marionette'
import LayoutView from './LayoutView'

export default Mn.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new LayoutView())
  }
})
