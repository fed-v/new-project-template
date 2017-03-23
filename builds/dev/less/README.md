# Less CSS File Architecture

The CSS architecture is based on the 7-1 Pattern by Hugo Giraudel which consists of seven directories (I have excluded the 'themes' directory) which helps organize the Less rules in a modular way. The description of these folders are as follows:

- base/ – contains styles that help start a project: global styles, such as resets, typography, colors, etc.
- components/ – contains each self-contained component in its own .less partial
- layout/ – contains styling for larger layout components; e.g. nav, header, footer, etc.
- pages/ – contains page-specific styling, if necessary
- themes/ – contains styling for different themes
- utils/ – contains global mixins, functions, helper selectors, etc.
- vendors/ – contains 3rd-party styles, mixins, etc.

main.scss – output file that brings together all of the above parts using each folder's module.less file.