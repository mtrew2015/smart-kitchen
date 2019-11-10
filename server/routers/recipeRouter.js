const express = require('express');
const router = express.Router();
const db = require('../helpers/recipeHelpers.js')


router.get('/all', (req,res) => {
	db.getAllRecipes()
	.then((recipes) => res.send(recipes))
	.catch(err => console.log(err));
});
router.get('/:id', (req, res) => {
	const id = req.params.id;
	db.getRecipeById(id).then((post) => res.send(post)).catch((err) => res.json({ message: err }));
});

router.get('/:author', (req, res) => {
	const { author } = req.params;
	db.getRecipesByUser(author).then((recipes) => res.json({recipes})).catch((err) => console.log(err));
});

router.post('/add', (req, res) => {
	const recipe = req.body;
	db
		.insertRecipe(recipe)
		.then((id) => res.json({ message: `Your post was created with an ID of ${id}` }))
		.catch((err) => res.send(err));
});

router.put('/update/:id', (req, res) => {
	const { id } = req.params;
	const recipe = req.body;
	db
		.updateRecipe(id, recipe)
		.then((id) => res.json({ message: `your recipe update of ${id} update was successful` }))
		.catch((err) => res.send(err));
});

router.delete('/:id', (req, res) => {
	console.log(req.params)
	const { id } = req.params;
	console.log(id)
	db
		.deleteRecipe(id)
		.then((count) => {
			res.json({ message: `${count} number of records deleted` });
		})
		.catch((err) => res.send(err));
});

module.exports = router;
