import mongoose from 'mongoose';

const { MONGODB_URI = 'mongodb://localhost:27017' } = process.env;

function connectDB() {
  if (mongoose.connections[0].readyState)
    return console.log('Already connected.');

  mongoose.connect(MONGODB_URI, {}, (err) => {
    if (err) return console.log(err);
    return console.log('MongoDB connected.');
  });
}

export default connectDB;
