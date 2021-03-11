function Telephone(name, family, number, job) {
    this.name = name;
    this.family = family;
    this.number = number;
    this.job = job;
}

Telephone.prototype.getContact = function () {
    return this.name;
}

Telephone.prototype.getDescription = function () {
    return this.name + " " + this.family + " " + this.number + " " + this.job;
}

module.exports = Telephone;