import BooleanExpressions from 'boolean-expressions';
import { QueryParameters, QueryPermutation } from '../model';
import generatePowerSet from '../util/generatePowerSet';

function computeTruthTable(b: BooleanExpressions): QueryPermutation[] {
  const truthTable: QueryPermutation[] = [];

  const variableNames = b.getVariableNames();
  const permutations: string[][] = [];
  generatePowerSet(variableNames, permutations);

  permutations.forEach(p => {
    const queryParameters: QueryParameters = new Map<string, boolean>();
    variableNames.forEach(v => {
      queryParameters.set(v, p.indexOf(v) >= 0);
    });
    const value = b.evaluate(p);
    const queryPermutation: QueryPermutation = {
      queryParameters,
      value,
    };
    truthTable.push(queryPermutation);
  });

  return truthTable;
}

export default computeTruthTable;
