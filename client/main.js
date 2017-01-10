import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.Main.helpers({
  create: function(){
     Meteor.subscribe("Readings");
  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.Main.events({
  "click #foo": function(event, template){

  }
});
