import mongoose from 'mongoose';

import schemaObject from './schemaObject';

const { Schema } = mongoose;

const sublocationSchema = new Schema(schemaObject);

export default sublocationSchema;
