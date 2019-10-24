import mongoose from 'mongoose';
 
const userSchema = new mongoose.schema ({
   name: {
       type: String,
       required: true
   },
   email: {
       type: String,
       required: true,
       unique: true
   },
   password: {
       type: String,
       required: true
   }
});
 
const User = mongoose.model('user', UserSchema);
 
export default User;
