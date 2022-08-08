import { CommonSimpleModel } from './common-simple.model';

export interface BudgetWithValueModel extends CommonSimpleModel {
  facSpecies?: number;
  facCash?: number;
  otherSpecies?: number;
  otherCash?: number;
  totalFac?: number;
  totalOthers?: number;
  total?: number;
}
