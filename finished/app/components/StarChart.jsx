var React = require('react');

var StarChart = React.createClass({
  render: function() {
    var props = this.props;
    return <svg width="1000" height="600">{props.starData.map(this.renderStars)}</svg>
  },

  renderStars: function(star) {
    var circleAttr = {
      cx: star.coordinates[0],
      cy: star.coordinates[1],
      r: 2,
      className: 'star-circle'
    };
    var textAttr = {
      x: star.coordinates[0] + 5,
      y: star.coordinates[1] + 5,
      className: 'star-name' + ' ' + this.jurisdictionToClassName(star)
    };
    return (
      <g key={star.id}>
        <text {...textAttr}>{star.name}</text>
        <circle {...circleAttr}></circle>
      </g>
    );
  },

  jurisdictionToClassName: function(star) {
    var jurisdiction = star.jurisdiction;
    return jurisdiction.toLowerCase().replace(/\s+/g, '-')
  }
});

module.exports = StarChart;
