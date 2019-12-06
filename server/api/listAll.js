var pool = require('../common/db');


const getListOfThemes = (request, response) => {

    // var count = request.body.count;
    // var page = request.body.page * count;
    var count = 10;
    var page = 0 * count;


            pool.query('SELECT * FROM test_table ORDER BY  date_time DESC ', [page, count], function (error, results) {
                if (error) {
                    console.log(error);
                    response.send('{"status":"' + 1 + '"}');
                } else {
                    console.log(results);
                    console.log("OK I managed to connect to database and pull something");
                    response.send(JSON.stringify(results));


                }
            });


    };



module.exports = getListOfThemes;
