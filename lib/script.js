"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckForCompleted = function (_React$Component) {
  _inherits(CheckForCompleted, _React$Component);

  function CheckForCompleted() {
    _classCallCheck(this, CheckForCompleted);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CheckForCompleted).apply(this, arguments));
  }

  _createClass(CheckForCompleted, [{
    key: "render",
    value: function render() {
      var isCompleted = this.props.isCompleted === "true" ? true : false;
      return React.createElement("input", { type: "checkbox", defaultChecked: isCompleted });
    }
  }]);

  return CheckForCompleted;
}(React.Component);

var TaskTextArea = function (_React$Component2) {
  _inherits(TaskTextArea, _React$Component2);

  function TaskTextArea() {
    _classCallCheck(this, TaskTextArea);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TaskTextArea).apply(this, arguments));
  }

  _createClass(TaskTextArea, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.taskTitle
      );
    }
  }]);

  return TaskTextArea;
}(React.Component);

var TaskRow = function (_React$Component3) {
  _inherits(TaskRow, _React$Component3);

  function TaskRow() {
    _classCallCheck(this, TaskRow);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TaskRow).apply(this, arguments));
  }

  _createClass(TaskRow, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var isCompleted = _props.isCompleted;
      var taskTitle = _props.taskTitle;

      return React.createElement(
        "div",
        { className: "taskRow" },
        React.createElement(CheckForCompleted, { isCompleted: isCompleted }),
        React.createElement(TaskTextArea, { taskTitle: taskTitle }),
        React.createElement(
          "button",
          { className: "delete_button" },
          "-"
        )
      );
    }
  }]);

  return TaskRow;
}(React.Component);

var RowHolder = function (_React$Component4) {
  _inherits(RowHolder, _React$Component4);

  function RowHolder() {
    _classCallCheck(this, RowHolder);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RowHolder).apply(this, arguments));
  }

  _createClass(RowHolder, [{
    key: "render",
    value: function render() {
      var tasksArrayJSX = this.props.tasksArray.map(function (temp, idx) {

        return React.createElement(TaskRow, {
          isCompleted: temp.isCompleted,
          taskTitle: temp.taskTitle,
          key: 'row_' + idx
        });
      });

      return React.createElement(
        "div",
        { className: "rowHolder" },
        tasksArrayJSX
      );
    }
  }]);

  return RowHolder;
}(React.Component);

var tasksArray = [{
  taskTitle: "Eat",
  isCompleted: ""
}, {
  taskTitle: "Sleep",
  isCompleted: ""
}, {
  taskTitle: "Code",
  isCompleted: ""
}, {
  taskTitle: "Repeat",
  isCompleted: ""
}];

var App = function (_React$Component5) {
  _inherits(App, _React$Component5);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(RowHolder, { tasksArray: tasksArray })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(RowHolder, { tasksArray: tasksArray }), document.getElementById('app'));