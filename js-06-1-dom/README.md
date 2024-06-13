# js-06-1-dom

Window and Document Objects
These objects represent the browser window and the web page document, respectively. The window object provides access to browser-related properties and methods, while the document object represents the current HTML document loaded in the browser.

DOM Node Selection with querySelector and querySelectorAll
The DOM (Document Object Model) allows you to interact with HTML elements. The querySelector method lets you select the first matching element based on a CSS selector, while querySelectorAll returns a collection of all matching elements.

textContent Property
The textContent property allows you to get or set the text content of an HTML element. It represents the text within the element, excluding any HTML tags.

Navigation Properties for DOM Nodes
These properties help you navigate the DOM tree. Examples include parentNode, childNodes, firstChild, lastChild, nextSibling, and previousSibling.

Working with classList and Attributes
The classList property provides methods to add, remove, or toggle CSS classes on an element. Attributes (such as id, class, or custom attributes) can be accessed and modified using the getAttribute and setAttribute methods.

Creating DOM Nodes
You can create new DOM elements using methods like createElement. For example, document.createElement('div') creates a new <div> element.

Inserting DOM Nodes: appendChild, insertBefore, append, prepend, etc.
These methods allow you to insert new elements into the DOM. appendChild adds an element as the last child of a parent node, insertBefore inserts before a specific sibling, and append and prepend add elements to the end or beginning of a parent node, respectively.

Parsing Strings: innerHTML and insertAdjacentHTML
The innerHTML property lets you set or retrieve the HTML content of an element. insertAdjacentHTML allows you to insert HTML at a specific position relative to an element.
