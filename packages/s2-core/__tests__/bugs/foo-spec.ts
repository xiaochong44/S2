import { getContainer, sleep } from 'tests/util/helpers';
import type { Group } from '@antv/g';
import { PivotSheet } from '@/sheet-type';
import { S2Event, type S2DataConfig, type S2Options } from '@/common';

describe('Test Tests', () => {
  test('Reneder Called', async () => {
    const s2 = new PivotSheet(
      getContainer(),
      {
        fields: {
          rows: ['date'],
          columns: [],
          values: ['count'],
        },
        data: [
          {
            date: '1',
            count: 233,
          },
        ],
      } as S2DataConfig,
      {
        width: 200,
        height: 300,
      } as S2Options,
    );

    await s2.container.ready;
    await sleep(1000);

    s2.render();

    // s2.container.appendChild(
    //   s2.container.document.createElement('text', {
    //     style: {
    //       text: '233',
    //       x: 0,
    //       y: 0,
    //       width: 100,
    //       height: 80,
    //       stroke: 'red',
    //       fontSize: 12,
    //       fontFamily: `""Roboto","PingFangSC","BlinkMacSystemFont","Microsoft YaHei","Arial",sans-serif"`,
    //     },
    //   }),
    // );
    expect(s2.container.document.documentElement.children).toHaveLength(1);
  });
});
