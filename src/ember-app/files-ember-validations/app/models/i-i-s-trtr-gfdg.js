import {
  defineNamespace,
  Model as gfdgMixin
} from '../mixins/regenerated/models/i-i-s-trtr-gfdg';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(gfdgMixin, {
});

defineNamespace(Model);

export default Model;
