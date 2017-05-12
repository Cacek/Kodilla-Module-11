$(function () {

    var person = {
        name: "Jan",
        sayHello: function () {
            console.log("Witaj " + this.name + "!");
        }
    }

    function Telephone(marka, cena, kolor, ekran) {
        this.marka = marka;
        this.cena = cena;
        this.kolor = kolor;
        this.ekran = ekran;
    }
    Telephone.prototype.printInfo = function () {
        console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", cena to " + this.cena + ", ale placisz za ekran " + this.ekran + ".")
    }

    function Button(text) {
        this.text = text || 'Click me!';
    }

    Button.prototype = {
        create: function () {
            var self = this;
            this.$element = $('<button>');
            this.$element.text(this.text);
            this.$element.click(function () {
                
                alert(self.text);
                
            });
            $('body').append(this.$element);
        }
    }

    var iPhone6s = new Telephone('Apple', 3000, 'srebrny', 'retina');
    iPhone6s.printInfo()
    var GalaxyS8 = new Telephone('Samsung', 3500, 'niebieski', 'AMOLED');
    GalaxyS8.printInfo()
    
    var btn1 = new Button('Hello!');
    btn1.create();

});
