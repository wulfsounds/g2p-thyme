const router = require('express').Router();
const { User, List, Task } = require('../models');

// GET edit list page
router.get('/list/:id', async (req, res) => {

  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {

    try {
        const singleList = await List.findByPk(req.params.id, {
          include: [ { model: Task } ],
        });
        const list = singleList.get({ plain: true });

        // confirms approved user is accessing list
        if(list.user_id !== req.session.user_id) {
          res.send('Access Denied! You have no permission to view this list.')
        } else {
          res.render('editlist', { list, loggedIn: req.session.loggedIn });
        }

      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }

  }
      
});


module.exports = router;