var wms_layers = [];

var format_boundary_0 = new ol.format.GeoJSON();
var features_boundary_0 = format_boundary_0.readFeatures(json_boundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_0.addFeatures(features_boundary_0);
var lyr_boundary_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_boundary_0, 
                style: style_boundary_0,
                interactive: true,
                title: '<img src="styles/legend/boundary_0.png" /> boundary'
            });
var format_railway_1 = new ol.format.GeoJSON();
var features_railway_1 = format_railway_1.readFeatures(json_railway_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_1.addFeatures(features_railway_1);
var lyr_railway_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railway_1, 
                style: style_railway_1,
                interactive: true,
                title: '<img src="styles/legend/railway_1.png" /> railway'
            });
var format_minorroad_2 = new ol.format.GeoJSON();
var features_minorroad_2 = format_minorroad_2.readFeatures(json_minorroad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_minorroad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_minorroad_2.addFeatures(features_minorroad_2);
var lyr_minorroad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_minorroad_2, 
                style: style_minorroad_2,
                interactive: true,
                title: '<img src="styles/legend/minorroad_2.png" /> minor road'
            });
var format_street_3 = new ol.format.GeoJSON();
var features_street_3 = format_street_3.readFeatures(json_street_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_street_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_street_3.addFeatures(features_street_3);
var lyr_street_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_street_3, 
                style: style_street_3,
                interactive: true,
                title: '<img src="styles/legend/street_3.png" /> street'
            });
var format_majorroad_4 = new ol.format.GeoJSON();
var features_majorroad_4 = format_majorroad_4.readFeatures(json_majorroad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_majorroad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_majorroad_4.addFeatures(features_majorroad_4);
var lyr_majorroad_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_majorroad_4, 
                style: style_majorroad_4,
                interactive: true,
                title: '<img src="styles/legend/majorroad_4.png" /> major road'
            });
var format_restaurant_5 = new ol.format.GeoJSON();
var features_restaurant_5 = format_restaurant_5.readFeatures(json_restaurant_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurant_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurant_5.addFeatures(features_restaurant_5);
var lyr_restaurant_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_restaurant_5, 
                style: style_restaurant_5,
                interactive: true,
                title: '<img src="styles/legend/restaurant_5.png" /> restaurant'
            });
var format_hotel_6 = new ol.format.GeoJSON();
var features_hotel_6 = format_hotel_6.readFeatures(json_hotel_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hotel_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hotel_6.addFeatures(features_hotel_6);
var lyr_hotel_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hotel_6, 
                style: style_hotel_6,
                interactive: true,
                title: '<img src="styles/legend/hotel_6.png" /> hotel'
            });
var format_hospital_7 = new ol.format.GeoJSON();
var features_hospital_7 = format_hospital_7.readFeatures(json_hospital_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hospital_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hospital_7.addFeatures(features_hospital_7);
var lyr_hospital_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hospital_7, 
                style: style_hospital_7,
                interactive: true,
                title: '<img src="styles/legend/hospital_7.png" /> hospital'
            });
var format_fillingstation_8 = new ol.format.GeoJSON();
var features_fillingstation_8 = format_fillingstation_8.readFeatures(json_fillingstation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fillingstation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fillingstation_8.addFeatures(features_fillingstation_8);
var lyr_fillingstation_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fillingstation_8, 
                style: style_fillingstation_8,
                interactive: true,
                title: '<img src="styles/legend/fillingstation_8.png" /> filling station'
            });
var format_school_9 = new ol.format.GeoJSON();
var features_school_9 = format_school_9.readFeatures(json_school_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_school_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_school_9.addFeatures(features_school_9);
var lyr_school_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_school_9, 
                style: style_school_9,
                interactive: true,
                title: '<img src="styles/legend/school_9.png" /> school'
            });
var format_industries_10 = new ol.format.GeoJSON();
var features_industries_10 = format_industries_10.readFeatures(json_industries_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_industries_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_industries_10.addFeatures(features_industries_10);
var lyr_industries_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_industries_10, 
                style: style_industries_10,
                interactive: true,
                title: '<img src="styles/legend/industries_10.png" /> industries'
            });

lyr_boundary_0.setVisible(true);lyr_railway_1.setVisible(true);lyr_minorroad_2.setVisible(true);lyr_street_3.setVisible(true);lyr_majorroad_4.setVisible(true);lyr_restaurant_5.setVisible(true);lyr_hotel_6.setVisible(true);lyr_hospital_7.setVisible(true);lyr_fillingstation_8.setVisible(true);lyr_school_9.setVisible(true);lyr_industries_10.setVisible(true);
var layersList = [lyr_boundary_0,lyr_railway_1,lyr_minorroad_2,lyr_street_3,lyr_majorroad_4,lyr_restaurant_5,lyr_hotel_6,lyr_hospital_7,lyr_fillingstation_8,lyr_school_9,lyr_industries_10];
lyr_boundary_0.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_railway_1.set('fieldAliases', {'id': 'id', });
lyr_minorroad_2.set('fieldAliases', {'id': 'id', });
lyr_street_3.set('fieldAliases', {'fid': 'fid', 'highway': 'highway', 'name': 'name', 'lanes': 'lanes', });
lyr_majorroad_4.set('fieldAliases', {'fid': 'fid', 'highway': 'highway', 'name': 'name', 'lanes': 'lanes', });
lyr_restaurant_5.set('fieldAliases', {'id': 'id', });
lyr_hotel_6.set('fieldAliases', {'id': 'id', });
lyr_hospital_7.set('fieldAliases', {'id': 'id', });
lyr_fillingstation_8.set('fieldAliases', {'id': 'id', });
lyr_school_9.set('fieldAliases', {'id': 'id', });
lyr_industries_10.set('fieldAliases', {'id': 'id', });
lyr_boundary_0.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_railway_1.set('fieldImages', {'id': '', });
lyr_minorroad_2.set('fieldImages', {'id': 'TextEdit', });
lyr_street_3.set('fieldImages', {'fid': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', });
lyr_majorroad_4.set('fieldImages', {'fid': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', });
lyr_restaurant_5.set('fieldImages', {'id': '', });
lyr_hotel_6.set('fieldImages', {'id': '', });
lyr_hospital_7.set('fieldImages', {'id': '', });
lyr_fillingstation_8.set('fieldImages', {'id': '', });
lyr_school_9.set('fieldImages', {'id': '', });
lyr_industries_10.set('fieldImages', {'id': '', });
lyr_boundary_0.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_railway_1.set('fieldLabels', {'id': 'no label', });
lyr_minorroad_2.set('fieldLabels', {'id': 'inline label', });
lyr_street_3.set('fieldLabels', {'fid': 'no label', 'highway': 'no label', 'name': 'inline label', 'lanes': 'no label', });
lyr_majorroad_4.set('fieldLabels', {'fid': 'no label', 'highway': 'no label', 'name': 'inline label', 'lanes': 'no label', });
lyr_restaurant_5.set('fieldLabels', {'id': 'no label', });
lyr_hotel_6.set('fieldLabels', {'id': 'no label', });
lyr_hospital_7.set('fieldLabels', {'id': 'no label', });
lyr_fillingstation_8.set('fieldLabels', {'id': 'no label', });
lyr_school_9.set('fieldLabels', {'id': 'no label', });
lyr_industries_10.set('fieldLabels', {'id': 'no label', });
lyr_industries_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});