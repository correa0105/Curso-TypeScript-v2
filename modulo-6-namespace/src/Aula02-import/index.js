/* eslint-disable @typescript-eslint/no-namespace */
var TestNamespace;
(function (TestNamespace) {
    TestNamespace.nameTestNamespace = 'Lucas Corrêa';
    var PeopleNamespace = /** @class */ (function () {
        function PeopleNamespace(name) {
            this.name = name;
        }
        return PeopleNamespace;
    }());
    TestNamespace.PeopleNamespace = PeopleNamespace;
    var people = new PeopleNamespace('Lucas');
    console.log(people);
    var OtherNamespace;
    (function (OtherNamespace) {
        OtherNamespace.nameTestNamespace = 'Welson Fraga';
    })(OtherNamespace = TestNamespace.OtherNamespace || (TestNamespace.OtherNamespace = {}));
})(TestNamespace || (TestNamespace = {}));
var peopleNamespace = new TestNamespace.PeopleNamespace('Lucas');
console.log(peopleNamespace);
console.log(TestNamespace.nameTestNamespace);
console.log(TestNamespace.OtherNamespace.nameTestNamespace);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="module.ts" />
console.log(peopleNamespace);
