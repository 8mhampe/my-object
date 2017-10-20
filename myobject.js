function drink(n,o,p){
    this.name=n;
    this.oz=o;
    this.price=p;

    this.costTotal = function(){
        return this.price*this.oz;
    };

}

function main(){
    let order1 = new drink ('pibb',32,.15)
    console.log(order1.costTotal);

}
