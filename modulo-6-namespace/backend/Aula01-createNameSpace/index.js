"use strict";
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.nameOfNamespace = 'Lucas Corrêa';
    class PeopleNamespace {
        constructor(name) {
            this.name = name;
        }
    }
    MyNamespace.PeopleNamespace = PeopleNamespace;
    const people = new PeopleNamespace('Lucas');
    console.log(people);
    let OtherNamespace;
    (function (OtherNamespace) {
        OtherNamespace.nameOfNamespace = 'Welson Fraga';
    })(OtherNamespace = MyNamespace.OtherNamespace || (MyNamespace.OtherNamespace = {}));
})(MyNamespace || (MyNamespace = {}));
const peopleOfNamespace = new MyNamespace.PeopleNamespace('Lucas');
console.log(peopleOfNamespace);
console.log(MyNamespace.nameOfNamespace);
console.log(MyNamespace.OtherNamespace.nameOfNamespace);
//# sourceMappingURL=index.js.map