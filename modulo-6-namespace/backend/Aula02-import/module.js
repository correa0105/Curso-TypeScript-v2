"use strict";
var TestNamespace;
(function (TestNamespace) {
    TestNamespace.nameTestNamespace = 'Lucas Corrêa';
    class PeopleNamespace {
        constructor(name) {
            this.name = name;
        }
    }
    TestNamespace.PeopleNamespace = PeopleNamespace;
    const people = new PeopleNamespace('Lucas');
    console.log(people);
    let OtherNamespace;
    (function (OtherNamespace) {
        OtherNamespace.nameTestNamespace = 'Welson Fraga';
    })(OtherNamespace = TestNamespace.OtherNamespace || (TestNamespace.OtherNamespace = {}));
})(TestNamespace || (TestNamespace = {}));
const peopleNamespace = new TestNamespace.PeopleNamespace('Lucas');
console.log(peopleNamespace);
console.log(TestNamespace.nameTestNamespace);
console.log(TestNamespace.OtherNamespace.nameTestNamespace);
//# sourceMappingURL=module.js.map