///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define(['dojo/_base/declare', 'jimu/BaseWidget', 'esri/layers/WMSLayer', 'esri/layers/WMSLayerInfo', 'esri/geometry/Extent'],
function(declare, BaseWidget, WMSLayer, WMSLayerInfo, Extent,) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {
    // DemoWidget code goes here

    //please note that this property is be set by the framework when widget is loaded.
    //templateString: template,

    baseClass: 'jimu-widget-WMSLoader',
    name:'WMSLoader',

    addWMS: function() {
      if (this.wmsTextBox.value !="")
      {

        var layerInfo = new WMSLayerInfo({
          name: this.config.nombre_capa,
          title: this.config.titulo_capa
        });

        var resourceInfo = {
          extent: new Extent(-100, 40, -100, 40, {
            wkid: 4326
          }),
          layerInfos: [layerInfo]
        };
        
        var wmsLayer = new WMSLayer(this.wmsTextBox.value, {
          resourceInfo: resourceInfo,
          visibleLayers: [this.config.nombre_capa]
        });

        this.map.addLayers([wmsLayer]);

      }
      
    },


  });
});