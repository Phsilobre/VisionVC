import mongoose from 'mongoose';
import { ChoresSchema } from '../models/choresModel';

const Chore = mongoose.model('Chore', ChoresSchema);

export const addNewChore = (req, res) => {
    let newChore = new Chore(req.body);

    newChore.save().then((chore) => {
        res.json(chore);
    }).catch((err) => {
        res.send(err);
    });
};

export const getChores = (req, res) => {
    Chore.find().then((chore) => {
        res.json(chore);
    }).catch((err) => {
        res.send(err);
    });
};

export const getChoreWithId = (req, res) => {
    Chore.findById(req.params.choreId).then((chore) => {
        res.json(chore);
    }).catch((err) => {
        res.send(err);
    });
};

export const updateChore = (req, res) => {
    Chore.findOneAndUpdate({ _id: req.params.choreId }, req.body, {new: true}).then((chore) => {
        res.json(chore);
    }).catch((err) => {
        res.send(err);
    });
};

export const deleteChore = (req, res) => {
    Chore.findOneAndRemove({ _id: req.params.choreId }).then((chore) => {
        res.json(chore);
    }).catch((err) => {
        res.send({ message: 'Effacé !'});
    });
};

