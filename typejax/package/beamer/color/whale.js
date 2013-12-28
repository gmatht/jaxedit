
/* JaxEdit: online LaTeX editor with live preview
 * Copyright (c) 2011-2013 JaxEdit project
 * License: GNU General Public License, Version 3
 *
 * Website: http://jaxedit.com
 * Source:  https://github.com/zohooo/jaxedit
 * Release: http://code.google.com/p/jaxedit/
 */

(function(){
  var definitions = {environment: {}, command: {}};
  var extensions = {};

  var styles = {
    "div.frametitle": {
      "background": "#3333B2",
      "color": "white"
    },

    "div.framesubtitle": {
      "background": "#3333B2",
      "color": "white"
    },

    "h1": {
      "background": "#3333B2",
      "color": "white"
    }
  };

  typejax.parser.extend("beamer/color/whale", definitions, extensions, styles);
})();
