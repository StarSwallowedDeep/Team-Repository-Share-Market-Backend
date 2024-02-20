import mongoose, { Schema } from "mongoose";

const AccessSchema = new Schema({
    device: String,
    location: String,
}, { timestamps: { currentTime: () => Date.now() + (9 * 60 * 60 * 1000) } });

const Accesslog = mongoose.model('Accesslog', AccessSchema);
export default Accesslog;
