import mongoose from 'mongoose';
import { truncate } from 'fs';

const PostSchema = new mongoose.Schema({
    user: {
        type: 'ObjectId',
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: Date,
        default: Date.now
    }
});
const Post = mongoose.model('post', PostSchema);

export default Post;