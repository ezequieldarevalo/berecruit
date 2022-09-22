import { model, Schema, Document } from 'mongoose'

interface IStudy {
    institute: string;
    yearFrom: number;
    yearTo: number;
}

export interface IPostulant extends Document {
    email: string;
    state: string;
    completeName: string;
    studies: IStudy[];
}

const StudySchema = new Schema({
    institute: {
        type: String,
    },
    yearFrom: {
        type: Number,
    },
    yearTo: {
        type: Number,
    }
},
    {
        strict: false
    }
);

const postulantSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    state: {
        type: String,
        required: true,
        lowercase: true,
    },
    completeName: {
        type: String,
        required: false,
        lowercase: true,
    },
    studies: {
        type: [StudySchema]
    }
},
    {
        strict: false
    }
);

export default model<IPostulant>('Postulant', postulantSchema)