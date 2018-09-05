import Album from '../models/album'

export default Backbone.Collection.extend({
  model: Album,
  url: 'https://itunes.apple.com/search?term=jack+johnson&entity=album&limit=20',

  collectionEvents: {
    'reset': 'render',
    'change': 'render'
  },

  parse: (resp) => {
    console.log(resp)
    return resp.results;
  },

  initialize: function(){
    this.on('change', () => {
      console.log('CHANGES IN COLLECTION')
    })
  }
  
});