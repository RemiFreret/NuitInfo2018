router.get('/tachecreate', function (req, res) {
    models.taches.create({
        objectif: "collecter pierre",
        date: new Date (now),
        priorite : 1,
        fait: false,
        duree : 15
    }).then(function() {
        models.taches.findAll().then(function(results) {
            res.render('module002', {
              title: 'TEST',
                taches: results
            });
        });
    })
})