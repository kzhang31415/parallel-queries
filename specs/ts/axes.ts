import { Spec } from '@uwdata/mosaic-spec';

export const spec : Spec = {
  "meta": {
    "title": "Axes & Gridlines",
    "description": "Customized axis and gridline marks can be used in addition to standard scale attributes such as `xAxis`, `yGrid`, etc. Just add data!\n"
  },
  "plot": [
    {
      "mark": "gridY",
      "strokeDasharray": "0.75 2",
      "strokeOpacity": 1
    },
    {
      "mark": "axisY",
      "anchor": "left",
      "tickSize": 0,
      "dx": 38,
      "dy": -4,
      "lineAnchor": "bottom"
    },
    {
      "mark": "axisY",
      "anchor": "right",
      "tickSize": 0,
      "tickPadding": 5,
      "label": "y-axis",
      "labelAnchor": "center"
    },
    {
      "mark": "axisX",
      "label": "x-axis",
      "labelAnchor": "center"
    },
    {
      "mark": "gridX"
    },
    {
      "mark": "ruleY",
      "data": [
        0
      ]
    }
  ],
  "xDomain": [
    0,
    100
  ],
  "yDomain": [
    0,
    100
  ],
  "xInsetLeft": 36,
  "marginLeft": 0,
  "marginRight": 35,
  "width": 680
};
