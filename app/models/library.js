import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('strong'),
  address: DS.attr('string'),
  phone: DS.attr('string')
});
