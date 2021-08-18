function Animal(name){
    var self = this;

    this.name = name;
    // var _foodAmount = 0;
    var foodAmount = 0;

    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };

    this.dailyNorm = function (amount){
        if(!arguments.length) return formatFoodAmount();
        if(amount<50) {
            throw new Error('Your feed should be more than 50');
        }
        if(amount>500){
            throw new Error('Your feed should be less than 500');
        }

        foodAmount = amount;
    }
}

function CatAnimal (){
    Animal.apply(this, arguments);

    var animalFeed = this.feed;
    this.feed = function() {
        animalFeed();
        this.happy();
        return this;
        }

    this.happy = function() {
        console.log( 'The cat is so happy!' );
    };

    this.stroke = function() {
        console.log('Stroke your cat')
        return this;
    }
}

var barsik = new CatAnimal('Барсик');

console.log(barsik.name)
barsik.dailyNorm(400);
console.log(barsik.feed());
barsik.feed().stroke();