import { Spec } from '@uwdata/mosaic-spec';

export const spec : Spec = {
  "meta": {
    "title": "Population Change Arrows",
    "description": "An `arrow` connects the positions in 1980 and 2015 of each city on this population × inequality chart. Color encodes variation.\n",
    "credit": "Adapted from an [Observable Plot example](https://observablehq.com/@observablehq/plot-arrow-variation-chart)."
  },
  "data": {
    "metros": {
      "file": "data/metros.parquet"
    }
  },
  "params": {
    "bend": true
  },
  "vconcat": [
    {
      "legend": "color",
      "for": "arrows",
      "label": "Change in inequality from 1980 to 2015"
    },
    {
      "name": "arrows",
      "plot": [
        {
          "mark": "arrow",
          "data": {
            "from": "metros"
          },
          "x1": "POP_1980",
          "y1": "R90_10_1980",
          "x2": "POP_2015",
          "y2": "R90_10_2015",
          "bend": "$bend",
          "stroke": {
            "sql": "R90_10_2015 - R90_10_1980"
          }
        },
        {
          "mark": "text",
          "data": {
            "from": "metros"
          },
          "x": "POP_2015",
          "y": "R90_10_2015",
          "filter": "highlight",
          "text": "nyt_display",
          "fill": "currentColor",
          "dy": -6
        }
      ],
      "grid": true,
      "inset": 10,
      "xScale": "log",
      "xLabel": "Population →",
      "yLabel": "↑ Inequality",
      "yTicks": 4,
      "colorScheme": "BuRd",
      "colorTickFormat": "+f"
    },
    {
      "input": "menu",
      "label": "Bend Arrows?",
      "options": [
        true,
        false
      ],
      "as": "$bend"
    }
  ]
};
