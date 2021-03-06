const router = require('express').Router();
const { Wine } = require('../../models');

// ADD new wine
router.post('/', async (req, res) => {

  try {
    const newWine = await Wine.create({
      ...req.body,
    });

    res.status(200).json(newWine);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
    
});

// DELETE existing wine
router.delete('/:id', async (req, res) => {

  try {
    const wineData = await Wine.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!wineData) {
      res.status(404).json({ message: 'No wine found with this id!' });
      return;
    }

    res.status(200).json(wineData);

  } catch (err) {
    res.status(500).json(err);
  }
  
});

module.exports = router;