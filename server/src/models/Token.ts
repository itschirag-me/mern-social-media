import { model, Schema } from 'mongoose';
import TokenDocument from '../interfaces/token';

const tokenSchema = new Schema<TokenDocument>({
  token: {
    type: String,
    required: true,
  },
  expiry: {
    type: Date,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

tokenSchema.methods.expireToken = function () {
    this.expiry = new Date()
    return true;
}

const Token = model('token', tokenSchema);
export default Token;
