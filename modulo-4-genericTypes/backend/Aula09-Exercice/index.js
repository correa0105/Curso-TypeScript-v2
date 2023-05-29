"use strict";
class Votation {
    constructor(details) {
        this._votationOptions = [];
        this.details = details;
    }
    get votationOptions() {
        return this._votationOptions;
    }
    addVotationOption(votationOption) {
        this._votationOptions.push(votationOption);
    }
    vote(votationIndex) {
        if (!this._votationOptions[votationIndex])
            return;
        this._votationOptions[votationIndex].numberOfvotes += 1;
    }
}
class VotationApp {
    constructor() {
        this.votations = [];
    }
    addVotation(votation) {
        this.votations.push(votation);
    }
    showVotations() {
        for (const votation of this.votations) {
            console.log(votation.details);
            for (const votationOption of votation.votationOptions) {
                console.log(votationOption.option, votationOption.numberOfvotes);
            }
            console.log('###');
        }
    }
}
const votation1 = new Votation('Qual sua linguagem de programação favorita?');
votation1.addVotationOption({ option: 'Python', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'JavaScript', numberOfvotes: 0 });
votation1.addVotationOption({ option: 'TypeScript', numberOfvotes: 0 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(1);
votation1.vote(2);
const votationApp1 = new VotationApp();
votationApp1.addVotation(votation1);
votationApp1.showVotations();
//# sourceMappingURL=index.js.map