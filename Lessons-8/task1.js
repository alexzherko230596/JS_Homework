function Animal(name){
    var self = this;
    this.name = name;
    this._foodAmount = 0;
}

Animal.prototype._formatFoodAmount = function(){
    return this._foodAmount + ' гр.';
}

Animal.prototype.feed = function(){
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
}

Animal.prototype.dailyNorm = function(amount){
    if(!arguments.length) return this._formatFoodAmount();
    if(amount<50) {
        throw new Error('Your feed should be more than 50');
    }
    if(amount>500){
        throw new Error('Your feed should be less than 500');
    }

    this._foodAmount = amount;
}

function CatAnimal (){
    Animal.apply(this, arguments);
}

CatAnimal.prototype = Object.create(Animal.prototype);
CatAnimal.prototype.constructor = CatAnimal;

CatAnimal.prototype.feed = function(){
    Animal.prototype.feed.apply(this);
    this.happy();
    return this;
}

CatAnimal.prototype.happy = function(){
    console.log( 'The cat is so happy!' );
}

CatAnimal.prototype.stroke = function(){
    console.log('Stroke your cat')
    return this;
}

var barsik = new CatAnimal('Барсик');
console.log(barsik.name)
barsik.dailyNorm(400);
console.log(barsik.feed());
barsik.feed().stroke();