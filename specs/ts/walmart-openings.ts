import { Spec } from '@uwdata/mosaic-spec';

export const spec : Spec = {
  "meta": {
    "title": "Walmart Openings",
    "description": "Maps showing Walmart store openings per decade. Requires the DuckDB `spatial` extension.\n",
    "credit": "Adapted from an [Observable Plot example](https://observablehq.com/@observablehq/plot-map-large-multiples)."
  },
  "data": {
    "states": {
      "type": "spatial",
      "file": "data/us-counties-10m.json",
      "layer": "states"
    },
    "nation": {
      "type": "spatial",
      "file": "data/us-counties-10m.json",
      "layer": "nation"
    },
    "walmarts": {
      "file": "data/walmarts.parquet"
    }
  },
  "vconcat": [
    {
      "plot": [
        {
          "mark": "geo",
          "data": {
            "from": "states"
          },
          "stroke": "#aaa",
          "strokeWidth": 1
        },
        {
          "mark": "geo",
          "data": {
            "from": "nation"
          },
          "stroke": "currentColor"
        },
        {
          "mark": "dot",
          "data": {
            "from": "walmarts"
          },
          "x": "longitude",
          "y": "latitude",
          "fy": {
            "sql": "10 * decade(date)"
          },
          "r": 1.5,
          "fill": "blue"
        },
        {
          "mark": "axisFy",
          "frameAnchor": "top",
          "dy": 30,
          "tickFormat": "d"
        }
      ],
      "margin": 0,
      "fyLabel": null,
      "projectionType": "albers"
    }
  ]
};
