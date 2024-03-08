import PropTypes from "prop-types";

export let childrenPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]).isRequired;
export let themePropType = PropTypes.string.isRequired;
