export default function(el) {
  const {
    plot, vconcat, from, dot, barX,
    count, dateMonthDay, intervalX, highlight, selectY,
    domainXY, domainX, domainY, domainColor, rangeColor, domainR, rangeR,
    tickFormatX, labelY,
    width, Fixed, Selection
  } = vgplot;

  const table = 'weather';
  const range = Selection.intersect();
  const click = Selection.intersect();

  const weather = ['sun', 'fog', 'drizzle', 'rain', 'snow'];
  const colors = [
    domainColor(weather),
    rangeColor(['#e7ba52', '#a7a7a7', '#aec7e8', '#1f77b4', '#9467bd'])
  ];

  el.appendChild(
    vconcat(
      plot(
        dot(
          from(table, { filterBy: click }),
          { x: dateMonthDay('date'), y: 'temp_max', fill: 'weather', r: 'precipitation', opacity: 0.7 }
        ),
        intervalX({ as: range }),
        highlight({ by: range, fill: '#eee' }),
        domainXY(Fixed), tickFormatX('%b'),
        rangeR([2, 10]), domainR(Fixed),
        width(800),
        ...colors
      ),
      plot(
        barX(from(table), { x: count(), y: 'weather', fill: '#f5f5f5' }),
        barX(
          from(table, { filterBy: range }),
          { x: count(), y: 'weather', fill: 'weather' }
        ),
        selectY({ as: click }),
        domainX(Fixed),
        domainY(weather), labelY(null),
        width(800),
        ...colors
      )
    )
  );
}
