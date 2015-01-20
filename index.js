var each = require('turf-meta').coordEach;
var point = require('turf-point');

/**
 * Calculates the centroid of a polygon Feature or
 * FeatureCollection using the geometric mean of all vertices.
 * This lessens the effect of small islands and artifacts when calculating
 * the centroid of a set of polygons.
 *
 * @module turf/centroid
 * @param {FeatureCollection} fc a {@link Feature} or FeatureCollection of any type
 * @return {Point} a Point showing the centroid of the input feature(s)
 * @example
 * var poly = turf.polygon([[
 * 	[105.818939,21.004714],
 * 	[105.818939,21.061754],
 * 	[105.890007,21.061754],
 * 	[105.890007,21.004714],
 * 	[105.818939,21.004714]
 * ]]);
 *
 * var centroidPt = turf.centroid(poly);
 *
 * var result = turf.featurecollection([poly, centroidPt]);
 *
 * //=result
 */
module.exports = function(features){
  var xSum = 0, ySum = 0, len = 0;
  each(features, function(coord) {
    xSum += coord[0]; ySum += coord[1]; len++;
  });
  return point([xSum / len, ySum / len]);
};
