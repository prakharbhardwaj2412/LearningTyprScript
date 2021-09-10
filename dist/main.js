var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var a = "1";
console.log('aaa', a);
// ======================VARIABLES in TS======================
var hello = "world";
hello = "5";
// ======================FUNCTION in TS=============================
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Prakhar", "Bhardwaj"));
// ======================OBJECTS in TS==========================
var user = {
    name: "Prakhar",
    age: 30,
    getMessage: function () {
        return "Hello" + name;
    }
};
var user2 = {
    name: "Jack",
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log(user.age);
// ======================UNION & TYPE ALIAS in TS===========================
var pageName = '1';
var errorMessage = null;
var popularTags = ['dragon', 'coffee'];
var dragonTag = 'dragon';
var user3 = null;
// ======================VOID in TS==================
var doSomething = function () {
    console.log("doSomething");
    // return "doSomething"
};
var foo = undefined;
// foo = "foo";
// ======================ANY In TS======================
var faa = "faa";
// console.log(faa.bar());
// ======================NEVER IN TS====================
var doSmthng = function () {
    throw "never";
};
// ======================UNKNOWN in TS & TYPE ASSERTION==================
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
var s2 = vUnknown;
var pageNumber = "1";
var numericPageNumber = pageNumber;
// console.log(vAny.foo());
// console.log(vUnknown.foo());
// ======================WORKING WITH DOM==========================
var someElement = document.querySelector(".foo");
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lasteName = lastName;
        this.unchangableName = firstName;
    }
    User.prototype.getFullname = function () {
        return this.firstName + ' ' + this.lasteName;
    };
    User.maxAge = 50;
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var user4 = new User("Prakhar", "Bhardwaj");
console.log(user4);
console.log(User.maxAge);
var admin = new Admin("Foo", "Bar");
// ======================GENERICS in TS===========================
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user5 = {
    name: 'Jack',
    data: {
        meta: "foo"
    },
    meta: "bar"
};
var user6 = {
    name: "John",
    data: ["foo", "bar", "baz"],
    meta: "hello"
};
// const result = addId<UserInterface3>(user5);
// console.log('result', result);
// =========================================================
var searchStr = "foo";
// const hasSearchedString = any<string>((el: string) => el.contains(searchStr), ["fooooo", "bar", "baz"])
// ======================ENUMS in TS==========================
var statuses = {
    notStarted: 0,
    inProgress: "in progress",
    done: 2
};
console.log(statuses.inProgress);
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["NotStarted"] = 0] = "NotStarted";
    StatusEnum[StatusEnum["InProgress"] = 1] = "InProgress";
    StatusEnum[StatusEnum["Done"] = 2] = "Done";
})(StatusEnum || (StatusEnum = {}));
var notStartedStatus = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;
console.log(StatusEnum.InProgress);
