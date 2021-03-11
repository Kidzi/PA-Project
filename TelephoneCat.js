const Telephone = require('./telephone');

function Favorite(name, family, number, job, nickname) {
    Telephone.call(this, name, family, number, job);
    this.type = "Favorite";
    this.nickname = nickname;
}

Favorite.prototype = new Telephone();
Favorite.prototype.constructor = Favorite;


//=====================================================

function Regular(name, family, number, job, nickname) {
    Telephone.call(this, name, family, number, job);
    this.type = "Regular";
    this.nickname = nickname;
}

Regular.prototype = new Telephone();
Regular.prototype.constructor = Regular;


Regular.prototype.getDescription = function(){
    return this.name + "nickname: " + this.nickname;
}

//========================================================

module.exports = {
    Favorite: Favorite,
    Regular: Regular
};