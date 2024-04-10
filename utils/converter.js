// utils/converter.js
module.exports = {
    year: function(val) {
      return {
        second: val * 31536000,
        minute: val * 525600,
        hour: val * 8760,
        day: val * 365,
        month: val * 12,
      };
    },
    month: function(val) {
      return {
        second: val * 2628000,
        minute: val * 43800,
        hour: val * 730,
        day: val * 30.416667,
        month: val,
        year: val / 12,
      };
    },
    week: function(val) {
      return {
        second: val * 604800,
        minute: val * 10080,
        hour: val * 168,
        day: val * 7,
      };
    },
    day: function(val) {
      return {
        second: val * 86400,
        minute: val * 1440,
        hour: val * 24,
        day: val,
        week: val / 7,
      };
    },
    hour: function(val) {
      return {
        second: val * 3600,
        minute: val * 60,
        hour: val,
        day: val / 24,
        week: val / 168,
      };
    },
    minute: function(val) {
      return {
        second: val * 60,
        minute: val,
        hour: val / 60,
        day: val / 1440,
        week: val / 10080,
      };
    },
    second: function(val) {
      return {
        second: val,
        minute: val / 60,
        hour: val / 3600,
        day: val / 86400,
        week: val / 604800,
      };
    },
  };