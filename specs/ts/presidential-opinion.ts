import { Spec } from '@uwdata/mosaic-spec';

export const spec : Spec = {
  "meta": {
    "title": "Presidential Opinion",
    "description": "Opinion poll data on historical U.S. presidents. Image marks are used to show presidential pictures. The dropdown menu toggles the opinion metric shown.\n",
    "credit": "Adapted from an [Observable Plot example](https://observablehq.com/@observablehq/plot-image-medals)."
  },
  "data": {
    "presidents": {
      "file": "data/us-president-favorability.parquet"
    }
  },
  "params": {
    "sign": 1
  },
  "vconcat": [
    {
      "plot": [
        {
          "mark": "ruleY",
          "data": [
            0
          ]
        },
        {
          "mark": "image",
          "data": {
            "from": "presidents"
          },
          "x": "First Inauguration Date",
          "y": {
            "sql": "\"Very Favorable %\" + \"Somewhat Favorable %\" + $sign * (\"Very Unfavorable %\" + \"Somewhat Unfavorable %\")"
          },
          "src": "Portrait URL",
          "r": 20,
          "preserveAspectRatio": "xMidYMin slice",
          "title": "Name"
        }
      ],
      "xInset": 20,
      "xLabel": "First inauguration date →",
      "yInsetTop": 4,
      "yGrid": true,
      "yLabel": "↑ Opinion (%)",
      "yTickFormat": "+f"
    },
    {
      "input": "menu",
      "label": "Opinion Metric",
      "options": [
        {
          "label": "Any Opinion",
          "value": 1
        },
        {
          "label": "Net Favorability",
          "value": -1
        }
      ],
      "as": "$sign"
    }
  ]
};
