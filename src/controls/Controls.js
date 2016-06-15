import OpenSeadragon from 'OpenSeadragon';

export default class Controls extends OpenSeadragon.EventSource {

  constructor() {
    super();
    this.list = {};
  }

  initialize(viewer, options) {
    var options = options || {};
    this.viewer = viewer;
    viewer.addHandler('zoom', function(e) { 
			var width = 0.5;
			var paths = document.getElementsByTagName('path');
			for (var i=0; i<paths.length; i++)
				paths[i].setAttribute("stroke-width", width/e.zoom)
		})
    if (options.controls) { options.controls.forEach(this.add.bind(this)); }
    return this;
  }

  add(options) {
    this.set(options).addHandler('click', options.action);
    this.get(options.name).addHandler('click', function () {
      for (var button in this.list) {
        this.list[button].imgDown.style.visibility = button === options.name ? 'visible' : 'hidden';
      }
    }.bind(this));
    this.viewer.addControl(this.get(options.name).element, {
      anchor: OpenSeadragon.ControlAnchor.BOTTOM_LEFT
    });
    return this;
  }

  activate(name) {
    this.list[name].imgDown.style.visibility = 'visible';
    return this;
  }

  set(options) {
    this.list[options.name] = new OpenSeadragon.Button({
      tooltip: options.name[0].toUpperCase() + options.name.substr(1),
      srcRest: options.srcRest,
      srcGroup: options.srcGroup,
      srcHover: options.srcHover,
      srcDown: options.srcDown,
      onClick: this.raiseEvent.bind(this, 'click', name)
    });
    return this.list[options.name];
  }

  get(name) {
    return this.list[name];
  }

  all() {
    var controls = [];
    for (var name in this.list) {
      controls.push(this.list[name]);
    }
    return controls;
  }

}
