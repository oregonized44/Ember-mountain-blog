import Ember from 'ember';
var posts = [{
  title:'Mount Hood Adventure',
  author:'Connor Cummings',
  date:'May 28 2016',
  text:'Woke up and climbed hood. It was fun. I had a good time and survived. Amen.',
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
},{
  title:'Mount Hood Adventure',
  author:'Connor Cummings',
  image:"http://images.summitpost.org/original/5175.jpg",
  date:'May 28 2016',
  text:'Woke up and climbed hood. It was fun. I had a good time and survived. Amen.'
},{
  title:'Mount Hood Adventure',
  author:'Connor Cummings',
  image:"http://images.summitpost.org/original/5175.jpg",
  date:'May 28 2016',
  text:'Woke up and climbed hood. It was fun. I had a good time and survived. Amen.'
},{
  title:'Mount Hood Adventure',
  author:'Connor Cummings',
  image:"http://images.summitpost.org/original/5175.jpg",
  date:'May 28 2016',
  text:'Woke up and climbed hood. It was fun. I had a good time and survived. Amen.'
}];

export default Ember.Route.extend({
  model() {
    return posts;
  },
});
