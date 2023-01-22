import { model, Schema } from 'mongoose';
import UserDocument from '../interfaces/user';
import bcrypt from 'bcrypt';
import moment from 'moment';

const userSchema = new Schema<UserDocument>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNumber: {
    type: String,
    required: true,
    unique: true,
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
    email: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: Boolean,
      default: false,
    },
  },
  createdAt: {
    type: Date,
    default: moment(),
  },
});

userSchema.methods.encryptPassword = function () {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (error, salt) => {
      if (error) {
        reject(error);
        return;
      }
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) {
          reject(err);
          return;
        }
        this.password = hash;
        resolve(hash);
      });
    });
  });
};

userSchema.methods.comparePassword = function (password: string) {
  return bcrypt.compare(password, this.password);
};

const User = model('user', userSchema);
export default User;
