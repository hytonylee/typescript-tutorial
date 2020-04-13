var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User created: " + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + " is now registered!");
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + "'s paid invoice.");
    };
    return User;
}());
var Memeber = /** @class */ (function (_super) {
    __extends(Memeber, _super);
    function Memeber(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Memeber.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Memeber;
}(User));
// let john = new User('John Doe', 'john.d@gmail.com', 32)
// john.payInvoice();
var mike = new User('Mike Smith', 'mike.s@gmail.com', 42);
mike.payInvoice();
