type VotationOption = {
  numberOfvotes: number;
  option: string;
};

class Votation {
  private _votationOptions: VotationOption[] = [];
  public details: string;

  constructor(details: string) {
    this.details = details;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfvotes += 1;
  }

  /*   showVotations(): void {
    console.log(this.details);
    for (const votation of this._votationOptions) {
      console.log(votation.option + ' ' + votation.numberOfvotes);
    }
  } */
}

class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
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
/* votation1.showVotations(); */

const votationApp1 = new VotationApp();
votationApp1.addVotation(votation1);
votationApp1.showVotations();
