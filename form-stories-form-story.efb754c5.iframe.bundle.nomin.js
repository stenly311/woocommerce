"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[4832],{

/***/ "../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/radio-control/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export RadioControl */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@7.0.1_react@18.3.1/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
/* harmony import */ var _base_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/base-control/index.js");
/* harmony import */ var _v_stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/v-stack/component.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Render a user interface to select the user type using radio inputs.
 *
 * ```jsx
 * import { RadioControl } from '@wordpress/components';
 * import { useState } from '@wordpress/element';
 *
 * const MyRadioControl = () => {
 *   const [ option, setOption ] = useState( 'a' );
 *
 *   return (
 *     <RadioControl
 *       label="User type"
 *       help="The type of the current user"
 *       selected={ option }
 *       options={ [
 *         { label: 'Author', value: 'a' },
 *         { label: 'Editor', value: 'e' },
 *       ] }
 *       onChange={ ( value ) => setOption( value ) }
 *     />
 *   );
 * };
 * ```
 */


function RadioControl(props) {
  const {
    label,
    className,
    selected,
    help,
    onChange,
    hideLabelFromVision,
    options = [],
    ...additionalProps
  } = props;
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(RadioControl);
  const id = `inspector-radio-control-${instanceId}`;
  const onChangeValue = event => onChange(event.target.value);
  if (!options?.length) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_base_control__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
    __nextHasNoMarginBottom: true,
    label: label,
    id: id,
    hideLabelFromVision: hideLabelFromVision,
    help: help,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(className, 'components-radio-control'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_v_stack__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      spacing: 1,
      children: options.map((option, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "components-radio-control__option",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
          id: `${id}-${index}`,
          className: "components-radio-control__input",
          type: "radio",
          name: id,
          value: option.value,
          onChange: onChangeValue,
          checked: option.value === selected,
          "aria-describedby": !!help ? `${id}__help` : undefined,
          ...additionalProps
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
          className: "components-radio-control__label",
          htmlFor: `${id}-${index}`,
          children: option.label
        })]
      }, `${id}-${index}`))
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioControl);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../packages/js/components/src/form/form.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Form)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/regenerator/index.js");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+deprecated@4.0.1/node_modules/@wordpress/deprecated/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/setWith.js
var setWith = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/setWith.js");
var setWith_default = /*#__PURE__*/__webpack_require__.n(setWith);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js
var get = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/get.js");
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/clone.js
var clone = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/clone.js");
var clone_default = /*#__PURE__*/__webpack_require__.n(clone);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js
var isEqual = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isEqual.js");
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/omit.js
var omit = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/omit.js");
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
;// CONCATENATED MODULE: ../../packages/js/components/src/form/form-context.ts
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
var FormContext =
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(0,react.createContext)(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
{});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useFormContext() {
  var formContext = useContext(FormContext);
  return formContext;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../packages/js/components/src/form/form.tsx













var _excluded = ["children", "onSubmit", "onChange", "onChanges"],
  _excluded2 = ["className", "onBlur", "onChange", "sanitize"];
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}



/**
 * External dependencies
 */










/**
 * Internal dependencies
 */


function isChangeEvent(value) {
  return value.target !== undefined;
}
/**
 * A form component to handle form state and provide input helper props.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FormComponent(_ref, ref) {
  var _props$initialValues, _props$initialValues2;
  var children = _ref.children,
    _ref$onSubmit = _ref.onSubmit,
    onSubmit = _ref$onSubmit === void 0 ? function () {} : _ref$onSubmit,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$onChanges = _ref.onChanges,
    onChanges = _ref$onChanges === void 0 ? function () {} : _ref$onChanges,
    props = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  var initialValues = (0,react.useRef)((_props$initialValues = props.initialValues) !== null && _props$initialValues !== void 0 ? _props$initialValues : {});
  var _useState = (0,react.useState)((_props$initialValues2 = props.initialValues) !== null && _props$initialValues2 !== void 0 ? _props$initialValues2 : {}),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    values = _useState2[0],
    setValuesInternal = _useState2[1];
  var _useState3 = (0,react.useState)(props.errors || {}),
    _useState4 = (0,slicedToArray/* default */.A)(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var _useState5 = (0,react.useState)(props.touched || {}),
    _useState6 = (0,slicedToArray/* default */.A)(_useState5, 2),
    touched = _useState6[0],
    setTouched = _useState6[1];
  var validate = (0,react.useCallback)(function (newValues) {
    var onValidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var newErrors = props.validate ? props.validate(newValues) : {};
    setErrors(newErrors || {});
    onValidate(newErrors);
  }, [props.validate]);
  (0,react.useEffect)(function () {
    validate(values);
  }, []);
  var resetForm = function resetForm(newInitialValues) {
    var _ref2;
    var newTouchedFields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var newErrors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var newValues = (_ref2 = newInitialValues !== null && newInitialValues !== void 0 ? newInitialValues : initialValues.current) !== null && _ref2 !== void 0 ? _ref2 : {};
    initialValues.current = newValues;
    setValuesInternal(newValues);
    setTouched(newTouchedFields);
    setErrors(newErrors);
  };
  (0,react.useImperativeHandle)(ref, function () {
    return {
      resetForm: resetForm
    };
  });
  var isValidForm = /*#__PURE__*/function () {
    var _ref3 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            validate(values);
            return _context.abrupt("return", !Object.keys(errors).length);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function isValidForm() {
      return _ref3.apply(this, arguments);
    };
  }();
  var setValues = (0,react.useCallback)(function (valuesToSet) {
    var newValues = _objectSpread(_objectSpread({}, values), valuesToSet);
    setValuesInternal(newValues);
    validate(newValues, function (newErrors) {
      var onChangeCallback = props.onChangeCallback;

      // Note that onChange is a no-op by default so this will never be null
      var singleValueChangeCallback = onChangeCallback || onChange;
      if (onChangeCallback) {
        (0,build_module/* default */.A)('onChangeCallback', {
          version: '9.0.0',
          alternative: 'onChange',
          plugin: '@woocommerce/components'
        });
      }
      if (!singleValueChangeCallback && !onChanges) {
        return;
      }

      // onChange and onChanges keep track of validity, so needs to
      // happen after setting the error state.

      var isValid = !Object.keys(newErrors || {}).length;
      var nameValuePairs = [];
      for (var _key in valuesToSet) {
        var nameValuePair = {
          name: _key,
          value: valuesToSet[_key]
        };
        nameValuePairs.push(nameValuePair);
        if (singleValueChangeCallback) {
          singleValueChangeCallback(nameValuePair, newValues, isValid);
        }
      }
      if (onChanges) {
        onChanges(nameValuePairs, newValues, isValid);
      }
    });
  }, [values, validate, onChange, props.onChangeCallback]);
  var setValue = (0,react.useCallback)(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function (name, value) {
    setValues(setWith_default()(_objectSpread({}, values), name, value, (clone_default())));
  }, [values, validate, onChange, props.onChangeCallback]);
  var handleChange = (0,react.useCallback)(function (name, value) {
    // Handle native events.
    if (isChangeEvent(value) && value.target) {
      if (value.target.type === 'checkbox') {
        setValue(name, !get_default()(values, name));
      } else {
        setValue(name, value.target.value);
      }
    } else {
      setValue(name, value);
    }
  }, [setValue]);
  var handleBlur = (0,react.useCallback)(function (name) {
    setTouched(_objectSpread(_objectSpread({}, touched), {}, (0,defineProperty/* default */.A)({}, name, true)));
  }, [touched]);
  var handleSubmit = /*#__PURE__*/function () {
    var _ref4 = (0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2() {
      var onSubmitCallback, touchedFields, callback;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            onSubmitCallback = props.onSubmitCallback;
            touchedFields = {};
            Object.keys(values).map(function (name) {
              return touchedFields[name] = true;
            });
            setTouched(touchedFields);
            _context2.next = 6;
            return isValidForm();
          case 6:
            if (!_context2.sent) {
              _context2.next = 11;
              break;
            }
            // Note that onSubmit is a no-op by default so this will never be null
            callback = onSubmitCallback || onSubmit;
            if (onSubmitCallback) {
              (0,build_module/* default */.A)('onSubmitCallback', {
                version: '9.0.0',
                alternative: 'onSubmit',
                plugin: '@woocommerce/components'
              });
            }
            if (!callback) {
              _context2.next = 11;
              break;
            }
            return _context2.abrupt("return", callback(values));
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleSubmit() {
      return _ref4.apply(this, arguments);
    };
  }();
  function getInputProps(name) {
    var inputProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var inputValue = get_default()(values, name);
    var isTouched = touched[name];
    var inputError = get_default()(errors, name);
    var classNameProp = inputProps.className,
      onBlurProp = inputProps.onBlur,
      onChangeProp = inputProps.onChange,
      sanitize = inputProps.sanitize,
      additionalProps = (0,objectWithoutProperties/* default */.A)(inputProps, _excluded2);
    return _objectSpread({
      value: inputValue,
      checked: Boolean(inputValue),
      selected: inputValue,
      onChange: function onChange(value) {
        handleChange(name, value);
        if (onChangeProp) {
          onChangeProp(value);
        }
      },
      onBlur: function onBlur() {
        if (sanitize) {
          handleChange(name, sanitize(inputValue));
        }
        handleBlur(name);
        if (onBlurProp) {
          onBlurProp();
        }
      },
      className: classnames_default()(classNameProp, {
        'has-error': isTouched && inputError
      }),
      help: isTouched ? inputError : null
    }, additionalProps);
  }
  function getCheckboxControlProps(name) {
    var inputProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return omit_default()(getInputProps(name, inputProps), ['selected', 'value']);
  }
  function getSelectControlProps(name) {
    var inputProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var selectControlProps = getInputProps(name, inputProps);
    return _objectSpread(_objectSpread({}, selectControlProps), {}, {
      value: selectControlProps.value === undefined ? undefined : String(selectControlProps.value)
    });
  }
  var isDirty = (0,react.useMemo)(function () {
    return !isEqual_default()(initialValues.current, values);
  }, [initialValues.current, values]);
  var getStateAndHelpers = function getStateAndHelpers() {
    return {
      values: values,
      errors: errors,
      touched: touched,
      isDirty: isDirty,
      setTouched: setTouched,
      setValue: setValue,
      setValues: setValues,
      handleSubmit: handleSubmit,
      getCheckboxControlProps: getCheckboxControlProps,
      getInputProps: getInputProps,
      getSelectControlProps: getSelectControlProps,
      isValidForm: !Object.keys(errors).length,
      resetForm: resetForm
    };
  };
  function getChildren() {
    if (typeof children === 'function') {
      var element = children(getStateAndHelpers());
      return (0,react.cloneElement)(element);
    }
    return children;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(FormContext.Provider, {
    value: getStateAndHelpers(),
    children: getChildren()
  });
}
var Form = (0,react.forwardRef)(FormComponent);


/***/ }),

/***/ "../../packages/js/components/src/form/stories/form.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/text-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/select-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/checkbox-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/radio-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@28.0.3_@emotion+is-prop-valid@1.2.1_@types+react@18.3.16_react-dom@18.3_mbjd55jx3gsragjgwncwdigc7u/node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../../packages/js/components/src/form/form.tsx");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../../packages/js/components/src/date-time-picker-control/date-time-picker-control.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../../node_modules/.pnpm/moment@2.29.4/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js");










function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}




/**
 * External dependencies
 */





var validate = function validate(values) {
  var errors = {};
  if (!values.firstName) {
    errors.firstName = 'First name is required';
  }
  if (values.lastName.length < 3) {
    errors.lastName = 'Last name must be at least 3 characters';
  }
  if (!moment__WEBPACK_IMPORTED_MODULE_13___default()(values.date, (moment__WEBPACK_IMPORTED_MODULE_13___default().ISO_8601), true).isValid()) {
    errors.date = 'Invalid date';
  }
  return errors;
};

// eslint-disable-next-line no-console
var onSubmit = function onSubmit(values) {
  return console.log(values);
};
var initialValues = {
  firstName: '',
  lastName: '',
  select: '3',
  date: '2014-10-24T13:02',
  checkbox: true,
  radio: 'one'
};
var Basic = function Basic() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_15__.useState)({}),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(_useState, 2),
    onChangeValues = _useState2[0],
    setOnChangeValues = _useState2[1];
  var handleChange = function handleChange(change, newValues) {
    setOnChangeValues(newValues);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_17__/* .Form */ .l, {
      validate: validate,
      onSubmit: onSubmit,
      onChange: handleChange,
      initialValues: initialValues,
      children: function children(_ref) {
        var getInputProps = _ref.getInputProps,
          values = _ref.values,
          errors = _ref.errors,
          handleSubmit = _ref.handleSubmit;
        var radioInputProps = getInputProps('radio');
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, _objectSpread({
            label: 'First Name'
          }, getInputProps('firstName'))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, _objectSpread({
            label: 'Last Name'
          }, getInputProps('lastName'))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, _objectSpread({
            label: "Select",
            options: [{
              label: 'Option 1',
              value: '1'
            }, {
              label: 'Option 2',
              value: '2'
            }, {
              label: 'Option 3',
              value: '3'
            }]
          }, getInputProps('select'))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_20__/* .DateTimePickerControl */ .hD, _objectSpread({
            label: "Date",
            dateTimeFormat: "YYYY-MM-DD HH:mm",
            placeholder: "Enter a date",
            currentDate: values.date
          }, getInputProps('date'))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, _objectSpread({
            label: "Checkbox"
          }, getInputProps('checkbox'))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
            label: "Radio",
            onChange: radioInputProps.onChange,
            selected: radioInputProps.value,
            options: [{
              label: 'Option 1',
              value: 'one'
            }, {
              label: 'Option 2',
              value: 'two'
            }, {
              label: 'Option 3',
              value: 'three'
            }]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay, {
            isPrimary: true,
            onClick: handleSubmit,
            disabled: Object.keys(errors).length,
            children: "Submit"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h3", {
            children: "Return data:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("pre", {
            children: ["Values: ", JSON.stringify(values), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("br", {}), "Errors: ", JSON.stringify(errors)]
          })]
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("pre", {
        children: ["onChange values: ", JSON.stringify(onChangeValues)]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/Form',
  component: _woocommerce_components__WEBPACK_IMPORTED_MODULE_17__/* .Form */ .l
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [onChangeValues, setOnChangeValues] = useState({});\n  const handleChange = (change, newValues) => {\n    setOnChangeValues(newValues);\n  };\n  return <div>\n            <Form validate={validate} onSubmit={onSubmit} onChange={handleChange} initialValues={initialValues}>\n                {({\n        getInputProps,\n        values,\n        errors,\n        handleSubmit\n      }) => {\n        const radioInputProps = getInputProps('radio');\n        return <div>\n                            <TextControl label={'First Name'} {...getInputProps('firstName')} />\n                            <TextControl label={'Last Name'} {...getInputProps('lastName')} />\n                            <SelectControl label=\"Select\" options={[{\n            label: 'Option 1',\n            value: '1'\n          }, {\n            label: 'Option 2',\n            value: '2'\n          }, {\n            label: 'Option 3',\n            value: '3'\n          }]} {...getInputProps('select')} />\n                            <DateTimePickerControl label=\"Date\" dateTimeFormat=\"YYYY-MM-DD HH:mm\" placeholder=\"Enter a date\" currentDate={values.date} {...getInputProps('date')} />\n                            <CheckboxControl label=\"Checkbox\" {...getInputProps('checkbox')} />\n                            <RadioControl label=\"Radio\" onChange={radioInputProps.onChange} selected={radioInputProps.value} options={[{\n            label: 'Option 1',\n            value: 'one'\n          }, {\n            label: 'Option 2',\n            value: 'two'\n          }, {\n            label: 'Option 3',\n            value: 'three'\n          }]} />\n                            <Button isPrimary onClick={handleSubmit} disabled={Object.keys(errors).length}>\n                                Submit\n                            </Button>\n                            <br />\n                            <br />\n                            <h3>Return data:</h3>\n                            <pre>\n                                Values: {JSON.stringify(values)}\n                                <br />\n                                Errors: {JSON.stringify(errors)}\n                            </pre>\n                        </div>;\n      }}\n            </Form>\n            <div>\n                <pre>onChange values: {JSON.stringify(onChangeValues)}</pre>\n            </div>\n        </div>;\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};

/***/ })

}]);