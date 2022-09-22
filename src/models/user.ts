import { model, Schema, Document, Types } from 'mongoose'
import bcrypt from 'bcrypt'

export interface IUser extends Document {
    email: string;
    password: string;
    role: string;
    postulantId: Types.ObjectId;
    comparePassword: (password: string) => Promise<boolean>
}

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trimm: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
    },
    posulantId: {
        type: Schema.Types.ObjectId,
        ref: "Postulant",
        required: false,
    }
},
    {
        strict: false
    }
);

userSchema.pre<IUser>('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
});

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
}

export default model<IUser>('User', userSchema)