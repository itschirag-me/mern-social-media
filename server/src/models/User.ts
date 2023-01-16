import { model, Schema } from 'mongoose';
import UserDocument from '../interfaces/user';
import bcrypt from 'bcrypt';

const userSchema = new Schema<UserDocument>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.methods.encryptPassword = function () {
  return new Promise((resolve, reject) => {
    bcrypt
      .genSalt(20)
      .then((salt) => {
        bcrypt
          .hash(this.password, salt)
          .then((hash) => {
            this.password = hash;
            resolve(hash);
          })
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error));
  });
};

userSchema.methods.comparePassword = function (password: string) {
  return bcrypt.compare(password, this.password);
};

const User = model('user', userSchema);
export default User;
