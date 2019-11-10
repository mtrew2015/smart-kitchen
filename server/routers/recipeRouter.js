const express = require('express');
const router = express.Router();
const db = require('../helpers/recipeHelpers.js')


router.get('/all', (req,res) => {
	db.getAllRecipes().then((recipes) => res.json({data: recipes}).catch(err => console.log(err)))
});
router.get('/:id', (req, res) => {
	const id = req.params.id;
	db.getRecipeById(id).then((post) => res.json({ data: post })).catch((err) => res.json({ message: err }));
});

router.get('/:author', (req, res) => {
	const { author } = req.params;
	db.getRecipesByUser(author).then((recipes) => res.json({ data: recipes })).catch((err) => res.json({ message: err }));
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

router.delete('delete/:id', (req, res) => {
	const { id } = req.params;
	db
		.deletePost(id)
		.then((count) => {
			res.json({ message: `${count} number of records deleted` });
		})
		.catch((err) => res.send('Could not delete this post'));
});

module.exports = router;
