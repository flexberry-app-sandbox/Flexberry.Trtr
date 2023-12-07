import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  tIME: DS.attr('date')
});

export let ValidationRules = {
  tIME: {
    descriptionKey: 'models.i-i-s-trtr-gfdg.validations.tIME.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
};
