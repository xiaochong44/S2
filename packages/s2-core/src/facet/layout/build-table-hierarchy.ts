import { getDefaultSeriesNumberText } from '../../common';
import { SERIES_NUMBER_FIELD } from '../../common/constant';
import { generateHeaderNodes } from '../../utils/layout/generate-header-nodes';
import type { HeaderParams } from './interface';

export const buildTableHierarchy = (params: HeaderParams) => {
  const { spreadsheet, rootNode, fields, hierarchy } = params;
  const { columns = [] } = spreadsheet.dataSet.fields;
  const { showSeriesNumber } = spreadsheet.options;

  const fieldValues = columns.map((field) =>
    spreadsheet.dataSet.getFieldName(field),
  );

  if (showSeriesNumber) {
    fields.unshift(SERIES_NUMBER_FIELD);
    fieldValues.unshift(getDefaultSeriesNumberText());
  }

  generateHeaderNodes({
    spreadsheet,
    currentField: fields[0] as string,
    fields: fields as string[],
    fieldValues,
    hierarchy,
    parentNode: rootNode,
    level: 0,
    query: {},
    addMeasureInTotalQuery: false,
    addTotalMeasureInTotal: false,
  });
};
