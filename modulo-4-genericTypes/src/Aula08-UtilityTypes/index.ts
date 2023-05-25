//Record
const object1: Record<string, string | number> = {
  name: 'Lucas',
  lastname: 'Corrêa',
  age: 23,
};

console.log(object1);

type PeopleProtocol = {
  name?: string;
  lastname?: string;
  age?: number;
};

//Required
type PeopleRequired = Required<PeopleProtocol>;

//Partial
type PeoplePartial = Partial<PeopleRequired>;

//Readonly
type PeopleReadonly = Readonly<PeopleRequired>;

//Pick
type PeoplePick = Pick<PeopleRequired, 'name' | 'lastname'>;

const object2: PeoplePartial = {
  name: 'Lucas',
  lastname: 'Corrêa',
  age: 23,
};

console.log(object2);

//Extract and Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'dsadaqwio3q84inda',
  name: 'Lucas',
  age: 23,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

export default 1;
