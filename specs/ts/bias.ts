import { Spec } from '@uwdata/mosaic-spec';

export const spec : Spec = {
  "meta": {
    "title": "Bias Parameter",
    "description": "Dynamically adjust queried values by adding a Param value. The SQL expression is re-computed in the database upon updates.\n"
  },
  "data": {
    "walk": {
      "file": "data/random-walk.parquet"
    }
  },
  "params": {
    "point": 0
  },
  "vconcat": [
    {
      "input": "slider",
      "label": "Bias",
      "as": "$point",
      "min": 1,
      "max": 1000,
      "step": 0.1
    },
    {
      "plot": [
        {
          "mark": "areaY",
          "data": {
            "from": "walk"
          },
          "x": "t",
          "y": {
            "sql": "v + $point"
          },
          "fill": "steelblue"
        }
      ],
      "width": 680,
      "height": 200
    }
  ]
};
