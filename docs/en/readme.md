# Example Usage
TBD

## Requirements

Requirements are automatically required through a [CodeMirrorFieldLeftAndMainExtension](https://github.com/raspberryswwwirl/silverstripe-codemirrorfield/blob/9809c41d1d87b5775c43084f8e4eb263ff5d33dc/src/Extension/CodeMirrorFieldLeftAndMainExtension.php), so they're available where you need them. I recommend adding this field through an extension...

## CommonJS vs ES Modules

The JS assets for this field are compiled with [Vite](https://vitejs.dev/), which results in an `ES Module` being generated instead of a transpiled `CommonJS` bundle. If you look at the [CodeMirrorFieldLeftAndMainExtension](https://github.com/raspberryswwwirl/silverstripe-codemirrorfield/blob/9809c41d1d87b5775c43084f8e4eb263ff5d33dc/src/Extension/CodeMirrorFieldLeftAndMainExtension.php), you'll see that the second options parameter in the `Requirements::javascipt(...)` call defines the `type` as a `module` so the resulting script tag will render the correct attribute `type="module"`. Without this, you'll get warnings in your console about `import` directives not being in the right context.

I'm still looking at how this might be transpiled with Vite, but I'm not quite there yet.

## Web Components
This approach renders a Web Component via custom-tag, e.g. `vue-codemirrorfield` to take advantage of encapsulation for both the UI logic as well as the related styles; it's one of the great aspects of Vue that I really like. Have a look at [CodeMirrorField.ss](https://github.com/raspberryswwwirl/silverstripe-codemirrorfield/blob/9809c41d1d87b5775c43084f8e4eb263ff5d33dc/templates/RS/FormField/MaterialColorPickerField.ss) and the `*.ce.vue` files for examples.

**Note:** I didn't want to start injecting more complex logic into any of the underlying react-enabled fields. There's enough "magic" with these fields maintaining/refreshing their state (and values) after saves in some contexts.