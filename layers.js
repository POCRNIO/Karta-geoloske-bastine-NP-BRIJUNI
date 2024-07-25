var wms_layers = [];


        var lyr_brid_0 = new ol.layer.Tile({
            'title': 'brid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_proba_1 = new ol.layer.Tile({
            'title': 'proba',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://t0.tiles.virtualearth.net/tiles/a{q}.jpeg?g=685&mkt=en-us&n=z'
            })
        });
var format_geolokaliteti_2 = new ol.format.GeoJSON();
var features_geolokaliteti_2 = format_geolokaliteti_2.readFeatures(json_geolokaliteti_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geolokaliteti_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geolokaliteti_2.addFeatures(features_geolokaliteti_2);
var lyr_geolokaliteti_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geolokaliteti_2, 
                style: style_geolokaliteti_2,
                popuplayertitle: "geolokaliteti",
                interactive: true,
                title: '<img src="styles/legend/geolokaliteti_2.png" /> geolokaliteti'
            });
var format_kamenolomi_3 = new ol.format.GeoJSON();
var features_kamenolomi_3 = format_kamenolomi_3.readFeatures(json_kamenolomi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kamenolomi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kamenolomi_3.addFeatures(features_kamenolomi_3);
var lyr_kamenolomi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kamenolomi_3, 
                style: style_kamenolomi_3,
                popuplayertitle: "kamenolomi",
                interactive: true,
                title: '<img src="styles/legend/kamenolomi_3.png" /> kamenolomi'
            });

lyr_brid_0.setVisible(true);lyr_proba_1.setVisible(true);lyr_geolokaliteti_2.setVisible(true);lyr_kamenolomi_3.setVisible(true);
var layersList = [lyr_brid_0,lyr_proba_1,lyr_geolokaliteti_2,lyr_kamenolomi_3];
lyr_geolokaliteti_2.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Vrsta': 'Vrsta', 'Opis': 'Opis', 'Ugrozenost': 'Ugrozenost', 'Lokacija': 'Lokacija', 'Starost': 'Starost', 'LAT (HTRS ': 'LAT (HTRS ', 'LONG (HTR ': 'LONG (HTR ', 'Tocnost': 'Tocnost', 'Referenca': 'Referenca', 'Zone zasti': 'Zone zasti', 'Referenca1': 'Referenca1', });
lyr_kamenolomi_3.set('fieldAliases', {'id': 'id', 'Id_1': 'Id_1', 'Naziv': 'Naziv', 'Lokacija': 'Lokacija', 'Trag_vadj': 'Trag_vadj', 'Opis': 'Opis', 'Prohodnost': 'Prohodnost', 'Duzina': 'Duzina', 'Broj': 'Broj', 'x': 'x', 'y': 'y', });
lyr_geolokaliteti_2.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Vrsta': 'TextEdit', 'Opis': 'TextEdit', 'Ugrozenost': 'TextEdit', 'Lokacija': 'TextEdit', 'Starost': 'TextEdit', 'LAT (HTRS ': 'TextEdit', 'LONG (HTR ': 'TextEdit', 'Tocnost': 'TextEdit', 'Referenca': 'TextEdit', 'Zone zasti': 'TextEdit', 'Referenca1': 'TextEdit', });
lyr_kamenolomi_3.set('fieldImages', {'id': 'TextEdit', 'Id_1': 'TextEdit', 'Naziv': 'TextEdit', 'Lokacija': 'TextEdit', 'Trag_vadj': 'TextEdit', 'Opis': 'TextEdit', 'Prohodnost': 'TextEdit', 'Duzina': 'TextEdit', 'Broj': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_geolokaliteti_2.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Vrsta': 'no label', 'Opis': 'no label', 'Ugrozenost': 'no label', 'Lokacija': 'no label', 'Starost': 'no label', 'LAT (HTRS ': 'no label', 'LONG (HTR ': 'no label', 'Tocnost': 'no label', 'Referenca': 'no label', 'Zone zasti': 'no label', 'Referenca1': 'no label', });
lyr_kamenolomi_3.set('fieldLabels', {'id': 'no label', 'Id_1': 'no label', 'Naziv': 'no label', 'Lokacija': 'no label', 'Trag_vadj': 'no label', 'Opis': 'no label', 'Prohodnost': 'no label', 'Duzina': 'no label', 'Broj': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_kamenolomi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});