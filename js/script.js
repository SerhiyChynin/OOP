function myAlert(a, c, d) {
    
    b = `<p class="${c}">${a}</p>`;
    document.querySelector(d).innerHTML = b;
}
myAlert('Hi', 'red', '.test');
myAlert('Hello', 'orange', '.test2');

class Alert {
    constructor(a,c,d) {
        this.message = a;
        this.cssClass = c;
        this.out = d;

    }
    showAlert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`;
    }
} 

class Alert2 extends Alert {
    constructor(a,c,d, icon) {
        super(a, c, d) // передали значения в алерт 1. Аллерт 2 унаследовался от аллерт 1 + добавили иконку.
        this.icon = icon;    
    } showIconAlet() {
        
    }          
}
let m = new Alert('My message', 'orange', '.test');                
console.log(m);

m.showAlert();  
letm2 = new Alert2('My message', 'orange', '.test');     
