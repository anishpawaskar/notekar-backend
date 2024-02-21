import { connect } from "mongoose";

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    await connect(mongoURI);
    console.log(`Connected to mongoDB successfully🚀`);
  } catch (err) {
    console.error(`Failed to connect with mongoDB ${err}`);
  }
};
