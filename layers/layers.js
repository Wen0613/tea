var wms_layers = [];


        var lyr_GoogleMap_0 = new ol.layer.Tile({
            'title': 'Google Map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_6_2 = new ol.format.GeoJSON();
var features_6_2 = format_6_2.readFeatures(json_6_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6_2.addFeatures(features_6_2);
var lyr_6_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_6_2, 
                style: style_6_2,
                interactive: true,
                title: '<img src="styles/legend/6_2.png" /> 6龍潭龍泉茶'
            });
var format_5_3 = new ol.format.GeoJSON();
var features_5_3 = format_5_3.readFeatures(json_5_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5_3.addFeatures(features_5_3);
var lyr_5_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5_3, 
                style: style_5_3,
                interactive: true,
                title: '<img src="styles/legend/5_3.png" /> 5凍頂茶'
            });
var format_4_4 = new ol.format.GeoJSON();
var features_4_4 = format_4_4.readFeatures(json_4_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4_4.addFeatures(features_4_4);
var lyr_4_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4_4, 
                style: style_4_4,
                interactive: true,
                title: '<img src="styles/legend/4_4.png" /> 4松柏長青茶'
            });
var format_3_5 = new ol.format.GeoJSON();
var features_3_5 = format_3_5.readFeatures(json_3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_5.addFeatures(features_3_5);
var lyr_3_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3_5, 
                style: style_3_5,
                interactive: true,
                title: '<img src="styles/legend/3_5.png" /> 3著名紅茶'
            });
var format_2_6 = new ol.format.GeoJSON();
var features_2_6 = format_2_6.readFeatures(json_2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_6.addFeatures(features_2_6);
var lyr_2_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_6, 
                style: style_2_6,
                interactive: true,
                title: '<img src="styles/legend/2_6.png" /> 2東方美人茶'
            });
var format_1_7 = new ol.format.GeoJSON();
var features_1_7 = format_1_7.readFeatures(json_1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_7.addFeatures(features_1_7);
var lyr_1_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1_7, 
                style: style_1_7,
                interactive: true,
                title: '<img src="styles/legend/1_7.png" /> 1文山包種茶'
            });
var format_22_8 = new ol.format.GeoJSON();
var features_22_8 = format_22_8.readFeatures(json_22_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_22_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_22_8.addFeatures(features_22_8);
var lyr_22_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_22_8, 
                style: style_22_8,
                interactive: false,
                title: '<img src="styles/legend/22_8.png" /> 台灣22縣市 台灣縣市'
            });

lyr_GoogleMap_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(true);lyr_6_2.setVisible(true);lyr_5_3.setVisible(true);lyr_4_4.setVisible(true);lyr_3_5.setVisible(true);lyr_2_6.setVisible(true);lyr_1_7.setVisible(true);lyr_22_8.setVisible(false);
var layersList = [lyr_GoogleMap_0,lyr_GoogleTerrain_1,lyr_6_2,lyr_5_3,lyr_4_4,lyr_3_5,lyr_2_6,lyr_1_7,lyr_22_8];
lyr_6_2.set('fieldAliases', {'fid': 'fid', 'COUNTYNAME': 'COUNTYNAME', 'TOWNNAME': 'TOWNNAME', 'TEA': 'TEA', });
lyr_5_3.set('fieldAliases', {'fid': 'fid', 'COUNTYNAME': 'COUNTYNAME', 'TOWNNAME': 'TOWNNAME', 'TEA': 'TEA', });
lyr_4_4.set('fieldAliases', {'fid': 'fid', 'COUNTYNAME': 'COUNTYNAME', 'TOWNNAME': 'TOWNNAME', 'TEA': 'TEA', });
lyr_3_5.set('fieldAliases', {'fid': 'fid', 'COUNTYNAME': 'COUNTYNAME', 'TOWNNAME': 'TOWNNAME', 'TEA': 'TEA', });
lyr_2_6.set('fieldAliases', {'fid': 'fid', 'COUNTYNAME': 'COUNTYNAME', 'TOWNNAME': 'TOWNNAME', 'TEA': 'TEA', });
lyr_1_7.set('fieldAliases', {'fid': 'fid', 'COUNTYNAME': 'COUNTYNAME', 'TOWNNAME': 'TOWNNAME', 'TEA': 'TEA', });
lyr_22_8.set('fieldAliases', {'城市名': '城市名', });
lyr_6_2.set('fieldImages', {'fid': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'TOWNNAME': 'TextEdit', 'TEA': 'TextEdit', });
lyr_5_3.set('fieldImages', {'fid': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'TOWNNAME': 'TextEdit', 'TEA': 'TextEdit', });
lyr_4_4.set('fieldImages', {'fid': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'TOWNNAME': 'TextEdit', 'TEA': 'TextEdit', });
lyr_3_5.set('fieldImages', {'fid': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'TOWNNAME': 'TextEdit', 'TEA': 'TextEdit', });
lyr_2_6.set('fieldImages', {'fid': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'TOWNNAME': 'TextEdit', 'TEA': 'TextEdit', });
lyr_1_7.set('fieldImages', {'fid': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'TOWNNAME': 'TextEdit', 'TEA': 'TextEdit', });
lyr_22_8.set('fieldImages', {'城市名': 'TextEdit', });
lyr_6_2.set('fieldLabels', {'fid': 'no label', 'COUNTYNAME': 'no label', 'TOWNNAME': 'no label', 'TEA': 'inline label', });
lyr_5_3.set('fieldLabels', {'fid': 'no label', 'COUNTYNAME': 'no label', 'TOWNNAME': 'no label', 'TEA': 'inline label', });
lyr_4_4.set('fieldLabels', {'fid': 'no label', 'COUNTYNAME': 'no label', 'TOWNNAME': 'no label', 'TEA': 'inline label', });
lyr_3_5.set('fieldLabels', {'fid': 'no label', 'COUNTYNAME': 'no label', 'TOWNNAME': 'no label', 'TEA': 'inline label', });
lyr_2_6.set('fieldLabels', {'fid': 'no label', 'COUNTYNAME': 'no label', 'TOWNNAME': 'no label', 'TEA': 'inline label', });
lyr_1_7.set('fieldLabels', {'fid': 'no label', 'COUNTYNAME': 'no label', 'TOWNNAME': 'no label', 'TEA': 'inline label', });
lyr_22_8.set('fieldLabels', {'城市名': 'no label', });
lyr_22_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});