import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)
adminSchema.methods.matchPassword = async function (enteredPassword) {
  console.log('reached here')
  console.log(enteredPassword)
  // console.log(bcrypt.compare(enteredPassword, this.password))
  // console.log('passwords compared')
  return await bcrypt.compare(enteredPassword, this.password)
  // console.log('reached here, 1')
}
const Admin = mongoose.model('Admin', adminSchema)
export default Admin
