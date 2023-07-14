import { addNewChore, getChores, getChoreWithId, updateChore, deleteChore } from '../controllers/choresController';
import { addNewKnownMeal, deleteKnownMeal, getKnownMealWithId, getKnownMeals, updateKnownMeal } from '../controllers/knownMealsController';
import { addNewMeal, deleteMeal, getMealWithId, getMeals, updateMeal } from '../controllers/mealsController';

const routes = (app) => {

    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        );
        res.setHeader(
          "Access-Control-Allow-Methods",
          "GET, POST, PUT, PATCH, DELETE, OPTIONS"
        );
        next();
    });

    app.route('/chores')
    .get((req, res, next) => {
        // Middleware
        console.log(`Request de : ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        res.set({
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Private-Network": "true",
            "Access-Control-Allow-Origin": "http://localhost:4200"
        })
        next();
    }, getChores)
    .post(addNewChore)
    .options((req, res) =>
        res.send('Options OK'));

    app.route('/chores/:choreId')
    .get(getChoreWithId)
    .put(updateChore)
    .delete(deleteChore);

    app.route('/meals')
    .get(getMeals)
    .post(addNewMeal)

    app.route('/meals/:mealId')
    .get(getMealWithId)
    .put(updateMeal)
    .delete(deleteMeal);

    app.route('/knownMeals')
    .get(getKnownMeals)
    .post(addNewKnownMeal)

    app.route('/knownMeals/:mealId')
    .get(getKnownMealWithId)
    .put(updateKnownMeal)
    .delete(deleteKnownMeal);
}

export default routes;