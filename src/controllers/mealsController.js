import mongoose from 'mongoose';
import { MealsSchema } from '../models/mealsModel';

const Meal = mongoose.model('Meal', MealsSchema);

export const addNewMeal = (req, res) => {
    var newMeal = new Meal(req.body);

    newMeal.save().then((meal) => {
        res.json(meal);
    }).catch((err) => {
        res.send(err);
    });
};

export const getMeals = (req, res) => {
    Meal.find().then((meal) => {
        res.json(meal);
    }).catch((err) => {
        res.send(err);
    });
};

export const getMealWithId = (req, res) => {
    Meal.findById(req.params.mealId).then((meal) => {
        res.json(meal);
    }).catch((err) => {
        res.send(err);
    });
};

export const updateMeal = (req, res) => {
    Meal.findOneAndUpdate({ _id: req.params.mealId }, req.body, {new: true}).then((meal) => {
        res.json(meal);
    }).catch((err) => {
        res.send(err);
    });
};

export const deleteMeal = (req, res) => {
    Meal.findOneAndRemove({ _id: req.params.mealId }).then((meal) => {
        res.json(meal);
    }).catch((err) => {
        res.send({ message: 'Effacé !'});
    });
};

