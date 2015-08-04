import OpenSeadragon from 'OpenSeadragon';
import {Injector} from 'di2';
import annotations from './annotations/annotations';

export default OpenSeadragon.Viewer.prototype.initializeAnnotations = function (options) {
    this.annotations = this.annotations || annotations.initialize(OpenSeadragon.extend({ viewer: this }, options));
    return this;
};
