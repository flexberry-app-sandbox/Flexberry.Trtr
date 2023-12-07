import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as gfdgMixin
} from '../mixins/regenerated/models/i-i-s-trtr-gfdg';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(gfdgMixin, Validations, {
});

export default Model;
