interface String{
    abrv(max?: number): string;
}

String.prototype.abrv = function(max = 3){
    return this.slice(0,max) + '.';
}