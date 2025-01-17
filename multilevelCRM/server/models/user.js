import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique:true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      minlength: 2,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    companyName: { // Corrected 'comapnyName' to 'companyName'
      type: String,
      minlength: 5,
    },
    state: { // Corrected 'State' to 'state' to keep naming consistent
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      require:true,
      enum: [
        "masteragent",
        "agent",
        "counsellor",
        "superadmin",
        "admin",
        "processor",
        "manager",
        "teamleader",
        "developer",
      ],
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
