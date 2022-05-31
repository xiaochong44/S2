import { PivotSheet } from '@antv/s2';
import insertCss from 'insert-css';

// 每次滚动的距离
const STEP = 50;

// 每次滚动间隔时间
const MS = 500;

// 计时器
let timer;

function addScrollButton(s2) {
  const btn = document.createElement('button');
  btn.className = 'ant-btn ant-btn-default';
  btn.innerHTML = '开始滚动';

  const stopBtn = document.createElement('button');
  stopBtn.className = 'ant-btn ant-btn-default';
  stopBtn.innerHTML = '停止滚动';

  stopBtn.addEventListener('click', () => {
    clearInterval(timer);
  });

  btn.addEventListener('click', () => {
    // 如果没有纵向滚动条则不需要触发定时器
    if (!s2.facet.vScrollBar) {
      return;
    }

    // 如果需要快速滚动, 可将 setInterval 替换成 requestAnimationFrame
    timer = setInterval(() => {
      // 获取当前 Y 轴滚动距离
      const { scrollY } = s2.facet.getScrollOffset();
      // 访问 https://s2.antv.vision/zh/docs/api 查看更多 API
      // 如果已经滚动到了底部，则回到顶部
      if (s2.facet.isScrollToBottom(scrollY)) {
        console.log('滚动到底部');
        s2.updateScrollOffset({
          offsetY: {
            value: 0,
            animate: false,
          },
        });
        return;
      }
      console.log('开始滚动, 当前 scrollY:', scrollY);
      s2.updateScrollOffset({
        offsetY: {
          value: scrollY + STEP,
          animate: true,
        },
      });
    }, MS);
  });
  document.querySelector('#container > canvas').before(btn);
  btn.after(stopBtn);
}

fetch(
  'https://gw.alipayobjects.com/os/bmw-prod/2a5dbbc8-d0a7-4d02-b7c9-34f6ca63cff6.json',
)
  .then((res) => res.json())
  .then((dataCfg) => {
    const container = document.getElementById('container');

    const s2Options = {
      width: 600,
      height: 480,
      style: {
        cellCfg: {
          // 让表格显示滚动条
          height: 100,
        },
      },
    };
    const s2 = new PivotSheet(container, dataCfg, s2Options);

    s2.render();

    addScrollButton(s2);
  });

insertCss(`
  #container > canvas {
    margin-top: 10px;
  }
`);