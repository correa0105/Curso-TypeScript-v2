import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((acc, cv) => acc * cv, 1);
};

global.MINHAGLOBAL = 'Teste';

export default _;
