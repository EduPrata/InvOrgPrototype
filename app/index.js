import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
require("uikit/dist/css/uikit.min.css")

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
UIkit.notification('Hello world.');