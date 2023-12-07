import { Serializer as gfdgSerializer } from
  '../mixins/regenerated/serializers/i-i-s-trtr-gfdg';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(gfdgSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
