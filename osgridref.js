var OsGridRef = require('./lib/osgridref'),
    LatLon = require('./lib/latlon');

module.exports = exports = {
    latLongToOsGrid: function(point) {
        if (!(point instanceof LatLon) && (undefined !== point.lat) && (undefined !== point.lng)) {
            point = new LatLon(point.lat, point.lng);
        }

        return OsGridRef.latLongToOsGrid(point);
    },

    osGridToLatLong: function(gridref) {
        return OsGridRef.osGridToLatLong(gridref);
    }
};