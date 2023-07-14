import mongoose from 'mongoose';
import { KnownMealsSchema } from '../models/knownMealsModel';

const KnownMeal = mongoose.model('KnownMeal', KnownMealsSchema);

export const addNewKnownMeal = (req, res) => {
    var newMeal = new KnownMeal(req.body);

    newMeal.save().then((meal) => {
        res.json(meal);
    }).catch((err) => {
        res.send(err);
    });
};

export const getKnownMeals = (req, res) => {
    KnownMeal.find().then((meal) => {
        res.json(meal);
    }).catch((err) => {
        res.send(err);
    });
};

export const getKnownMealWithId = (req, res) => {
    KnownMeal.findById(req.params.mealId).then((meal) => {
        res.json(meal);
    }).catch((err) => {
        res.send(err);
    });
};

export const updateKnownMeal = (req, res) => {
    KnownMeal.findOneAndUpdate({ _id: req.params.mealId }, req.body, {new: true}).then((meal) => {
        res.json(meal);
    }).catch((err) => {
        res.send(err);
    });
};

export const deleteKnownMeal = (req, res) => {
    KnownMeal.findOneAndRemove({ _id: req.params.mealId }).then((meal) => {
        res.json(meal);
    }).catch((err) => {
        res.send({ message: 'Effacé !'});
    });
};

