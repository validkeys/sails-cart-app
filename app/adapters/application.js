import DS from 'ember-data';

export default DS.SailsRESTAdapter.extend({
    namespace: 'api',

    // by default the sailsRestAdapter will attempt to
    // singularize the model name. We want to override this
    pathForType: function(type) {
      var camelized = Ember.String.camelize(type);
      return Ember.String.pluralize(camelized);
    }
});