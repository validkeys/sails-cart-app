import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({

  title: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  price: DS.attr('float'),
  quantityOnHand: DS.attr('integer')

});