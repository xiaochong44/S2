import type { S2DataConfig } from '@antv/s2';
import type { G2Spec } from '@antv/g2';
import type { SheetComponentOptions } from '../src';

const intake = [
  { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
  { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
  { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
  { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
  { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
  { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
  { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
  { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
  { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
  { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
  { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
  { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
  { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
  { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
  { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' },
];

export const chartOptions: SheetComponentOptions = {
  width: 1000,
  height: 1700,
  interaction: {
    hoverHighlight: false,
    hoverFocus: false,
    selectedCellsSpotlight: false,
  },
  style: {
    cellCfg: {
      height: 200,
    },
    layoutWidthType: 'colAdaptive',
  },
};

const sold = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];

const commonEncode = {
  x: 'genre',
  y: 'sold',
  color: 'genre',
};

const getIntervalOptions = (coordinate: string, shape: string) => {
  return {
    type: 'interval',
    data: sold,
    coordinates: [{ type: coordinate }],
    encode: {
      ...commonEncode,
      shape,
    },
  } as G2Spec;
};

const getLineOptions = (coordinate: string, shape: string) => {
  return {
    type: 'line',
    data: sold,
    coordinates: [{ type: coordinate }],
    encode: {
      x: 'genre',
      y: 'sold',
      shape,
    },
  } as G2Spec;
};

const getPointOptions = (coordinate: string, shape: string): G2Spec => {
  return {
    type: 'point',
    data: intake,
    coordinates: [{ type: coordinate }],
    encode: {
      x: 'x',
      y: 'y',
      size: 'z',
      color: '#1890ff',
      shape,
    },
  } as G2Spec;
};

const getAreaOptions = (coordinate: string, shape: string) => {
  return {
    type: 'area',
    data: [
      { year: '1991', value: 0 },
      { year: '1992', value: 632 },
      { year: '1993', value: 432 },
      { year: '1994', value: 1941 },
      { year: '1995', value: 1532 },
      { year: '1996', value: 15588 },
      { year: '1997', value: 16514 },
      { year: '1998', value: 16572 },
      { year: '1999', value: 17765 },
    ],
    coordinate: [{ type: coordinate }],
    encode: {
      x: 'year',
      y: 'value',
      color: 'value',
      series: 'a',
      shape,
    },
    style: {
      gradient: true,
    },
  } as G2Spec;
};

export const chartSheetDataConfig: S2DataConfig = {
  fields: {
    columns: ['coordinate'],
    rows: ['mark', 'shape'],
    values: ['chart'],
    valueInCols: true,
  },
  data: [
    {
      coordinate: 'Cartesian',
      mark: 'Interval',
      shape: 'Rect',
      chart: getIntervalOptions('cartesian', 'rect'),
    },
    {
      coordinate: 'Transpose',
      mark: 'Interval',
      shape: 'Rect',
      chart: getIntervalOptions('transpose', 'rect'),
    },
    {
      coordinate: 'Polar',
      mark: 'Interval',
      shape: 'Rect',
      chart: getIntervalOptions('polar', 'rect'),
    },
    {
      coordinate: 'Radial',
      mark: 'Interval',
      shape: 'Rect',
      chart: getIntervalOptions('radial', 'rect'),
    },
    {
      coordinate: 'Cartesian',
      mark: 'Interval',
      shape: 'Hollow',
      chart: getIntervalOptions('cartesian', 'hollow'),
    },
    {
      coordinate: 'Transpose',
      mark: 'Interval',
      shape: 'Hollow',
      chart: getIntervalOptions('transpose', 'hollow'),
    },
    {
      coordinate: 'Polar',
      mark: 'Interval',
      shape: 'Hollow',
      chart: getIntervalOptions('polar', 'hollow'),
    },
    {
      coordinate: 'Radial',
      mark: 'Interval',
      shape: 'Hollow',
      chart: getIntervalOptions('radial', 'hollow'),
    },
    {
      coordinate: 'Cartesian',
      mark: 'Point',
      shape: 'Point',
      chart: getPointOptions('cartesian', 'point'),
    },
    {
      coordinate: 'Transpose',
      mark: 'Point',
      shape: 'Point',
      chart: getPointOptions('transpose', 'point'),
    },
    {
      coordinate: 'Polar',
      mark: 'Point',
      shape: 'Point',
      chart: getPointOptions('polar', 'point'),
    },
    {
      coordinate: 'Radial',
      mark: 'Point',
      shape: 'Point',
      chart: getPointOptions('radial', 'point'),
    },
    {
      coordinate: 'Cartesian',
      mark: 'Point',
      shape: 'Plus',
      chart: getPointOptions('cartesian', 'plus'),
    },
    {
      coordinate: 'Transpose',
      mark: 'Point',
      shape: 'Plus',
      chart: getPointOptions('transpose', 'plus'),
    },
    {
      coordinate: 'Polar',
      mark: 'Point',
      shape: 'Plus',
      chart: getPointOptions('polar', 'plus'),
    },
    {
      coordinate: 'Radial',
      mark: 'Point',
      shape: 'Plus',
      chart: getPointOptions('radial', 'plus'),
    },
    {
      coordinate: 'Cartesian',
      mark: 'Line',
      shape: 'Line',
      chart: getLineOptions('cartesian', 'line'),
    },
    {
      coordinate: 'Transpose',
      mark: 'Line',
      shape: 'Line',
      chart: getLineOptions('transpose', 'line'),
    },
    {
      coordinate: 'Polar',
      mark: 'Line',
      shape: 'Line',
      chart: getLineOptions('polar', 'line'),
    },
    {
      coordinate: 'Radial',
      mark: 'Line',
      shape: 'Line',
      chart: getLineOptions('radial', 'line'),
    },
    {
      coordinate: 'Cartesian',
      mark: 'Area',
      shape: 'Area',
      chart: getAreaOptions('cartesian', 'area'),
    },
    {
      coordinate: 'Transpose',
      mark: 'Area',
      shape: 'Area',
      chart: getAreaOptions('transpose', 'area'),
    },
    {
      coordinate: 'Polar',
      mark: 'Area',
      shape: 'Area',
      chart: getAreaOptions('polar', 'area'),
    },
    {
      coordinate: 'Radial',
      mark: 'Area',
      shape: 'Area',
      chart: getAreaOptions('radial', 'area'),
    },
    {
      coordinate: 'Cartesian',
      mark: 'Area',
      shape: 'Step',
      chart: getAreaOptions('cartesian', 'step'),
    },
    {
      coordinate: 'Transpose',
      mark: 'Area',
      shape: 'Step',
      chart: getAreaOptions('transpose', 'step'),
    },
    {
      coordinate: 'Polar',
      mark: 'Area',
      shape: 'Step',
      chart: getAreaOptions('polar', 'step'),
    },
    {
      coordinate: 'Radial',
      mark: 'Area',
      shape: 'Step',
      chart: getAreaOptions('radial', 'step'),
    },
  ],
};
