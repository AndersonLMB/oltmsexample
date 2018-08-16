

proj4.defs("EPSG:4490", "+proj=longlat +ellps=GRS80 +no_defs");
// ol.proj.proj4.register(proj4);
// var projection4490 = new ol.proj.Projection({
//     code: 'EPSG:4490',
//     extent: [-180, -90, 180, 90]
//   });
// var projection = new ol.proj.Projection({
//     code: 'EPSG:21781',
//     extent: [485869.5728, 76443.1884, 837076.5648, 299941.7864]
//   });
var urlTemplate = 'https://services.arcgisonline.com/arcgis/rest/services/' +
    'ESRI_Imagery_World_2D/MapServer/tile/{z}/{y}/{x}';
//   http://localhost/tdtc/Z1/Y0/X0.png
var tdtcTemp = "http://localhost/tdtc/Z{z}/Y{y}/X{x}.png"

var view4326 = new ol.View({
    extent: [-180, -90, 180, 90],
    center: [0, 0],
    zoom: 1,
    minZoom: 1,
    projection: "EPSG:4326"
});

var view4490 = new ol.View({
    extent: [-180, -90, 180, 90],
    center: [101.686, 26.472],
    zoom: 2,
    projection: "EPSG:4490"
});

var view3857 = new ol.View({
    center: [0, 0],
    extent: [-20026376.39, -20048966.10, 20026376.39, 20048966.10],
    zoom: 1,
    minZoom: 1,
    projection: "EPSG:3857"
});

var map = new ol.Map({
    target: 'map',
    layers: [
        // new ol.layer.Tile({
        //     source: new ol.source.XYZ({
        //         url: "http://t{0-5}.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}"
        //     })
        // }),

        // new ol.layer.Tile({
        //     opacity: 1,
        //     source: new ol.source.XYZ({
        //         // http://t2.tianditu.gov.cn/DataServer?T=cva_w&x=3332&y=1775&l=12
        //         url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
        //     })
        // }),


        // new ol.layer.Tile({
        //     opacity: 1,
        //     source: new ol.source.XYZ({

        //         url: "http://t{0-5}.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}"
        //     })
        // }),
        // new ol.layer.Tile({
        //     opacity: 1,
        //     source: new ol.source.XYZ({

        //         url: "http://t{0-5}.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}"
        //     })
        // }),

        // new ol.layer.Tile({
        //     source: new ol.source.TileArcGISRest({
        //         url: "http://192.168.0.210:6080/arcgis/rest/services/pzh/phqbj_2000/MapServer"

        //     })

        // }),



        new ol.layer.Tile({
            opacity: 1,
            source: new ol.source.XYZ({
                attributions: 'Copyright:© 2013 ESRI, i-cubed, GeoEye',
                maxZoom: 16,
                projection: 'EPSG:4326',
                tileSize: 512,
                tileUrlFunction: function (tileCoord) {
                    var input = tileCoord;
                    var output = urlTemplate.replace('{z}', (tileCoord[0] - 1).toString()).replace('{x}', tileCoord[1].toString()).replace('{y}', (-tileCoord[2] - 1).toString())
                    //tdtcTemp urlTemplate
                    console.log(JSON.stringify(input) + " > " + JSON.stringify(output));
                    return output;
                },
                wrapX: true
            })
        }),

        new ol.layer.Tile({
            opacity: 1,
            source: new ol.source.XYZ({
                attributions: 'Copyright:© 2013 ESRI, i-cubed, GeoEye',
                maxZoom: 16,
                projection: 'EPSG:4326',
                tileSize: 256,
                tileUrlFunction: function (tileCoord) {
                    var input = tileCoord;
                    var output = tdtcTemp.replace('{z}', (tileCoord[0] ).toString()).replace('{x}', tileCoord[1].toString()).replace('{y}', (-tileCoord[2] - 1).toString())
                    //tdtcTemp urlTemplate
                    console.log(JSON.stringify(input) + " > " + JSON.stringify(output));
                    return output;
                },
                wrapX: true
            })
        }), 
        new ol.layer.Tile({
            opacity: 1,
            source: new ol.source.XYZ({
                attributions: 'Copyright:© 2013 ESRI, i-cubed, GeoEye',
                maxZoom: 16,
                projection: 'EPSG:4326',
                tileSize: 256,
                tileUrlFunction: function (tileCoord) {
                    var input = tileCoord;
                    var output = tdtcTemp.replace('{z}', (tileCoord[0] ).toString()).replace('{x}', tileCoord[1].toString()).replace('{y}', (-tileCoord[2] - 1).toString()).replace(".png","_.png");
                    //tdtcTemp urlTemplate
                    console.log(JSON.stringify(input) + " > " + JSON.stringify(output));
                    return output;
                },
                wrapX: true
            })
        }),

        // new ol.layer.Tile({
        //     opacity: 0.6,
        //     // minResolution: new ol.View({ projection: "EPSG:3857" }).getResolutionForZoom(5),
        //     source: new ol.source.XYZ({

        //         url: "http://localhost/tdt1/Z{z}/Y{y}/X{x}.png"
        //     })
        // }),
        // new ol.layer.Tile({
        //     opacity: 1,
        //     // minResolution: new ol.View({ projection: "EPSG:3857" }).getResolutionForZoom(5),
        //     source: new ol.source.XYZ({

        //         url: "http://vm-ws2012:6080/arcgis/rest/services/world84/tmstest/MapServer/tile/{z}/{y}/{x}"
        //     })
        // }),
        // new ol.layer.Tile({
        //     opacity: 1,
        //     // minResolution: new ol.View({ projection: "EPSG:3857" }).getResolutionForZoom(5),
        //     source: new ol.source.XYZ({

        //         url: "http://vm-ws2012:6080/arcgis/rest/services/world84/world4326/MapServer/tile/{z}/{y}/{x}"
        //     })
        // }),

        //http://vm-ws2012:6080/arcgis/rest/services/world84/world4326/MapServer/tile/1/1/1
        // new ol.layer.Tile({
        //     opacity: 1,
        //     minResolution: new ol.View({ projection: "EPSG:4326" }).getResolutionForZoom(5),
        //     source: new ol.source.XYZ({

        //         url: "http://localhost/tdt1/Z{z}/Y{y}/X{x}_.png"
        //     })
        // }),




        // new ol.layer.Tile({
        //     source: new ol.source.OSM(),
        //     opacity: 0.4
        // }),

        // new ol.layer.Tile({
        //     source: new ol.source.TileDebug({
        //         projection: 'EPSG:4326',
                
        //         wrapX: false
        //     })
        // })

        // new ol.layer.Tile({
        //     opacity: 0.3,
        //     source: new ol.source.XYZ({

        //         url: "http://t{0-5}.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}"
        //     })
        // }),
        // new ol.layer.Tile({
        //     source: new ol.source.XYZ({
        //         url: "http://vm-ws2012:6080/arcgis/rest/services/china84/china/MapServer/tile/{z}/{y}/{x}"
        //     }),
        //     zIndex: 2,
        //     opacity: 0.4
        // }),
        // new ol.layer.Tile({
        //     source: new ol.source.XYZ({
        //         url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png'
        //     }),
        //     zIndex: 1
        // })
        // new ol.layer.Tile({
        //     source: new ol.source.WMTS({
        //         url: "http://x230lmb:6080/arcgis/rest/services/lmb/world2/MapServer/WMTS/"
        //     })
        // }),
        // new ol.layer.Tile({
        //     // extent: [-13884991, 2870341, -7455066, 6338219],
        //     source: new ol.source.TileArcGISRest({
        //         url: "http://x230lmb:6080/arcgis/rest/services/dg2000/dgrail/MapServer"
        //     })
        // }),
        // new ol.layer.Image({
        //     // extent: [-13884991, 2870341, -7455066, 6338219],
        //     opacity:1,
        //     source: new ol.source.ImageArcGISRest({
        //         url: "http://x230lmb:6080/arcgis/rest/services/dg/dghx2000/MapServer"
        //     })
        // }), 

    ],

    view: view4326,
    // view: new ol.View({
    //     extent: [-180, -90, 180, 90],
    //     center: [101.686, 26.472],
    //     zoom: 2,
    //     projection: "EPSG:4326"
    // }),
    // view: new ol.View({
    //     center: [0, 0],
    //     extent: [-20026376.39, -20048966.10, 20026376.39, 20048966.10],
    //     zoom: 1,
    //     projection: "EPSG:3857"
    // })

    // view: new ol.View({
    //     extent: [-179, 89, 179, 89],
    //     center: [101.686, 26.472],
    //     zoom: 5,
    //     projection: "EPSG:4490"
    // })
});



var moveView = function () {
    var view = map.getView();
    view.setCenter([view.getCenter()[0] + 1000, view.getCenter()[1] + 1000]);
}

var sto = function () {
    setTimeout(function () {
        moveView();
    }, 1000);

};

var mapElement = document.getElementById("map");
mapElement.onmousemove = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    // console.log({ x: x, y: y });
    // console.log(map.getCoordinateFromPixel([x, y]));
    var coordinate = map.getCoordinateFromPixel([x, y]);
    var positionInfoElement = document.getElementById("positionInfo");
    positionInfoElement.innerText = map.getView().getProjection().getCode() + " X:" + coordinate[0] + " Y:" + coordinate[1];
    positionInfoElement.innerText += "\nZoom:" + map.getView().getZoom() + " Resolution:" + map.getView().getResolution();
}

var layersInfoElement = document.getElementById("layersInfo");
var layersInfoHeaderElement = document.getElementById("layersInfoHeader");

var layersInfoContentElement = document.getElementById("layersInfoContent");

var addItemToLayerList = function () {
    var array = map.getLayers().getArray();
    array.forEach(function (element) {
        console.log(element);
    });

}

addItemToLayerList();

layersInfoElement.onclick = function (e) {

};








// setTimeout(function () {
//     sto();
// }, 1000);

