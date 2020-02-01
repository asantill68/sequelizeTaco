var orm = require('../config/orm.js');

var taco = {
    all:  function(cb){
        orm.all('tacos', function(res){
            cb(res);
        })
    },
    update:  function(id, cb){
        orm.update('tacos', id, cb);
    },

    create:  function(name, cb){
        orm.create('tacos', name, cb);
    }
}

module.exports = taco;
