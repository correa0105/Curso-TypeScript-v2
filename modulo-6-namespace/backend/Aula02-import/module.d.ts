declare namespace TestNamespace {
    const nameTestNamespace = "Lucas Corr\u00EAa";
    class PeopleNamespace {
        name: string;
        constructor(name: string);
    }
    namespace OtherNamespace {
        const nameTestNamespace = "Welson Fraga";
    }
}
declare const peopleNamespace: TestNamespace.PeopleNamespace;
