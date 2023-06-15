"use strict";function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticToast = _interopRequireDefault(require("./semantic-toast"));
var _toast = require("./toast");var _closeAnimations;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _getRequireWildcardCache(nodeInterop) {if (typeof WeakMap !== "function") return null;var cacheBabelInterop = new WeakMap();var cacheNodeInterop = new WeakMap();return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {return nodeInterop ? cacheNodeInterop : cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj, nodeInterop) {if (!nodeInterop && obj && obj.__esModule) {return obj;}if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {return { "default": obj };}var cache = _getRequireWildcardCache(nodeInterop);if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj["default"] = obj;if (cache) {cache.set(obj, newObj);}return newObj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;} else if (call !== void 0) {throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/* eslint-disable no-useless-computed-key */
var closeAnimations = (_closeAnimations = {}, _defineProperty(_closeAnimations,
'top-right', 'fly left'), _defineProperty(_closeAnimations,
'top-center', 'fly down'), _defineProperty(_closeAnimations,
'top-left', 'fly right'), _defineProperty(_closeAnimations,
'bottom-right', 'fly left'), _defineProperty(_closeAnimations,
'bottom-center', 'fly up'), _defineProperty(_closeAnimations,
'bottom-left', 'fly right'), _closeAnimations);var


SemanticToastContainer = /*#__PURE__*/function (_Component) {_inherits(SemanticToastContainer, _Component);var _super = _createSuper(SemanticToastContainer);function SemanticToastContainer() {var _this;_classCallCheck(this, SemanticToastContainer);for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}_this = _super.call.apply(_super, [this].concat(args));_defineProperty(_assertThisInitialized(_this), "state",





















    {
      toasts: [] });_defineProperty(_assertThisInitialized(_this), "onClose",


















    function (toastId) {
      var toast = _this.state.toasts.find(function (value) {return value.id === toastId;});

      // toast has been removed already, fixes #1
      if (!toast) {
        return;
      }

      _toast.store.remove(toast);

      if (toast.onClose) {
        toast.onClose();
      }
    });_defineProperty(_assertThisInitialized(_this), "updateToasts",

    function () {
      // Add the new toast data to state.
      _this.setState({
        toasts: _toast.store.data });

    });return _this;}_createClass(SemanticToastContainer, [{ key: "componentDidMount", value: function componentDidMount() {_toast.store.subscribe(this.updateToasts);} }, { key: "componentDidUpdate", value: function componentDidUpdate() {// If we're above the limit after adding a new toast, and the maxToasts prop is set.
      if (this.props.maxToasts && this.state.toasts.length > this.props.maxToasts) {// Close the oldest toast.
        this.onClose(this.state.toasts[0].id);}} }, { key: "componentWillUnmount", value: function componentWillUnmount() {_toast.store.unsubscribe(this.updateToasts);} }, { key: "render", value: function render() {var _this2 = this;
      var _this$props = this.props,containerAnimation = _this$props.animation,position = _this$props.position,className = _this$props.className;
      var toasts = this.state.toasts;

      return toasts.length ? /*#__PURE__*/
      _react["default"].createElement("div", { className: "ui-alerts ".concat(position, " ").concat(className) },
      toasts.map(function (toast) {
        var
        id =











        toast.id,_toast$type = toast.type,type = _toast$type === void 0 ? 'info' : _toast$type,_toast$title = toast.title,title = _toast$title === void 0 ? '' : _toast$title,_toast$description = toast.description,description = _toast$description === void 0 ? '' : _toast$description,icon = toast.icon,time = toast.time,size = toast.size,color = toast.color,list = toast.list,onClick = toast.onClick,onDismiss = toast.onDismiss,animation = toast.animation;
        return /*#__PURE__*/(
          _react["default"].createElement(_semanticToast["default"], {
            key: id,
            toastId: id,
            type: type,
            title: title,
            description: description,
            icon: icon,
            size: size,
            color: color,
            list: list,
            openAnimation: animation || containerAnimation || 'pulse',
            closeAnimation: closeAnimations[position],
            time: time,
            onClick: onClick,
            onClose: _this2.onClose,
            onDismiss: onDismiss }));


      })) :

      null;
    } }]);return SemanticToastContainer;}(_react.Component);_defineProperty(SemanticToastContainer, "propTypes", { position: _propTypes["default"].oneOf(['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left']), animation: _propTypes["default"].string, className: _propTypes["default"].string, maxToasts: _propTypes["default"].number });_defineProperty(SemanticToastContainer, "defaultProps", { position: 'top-right', animation: null, className: '', maxToasts: null });var _default =


SemanticToastContainer;exports["default"] = _default;