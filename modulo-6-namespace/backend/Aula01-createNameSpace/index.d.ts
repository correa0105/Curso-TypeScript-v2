declare namespace MyNamespace {
    const nameOfNamespace = "Lucas Corr\u00EAa";
    class PeopleNamespace {
        name: string;
        constructor(name: string);
    }
    namespace OtherNamespace {
        const nameOfNamespace = "Welson Fraga";
    }
}
declare const peopleOfNamespace: MyNamespace.PeopleNamespace;
