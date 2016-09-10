/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var InputField, action, actionButtons, app, device, deviceHeight, deviceWidth, i, initialScale, j, k, l, len, len1, switchInput, switchOptions, taskInput;
	
	InputField = __webpack_require__(1).InputField;
	
	device = new Framer.DeviceView();
	
	device.setupContext();
	
	device.deviceType = "google-nexus-6p";
	
	device.contentScale = 1;
	
	deviceHeight = device.screen.height;
	
	deviceWidth = device.screen.width;
	
	app = Framer.Importer.load("app.framer/imported/app@1x");
	
	initialScale = 0.2;
	
	actionButtons = [];
	
	taskInput = new InputField({
	  name: "task",
	  type: "text-area",
	  width: deviceWidth,
	  height: deviceHeight - app.keyboard.height,
	  index: 0,
	  color: "DarkCyan",
	  backgroundColor: "#f5f5f5",
	  fontSize: 200,
	  indent: 120,
	  placeHolder: "Add task",
	  placeHolderFocus: "",
	  autoCapitalize: true
	});
	
	app.actions.opacity = 0;
	
	app.overlay.opacity = 0;
	
	app.iconWrite.opacity = 0;
	
	app.keyboard.opacity = 0;
	
	app.keyboard.y = app.keyboard.height + deviceHeight;
	
	taskInput.opacity = 0;
	
	app.iconWrite.rotation = -180;
	
	for (i = j = 0; j < 3; i = ++j) {
	  actionButtons.push(app["action" + (i + 1)]);
	}
	
	for (k = 0, len = actionButtons.length; k < len; k++) {
	  action = actionButtons[k];
	  action.scale = initialScale;
	}
	
	app.overlay.states.add({
	  openActions: {
	    opacity: 1
	  }
	});
	
	app.overlay.states.animationOptions = {
	  curve: "spring(400, 20, 0)"
	};
	
	app.actions.states.add({
	  openActions: {
	    opacity: 1
	  }
	});
	
	app.actions.states.animationOptions = {
	  curve: "spring(400, 20, 0)"
	};
	
	app.keyboard.states.add({
	  openInput: {
	    opacity: 1,
	    y: deviceHeight - app.keyboard.height
	  }
	});
	
	app.keyboard.states.animationOptions = {
	  curve: "linear",
	  time: 0.1
	};
	
	for (l = 0, len1 = actionButtons.length; l < len1; l++) {
	  action = actionButtons[l];
	  action.states.add({
	    openActions: {
	      scale: 1
	    }
	  });
	  action.states.animationOptions = {
	    curve: "spring(500, 30, 0)"
	  };
	}
	
	app.iconPlus.states.add({
	  openActions: {
	    opacity: 0,
	    rotation: 90
	  }
	});
	
	app.iconPlus.states.animationOptions = {
	  curve: "spring(500, 30, 0)"
	};
	
	app.iconWrite.states.add({
	  openActions: {
	    opacity: 1,
	    rotation: 0
	  }
	});
	
	app.iconWrite.states.animationOptions = {
	  curve: "spring(500, 30, 0)"
	};
	
	taskInput.states.add({
	  openInput: {
	    opacity: 1
	  }
	});
	
	taskInput.states.animationOptions = {
	  curve: "spring(400, 20, 0)"
	};
	
	switchOptions = function(state) {
	  var len2, m;
	  for (m = 0, len2 = actionButtons.length; m < len2; m++) {
	    action = actionButtons[m];
	    action.states["switch"](state);
	  }
	  app.overlay.states["switch"](state);
	  app.actions.states["switch"](state);
	  app.iconPlus.states["switch"](state);
	  return app.iconWrite.states["switch"](state);
	};
	
	switchInput = function(state) {
	  taskInput.states["switch"](state);
	  return app.keyboard.states["switch"](state);
	};
	
	app.floatingButton.on(Events.Click, function() {
	  return switchOptions("openActions");
	});
	
	app.overlay.on(Events.Click, function() {
	  return switchOptions("default");
	});
	
	app.action2.on(Events.Click, function() {
	  taskInput.index = 1;
	  return switchInput("openInput");
	});
	
	app.keyboard.on(Events.Click, function() {
	  taskInput.index = 0;
	  switchInput("default");
	  return switchOptions("default");
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;
	
	exports.InputField = (function(superClass) {
	  var PATTERN_NUMBER;
	
	  extend(InputField, superClass);
	
	  PATTERN_NUMBER = "[0-9]*";
	
	  function InputField(options) {
	    var base, base1, base10, base11, base12, base13, base14, base15, base2, base3, base4, base5, base6, base7, base8, base9, inputStyle, key, ref, ref1, val;
	    this.options = options != null ? options : {};
	    if ((base = this.options).backgroundColor == null) {
	      base.backgroundColor = "";
	    }
	    if ((base1 = this.options).borderRadius == null) {
	      base1.borderRadius = 0;
	    }
	    if ((base2 = this.options).fontSize == null) {
	      base2.fontSize = 32;
	    }
	    if ((base3 = this.options).indent == null) {
	      base3.indent = 0;
	    }
	    if ((base4 = this.options).placeHolderFocus == null) {
	      base4.placeHolderFocus = null;
	    }
	    if ((base5 = this.options).type == null) {
	      base5.type = "text";
	    }
	    if ((base6 = this.options).name == null) {
	      base6.name = this.options.type + "Input";
	    }
	    if (this.options.superLayer != null) {
	      if ((base7 = this.options).width == null) {
	        base7.width = this.options.maxWidth || this.options.superLayer.width;
	      }
	      if ((base8 = this.options).height == null) {
	        base8.height = this.options.superLayer.height;
	      }
	    }
	    if ((base9 = this.options).minX == null) {
	      base9.minX = this.options.x || 0;
	    }
	    if ((base10 = this.options).minY == null) {
	      base10.minY = this.options.y || 0;
	    }
	    if ((this.options.superLayer != null) && !this.options.maxWidth) {
	      if ((base11 = this.options).maxX == null) {
	        base11.maxX = (ref = this.options.superLayer) != null ? ref.width : void 0;
	      }
	      if ((base12 = this.options).maxY == null) {
	        base12.maxY = (ref1 = this.options.superLayer) != null ? ref1.height : void 0;
	      }
	    }
	    if ((base13 = this.options).onInputFunction == null) {
	      base13.onInputFunction = null;
	    }
	    if ((base14 = this.options).onBlurFunction == null) {
	      base14.onBlurFunction = null;
	    }
	    if ((base15 = this.options).onBlurFunction == null) {
	      base15.onBlurFunction = null;
	    }
	    if (this.options.type === "number") {
	      this.options.type = "text";
	      this.options.pattern = PATTERN_NUMBER;
	    }
	    InputField.__super__.constructor.call(this, this.options);
	    if (this.options.type === "text" && this.options.pattern === PATTERN_NUMBER) {
	      this.html = "<style type='text/css'>\n	input[type=number]::-webkit-inner-spin-button,\n	input[type=number]::-webkit-outer-spin-button {\n		-webkit-appearance: none;\n		margin: 0; }\n</style>";
	    }
	    this.input = document.createElement("input");
	    this.input.type = this.options.type;
	    if (this.options.value != null) {
	      this.input.value = this.options.value;
	    }
	    if (this.options.placeHolder != null) {
	      this.input.placeholder = this.options.placeHolder;
	    }
	    if (this.options.pattern != null) {
	      this.input.pattern = this.options.pattern;
	    }
	    if (this.options.maxLength != null) {
	      this.input.setAttribute("maxLength", this.options.maxLength);
	    }
	    this.input.setAttribute("autocapitalize", (this.options.autoCapitalize === true ? "on" : "off"));
	    this._element.appendChild(this.input);
	    inputStyle = {
	      font: "300 " + this.options.fontSize + "px/1.25 -apple-system, Helvetica Neue",
	      outline: "none",
	      textIndent: this.options.indent + "px",
	      backgroundColor: "transparent",
	      height: "100%",
	      width: "100%",
	      pointerEvents: "none",
	      "-webkit-appearance": "none"
	    };
	    for (key in inputStyle) {
	      val = inputStyle[key];
	      this.input.style[key] = val;
	    }
	    if (this.options.color != null) {
	      this.input.style.color = this.options.color;
	    }
	    this.input.onfocus = (function(_this) {
	      return function() {
	        document.body.scrollTop = 0;
	        if (_this.options.placeHolderFocus != null) {
	          _this.input.placeholder = _this.options.placeHolderFocus;
	        }
	        document.body.scrollTop = 0;
	        if (_this.options.onFocusFunction != null) {
	          return _this.options.onFocusFunction(_this.input.value, _this.name);
	        }
	      };
	    })(this);
	    this.input.onblur = (function(_this) {
	      return function() {
	        document.body.scrollTop = 0;
	        if (!(_this.input.placeholder === _this.options.placeHolder || (_this.options.placeHolder == null))) {
	          _this.input.placeholder = _this.options.placeHolder;
	        }
	        if (_this.options.onBlurFunction != null) {
	          return _this.options.onBlurFunction(_this.input.value, _this.name);
	        }
	      };
	    })(this);
	    this.on(Events.TouchEnd, function() {
	      return this.input.focus();
	    });
	    this.input.oninput = (function(_this) {
	      return function() {
	        if (_this.options.onInputFunction != null) {
	          return _this.options.onInputFunction(_this.input.value, _this.name);
	        }
	      };
	    })(this);
	  }
	
	  return InputField;
	
	})(Layer);


/***/ }
/******/ ]);
//# sourceMappingURL=app.7b6364f8776a87faa425.js.map