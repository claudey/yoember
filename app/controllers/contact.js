import Ember from 'ember';

export default Ember.Controller.extend({

    emailIsValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    textMessageReady: Ember.computed.gte('textMessage.length', 7),

    isValid: Ember.computed.and('emailIsValid', 'textMessageReady'),
    isNotValid: Ember.computed.not('isValid'),

    actions: {
        buttonAlert() {
            alert(`Email: ${this.get('emailAddress')}`);
            this.set('emailAddress', '');
            this.set('textMessage', '');
            this.set('responseMessage', `We got your message and we\'ll get in touch soon.`);
        }
    }
});