const sausagesData =require('../data')

class Sausage {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.numberOfLinks = data.numberOfLinks;
        this.spiciness = data.spiciness;
        this.curvature = data.curvature;
        this.deliciousness = data.deliciousness;
        this.smoked = data.smoked;
    }
    static get all() {
        const sausages = sausagesData.map((s)=> new Sausage(s));
        return sausages;
    }

    static create(Sausage) {
        const newSausageId = sausagesData.length + 1;
        const newSausage = new Sausage({id: newSausageId, ...sausage});
        sausagesData.push(newSausage);
        return newSausage;
    }
}

module.exports = Sausage;