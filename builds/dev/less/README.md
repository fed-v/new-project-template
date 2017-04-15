# Less CSS File Architecture

The CSS architecture is based on the 7-1 Pattern by Hugo Giraudel which consists of seven directories (I have excluded the 'themes' directory) which helps organize the Less rules in a modular way. 
The description of these folders are as follows:

- base/ – contains all the structural base styles of your project.
- components/ – contains each self-contained component in its own .less partial.
- layout/ – contains styling for larger layout components; e.g. nav, header, footer, etc.
- pages/ – contains page-specific styles, if necessary.
- utils/ – contains global definitions like constants, resets, etc. Stuff you need defined before you get started.
- vendors/ – contains 3rd-party styles like jquery.ui, bootstrap, etc.

main.less – main entry point file that brings together all of the above parts as imports.


# Styleguide Rules

- Mobile first
- Nest only when necessary and only maximum of 3 levels deep.
- If a :hover pseudo class is styled, :focus should also be styled for accessibility.
- Avoid using IDs throughout the site. Use IDs for parent elements. Example: Header, Footer, Main.
- Do not use !important.
- Use alphabetical order for declarations so that duplicate rules are easier to spot.
- Avoid descendant selectors ( .header img ). Use a class instead ( .header-image ). Browsers read CSS from right
  to left, therefore it searches the page for every instance of that tag and then the class making it slower.
- Use hyphen-separated class names instead of camel case.
- Use "//" for comments as they won't be rendered when compiled. 
- Don't add a unit specification after 0 values, unless required by a mixin.
- Keep specificity low to make overriding styles easier.
- Don't qualify selectors: ".widgets" not "div.widgets".
- Namespacing should be made at a descriptive, functional level. Not at a page location level. 
  Ej: ".home-nav" could be ".nav-main".

# Order of Imports

- Vendor dependencies 
- Utilities (mixins and such)
- Base styles 
- Layout styles
- Component styles
- Page specific styles