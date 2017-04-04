var connection = require('../config/connection');

function Page() {
    this.get = function(res) {
        connection.acquire(function(err, con) {
            con.query('select id, title from page order by id desc', function(err, result) {
                con.release();
                if(!result) {
                    res.status = 404;
                    return res.json({ "error" : "Not found" });
                }
                if (!err) {
                    res.status = 200;
                    return res.json({ result:result });
                } else {
                    res.status = 500;
                    return res.json({ "error" : "Server error" });
                }
            });
        });
    };

    this.show = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('select id, title, text from page where id = ?', [id], function(err, result) {
                con.release();
                if(!result) {
                    res.status = 404;
                    return res.json({ "error" : "Not found" });
                }
                if (!err) {
                    res.status = 200;
                    return res.json({ result:result });
                } else {
                    res.status = 500;
                    return res.json({"error" : "Server error" });
                }
            });
        });
    };

    this.create = function(page, res) {
        connection.acquire(function(err, con) {
            con.query('insert into page set ?', page, function(err, result) {
                con.release();
                if(!result) {
                    res.status = 404;
                    return res.json({ "error" : "Not found" });
                }
                if (!err) {
                    res.status = 200;
                    return res.json({ result:result });
                } else {
                    res.status = 500;
                    return res.json({ "error" : "Server error" });
                }
            });
        });
    };

    this.update = function(page, res) {
        connection.acquire(function(err, con) {
            con.query('update page set ? where id = ?', [page, page.id], function(err, result) {
                con.release();
                if(!result.affectedRows) {
                    res.status = 404;
                    return res.json({ "error" : "Not found" });
                }
                if (!err) {
                    res.status = 200;
                    return res.json({ result:result });
                } else {
                    res.status = 500;
                    return res.json({ "error" : "Server error" });
                }
            });
        });
    };

    this.delete = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('delete from page where id = ?', [id], function(err, result) {
                con.release();
                if(!result.affectedRows) {
                    res.status = 404;
                    return res.json({ "error" : "Not found" });
                }
                if (!err) {
                    res.status = 200;
                    return res.json({ result:result });
                } else {
                    res.status = 500;
                    return res.json({ "error" : "Server error" });
                }
            });
        });
    };
}

module.exports = new Page();
