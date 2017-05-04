import Ember from 'ember';

export default Ember.Controller.extend({

    emailIsValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    textMessageReady: Ember.computed.gte('textMessage.length', 7),

    isDisabled: Ember.computed.and('emailIsValid', 'textMessageReady')

});