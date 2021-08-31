"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AnnotationLayerInternal = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pdfjsDist = _interopRequireDefault(require("pdfjs-dist"));

var _DocumentContext = _interopRequireDefault(require("../DocumentContext"));

var _PageContext = _interopRequireDefault(require("../PageContext"));

var _utils = require("../shared/utils");

var _propTypes2 = require("../shared/propTypes");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AnnotationLayerInternal = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(AnnotationLayerInternal, _PureComponent);

  var _super = _createSuper(AnnotationLayerInternal);

  function AnnotationLayerInternal() {
    var _this;

    (0, _classCallCheck2["default"])(this, AnnotationLayerInternal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      annotations: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "loadAnnotations", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var page, cancellable, annotations;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = _this.props.page;
              _context.prev = 1;
              cancellable = (0, _utils.makeCancellable)(page.getAnnotations());
              _this.runningTask = cancellable;
              _context.next = 6;
              return cancellable.promise;

            case 6:
              annotations = _context.sent;

              _this.setState({
                annotations: annotations
              }, _this.onLoadSuccess);

              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);

              _this.onLoadError(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    })));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onLoadSuccess", function () {
      var onGetAnnotationsSuccess = _this.props.onGetAnnotationsSuccess;
      var annotations = _this.state.annotations;
      (0, _utils.callIfDefined)(onGetAnnotationsSuccess, annotations);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onLoadError", function (error) {
      if ((0, _utils.isCancelException)(error)) {
        return;
      }

      _this.setState({
        annotations: false
      });

      (0, _utils.errorOnDev)(error);
      var onGetAnnotationsError = _this.props.onGetAnnotationsError;
      (0, _utils.callIfDefined)(onGetAnnotationsError, error);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRenderSuccess", function () {
      var onRenderAnnotationLayerSuccess = _this.props.onRenderAnnotationLayerSuccess;
      (0, _utils.callIfDefined)(onRenderAnnotationLayerSuccess);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRenderError", function (error) {
      if ((0, _utils.isCancelException)(error)) {
        return;
      }

      (0, _utils.errorOnDev)(error);
      var onRenderAnnotationLayerError = _this.props.onRenderAnnotationLayerError;
      (0, _utils.callIfDefined)(onRenderAnnotationLayerError, error);
    });
    return _this;
  }

  (0, _createClass2["default"])(AnnotationLayerInternal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var page = this.props.page;

      if (!page) {
        throw new Error('Attempted to load page annotations, but no page was specified.');
      }

      this.loadAnnotations();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          page = _this$props.page,
          renderInteractiveForms = _this$props.renderInteractiveForms;

      if (prevProps.page && page !== prevProps.page || renderInteractiveForms !== prevProps.renderInteractiveForms) {
        this.loadAnnotations();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _utils.cancelRunningTask)(this.runningTask);
    }
  }, {
    key: "viewport",
    get: function get() {
      var _this$props2 = this.props,
          page = _this$props2.page,
          rotate = _this$props2.rotate,
          scale = _this$props2.scale;
      return page.getViewport({
        scale: scale,
        rotation: rotate
      });
    }
  }, {
    key: "renderAnnotationLayer",
    value: function renderAnnotationLayer() {
      var annotations = this.state.annotations;

      if (!annotations) {
        return;
      }

      var _this$props3 = this.props,
          linkService = _this$props3.linkService,
          page = _this$props3.page,
          renderInteractiveForms = _this$props3.renderInteractiveForms;
      var viewport = this.viewport.clone({
        dontFlip: true
      });
      var parameters = {
        annotations: annotations,
        div: this.annotationLayer,
        linkService: linkService,
        page: page,
        renderInteractiveForms: renderInteractiveForms,
        viewport: viewport
      };
      this.annotationLayer.innerHTML = '';

      try {
        _pdfjsDist["default"].AnnotationLayer.render(parameters);

        this.onRenderSuccess();
      } catch (error) {
        this.onRenderError(error);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "react-pdf__Page__annotations annotationLayer",
        ref: function ref(_ref2) {
          _this2.annotationLayer = _ref2;
        }
      }, this.renderAnnotationLayer());
    }
  }]);
  return AnnotationLayerInternal;
}(_react.PureComponent);

exports.AnnotationLayerInternal = AnnotationLayerInternal;
AnnotationLayerInternal.propTypes = {
  linkService: _propTypes2.isLinkService.isRequired,
  onGetAnnotationsError: _propTypes["default"].func,
  onGetAnnotationsSuccess: _propTypes["default"].func,
  onRenderAnnotationLayerError: _propTypes["default"].func,
  onRenderAnnotationLayerSuccess: _propTypes["default"].func,
  page: _propTypes2.isPage,
  renderInteractiveForms: _propTypes["default"].bool,
  rotate: _propTypes2.isRotate,
  scale: _propTypes["default"].number
};

var AnnotationLayer = function AnnotationLayer(props) {
  return /*#__PURE__*/_react["default"].createElement(_DocumentContext["default"].Consumer, null, function (documentContext) {
    return /*#__PURE__*/_react["default"].createElement(_PageContext["default"].Consumer, null, function (pageContext) {
      return /*#__PURE__*/_react["default"].createElement(AnnotationLayerInternal, (0, _extends2["default"])({}, documentContext, pageContext, props));
    });
  });
};

var _default = AnnotationLayer;
exports["default"] = _default;