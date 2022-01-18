import inherits from 'inherits';

import Modeler from 'bpmn-js/lib/Modeler';

import propertiesPanelModule from 'bpmn-js-properties-panel';
import bpmnPropertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/bpmn';
import Minimap  from 'diagram-js-minimap/lib/';

/**
 * A Modeler that includes mouse navigation and other goodies.
 *
 * @param {Object} options
 */
export default function CustomModeler(options) {
  Modeler.call(this, options);
}

inherits(CustomModeler, Modeler);

CustomModeler.prototype._customModules = [
   propertiesPanelModule,
   bpmnPropertiesProviderModule,
   Minimap 
];

CustomModeler.prototype._modules = [].concat(
  Modeler.prototype._modules,
  CustomModeler.prototype._customModules
);