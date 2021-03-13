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
define(['dojo/_base/declare', 'jimu/BaseWidget',
'esri/symbols/SimpleMarkerSymbol', 'dojo/_base/lang', 'dojo/dom', 'esri/graphic', 'esri/Color'
],

  function(declare, BaseWidget,
    SimpleMarkerSymbol, lang, dom, Graphic, Color) {

    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-addGraphic',
      name: 'AddGraphic',
      symbol: null,

      


      //methods to communication with app container:

      postCreate: function() {
        this.symbol = new SimpleMarkerSymbol();
      },

      // startup: function() {
      //  this.inherited(arguments);
      //  this.mapIdNode.innerHTML = 'map id:' + this.map.id;
      //  console.log('startup');
      // },

      onOpen: function(){

        // con lang.hitch se utiliza "this" normalmente
        this.map.on("click", lang.hitch(this, function(evt){
          
          // comprobar si la opcion esta activada
          if(dom.byId("activado").checked) {

            // se vacía la capa de gráficos
            this.map.graphics.clear();

            // el evento del mapa dice exactamente donde ha hecho click el usuario mediante la propiedad mapPoint
            var point = evt.mapPoint;

            // se crea un elemento gráfico (geometría + simbología)
            var graphic = new Graphic(point, this.symbol)

            // añadir el gráfico a la caoa del mapa
            this.map.graphics.add(graphic);

          }

        }));

        this.map.graphics.show ();
      },


      onClose: function(){
        this.map.graphics.hide ();
      },

      // onMinimize: function(){
      //   console.log('onMinimize');
      // },

      // onMaximize: function(){
      //   console.log('onMaximize');
      // },

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      // resize: function(){
      //   console.log('resize');
      // }

      //methods to communication between widgets:

    });
  });