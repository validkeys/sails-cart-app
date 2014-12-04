import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.createRecord('product');
  },

  actions: {
    submitNewProduct: function() {
      var model = this.currentModel;
      return model.save().then(function(){
          console.log("Saved!");
          return this.transitionTo("products");
      }, function(error) {
          console.error("PROBLEM SAVING!", error);
        }
      );
    }
  }

});