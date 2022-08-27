<?php

namespace RS\Extension;

use SilverStripe\Core\Extension;
use SilverStripe\View\Requirements;

class CodeMirrorFieldLeftAndMainExtension extends Extension {
    public function init() {
        // @todo load these from the config.yml
        Requirements::javascript('_resources/vendor/raspberryswwwirl/silverstripe-codemirrorfield/client/dist/assets/main.js',    ['type'=>'module']); // Generate the type="module" attribute
        // Requirements::javascript('_resources/vendor/raspberryswwwirl/silverstripe-codemirrorfield/client/dist/assets/vendor.js',  ['type'=>'module']); // Generate the type="module" attribute

        Requirements::css('_resources/vendor/raspberryswwwirl/silverstripe-codemirrorfield/client/dist/assets/main.css');
    }
}