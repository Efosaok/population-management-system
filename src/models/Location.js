import 'idempotent-babel-polyfill';
import mongoose from 'mongoose';

import sublocationSchema from './sublocationSchema';
import schemaObject from './schemaObject';

const { Schema } = mongoose;

const locationSchema = new Schema({
  ...schemaObject,
  sublocations: [sublocationSchema],
});

const Location = mongoose.model('Location', locationSchema);

export default Location;
