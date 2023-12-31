import * as util from 'skruv/utilityTypes'
import { Element, HTMLElement, MathMLElement, HTMLInputElement, HTMLOptionElement } from 'skruv/utils/minidom'
/* React Compatability */
interface ReactHTMLGlobalAttributes {
  'className'?: string | undefined
  'id'?: string | undefined
  'slot'?: string | undefined
  'accessKey'?: string | undefined
  'autoCapitalize'?: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters' | undefined
  'autoFocus'?: boolean | undefined
  'contentEditable'?: '' | 'true' | 'plaintext-only' | 'false'
  'dir'?: 'ltr' | 'rtl' | 'auto' | undefined
  'draggable'?: 'true' | 'false' | 'auto' | undefined
  'enterKeyHint'?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | undefined
  'hidden'?: 'until-found' | 'hidden' | '' | undefined
  'inert'?: boolean | undefined
  'inputMode'?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined
  // "is" is special, see the spec
  // 'is'?: string
  'itemID'?: URL | undefined
  'itemProp'?: string | undefined
  'itemRef'?: string | undefined // this needs to be a space separated list of valid ID's in the document
  'itemScope'?: boolean | undefined
  'itemType'?: string | undefined // this needs to be a space separated list of valid URL's
  'lang'?: string | undefined
  'nonce'?: string | undefined
  'popover'?: 'auto' | '' | 'manual' | undefined
  'spellCheck'?: boolean | undefined
  'style'?: string | undefined
  'tabIndex'?: number | undefined
  'title'?: string | undefined
  'translate'?: 'yes' | '' | 'no' | undefined
}
interface ReactSVGGlobalAttributes {
  'className'?: string | undefined
  'style'?: string | undefined
  'id'?: string | undefined
  'lang'?: string | undefined
  'tabIndex'?: number | undefined
  'xmlBase'?: string | undefined
  'xmlLang'?: string | undefined
  'xmlSpace'?: 'default' | 'preserve' | undefined
  'requiredExtensions'?: string | undefined
  'requiredFeatures'?: string | undefined
  'systemLanguage'?: string | undefined
}
interface ReactSVGPresentationAttributes {
  'alignmentBaseline'?: string | number | undefined;
  'baselineShift'?: string | number | undefined;
  'clip'?: string | number | undefined;
  'clipPath'?: string | number | undefined;
  'clipRule'?: string | number | undefined;
  'color'?: string | number | undefined;
  'colorInterpolation'?: string | number | undefined;
  'colorInterpolationFilters'?: string | number | undefined;
  'colorProfile'?: string | number | undefined;
  'colorRendering'?: string | number | undefined;
  'cursor'?: string | number | undefined;
  'direction'?: string | number | undefined;
  'display'?: string | number | undefined;
  'dominantBaseline'?: string | number | undefined;
  'enableBackground'?: string | number | undefined;
  'fill'?: string | number | undefined;
  'fillOpacity'?: string | number | undefined;
  'fillRule'?: string | number | undefined;
  'filter'?: string | number | undefined;
  'floodColor'?: string | number | undefined;
  'floodOpacity'?: string | number | undefined;
  'fontFamily'?: string | number | undefined;
  'fontSize'?: string | number | undefined;
  'fontSizeAdjust'?: string | number | undefined;
  'fontStretch'?: string | number | undefined;
  'fontStyle'?: string | number | undefined;
  'fontVariant'?: string | number | undefined;
  'fontWeight'?: string | number | undefined;
  'glyphOrientationHorizontal'?: string | number | undefined;
  'glyphOrientationVertical'?: string | number | undefined;
  'imageRendering'?: string | number | undefined;
  'kerning'?: string | number | undefined;
  'letterSpacing'?: string | number | undefined;
  'lightingColor'?: string | number | undefined;
  'markerEnd'?: string | number | undefined;
  'markerMid'?: string | number | undefined;
  'markerStart'?: string | number | undefined;
  'mask'?: string | number | undefined;
  'opacity'?: string | number | undefined;
  'overflow'?: string | number | undefined;
  'pointerEvents'?: string | number | undefined;
  'shapeRendering'?: string | number | undefined;
  'stopColor'?: string | number | undefined;
  'stopOpacity'?: string | number | undefined;
  'stroke'?: string | number | undefined;
  'strokeDasharray'?: string | number | undefined;
  'strokeDashoffset'?: string | number | undefined;
  'strokeLinecap'?: string | number | undefined;
  'strokeLinejoin'?: string | number | undefined;
  'strokeMiterlimit'?: string | number | undefined;
  'strokeOpacity'?: string | number | undefined;
  'strokeWidth'?: string | number | undefined;
  'textAnchor'?: string | number | undefined;
  'textDecoration'?: string | number | undefined;
  'textRendering'?: string | number | undefined;
  'transform'?: string | number | undefined;
  'transformOrigin'?: string | number | undefined;
  'unicodeBidi'?: string | number | undefined;
  'vectorEffect'?: string | number | undefined;
  'visibility'?: string | number | undefined;
  'wordSpacing'?: string | number | undefined;
  'writingMode'?: string | number | undefined;
}
interface ReactSVGFilterAttributes {
  'height'?: string | number | undefined;
  'result'?: string | number | undefined;
  'width'?: string | number | undefined;
  'x'?: string | number | undefined;
  'y'?: string | number | undefined;
  'type'?: string | number | undefined;
  'tableValues'?: string | number | undefined;
  'slope'?: string | number | undefined;
  'intercept'?: string | number | undefined;
  'amplitude'?: string | number | undefined;
  'exponent'?: string | number | undefined;
  'offset'?: string | number | undefined;
}
interface ReactSVGAnimationAttributes {
  'href'?: string | number | undefined;
  'attributeType'?: string | number | undefined;
  'attributeName'?: string | number | undefined;
  'begin'?: string | number | undefined;
  'dur'?: string | number | undefined;
  'end'?: string | number | undefined;
  'min'?: string | number | undefined;
  'max'?: string | number | undefined;
  'restart'?: string | number | undefined;
  'repeatCount'?: string | number | undefined;
  'repeatDur'?: string | number | undefined;
  'fill'?: string | number | undefined;
  'calcMode'?: string | number | undefined;
  'values'?: string | number | undefined;
  'keyTimes'?: string | number | undefined;
  'keySplines'?: string | number | undefined;
  'from'?: string | number | undefined;
  'to'?: string | number | undefined;
  'by'?: string | number | undefined;
  'autoReverse'?: string | number | undefined;
  'accelerate'?: string | number | undefined;
  'decelerate'?: string | number | undefined;
  'additive'?: string | number | undefined;
  'accumulate'?: string | number | undefined;
}
// React does not have built in support for MathML so these are unchanged
interface ReactMathMLGlobalAttributes {
  'class'?: string | number | undefined;
  'dir'?: string | number | undefined;
  'id'?: string | number | undefined;
  'mathbackground'?: string | number | undefined;
  'mathcolor'?: string | number | undefined;
  'mathsize'?: string | number | undefined;
  'mathvariant'?: string | number | undefined;
  'nonce'?: string | number | undefined;
  'scriptlevel'?: string | number | undefined;
  'style'?: string | number | undefined;
  'tabindex'?: string | number | undefined;
}

interface ReactAtomGlobalAttributes { }
interface ReactSitemapGlobalAttributes { }

type ReactHTMLEvents<T> = { [key in keyof HTMLElementEventMap as `on${Capitalize<key>}`]?: ((e: (HTMLElementEventMap[key] & { currentTarget: T })) => void) }
type ReactSVGEvents<T> = { [key in keyof SVGElementEventMap as `on${Capitalize<key>}`]?: ((e: (SVGElementEventMap[key] & { currentTarget: T })) => void) }
type ReactMathMlEvents<T> = { [key in keyof MathMLElementEventMap as `on${Capitalize<key>}`]?: ((e: (MathMLElementEventMap[key] & { currentTarget: T })) => void) }
type ReactHTMLAttributes<T, A> = A & util.CustomEvents<T> & ReactHTMLEvents<T> & util.DataAttributes & util.SkruvAdditionalAttributes<T> & ReactHTMLGlobalAttributes & { isSkruvDom?: false }
type ReactSVGAttributes<T, A> = A & util.CustomEvents<T> & ReactSVGEvents<T> & util.DataAttributes & util.SkruvAdditionalAttributes<T> & ReactSVGGlobalAttributes & { isSkruvDom?: false }
type ReactMathMLAttributes<T, A> = A & util.CustomEvents<T> & ReactMathMlEvents<T> & util.DataAttributes & util.SkruvAdditionalAttributes<T> & ReactMathMLGlobalAttributes & { isSkruvDom?: false }
type ReactAtomAttributes<T, A> = A & { isSkruvDom?: false }
type ReactSitemapAttributes<T, A> = A & { isSkruvDom?: false }
/** The <html> HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element. */
export type ReactSkruvHtmlHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLHtmlElement, {
  /**
   * Specifies the URI of a resource manifest indicating resources that should be cached locally.
   */
  'manifest'?: string | number | boolean | false
  /**
   * Specifies the version of the HTML Document Type Definition that governs the current document. This attribute is not needed, because it is redundant with the version information in the document type declaration.
   */
  'version'?: string | false
  /**
   * Specifies the XML Namespace of the document. Default value is "http://www.w3.org/1999/xhtml". This is required in documents parsed with XML parsers, and optional in text/html documents.
   */
  'xmlns'?: string | number | boolean | false
}>>

/** The <base> HTML element specifies the base URL to use for all relative URLs in a document. There can be only one <base> element in a document. */
export type ReactSkruvBaseHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLBaseElement, {
  /**
   * The base URL to be used throughout the document for relative URLs. Absolute and relative URLs are allowed.
   */
  'href'?: string | false
  /**
   * A keyword or author-defined name of the default browsing context to show the results of navigation from <a>, <area>, or <form> elements without explicit target attributes. The following keywords have special meanings:
   * 
   * _self (default): Show the result in the current browsing context.
   * 
   * _blank: Show the result in a new, unnamed browsing context.
   * 
   * _parent: Show the result in the parent browsing context of the current one, if the current page is inside a frame. If there is no parent, acts the same as _self.
   * 
   * _top: Show the result in the topmost browsing context (the browsing context that is an ancestor of the current one and has no parent). If there is no parent, acts the same as _self.
   */
  'target'?: string | false
}>>

/** The <head> HTML element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets. */
export type ReactSkruvHeadHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLHeadElement, {
  /**
   * The URIs of one or more metadata profiles, separated by white space.
   */
  'profile'?: string | number | boolean | false
}>>

/** The <title> HTML element defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; tags within the element are ignored. */
export type ReactSkruvTitleHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLTitleElement, {}>>

/** The <script> HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code. The <script> element can also be used with other languages, such as WebGL's GLSL shader programming language and JSON. */
export type ReactSkruvScriptHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLScriptElement, {
  /**
   * For classic scripts, if the async attribute is present, then the classic script will be fetched in parallel to parsing and evaluated as soon as it is available.
   * 
   * For module scripts, if the async attribute is present then the scripts and all their dependencies will be executed in the defer queue, therefore they will get fetched in parallel to parsing and evaluated as soon as they are available.
   * 
   * This attribute allows the elimination of parser-blocking JavaScript where the browser would have to load and evaluate scripts before continuing to parse. defer has a similar effect in this case.
   * 
   * This is a boolean attribute: the presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value.
   * 
   * See Browser compatibility for notes on browser support. See also Async scripts for asm.js.
   */
  'async'?: boolean | false
  /**
   * Normal script elements pass minimal information to the window.onerror for scripts which do not pass the standard CORS checks. To allow error logging for sites which use a separate domain for static media, use this attribute. See CORS settings attributes for a more descriptive explanation of its valid arguments.
   */
  'crossOrigin'?: string | false
  /**
   * This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded.
   * 
   * Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.
   * 
   * Warning: This attribute must not be used if the src attribute is absent (i.e. for inline scripts), in this case it would have no effect.
   * 
   * The defer attribute has no effect on module scripts — they defer by default.
   * 
   * Scripts with the defer attribute will execute in the order in which they appear in the document.
   * 
   * This attribute allows the elimination of parser-blocking JavaScript where the browser would have to load and evaluate scripts before continuing to parse. async has a similar effect in this case.
   */
  'defer'?: boolean | false
  /**
   * Provides a hint of the relative priority to use when fetching an external script. Allowed values:
   * 
   * high
   * 
   * Signals a high-priority fetch relative to other external scripts.
   * 
   * low
   * 
   * Signals a low-priority fetch relative to other external scripts.
   * 
   * auto
   * 
   * Default: Signals automatic determination of fetch priority relative to other external scripts.
   */
  'fetchPriority'?: string | false
  /**
   * This attribute contains inline metadata that a user agent can use to verify that a fetched resource has been delivered free of unexpected manipulation. See Subresource Integrity.
   */
  'integrity'?: string | false
  /**
   * This Boolean attribute is set to indicate that the script should not be executed in browsers that support ES modules — in effect, this can be used to serve fallback scripts to older browsers that do not support modular JavaScript code.
   */
  'noModule'?: boolean | false
  /**
   * A cryptographic nonce (number used once) to allow scripts in a script-src Content-Security-Policy. The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial.
   */
  'nonce'?: string | number | boolean | false
  /**
   * Indicates which referrer to send when fetching the script, or resources fetched by the script:
   * 
   * no-referrer: The Referer header will not be sent.
   * 
   * no-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS).
   * 
   * origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port.
   * 
   * origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
   * 
   * same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information.
   * 
   * strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
   * 
   * strict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
   * 
   * unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins.
   * 
   * Note: An empty string value ("") is both the default value, and a fallback value if referrerpolicy is not supported. If referrerpolicy is not explicitly specified on the <script> element, it will adopt a higher-level referrer policy, i.e. one set on the whole document or domain. If a higher-level policy is not available, the empty string is treated as being equivalent to strict-origin-when-cross-origin.
   */
  'referrerPolicy'?: string | false
  /**
   * This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document.
   */
  'src'?: string | false
  /**
   * This attribute indicates the type of script represented.
   * 
   * The value of this attribute will be one of the following:
   * 
   * Attribute is not set (default), an empty string, or a JavaScript MIME type
   * 
   * Indicates that the script is a "classic script", containing JavaScript code.
   * 
   * Authors are encouraged to omit the attribute if the script refers to JavaScript code rather than specify a MIME type.
   * 
   * JavaScript MIME types are listed in the IANA media types specification.
   * 
   * module
   * 
   * This value causes the code to be treated as a JavaScript module.
   * 
   * The processing of the script contents is deferred.
   * 
   * The charset and defer attributes have no effect.
   * 
   * For information on using module, see our JavaScript modules guide.
   * 
   * Unlike classic scripts, module scripts require the use of the CORS protocol for cross-origin fetching.
   * 
   * importmap
   * 
   * This value indicates that the body of the element contains an import map.
   * 
   * The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules.
   * 
   * Any other value
   * 
   * The embedded content is treated as a data block, and won't be processed by the browser.
   * 
   * Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks.
   * 
   * All of the other attributes will be ignored, including the src attribute.
   */
  'type'?: string | false
  /**
   * This attribute explicitly indicates that certain operations should be blocked on the fetching of the script. The operations that are to be blocked must be a space-separated list of blocking attributes listed below.
   * 
   * render: The rendering of content on the screen is blocked.
   */
  'blocking'?: 'render' | false
}>>

/** The <style> HTML element contains style information for a document, or part of a document. It contains CSS, which is applied to the contents of the document containing the <style> element. */
export type ReactSkruvStyleHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLStyleElement, {
  /**
   * This attribute defines which media the style should be applied to. Its value is a media query, which defaults to all if the attribute is missing.
   */
  'media'?: string | false
  /**
   * A cryptographic nonce (number used once) used to allow inline styles in a style-src Content-Security-Policy. The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial.
   */
  'nonce'?: string | number | boolean | false
  /**
   * This attribute specifies alternative style sheet sets.
   */
  'title'?: string | false
  /**
   * This attribute explicitly indicates that certain operations should be blocked on the fetching of critical subresources. @import-ed stylesheets are generally considered as critical subresources, whereas background-image and fonts are not.
   * 
   * render: The rendering of content on the screen is blocked.
   */
  'blocking'?: 'render' | false
}>>

/** The <link> HTML element specifies relationships between the current document and an external resource.
 * 
 * This element is most commonly used to link to stylesheets, but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things. */
export type ReactSkruvLinkHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLLinkElement, {
  /**
   * This attribute is required when rel="preload" has been set on the <link> element, optional when rel="modulepreload" has been set, and otherwise should not be used.
   * 
   * It specifies the type of content being loaded by the <link>, which is necessary for request matching, application of correct content security policy, and setting of correct Accept request header.
   * 
   * Furthermore, rel="preload" uses this as a signal for request prioritization.
   * 
   * The table below lists the valid values for this attribute and the elements or resources they apply to.
   * 
   * Value
   * 
   * Applies To
   * 
   * audio
   * 
   * <audio> elements
   * 
   * document
   * 
   * <iframe> and <frame> elements
   * 
   * embed
   * 
   * <embed> elements
   * 
   * fetch
   * 
   * fetch, XHR
   * 
   * Note: This value also requires
   * 
   * <link> to contain the crossorigin attribute.
   * 
   * font
   * 
   * CSS @font-face
   * 
   * image
   * 
   * <img> and <picture> elements with
   * 
   * srcset or imageset attributes, SVG <image> elements,
   * 
   * CSS *-image rules
   * 
   * object
   * 
   * <object> elements
   * 
   * script
   * 
   * <script> elements, Worker importScripts
   * 
   * style
   * 
   * <link rel=stylesheet> elements, CSS
   * 
   * @import
   * 
   * track
   * 
   * <track> elements
   * 
   * video
   * 
   * <video> elements
   * 
   * worker
   * 
   * Worker, SharedWorker
   */
  'as'?: string | false
  /**
   * This enumerated attribute indicates whether CORS must be used when fetching the resource.
   * 
   * CORS-enabled images can be reused in the <canvas> element without being tainted.
   * 
   * The allowed values are:
   * 
   * anonymous
   * 
   * A cross-origin request (i.e. with an Origin HTTP header) is performed, but no credential is sent (i.e. no cookie, X.509 certificate, or HTTP Basic authentication).
   * 
   * If the server does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin HTTP header) the resource will be tainted and its usage restricted.
   * 
   * use-credentials
   * 
   * A cross-origin request (i.e. with an Origin HTTP header) is performed along with a credential sent (i.e. a cookie, certificate, and/or HTTP Basic authentication is performed).
   * 
   * If the server does not give credentials to the origin site (through Access-Control-Allow-Credentials HTTP header), the resource will be tainted and its usage restricted.
   * 
   * If the attribute is not present, the resource is fetched without a CORS request (i.e. without sending the Origin HTTP header), preventing its non-tainted usage. If invalid, it is handled as if the enumerated keyword anonymous was used.
   * 
   * See CORS settings attributes for additional information.
   */
  'crossOrigin'?: string | false
  /**
   * For rel="stylesheet" only, the disabled Boolean attribute indicates whether the described stylesheet should be loaded and applied to the document.
   * 
   * If disabled is specified in the HTML when it is loaded, the stylesheet will not be loaded during page load.
   * 
   * Instead, the stylesheet will be loaded on-demand, if and when the disabled attribute is changed to false or removed.
   * 
   * Setting the disabled property in the DOM causes the stylesheet to be removed from the document's Document.styleSheets list.
   */
  'disabled'?: boolean | false
  /**
   * Provides a hint of the relative priority to use when fetching a preloaded resource. Allowed values:
   * 
   * high
   * 
   * Signals a high-priority fetch relative to other resources of the same type.
   * 
   * low
   * 
   * Signals a low-priority fetch relative to other resources of the same type.
   * 
   * auto
   * 
   * Default: Signals automatic determination of fetch priority relative to other resources of the same type.
   */
  'fetchPriority'?: string | false
  /**
   * This attribute specifies the URL of the linked resource. A URL can be absolute or relative.
   */
  'href'?: string | false
  /**
   * This attribute indicates the language of the linked resource.
   * 
   * It is purely advisory.
   * 
   * Allowed values are specified by RFC 5646: Tags for Identifying Languages (also known as BCP 47).
   * 
   * Use this attribute only if the href attribute is present.
   */
  'hrefLang'?: string | false
  /**
   * For rel="preload" and as="image" only, the imagesizes attribute is a sizes attribute that indicates to preload the appropriate resource used by an img element with corresponding values for its srcset and sizes attributes.
   */
  'imageSizes'?: string | false
  /**
   * For rel="preload" and as="image" only, the imagesrcset attribute is a sourceset attribute that indicates to preload the appropriate resource used by an img element with corresponding values for its srcset and sizes attributes.
   */
  'imageSrcSet'?: string | false
  /**
   * Contains inline metadata — a base64-encoded cryptographic hash of the resource (file) you're telling the browser to fetch.
   * 
   * The browser can use this to verify that the fetched resource has been delivered free of unexpected manipulation.
   * 
   * See Subresource Integrity.
   */
  'integrity'?: string | false
  /**
   * This attribute specifies the media that the linked resource applies to. Its value must be a media type / media query.
   * 
   * This attribute is mainly useful when linking to external stylesheets — it allows the user agent to pick the best adapted one for the device it runs on.
   * 
   * Note:
   * 
   * In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., media types and groups, where defined and allowed as values for this attribute, such as print, screen, aural, braille.
   * 
   * HTML5 extended this to any kind of media queries, which are a superset of the allowed values of HTML 4.
   * 
   * Browsers not supporting CSS Media Queries won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4.
   */
  'media'?: string | false
  /**
   * Identifies a resource that might be required by the next navigation and that the user agent should retrieve it.
   * 
   * This allows the user agent to respond faster when the resource is requested in the future.
   */
  'prefetch'?: string | number | boolean | false
  /**
   * A string indicating which referrer to use when fetching the resource:
   * 
   * no-referrer means that the Referer header will not be sent.
   * 
   * no-referrer-when-downgrade means that no Referer header will be sent when navigating to an origin without TLS (HTTPS).
   * 
   * This is a user agent's default behavior, if no policy is otherwise specified.
   * 
   * origin means that the referrer will be the origin of the page, which is roughly the scheme, the host, and the port.
   * 
   * origin-when-cross-origin means that navigating to other origins will be limited to the scheme, the host, and the port, while navigating on the same origin will include the referrer's path.
   * 
   * unsafe-url means that the referrer will include the origin and the path (but not the fragment, password, or username).
   * 
   * This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.
   */
  'referrerPolicy'?: string | false
  /**
   * This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of link type values.
   */
  'rel'?: string | false
  /**
   * This attribute defines the sizes of the icons for visual media contained in the resource.
   * 
   * It must be present only if the rel contains a value of icon or a non-standard type such as Apple's apple-touch-icon.
   * 
   * It may have the following values:
   * 
   * any, meaning that the icon can be scaled to any size as it is in a vector format, like image/svg+xml.
   * 
   * a white-space separated list of sizes, each in the format <width in pixels>x<height in pixels> or <width in pixels>X<height in pixels>. Each of these sizes must be contained in the resource.
   * 
   * Note: Most icon formats are only able to store one single icon; therefore, most of the time, the sizes attribute contains only one entry.
   * 
   * MS's ICO format does, as well as Apple's ICNS. ICO is more ubiquitous, so you should use this format if cross-browser support is a concern (especially for old IE versions).
   */
  'sizes'?: string | false
  /**
   * The title attribute has special semantics on the <link> element.
   * 
   * When used on a <link rel="stylesheet"> it defines a default or an alternate stylesheet.
   */
  'title'?: string | false
  /**
   * This attribute is used to define the type of the content linked to.
   * 
   * The value of the attribute should be a MIME type such as text/html, text/css, and so on.
   * 
   * The common use of this attribute is to define the type of stylesheet being referenced (such as text/css), but given that CSS is the only stylesheet language used on the web, not only is it possible to omit the type attribute, but is actually now recommended practice.
   * 
   * It is also used on rel="preload" link types, to make sure the browser only downloads file types that it supports.
   */
  'type'?: string | false
  /**
   * This attribute explicitly indicates that certain operations should be blocked on the fetching of an external resource. The operations that are to be blocked must be a space-separated list of blocking attributes listed below.
   * 
   * render: The rendering of content on the screen is blocked.
   */
  'blocking'?: 'render' | false
}>>

/** The <meta> HTML element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>. */
export type ReactSkruvMetaHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLMetaElement, {
  /**
   * This attribute declares the document's character encoding. If the attribute is present, its value must be an ASCII case-insensitive match for the string "utf-8", because UTF-8 is the only valid encoding for HTML5 documents. <meta> elements which declare a character encoding must be located entirely within the first 1024 bytes of the document.
   */
  'charSet'?: string | false
  /**
   * This attribute contains the value for the http-equiv or name attribute, depending on which is used.
   */
  'content'?: string | false
  /**
   * Defines a pragma directive. The attribute is named http-equiv(alent) because all the allowed values are names of particular HTTP headers:
   * 
   * content-security-policy
   * 
   * Allows page authors to define a content policy for the current page. Content policies mostly specify allowed server origins and script endpoints which help guard against cross-site scripting attacks.
   * 
   * content-type
   * 
   * Declares the MIME type and the document's character encoding. The content attribute must have the value "text/html; charset=utf-8" if specified. This is equivalent to a <meta> element with the charset attribute specified and carries the same restriction on placement within the document. Note: Can only be used in documents served with a text/html — not in documents served with an XML MIME type.
   * 
   * default-style
   * 
   * Sets the name of the default CSS style sheet set.
   * 
   * x-ua-compatible
   * 
   * If specified, the content attribute must have the value "IE=edge". User agents are required to ignore this pragma.
   * 
   * refresh This instruction specifies:
   * 
   * The number of seconds until the page should be reloaded - only if the content attribute contains a non-negative integer.
   * 
   * The number of seconds until the page should redirect to another - only if the content attribute contains a non-negative integer followed by the string ';url=', and a valid URL.
   * 
   * Warning:
   * 
   * Pages set with a refresh value run the risk of having the time interval being too short. People navigating with the aid of assistive technology such as a screen reader may be unable to read through and understand the page's content before being automatically redirected. The abrupt, unannounced updating of the page content may also be disorienting for people experiencing low vision conditions.
   * 
   * MDN Understanding WCAG, Guideline 2.2 explanations
   * 
   * MDN Understanding WCAG, Guideline 3.2 explanations
   * 
   * Understanding Success Criterion 2.2.1 | W3C Understanding WCAG 2.0
   * 
   * Understanding Success Criterion 2.2.4 | W3C Understanding WCAG 2.0
   * 
   * Understanding Success Criterion 3.2.5 | W3C Understanding WCAG 2.0
   */
  'httpequiv'?: string | false
  /**
   * The name and content attributes can be used together to provide document metadata in terms of name-value pairs, with the name attribute giving the metadata name, and the content attribute giving the value.
   * 
   * See standard metadata names for details about the set of standard metadata names defined in the HTML specification.
   */
  'name'?: string | false
}>>

/** The <body> HTML element represents the content of an HTML document. There can be only one <body> element in a document. */
export type ReactSkruvBodyHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLBodyElement, {}>>

/** The <address> HTML element indicates that the enclosed HTML provides contact information for a person or people, or for an organization. */
export type ReactSkruvAddressHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <article> HTML element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. */
export type ReactSkruvArticleHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <aside> HTML element represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes. */
export type ReactSkruvAsideHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <footer> HTML element represents a footer for its nearest ancestor sectioning content or sectioning root element. A <footer> typically contains information about the author of the section, copyright data or links to related documents. */
export type ReactSkruvFooterHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. */
export type ReactSkruvH1HTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLHeadingElement, {}>>

/** The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. */
export type ReactSkruvH2HTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLHeadingElement, {}>>

/** The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. */
export type ReactSkruvH3HTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLHeadingElement, {}>>

/** The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. */
export type ReactSkruvH4HTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLHeadingElement, {}>>

/** The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. */
export type ReactSkruvH5HTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLHeadingElement, {}>>

/** The <h1> to <h6> HTML elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. */
export type ReactSkruvH6HTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLHeadingElement, {}>>

/** The <header> HTML element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements. */
export type ReactSkruvHeaderHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <hgroup> HTML element represents a heading and related content. It groups a single <h1>–<h6> element with one or more <p>. */
export type ReactSkruvHgroupHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <main> HTML element represents the dominant content of the <body> of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application. */
export type ReactSkruvMainHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <nav> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes. */
export type ReactSkruvNavHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <section> HTML element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions. */
export type ReactSkruvSectionHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <search> HTML element is a container representing the parts of the document or application with form controls or other content related to performing a search or filtering operation. The <search> element semantically identifies the purpose of the element's contents as having search or filtering capabilities. The search or filtering functionality can be for the website or application, the current web page or document, or the entire Internet or subsection thereof. */
export type ReactSkruvSearchHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLUnknownElement, {}>>

/** The <blockquote> HTML element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element. */
export type ReactSkruvBlockquoteHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLQuoteElement, {
  /**
   * A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.
   */
  'cite'?: string | false
}>>

/** The <cite> HTML element is used to mark up the title of a cited creative work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata. */
export type ReactSkruvCiteHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <dd> HTML element provides the description, definition, or value for the preceding term (<dt>) in a description list (<dl>). */
export type ReactSkruvDdHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {
  /**
   * If the value of this attribute is set to yes, the definition text will not wrap. The default value is no.
   */
  'nowrap'?: string | number | boolean | false
}>>

/** The <dt> HTML element specifies a term in a description or definition list, and as such must be used inside a <dl> element. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element. */
export type ReactSkruvDtHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <dl> HTML element represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs). */
export type ReactSkruvDlHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLDListElement, {}>>

/** The <div> HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element). */
export type ReactSkruvDivHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLDivElement, {}>>

/** The <figcaption> HTML element represents a caption or legend describing the rest of the contents of its parent <figure> element. */
export type ReactSkruvFigcaptionHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <figure> HTML element represents self-contained content, potentially with an optional caption, which is specified using the <figcaption> element. The figure, its caption, and its contents are referenced as a single unit. */
export type ReactSkruvFigureHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <hr> HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section. */
export type ReactSkruvHrHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLHRElement, {
  /**
   * Sets the alignment of the rule on the page. If no value is specified, the default value is left.
   */
  'align'?: string | false
  /**
   * Sets the color of the rule through color name or hexadecimal value.
   */
  'color'?: string | false
  /**
   * Sets the rule to have no shading.
   */
  'noshade'?: string | number | boolean | false
  /**
   * Sets the height, in pixels, of the rule.
   */
  'size'?: string | false
  /**
   * Sets the length of the rule on the page through a pixel or percentage value.
   */
  'width'?: number | string | false
}>>

/** The <li> HTML element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter. */
export type ReactSkruvLiHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLLIElement, {
  /**
   * This integer attribute indicates the current ordinal value of the list item as defined by the <ol> element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The value attribute has no meaning for unordered lists (<ul>) or for menus (<menu>).
   */
  'value'?: number | string | false
}>>

/** The <ol> HTML element represents an ordered list of items — typically rendered as a numbered list. */
export type ReactSkruvOlHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLOListElement, {
  /**
   * This Boolean attribute specifies that the list's items are in reverse order. Items will be numbered from high to low.
   */
  'reversed'?: boolean | false
  /**
   * An integer to start counting from for the list items. Always an Arabic numeral (1, 2, 3, etc.), even when the numbering type is letters or Roman numerals. For example, to start numbering elements from the letter "d" or the Roman numeral "iv," use start="4".
   */
  'start'?: number | false
}>>

/** The <ul> HTML element represents an unordered list of items, typically rendered as a bulleted list. */
export type ReactSkruvUlHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLUListElement, {}>>

/** The <menu> HTML element is described in the HTML specification as a semantic alternative to <ul>, but treated by browsers (and exposed through the accessibility tree) as no different than <ul>. It represents an unordered list of items (which are represented by <li> elements). */
export type ReactSkruvMenuHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLMenuElement, {}>>

/** The <p> HTML element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields. */
export type ReactSkruvPHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLParagraphElement, {}>>

/** The <pre> HTML element represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or monospaced, font. Whitespace inside this element is displayed as written. */
export type ReactSkruvPreHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLPreElement, {}>>

/** The <a> HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address. */
export type ReactSkruvAHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLAnchorElement, {
  /**
   * Causes the browser to treat the linked URL as a download. Can be used with or without a filename value:
   * 
   * Without a value, the browser will suggest a filename/extension, generated from various sources:
   * 
   * The Content-Disposition HTTP header
   * 
   * The final segment in the URL path
   * 
   * The media type (from the Content-Type header, the start of a data: URL, or Blob.type for a blob: URL)
   * 
   * filename: defining a value suggests it as the filename. / and \ characters are converted to underscores (_). Filesystems may forbid other characters in filenames, so browsers will adjust the suggested name if necessary.
   * 
   * Note:
   * 
   * download only works for same-origin URLs, or the blob: and data: schemes.
   * 
   * How browsers treat downloads varies by browser, user settings, and other factors. The user may be prompted before a download starts, or the file may be saved automatically, or it may open automatically, either in an external application or in the browser itself.
   * 
   * If the Content-Disposition header has different information from the download attribute, resulting behavior may differ:
   * 
   * If the header specifies a filename, it takes priority over a filename specified in the download attribute.
   * 
   * If the header specifies a disposition of inline, Chrome and Firefox prioritize the attribute and treat it as a download. Old Firefox versions (before 82) prioritize the header and will display the content inline.
   */
  'download'?: string | false
  /**
   * The URL that the hyperlink points to. Links are not restricted to HTTP-based URLs — they can use any URL scheme supported by browsers:
   * 
   * Sections of a page with document fragments
   * 
   * Specific text portions with text fragments
   * 
   * Pieces of media files with media fragments
   * 
   * Telephone numbers with tel: URLs
   * 
   * Email addresses with mailto: URLs
   * 
   * While web browsers may not support other URL schemes, websites can with registerProtocolHandler()
   */
  'href'?: string | false
  /**
   * Hints at the human language of the linked URL. No built-in functionality. Allowed values are the same as the global lang attribute.
   */
  'hrefLang'?: string | false
  /**
   * A space-separated list of URLs. When the link is followed, the browser will send POST requests with the body PING to the URLs. Typically for tracking.
   */
  'ping'?: string | false
  /**
   * How much of the referrer to send when following the link.
   * 
   * no-referrer: The Referer header will not be sent.
   * 
   * no-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS).
   * 
   * origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port.
   * 
   * origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
   * 
   * same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information.
   * 
   * strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
   * 
   * strict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
   * 
   * unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins.
   */
  'referrerPolicy'?: string | false
  /**
   * The relationship of the linked URL as space-separated link types.
   */
  'rel'?: string | false
  /**
   * Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>). The following keywords have special meanings for where to load the URL:
   * 
   * _self: the current browsing context. (Default)
   * 
   * _blank: usually a new tab, but users can configure browsers to open a new window instead.
   * 
   * _parent: the parent browsing context of the current one. If no parent, behaves as _self.
   * 
   * _top: the topmost browsing context (the "highest" context that's an ancestor of the current one). If no ancestors, behaves as _self.
   * 
   * Note: Setting target="_blank" on <a> elements implicitly provides the same rel behavior as setting rel="noopener" which does not set window.opener.
   */
  'target'?: string | false
  /**
   * Hints at the linked URL's format with a MIME type. No built-in functionality.
   */
  'type'?: string | false
}>>

/** The <abbr> HTML element represents an abbreviation or acronym. */
export type ReactSkruvAbbrHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <b> HTML element is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use <b> for styling text or granting importance. If you wish to create boldface text, you should use the CSS font-weight property. If you wish to indicate an element is of special importance, you should use the <strong> element. */
export type ReactSkruvBHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <bdi> HTML element tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted. */
export type ReactSkruvBdiHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <bdo> HTML element overrides the current directionality of text, so that the text within is rendered in a different direction. */
export type ReactSkruvBdoHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {
  /**
   * The direction in which text should be rendered in this element's contents. Possible values are:
   * 
   * ltr: Indicates that the text should go in a left-to-right direction.
   * 
   * rtl: Indicates that the text should go in a right-to-left direction.
   */
  'dir'?: string | false
}>>

/** The <br> HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant. */
export type ReactSkruvBrHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLBRElement, {}>>

/** The <code> HTML element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent's default monospace font. */
export type ReactSkruvCodeHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <data> HTML element links a given piece of content with a machine-readable translation. If the content is time- or date-related, the <time> element must be used. */
export type ReactSkruvDataHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLDataElement, {
  /**
   * This attribute specifies the machine-readable translation of the content of the element.
   */
  'value'?: number | string | false
}>>

/** The <dfn> HTML element is used to indicate the term being defined within the context of a definition phrase or sentence. The ancestor <p> element, the <dt>/<dd> pairing, or the nearest <section> ancestor of the <dfn> element, is considered to be the definition of the term. */
export type ReactSkruvDfnHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <em> HTML element marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis. */
export type ReactSkruvEmHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <i> HTML element represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the <i> naming of this element. */
export type ReactSkruvIHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <kbd> HTML element represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a <kbd> element using its default monospace font, although this is not mandated by the HTML standard. */
export type ReactSkruvKbdHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <mark> HTML element represents text which is marked or highlighted for reference or notation purposes due to the marked passage's relevance in the enclosing context. */
export type ReactSkruvMarkHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <q> HTML element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the <blockquote> element. */
export type ReactSkruvQHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLQuoteElement, {
  /**
   * The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.
   */
  'cite'?: string | false
}>>

/** The <rp> HTML element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the <ruby> element. One <rp> element should enclose each of the opening and closing parentheses that wrap the <rt> element that contains the annotation's text. */
export type ReactSkruvRpHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <ruby> HTML element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common. */
export type ReactSkruvRubyHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <rt> HTML element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <rt> element must always be contained within a <ruby> element. */
export type ReactSkruvRtHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <s> HTML element renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate. */
export type ReactSkruvSHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <samp> HTML element is used to enclose inline text which represents sample (or quoted) output from a computer program. Its contents are typically rendered using the browser's default monospaced font (such as Courier or Lucida Console). */
export type ReactSkruvSampHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <small> HTML element represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font-size smaller, such as from small to x-small. */
export type ReactSkruvSmallHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <span> HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline-level element. */
export type ReactSkruvSpanHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLSpanElement, {}>>

/** The <strong> HTML element indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type. */
export type ReactSkruvStrongHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <sub> HTML element specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text. */
export type ReactSkruvSubHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <sup> HTML element specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text. */
export type ReactSkruvSupHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <time> HTML element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders. */
export type ReactSkruvTimeHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLTimeElement, {
  /**
   * This attribute indicates the time and/or date of the element and must be in one of the formats described below.
   */
  'dateTime'?: string | false
}>>

/** The <u> HTML element represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default as a simple solid underline, but may be altered using CSS. */
export type ReactSkruvUHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <var> HTML element represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent. */
export type ReactSkruvVarHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <wbr> HTML element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location. */
export type ReactSkruvWbrHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <area> HTML element defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with hypertext links. */
export type ReactSkruvAreaHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLAreaElement, {
  /**
   * A text string alternative to display on browsers that do not display images.
   * 
   * The text should be phrased so that it presents the user with the same kind of choice as the image would offer when displayed without the alternative text.
   * 
   * This attribute is required only if the href attribute is used.
   */
  'alt'?: string | false
  /**
   * The coords attribute details the coordinates of the shape attribute in size, shape, and placement of an <area>.
   * 
   * This attribute must not be used if shape is set to default.
   * 
   * rect: the value is x1,y1,x2,y2.
   * 
   * The value specifies the coordinates of the top-left and bottom-right corner of the rectangle.
   * 
   * For example, in <area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla"> the coordinates are 0,0 and 253,27, indicating the top-left and bottom-right corners of the rectangle, respectively.
   * 
   * circle: the value is x,y,radius. Value specifies the coordinates of the circle center and the radius.
   * 
   * For example: <area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">
   * 
   * poly: the value is x1,y1,x2,y2,..,xn,yn. Value specifies the coordinates of the edges of the polygon.
   * 
   * If the first and last coordinate pairs are not the same, the browser will add the last coordinate pair to close the polygon
   * 
   * The values are numbers of CSS pixels.
   */
  'coords'?: string | false
  /**
   * This attribute, if present, indicates that the author intends the hyperlink to be used for downloading a resource.
   * 
   * See <a> for a full description of the download attribute.
   */
  'download'?: string | false
  /**
   * The hyperlink target for the area.
   * 
   * Its value is a valid URL.
   * 
   * This attribute may be omitted; if so, the <area> element does not represent a hyperlink.
   */
  'href'?: string | false
  /**
   * Indicates the language of the linked resource. Allowed values are defined by RFC 5646: Tags for Identifying Languages (also known as BCP 47).
   * 
   * Use this attribute only if the href attribute is present.
   */
  'hrefLang'?: string | false
  /**
   * Contains a space-separated list of URLs to which, when the hyperlink is followed, POST requests with the body PING will be sent by the browser (in the background).
   * 
   * Typically used for tracking.
   */
  'ping'?: string | false
  /**
   * A string indicating which referrer to use when fetching the resource:
   * 
   * no-referrer: The Referer header will not be sent.
   * 
   * no-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS).
   * 
   * origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port.
   * 
   * origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
   * 
   * same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information.
   * 
   * strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
   * 
   * strict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
   * 
   * unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username).
   * 
   * This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins.
   */
  'referrerPolicy'?: string | false
  /**
   * For anchors containing the href attribute, this attribute specifies the relationship of the target object to the link object.
   * 
   * The value is a space-separated list of link types.
   * 
   * The values and their semantics will be registered by some authority that might have meaning to the document author.
   * 
   * The default relationship, if no other is given, is void. Use this attribute only if the href attribute is present.
   */
  'rel'?: string | false
  /**
   * The shape of the associated hot spot. The specifications for HTML defines the values rect, which defines a rectangular region; circle, which defines a circular region; poly, which defines a polygon; and default, which indicates the entire region beyond any defined shapes.
   */
  'shape'?: string | false
  /**
   * A keyword or author-defined name of the browsing context to display the linked resource.
   * 
   * The following keywords have special meanings:
   * 
   * _self (default): Show the resource in the current browsing context.
   * 
   * _blank: Show the resource in a new, unnamed browsing context.
   * 
   * _parent: Show the resource in the parent browsing context of the current one, if the current page is inside a frame.
   * 
   * If there is no parent, acts the same as _self.
   * 
   * _top: Show the resource in the topmost browsing context (the browsing context that is an ancestor of the current one and has no parent).
   * 
   * If there is no parent, acts the same as _self.
   * 
   * Use this attribute only if the href attribute is present.
   * 
   * Note: Setting target="_blank" on <area> elements implicitly provides the same rel behavior as setting rel="noopener" which does not set window.opener. See browser compatibility for support status.
   */
  'target'?: string | false
}>>

/** The <audio> HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream. */
export type ReactSkruvAudioHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLAudioElement, {
  /**
   * A Boolean attribute: if specified, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading.
   * 
   * Note: Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control. See our autoplay guide for additional information about how to properly use autoplay.
   */
  'autoPlay'?: boolean | false
  /**
   * If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback.
   */
  'controls'?: boolean | false
  /**
   * The controlslist attribute, when specified, helps the browser select what controls to show for the audio element whenever the browser shows its own set of controls (that is, when the controls attribute is specified).
   * 
   * The allowed values are nodownload, nofullscreen and noremoteplayback.
   */
  'controlsList'?: string | number | boolean | false
  /**
   * This enumerated attribute indicates whether to use CORS to fetch the related audio file. CORS-enabled resources can be reused in the <canvas> element without being tainted. The allowed values are:
   * 
   * anonymous
   * 
   * Sends a cross-origin request without a credential. In other words, it sends the Origin: HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin: HTTP header), the resource will be tainted, and its usage restricted.
   * 
   * use-credentials
   * 
   * Sends a cross-origin request with a credential. In other words, it sends the Origin: HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through Access-Control-Allow-Credentials: HTTP header), the resource will be tainted and its usage restricted.
   * 
   * When not present, the resource is fetched without a CORS request (i.e. without sending the Origin: HTTP header), preventing its non-tainted use in <canvas> elements. If invalid, it is handled as if the enumerated keyword anonymous was used. See CORS settings attributes for additional information.
   */
  'crossOrigin'?: string | false
  /**
   * A Boolean attribute used to disable the capability of remote playback in devices that are attached using wired (HDMI, DVI, etc.) and wireless technologies (Miracast, Chromecast, DLNA, AirPlay, etc.). See this proposed specification for more information.
   * 
   * Note: In Safari, you can use x-webkit-airplay="deny" as a fallback.
   */
  'disableRemotePlayback'?: string | number | boolean | false
  /**
   * A Boolean attribute: if specified, the audio player will automatically seek back to the start upon reaching the end of the audio.
   */
  'loop'?: number | boolean | false
  /**
   * A Boolean attribute that indicates whether the audio will be initially silenced. Its default value is false.
   */
  'muted'?: boolean | false
  /**
   * This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:
   * 
   * none: Indicates that the audio should not be preloaded.
   * 
   * metadata: Indicates that only audio metadata (e.g. length) is fetched.
   * 
   * auto: Indicates that the whole audio file can be downloaded, even if the user is not expected to use it.
   * 
   * empty string: A synonym of the auto value.
   * 
   * The default value is different for each browser. The spec advises it to be set to metadata.
   * 
   * Note:
   * 
   * The autoplay attribute has precedence over preload. If autoplay is specified, the browser would obviously need to start downloading the audio for playback.
   * 
   * The browser is not forced by the specification to follow the value of this attribute; it is a mere hint.
   */
  'preload'?: string | false
  /**
   * The URL of the audio to embed. This is subject to HTTP access controls. This is optional; you may instead use the <source> element within the audio block to specify the audio to embed.
   */
  'src'?: string | false
}>>

/** The <img> HTML element embeds an image into the document. */
export type ReactSkruvImgHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLImageElement, {
  /**
   * Defines an alternative text description of the image.
   * 
   * Note: Browsers do not always display images. There are a number of situations in which a browser might not display images, such as:
   * 
   * Non-visual browsers (such as those used by people with visual impairments)
   * 
   * The user chooses not to display images (saving bandwidth, privacy reasons)
   * 
   * The image is invalid or an unsupported type
   * 
   * In these cases, the browser may replace the image with the text in the element's alt attribute. For these reasons and others, provide a useful value for alt whenever possible.
   * 
   * Setting this attribute to an empty string (alt="") indicates that this image is not a key part of the content (it's decoration or a tracking pixel), and that non-visual browsers may omit it from rendering. Visual browsers will also hide the broken image icon if the alt is empty and the image failed to display.
   * 
   * This attribute is also used when copying and pasting the image to text, or saving a linked image to a bookmark.
   */
  'alt'?: string | false
  /**
   * Indicates if the fetching of the image must be done using a CORS request. Image data from a CORS-enabled image returned from a CORS request can be reused in the <canvas> element without being marked "tainted".
   * 
   * If the crossorigin attribute is not specified, then a non-CORS request is sent (without the Origin request header), and the browser marks the image as tainted and restricts access to its image data, preventing its usage in <canvas> elements.
   * 
   * If the crossorigin attribute is specified, then a CORS request is sent (with the Origin request header); but if the server does not opt into allowing cross-origin access to the image data by the origin site (by not sending any Access-Control-Allow-Origin response header, or by not including the site's origin in any Access-Control-Allow-Origin response header it does send), then the browser blocks the image from loading, and logs a CORS error to the devtools console.
   * 
   * Allowed values:
   * 
   * anonymous
   * 
   * A CORS request is sent with credentials omitted (that is, no cookies, X.509 certificates, or Authorization request header).
   * 
   * use-credentials
   * 
   * The CORS request is sent with any credentials included (that is, cookies, X.509 certificates, and the Authorization request header). If the server does not opt into sharing credentials with the origin site (by sending back the Access-Control-Allow-Credentials: true response header), then the browser marks the image as tainted and restricts access to its image data.
   * 
   * If the attribute has an invalid value, browsers handle it as if the anonymous value was used. See CORS settings attributes for additional information.
   */
  'crossOrigin'?: string | false
  /**
   * Provides an image decoding hint to the browser. Allowed values:
   * 
   * sync
   * 
   * Decode the image synchronously, for atomic presentation with other content.
   * 
   * async
   * 
   * Decode the image asynchronously, to reduce delay in presenting other content.
   * 
   * auto
   * 
   * Default: no preference for the decoding mode. The browser decides what is best for the user.
   */
  'decoding'?: string | false
  /**
   * Marks the image for observation by the PerformanceElementTiming API. The value given becomes an identifier for the observed image element. See also the elementtiming attribute page.
   */
  'elementtiming'?: string | number | boolean | false
  /**
   * Provides a hint of the relative priority to use when fetching the image. Allowed values:
   * 
   * high
   * 
   * Signals a high-priority fetch relative to other images.
   * 
   * low
   * 
   * Signals a low-priority fetch relative to other images.
   * 
   * auto
   * 
   * Default: Signals automatic determination of fetch priority relative to other images.
   */
  'fetchPriority'?: string | false
  /**
   * The intrinsic height of the image, in pixels. Must be an integer without a unit.
   * 
   * Note: Including height and width enables the aspect ratio of the image to be calculated by the browser prior to the image being loaded. This aspect ratio is used to reserve the space needed to display the image, reducing or even preventing a layout shift when the image is downloaded and painted to the screen. Reducing layout shift is a major component of good user experience and web performance.
   */
  'height'?: string | false
  /**
   * This Boolean attribute indicates that the image is part of a server-side map. If so, the coordinates where the user clicked on the image are sent to the server.
   * 
   * Note: This attribute is allowed only if the <img> element is a descendant of an <a> element with a valid href attribute. This gives users without pointing devices a fallback destination.
   */
  'ismap'?: boolean | false
  /**
   * Indicates how the browser should load the image:
   * 
   * eager
   * 
   * Loads the image immediately, regardless of whether or not the image is currently within the visible viewport (this is the default value).
   * 
   * lazy
   * 
   * Defers loading the image until it reaches a calculated distance from the viewport, as defined by the browser. The intent is to avoid the network and storage bandwidth needed to handle the image until it's reasonably certain that it will be needed. This generally improves the performance of the content in most typical use cases.
   * 
   * Note: Loading is only deferred when JavaScript is enabled. This is an anti-tracking measure, because if a user agent supported lazy loading when scripting is disabled, it would still be possible for a site to track a user's approximate scroll position throughout a session, by strategically placing images in a page's markup such that a server can track how many images are requested and when.
   */
  'loading'?: string | false
  /**
   * A string indicating which referrer to use when fetching the resource:
   * 
   * no-referrer: The Referer header will not be sent.
   * 
   * no-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS).
   * 
   * origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port.
   * 
   * origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
   * 
   * same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information.
   * 
   * strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
   * 
   * strict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
   * 
   * unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins.
   */
  'referrerPolicy'?: string | false
  /**
   * One or more strings separated by commas, indicating a set of source sizes. Each source size consists of:
   * 
   * A media condition. This must be omitted for the last item in the list.
   * 
   * A source size value.
   * 
   * Media Conditions describe properties of the viewport, not of the image. For example, (max-height: 500px) 1000px proposes to use a source of 1000px width, if the viewport is not higher than 500px.
   * 
   * Source size values specify the intended display size of the image. User agents use the current source size to select one of the sources supplied by the srcset attribute, when those sources are described using width (w) descriptors. The selected source size affects the intrinsic size of the image (the image's display size if no CSS styling is applied). If the srcset attribute is absent, or contains no values with a width descriptor, then the sizes attribute has no effect.
   */
  'sizes'?: string | false
  /**
   * The image URL. Mandatory for the <img> element. On browsers supporting srcset, src is treated like a candidate image with a pixel density descriptor 1x, unless an image with this pixel density descriptor is already defined in srcset, or unless srcset contains w descriptors.
   */
  'src'?: string | false
  /**
   * One or more strings separated by commas, indicating possible image sources for the user agent to use. Each string is composed of:
   * 
   * A URL to an image
   * 
   * Optionally, whitespace followed by one of:
   * 
   * A width descriptor (a positive integer directly followed by w). The width descriptor is divided by the source size given in the sizes attribute to calculate the effective pixel density.
   * 
   * A pixel density descriptor (a positive floating point number directly followed by x).
   * 
   * If no descriptor is specified, the source is assigned the default descriptor of 1x.
   * 
   * It is incorrect to mix width descriptors and pixel density descriptors in the same srcset attribute. Duplicate descriptors (for instance, two sources in the same srcset which are both described with 2x) are also invalid.
   * 
   * If the srcset attribute uses width descriptors, the sizes attribute must also be present, or the srcset itself will be ignored.
   * 
   * The user agent selects any of the available sources at its discretion. This provides them with significant leeway to tailor their selection based on things like user preferences or bandwidth conditions. See our Responsive images tutorial for an example.
   */
  'srcSet'?: string | false
  /**
   * The intrinsic width of the image in pixels. Must be an integer without a unit.
   */
  'width'?: number | string | false
  /**
   * The partial URL (starting with #) of an image map associated with the element.
   * 
   * Note: You cannot use this attribute if the <img> element is inside an <a> or <button> element.
   */
  'useMap'?: string | false
}>>

/** The <map> HTML element is used with <area> elements to define an image map (a clickable link area). */
export type ReactSkruvMapHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLMapElement, {
  /**
   * The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be equal to the value of the name attribute of another <map> element in the same document. If the id attribute is also specified, both attributes must have the same value.
   */
  'name'?: string | false
}>>

/** The <track> HTML element is used as a child of the media elements, <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks. */
export type ReactSkruvTrackHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLTrackElement, {
  /**
   * This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one track element per media element.
   */
  'default'?: boolean | false
  /**
   * How the text track is meant to be used. If omitted the default kind is subtitles. If the attribute contains an invalid value, it will use metadata (Versions of Chrome earlier than 52 treated an invalid value as subtitles). The following keywords are allowed:
   * 
   * subtitles
   * 
   * Subtitles provide translation of content that cannot be understood by the viewer. For example speech or text that is not English in an English language film.
   * 
   * Subtitles may contain additional content, usually extra background information. For example the text at the beginning of the Star Wars films, or the date, time, and location of a scene.
   * 
   * captions
   * 
   * Closed captions provide a transcription and possibly a translation of audio.
   * 
   * It may include important non-verbal information such as music cues or sound effects. It may indicate the cue's source (e.g. music, text, character).
   * 
   * Suitable for users who are deaf or when the sound is muted.
   * 
   * descriptions
   * 
   * Textual description of the video content.
   * 
   * Suitable for users who are blind or where the video cannot be seen.
   * 
   * chapters
   * 
   * Chapter titles are intended to be used when the user is navigating the media resource.
   * 
   * metadata
   * 
   * Tracks used by scripts. Not visible to the user.
   */
  'kind'?: string | false
  /**
   * A user-readable title of the text track which is used by the browser when listing available text tracks.
   */
  'label'?: string | false
  /**
   * Address of the track (.vtt file). Must be a valid URL. This attribute must be specified and its URL value must have the same origin as the document — unless the <audio> or <video> parent element of the track element has a crossorigin attribute.
   */
  'src'?: string | false
  /**
   * Language of the track text data. It must be a valid BCP 47 language tag. If the kind attribute is set to subtitles, then srclang must be defined.
   */
  'srcLang'?: string | false
}>>

/** The <video> HTML element embeds a media player which supports video playback into the document. You can use <video> for audio content as well, but the <audio> element may provide a more appropriate user experience. */
export type ReactSkruvVideoHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLVideoElement, {
  /**
   * A Boolean attribute; if specified, the video automatically begins to play back as soon as it can do so without stopping to finish loading the data.
   * 
   * Note: Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control. See our autoplay guide for additional information about how to properly use autoplay.
   * 
   * To disable video autoplay, autoplay="false" will not work; the video will autoplay if the attribute is there in the <video> tag at all. To remove autoplay, the attribute needs to be removed altogether.
   * 
   * In some browsers (e.g. Chrome 70.0) autoplay doesn't work if no muted attribute is present.
   */
  'autoPlay'?: boolean | false
  /**
   * If this attribute is present, the browser will offer controls to allow the user to control video playback, including volume, seeking, and pause/resume playback.
   */
  'controls'?: boolean | false
  /**
   * The controlslist attribute, when specified, helps the browser select what controls to show for the video element whenever the browser shows its own set of controls (that is, when the controls attribute is specified).
   * 
   * The allowed values are nodownload, nofullscreen and noremoteplayback.
   * 
   * Use the disablepictureinpicture attribute if you want to disable the Picture-In-Picture mode (and the control).
   */
  'controlsList'?: string | number | boolean | false
  /**
   * This enumerated attribute indicates whether to use CORS to fetch the related video. CORS-enabled resources can be reused in the <canvas> element without being tainted. The allowed values are:
   * 
   * anonymous
   * 
   * Sends a cross-origin request without a credential. In other words, it sends the Origin: HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the Access-Control-Allow-Origin: HTTP header), the resource will be tainted, and its usage restricted.
   * 
   * use-credentials
   * 
   * Sends a cross-origin request with a credential. In other words, it sends the Origin: HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through Access-Control-Allow-Credentials: HTTP header), the resource will be tainted and its usage restricted.
   * 
   * When not present, the resource is fetched without a CORS request (i.e. without sending the Origin: HTTP header), preventing its non-tainted use in <canvas> elements. If invalid, it is handled as if the enumerated keyword anonymous was used. See CORS settings attributes for additional information.
   */
  'crossOrigin'?: string | false
  /**
   * Prevents the browser from suggesting a Picture-in-Picture context menu or to request Picture-in-Picture automatically in some cases.
   */
  'disablePictureInPicture'?: string | number | boolean | false
  /**
   * A Boolean attribute used to disable the capability of remote playback in devices that are attached using wired (HDMI, DVI, etc.) and wireless technologies (Miracast, Chromecast, DLNA, AirPlay, etc.).
   * 
   * In Safari, you can use x-webkit-airplay="deny" as a fallback.
   */
  'disableRemotePlayback'?: string | number | boolean | false
  /**
   * The height of the video's display area, in CSS pixels (absolute values only; no percentages).
   */
  'height'?: string | false
  /**
   * A Boolean attribute; if specified, the browser will automatically seek back to the start upon reaching the end of the video.
   */
  'loop'?: number | boolean | false
  /**
   * A Boolean attribute that indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced. Its default value is false, meaning that the audio will be played when the video is played.
   */
  'muted'?: boolean | false
  /**
   * A Boolean attribute indicating that the video is to be played "inline", that is within the element's playback area. Note that the absence of this attribute does not imply that the video will always be played in fullscreen.
   */
  'playsInline'?: boolean | false
  /**
   * A URL for an image to be shown while the video is downloading. If this attribute isn't specified, nothing is displayed until the first frame is available, then the first frame is shown as the poster frame.
   */
  'poster'?: string | false
  /**
   * This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience regarding what content is loaded before the video is played. It may have one of the following values:
   * 
   * none: Indicates that the video should not be preloaded.
   * 
   * metadata: Indicates that only video metadata (e.g. length) is fetched.
   * 
   * auto: Indicates that the whole video file can be downloaded, even if the user is not expected to use it.
   * 
   * empty string: Synonym of the auto value.
   * 
   * The default value is different for each browser. The spec advises it to be set to metadata.
   * 
   * Note:
   * 
   * The autoplay attribute has precedence over preload. If autoplay is specified, the browser would obviously need to start downloading the video for playback.
   * 
   * The specification does not force the browser to follow the value of this attribute; it is a mere hint.
   */
  'preload'?: string | false
  /**
   * The URL of the video to embed. This is optional; you may instead use the <source> element within the video block to specify the video to embed.
   */
  'src'?: string | false
  /**
   * The width of the video's display area, in CSS pixels (absolute values only; no percentages).
   */
  'width'?: number | string | false
}>>

/** The <embed> HTML element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in. */
export type ReactSkruvEmbedHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLEmbedElement, {
  /**
   * The displayed height of the resource, in CSS pixels. This must be an absolute value; percentages are not allowed.
   */
  'height'?: string | false
  /**
   * The URL of the resource being embedded.
   */
  'src'?: string | false
  /**
   * The MIME type to use to select the plug-in to instantiate.
   */
  'type'?: string | false
  /**
   * The displayed width of the resource, in CSS pixels. This must be an absolute value; percentages are not allowed.
   */
  'width'?: number | string | false
}>>

/** The <iframe> HTML element represents a nested browsing context, embedding another HTML page into the current one. */
export type ReactSkruvIframeHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLIFrameElement, {
  /**
   * Specifies a Permissions Policy for the <iframe>. The policy defines what features are available to the <iframe> (for example, access to the microphone, camera, battery, web-share, etc.) based on the origin of the request.
   * 
   * Note: A Permissions Policy specified by the allow attribute implements a further restriction on top of the policy specified in the Permissions-Policy header. It doesn't replace it.
   */
  'allow'?: string | false
  /**
   * Set to true to make the <iframe> credentialless, meaning that its content will be loaded in a new, ephemeral context. It doesn't have access to the network, cookies, and storage data associated with its origin. It uses a new context local to the top-level document lifetime. In return, the Cross-Origin-Embedder-Policy (COEP) embedding rules can be lifted, so documents with COEP set can embed third-party documents that do not. See IFrame credentialless for more details.
   */
  'credentialless'?: string | number | boolean | false
  /**
   * A Content Security Policy enforced for the embedded resource. See HTMLIFrameElement.csp for details.
   */
  'csp'?: string | number | boolean | false
  /**
   * The height of the frame in CSS pixels. Default is 150.
   */
  'height'?: string | false
  /**
   * Indicates how the browser should load the iframe:
   * 
   * eager: Load the iframe immediately, regardless if it is outside the visible viewport (this is the default value).
   * 
   * lazy: Defer loading of the iframe until it reaches a calculated distance from the viewport, as defined by the browser.
   */
  'loading'?: string | false
  /**
   * A targetable name for the embedded browsing context. This can be used in the target attribute of the <a>, <form>, or <base> elements; the formtarget attribute of the <input> or <button> elements; or the windowName parameter in the window.open() method.
   */
  'name'?: string | false
  /**
   * Indicates which referrer to send when fetching the frame's resource:
   * 
   * no-referrer: The Referer header will not be sent.
   * 
   * no-referrer-when-downgrade: The Referer header will not be sent to origins without TLS (HTTPS).
   * 
   * origin: The sent referrer will be limited to the origin of the referring page: its scheme, host, and port.
   * 
   * origin-when-cross-origin: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.
   * 
   * same-origin: A referrer will be sent for same origin, but cross-origin requests will contain no referrer information.
   * 
   * strict-origin: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don't send it to a less secure destination (HTTPS→HTTP).
   * 
   * strict-origin-when-cross-origin (default): Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).
   * 
   * unsafe-url: The referrer will include the origin and the path (but not the fragment, password, or username). This value is unsafe, because it leaks origins and paths from TLS-protected resources to insecure origins.
   */
  'referrerPolicy'?: string | false
  /**
   * Controls the restrictions applied to the content embedded in the <iframe>. The value of the attribute can either be empty to apply all restrictions, or space-separated tokens to lift particular restrictions:
   * 
   * allow-downloads: Allows downloading files through an <a> or <area> element with the download attribute, as well as through the navigation that leads to a download of a file. This works regardless of whether the user clicked on the link, or JS code initiated it without user interaction.
   * 
   * allow-downloads-without-user-activation
   * 
   * Experimental
   * 
   * : Allows for downloads to occur without a gesture from the user.
   * 
   * allow-forms: Allows the page to submit forms. If this keyword is not used, form will be displayed as normal, but submitting it will not trigger input validation, sending data to a web server or closing a dialog.
   * 
   * allow-modals: Allows the page to open modal windows by Window.alert(), Window.confirm(), Window.print() and Window.prompt(), while opening a <dialog> is allowed regardless of this keyword. It also allows the page to receive BeforeUnloadEvent event.
   * 
   * allow-orientation-lock: Lets the resource lock the screen orientation.
   * 
   * allow-pointer-lock: Allows the page to use the Pointer Lock API.
   * 
   * allow-popups: Allows popups (like from Window.open(), target="_blank", Window.showModalDialog()). If this keyword is not used, that functionality will silently fail.
   * 
   * allow-popups-to-escape-sandbox: Allows a sandboxed document to open new windows without forcing the sandboxing flags upon them. This will allow, for example, a third-party advertisement to be safely sandboxed without forcing the same restrictions upon the page the ad links to.
   * 
   * allow-presentation: Allows embedders to have control over whether an iframe can start a presentation session.
   * 
   * allow-same-origin: If this token is not used, the resource is treated as being from a special origin that always fails the same-origin policy (potentially preventing access to data storage/cookies and some JavaScript APIs).
   * 
   * allow-scripts: Allows the page to run scripts (but not create pop-up windows). If this keyword is not used, this operation is not allowed.
   * 
   * allow-storage-access-by-user-activation
   * 
   * Experimental
   * 
   * : Allows a document loaded in the <iframe> to use the Storage Access API to request access to unpartitioned cookies.
   * 
   * allow-top-navigation: Lets the resource navigate the top-level browsing context (the one named _top).
   * 
   * allow-top-navigation-by-user-activation: Lets the resource navigate the top-level browsing context, but only if initiated by a user gesture.
   * 
   * allow-top-navigation-to-custom-protocols: Allows navigations to non-http protocols built into browser or registered by a website. This feature is also activated by allow-popups or allow-top-navigation keyword.
   * 
   * Note:
   * 
   * When the embedded document has the same origin as the embedding page, it is strongly discouraged to use both allow-scripts and allow-same-origin, as that lets the embedded document remove the sandbox attribute — making it no more secure than not using the sandbox attribute at all.
   * 
   * Sandboxing is useless if the attacker can display content outside a sandboxed iframe — such as if the viewer opens the frame in a new tab. Such content should be also served from a separate origin to limit potential damage.
   */
  'sandbox'?: 'allow-downloads' | 'allow-forms' | 'allow-modals' | 'allow-orientation-lock' | 'allow-pointer-lock' | 'allow-popups' | 'allow-popups-to-escape-sandbox' | 'allow-presentation' | 'allow-same-origin' | 'allow-scripts' | 'allow-top-navigation' | 'allow-top-navigation-by-user-activation' | 'allow-top-navigation-to-custom-protocols' | false
  /**
   * The URL of the page to embed. Use a value of about:blank to embed an empty page that conforms to the same-origin policy. Also note that programmatically removing an <iframe>'s src attribute (e.g. via Element.removeAttribute()) causes about:blank to be loaded in the frame in Firefox (from version 65), Chromium-based browsers, and Safari/iOS.
   */
  'src'?: string | false
  /**
   * Inline HTML to embed, overriding the src attribute. If a browser does not support the srcdoc attribute, it will fall back to the URL in the src attribute.
   */
  'srcDoc'?: string | false
  /**
   * The width of the frame in CSS pixels. Default is 300.
   */
  'width'?: number | string | false
}>>

/** The <object> HTML element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin. */
export type ReactSkruvObjectHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLObjectElement, {
  /**
   * A space-separated list of URIs for archives of resources for the object.
   */
  'archive'?: string | false
  /**
   * The width of a border around the control, in pixels.
   */
  'border'?: string | false
  /**
   * The URI of the object's implementation. It can be used together with, or in place of, the data attribute.
   */
  'classID'?: string | number | boolean | false
  /**
   * The base path used to resolve relative URIs specified by classid, data, or archive. If not specified, the default is the base URI of the current document.
   */
  'codebase'?: string | number | boolean | false
  /**
   * The content type of the data specified by classid.
   */
  'codetype'?: string | number | boolean | false
  /**
   * The address of the resource as a valid URL. At least one of data and type must be defined.
   */
  'data'?: string | false
  /**
   * The presence of this Boolean attribute makes this element a declaration only. The object must be instantiated by a subsequent <object> element. Repeat the <object> element completely each time the resource is reused.
   */
  'declare'?: boolean | false
  /**
   * The form element, if any, that the object element is associated with (its form owner). The value of the attribute must be an ID of a <form> element in the same document.
   */
  'form'?: string | false
  /**
   * The height of the displayed resource, in CSS pixels. — (Absolute values only. NO percentages)
   */
  'height'?: string | false
  /**
   * The name of valid browsing context (HTML5), or the name of the control (HTML 4).
   */
  'name'?: string | false
  /**
   * A message that the browser can show while loading the object's implementation and data.
   */
  'standby'?: string | false
  /**
   * The content type of the resource specified by data. At least one of data and type must be defined.
   */
  'type'?: string | false
  /**
   * A hash-name reference to a <map> element; that is a '#' followed by the value of a name of a map element.
   */
  'useMap'?: string | false
  /**
   * The width of the display resource, in CSS pixels. — (Absolute values only. NO percentages)
   */
  'width'?: number | string | false
}>>

/** The <picture> HTML element contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios. */
export type ReactSkruvPictureHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLPictureElement, {}>>

/** The <source> HTML element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element. It is a void element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats. */
export type ReactSkruvSourceHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLSourceElement, {
  /**
   * The MIME media type of the image or other media type, optionally with a codecs parameter.
   */
  'type'?: string | false
  /**
   * Required if the source element's parent is an <audio> and <video> element, but not allowed if the source element's parent is a <picture> element.
   * 
   * Address of the media resource.
   */
  'src'?: string | false
  /**
   * Required if the source element's parent is a <picture> element, but not allowed if the source element's parent is an <audio> or <video> element.
   * 
   * A list of one or more strings, separated by commas, indicating a set of possible images represented by the source for the browser to use. Each string is composed of:
   * 
   * One URL specifying an image.
   * 
   * A width descriptor, which consists of a string containing a positive integer directly followed by "w", such as 300w. The default value, if missing, is the infinity.
   * 
   * A pixel density descriptor, that is a positive floating number directly followed by "x". The default value, if missing, is 1x.
   * 
   * Each string in the list must have at least a width descriptor or a pixel density descriptor to be valid. The two types of descriptors should not be mixed together and only one should be used consistently throughout the list. Among the list, the value of each descriptor must be unique. The browser chooses the most adequate image to display at a given point of time. If the sizes attribute is present, then a width descriptor must be specified for each string. If the browser does not support srcset, then src will be used for the default source.
   */
  'srcSet'?: string | false
  /**
   * Allowed if the source element's parent is a <picture> element, but not allowed if the source element's parent is an <audio> or <video> element.
   * 
   * A list of source sizes that describes the final rendered width of the image represented by the source. Each source size consists of a comma-separated list of media condition-length pairs. Before laying the page out, the browser uses this information to determine which image is defined in srcset to use. Please note that sizes will have its effect only if width dimension descriptors are provided with srcset instead of pixel ratio values (200w instead of 2x for example).
   */
  'sizes'?: string | false
  /**
   * Allowed if the source element's parent is a <picture> element, but not allowed if the source element's parent is an <audio> or <video> element.
   * 
   * Media query of the resource's intended media.
   */
  'media'?: string | false
  /**
   * Allowed if the source element's parent is a <picture> element, but not allowed if the source element's parent is an <audio> or <video> element.
   * 
   * The intrinsic height of the image, in pixels. Must be an integer without a unit.
   */
  'height'?: string | false
  /**
   * Allowed if the source element's parent is a <picture> element, but not allowed if the source element's parent is an <audio> or <video> element.
   * 
   * The intrinsic width of the image in pixels. Must be an integer without a unit.
   */
  'width'?: number | string | false
}>>

/** Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production. */
export type ReactSkruvPortalHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLUnknownElement, {
  /**
   * Sets the referrer policy to use when requesting the page at the URL given as the value of the src attribute.
   */
  'referrerPolicy'?: string | false
  /**
   * The URL of the page to embed.
   */
  'src'?: string | false
}>>

/** Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations. */
export type ReactSkruvCanvasHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLCanvasElement, {
  /**
   * The height of the coordinate space in CSS pixels. Defaults to 150.
   */
  'height'?: string | false
  /**
   * The width of the coordinate space in CSS pixels. Defaults to 300.
   */
  'width'?: number | string | false
}>>

/** The <noscript> HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser. */
export type ReactSkruvNoscriptHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <del> HTML element represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The <ins> element can be used for the opposite purpose: to indicate text that has been added to the document. */
export type ReactSkruvDelHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLModElement, {
  /**
   * A URI for a resource that explains the change (for example, meeting minutes).
   */
  'cite'?: string | false
  /**
   * This attribute indicates the time and date of the change and must be a valid date string with an optional time. If the value cannot be parsed as a date with an optional time string, the element does not have an associated timestamp. For the format of the string without a time, see Date strings. The format of the string if it includes both date and time is covered in Local date and time strings.
   */
  'dateTime'?: string | false
}>>

/** The <ins> HTML element represents a range of text that has been added to a document. You can use the <del> element to similarly represent a range of text that has been deleted from the document. */
export type ReactSkruvInsHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLModElement, {
  /**
   * This attribute defines the URI of a resource that explains the change, such as a link to meeting minutes or a ticket in a troubleshooting system.
   */
  'cite'?: string | false
  /**
   * This attribute indicates the time and date of the change and must be a valid date with an optional time string. If the value cannot be parsed as a date with an optional time string, the element does not have an associated timestamp. For the format of the string without a time, see Format of a valid date string. The format of the string if it includes both date and time is covered in Format of a valid local date and time string.
   */
  'dateTime'?: string | false
}>>

/** The <caption> HTML element specifies the caption (or title) of a table. */
export type ReactSkruvCaptionHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLTableCaptionElement, {}>>

/** The <col> HTML element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element. */
export type ReactSkruvColHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLTableColElement, {
  /**
   * This attribute contains a positive integer indicating the number of consecutive columns the <col> element spans. If not present, its default value is 1.
   */
  'span'?: number | false
}>>

/** The <colgroup> HTML element defines a group of columns within a table. */
export type ReactSkruvColgroupHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLTableColElement, {
  /**
   * This attribute contains a positive integer indicating the number of consecutive columns the <colgroup> element spans. If not present, its default value is 1.
   * 
   * The span attribute is not permitted if there are one or more <col> elements within the <colgroup>.
   */
  'span'?: number | false
}>>

/** The <table> HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data. */
export type ReactSkruvTableHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLTableElement, {}>>

/** The <tbody> HTML element encapsulates a set of table rows (<tr> elements), indicating that they comprise the body of the table (<table>). */
export type ReactSkruvTbodyHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLTableSectionElement, {}>>

/** The <tr> HTML element defines a row of cells in a table. The row's cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements. */
export type ReactSkruvTrHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLTableRowElement, {}>>

/** The <td> HTML element defines a cell of a table that contains data. It participates in the table model. */
export type ReactSkruvTdHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLTableCellElement, {
  /**
   * This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is 1. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).
   */
  'colSpan'?: number | false
  /**
   * This attribute contains a list of space-separated strings, each corresponding to the id attribute of the <th> elements that apply to this element.
   */
  'headers'?: string | false
  /**
   * This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the table section (<thead>, <tbody>, <tfoot>, even if implicitly defined), that the cell belongs to. Values higher than 65534 are clipped down to 65534.
   */
  'rowSpan'?: number | false
}>>

/** The <tfoot> HTML element defines a set of rows summarizing the columns of the table. */
export type ReactSkruvTfootHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLTableSectionElement, {}>>

/** The <th> HTML element defines a cell as the header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes. */
export type ReactSkruvThHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLTableCellElement, {
  /**
   * This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself.
   */
  'abbr'?: string | false
  /**
   * This attribute contains a non-negative integer value that indicates for how many columns the cell extends. Its default value is 1. Values higher than 1000 will be considered as incorrect and will be set to the default value (1).
   */
  'colSpan'?: number | false
  /**
   * This attribute contains a list of space-separated strings, each corresponding to the id attribute of the <th> elements that apply to this element.
   */
  'headers'?: string | false
  /**
   * This attribute contains a non-negative integer value that indicates for how many rows the cell extends. Its default value is 1; if its value is set to 0, it extends until the end of the table section (<thead>, <tbody>, <tfoot>, even if implicitly defined), that the cell belongs to. Values higher than 65534 are clipped down to 65534.
   */
  'rowSpan'?: number | false
  /**
   * This enumerated attribute defines the cells that the header (defined in the <th>) element relates to. It may have the following values:
   * 
   * row: The header relates to all cells of the row it belongs to.
   * 
   * col: The header relates to all cells of the column it belongs to.
   * 
   * rowgroup: The header belongs to a rowgroup and relates to all of its cells.
   * 
   * colgroup: The header belongs to a colgroup and relates to all of its cells.
   * 
   * If the scope attribute is not specified, or its value is not row, col, or rowgroup, or colgroup, then browsers automatically select the set of cells to which the header cell applies.
   */
  'scope'?: string | false
}>>

/** The <thead> HTML element defines a set of rows defining the head of the columns of the table. */
export type ReactSkruvTheadHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLTableSectionElement, {}>>

/** The <button> HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs an action, such as submitting a form or opening a dialog. */
export type ReactSkruvButtonHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLButtonElement, {
  /**
   * This Boolean attribute specifies that the button should have input focus when the page loads. Only one element in a document can have this attribute.
   */
  'autoFocus'?: boolean | false
  /**
   * This attribute on a <button> is nonstandard and Firefox-specific. Unlike other browsers, Firefox persists the dynamic disabled state of a <button> across page loads. Setting autocomplete="off" on the button disables this feature; see Firefox bug 654072.
   */
  'autoComplete'?: string | false
  /**
   * This Boolean attribute prevents the user from interacting with the button: it cannot be pressed or focused.
   * 
   * Firefox, unlike other browsers, persists the dynamic disabled state of a <button> across page loads. To control this feature, use the autocomplete attribute.
   */
  'disabled'?: boolean | false
  /**
   * The <form> element to associate the button with (its form owner). The value of this attribute must be the id of a <form> in the same document. (If this attribute is not set, the <button> is associated with its ancestor <form> element, if any.)
   * 
   * This attribute lets you associate <button> elements to <form>s anywhere in the document, not just inside a <form>. It can also override an ancestor <form> element.
   */
  'form'?: string | false
  /**
   * The URL that processes the information submitted by the button. Overrides the action attribute of the button's form owner. Does nothing if there is no form owner.
   */
  'formAction'?: string | false
  /**
   * If the button is a submit button (it's inside/associated with a <form> and doesn't have type="button"), specifies how to encode the form data that is submitted. Possible values:
   * 
   * application/x-www-form-urlencoded: The default if the attribute is not used.
   * 
   * multipart/form-data: Used to submit <input> elements with their type attributes set to file.
   * 
   * text/plain: Specified as a debugging aid; shouldn't be used for real form submission.
   * 
   * If this attribute is specified, it overrides the enctype attribute of the button's form owner.
   */
  'formEncType'?: string | false
  /**
   * If the button is a submit button (it's inside/associated with a <form> and doesn't have type="button"), this attribute specifies the HTTP method used to submit the form. Possible values:
   * 
   * post: The data from the form are included in the body of the HTTP request when sent to the server. Use when the form contains information that shouldn't be public, like login credentials.
   * 
   * get: The form data are appended to the form's action URL, with a ? as a separator, and the resulting URL is sent to the server. Use this method when the form has no side effects, like search forms.
   * 
   * dialog: This method is used to indicate that the button closes the dialog with which it is associated, and does not transmit the form data at all.
   * 
   * If specified, this attribute overrides the method attribute of the button's form owner.
   */
  'formMethod'?: string | false
  /**
   * If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the novalidate attribute of the button's form owner.
   * 
   * This attribute is also available on <input type="image"> and <input type="submit"> elements.
   */
  'formNoValidate'?: boolean | false
  /**
   * If the button is a submit button, this attribute is an author-defined name or standardized, underscore-prefixed keyword indicating where to display the response from submitting the form. This is the name of, or keyword for, a browsing context (a tab, window, or <iframe>). If this attribute is specified, it overrides the target attribute of the button's form owner. The following keywords have special meanings:
   * 
   * _self: Load the response into the same browsing context as the current one. This is the default if the attribute is not specified.
   * 
   * _blank: Load the response into a new unnamed browsing context — usually a new tab or window, depending on the user's browser settings.
   * 
   * _parent: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as _self.
   * 
   * _top: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as _self.
   */
  'formTarget'?: string | false
  /**
   * The name of the button, submitted as a pair with the button's value as part of the form data, when that button is used to submit the form.
   */
  'name'?: string | false
  /**
   * Turns a <button> element into a popover control button; takes the ID of the popover element to control as its value. See the Popover API landing page for more details.
   */
  'popovertarget'?: string | false
  /**
   * Specifies the action to be performed on a popover element being controlled by a control <button>. Possible values are:
   * 
   * "hide"
   * 
   * The button will hide a shown popover. If you try to hide an already hidden popover, no action will be taken.
   * 
   * "show"
   * 
   * The button will show a hidden popover. If you try to show an already showing popover, no action will be taken.
   * 
   * "toggle"
   * 
   * The button will toggle a popover between showing and hidden. If the popover is hidden, it will be shown; if the popover is showing, it will be hidden. If popovertargetaction is omitted, "toggle" is the default action that will be performed by the control button.
   */
  'popovertargetaction'?: 'toggle' | 'show' | 'hide' | false
  /**
   * The default behavior of the button. Possible values are:
   * 
   * submit: The button submits the form data to the server. This is the default if the attribute is not specified for buttons associated with a <form>, or if the attribute is an empty or invalid value.
   * 
   * reset: The button resets all the controls to their initial values, like <input type="reset">. (This behavior tends to annoy users.)
   * 
   * button: The button has no default behavior, and does nothing when pressed by default. It can have client-side scripts listen to the element's events, which are triggered when the events occur.
   */
  'type'?: string | false
  /**
   * Defines the value associated with the button's name when it's submitted with the form data. This value is passed to the server in params when the form is submitted using this button.
   */
  'value'?: number | string | false
}>>

/** The <datalist> HTML element contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls. */
export type ReactSkruvDatalistHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLDataListElement, {}>>

/** The <option> HTML element is used to define an item contained in a <select>, an <optgroup>, or a <datalist> element. As such, <option> can represent menu items in popups and other lists of items in an HTML document. */
export type ReactSkruvOptionHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLOptionElement, {
  /**
   * If this Boolean attribute is set, this option is not checkable. Often browsers grey out such control and it won't receive any browsing event, like mouse clicks or focus-related ones. If this attribute is not set, the element can still be disabled if one of its ancestors is a disabled <optgroup> element.
   */
  'disabled'?: boolean | false
  /**
   * This attribute is text for the label indicating the meaning of the option. If the label attribute isn't defined, its value is that of the element text content.
   */
  'label'?: string | false
  /**
   * If present, this Boolean attribute indicates that the option is initially selected. If the <option> element is the descendant of a <select> element whose multiple attribute is not set, only one single <option> of this <select> element may have the selected attribute.
   */
  'selected'?: boolean | false
  /**
   * The content of this attribute represents the value to be submitted with the form, should this option be selected. If this attribute is omitted, the value is taken from the text content of the option element.
   */
  'value'?: number | string | false
}>>

/** The <fieldset> HTML element is used to group several controls as well as labels (<label>) within a web form. */
export type ReactSkruvFieldsetHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLFieldSetElement, {
  /**
   * If this Boolean attribute is set, all form controls that are descendants of the <fieldset>, are disabled, meaning they are not editable and won't be submitted along with the <form>. They won't receive any browsing events, like mouse clicks or focus-related events. By default browsers display such controls grayed out. Note that form elements inside the <legend> element won't be disabled.
   */
  'disabled'?: boolean | false
  /**
   * This attribute takes the value of the id attribute of a <form> element you want the <fieldset> to be part of, even if it is not inside the form. Please note that usage of this is confusing — if you want the <input> elements inside the <fieldset> to be associated with the form, you need to use the form attribute directly on those elements. You can check which elements are associated with a form via JavaScript, using HTMLFormElement.elements.
   */
  'form'?: string | false
  /**
   * The name associated with the group.
   * 
   * Note: The caption for the fieldset is given by the first <legend> element nested inside it.
   */
  'name'?: string | false
}>>

/** The <label> HTML element represents a caption for an item in a user interface. */
export type ReactSkruvLabelHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLLabelElement, {
  /**
   * The value of the for attribute must be a single id for a labelable form-related element in the same document as the <label> element. So, any given label element can be associated with only one form control.
   * 
   * Note: To programmatically set the for attribute, use htmlFor.
   * 
   * The first element in the document with an id attribute matching the value of the for attribute is the labeled control for this label element — if the element with that id is actually a labelable element. If it is not a labelable element, then the for attribute has no effect. If there are other elements that also match the id value, later in the document, they are not considered.
   * 
   * Multiple label elements can be given the same value for their for attribute; doing so causes the associated form control (the form control that for value references) to have multiple labels.
   * 
   * Note: A <label> element can have both a for attribute and a contained control element, as long as the for attribute points to the contained control element.
   */
  'htmlfor'?: string | false
}>>

/** The <form> HTML element represents a document section containing interactive controls for submitting information. */
export type ReactSkruvFormHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLFormElement, {
  /**
   * Space-separated character encodings the server accepts. The browser uses them in the order in which they are listed. The default value means the same encoding as the page.
   * 
   * (In previous versions of HTML, character encodings could also be delimited by commas.)
   */
  'acceptcharset'?: string | false
  /**
   * A nonstandard attribute used by iOS Safari that controls how textual form elements should be automatically capitalized. autocapitalize attributes on a form elements override it on <form>. Possible values:
   * 
   * none: No automatic capitalization.
   * 
   * sentences (default): Capitalize the first letter of each sentence.
   * 
   * words: Capitalize the first letter of each word.
   * 
   * characters: Capitalize all characters — that is, uppercase.
   */
  'autoCapitalize'?: string | false
  /**
   * Indicates whether input elements can by default have their values automatically completed by the browser. autocomplete attributes on form elements override it on <form>. Possible values:
   * 
   * off: The browser may not automatically complete entries. (Browsers tend to ignore this for suspected login forms; see The autocomplete attribute and login fields.)
   * 
   * on: The browser may automatically complete entries.
   */
  'autoComplete'?: string | false
  /**
   * The name of the form. The value must not be the empty string, and must be unique among the form elements in the forms collection that it is in, if any.
   */
  'name'?: string | false
  /**
   * Controls the annotations and what kinds of links the form creates. Annotations include external, nofollow, opener, noopener, and noreferrer. Link types include help, prev, next, search, and license. The rel value is a space-separated list of these enumerated values.
   */
  'rel'?: string | false
}>>

/** The <input> HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The <input> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes. */
export type ReactSkruvInputHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLInputElement, {
  /**
   * Hint for expected file type in file upload controls
   */
  'accept'?: string | false
  /**
   * alt attribute for the image type. Required for accessibility
   */
  'alt'?: string | false
  /**
   * Hint for form autofill feature
   */
  'autoComplete'?: string | false
  /**
   * Media capture input method in file upload controls
   */
  'capture'?: string | number | boolean | false
  /**
   * Whether the command or control is checked
   */
  'checked'?: boolean | false
  /**
   * Name of form field to use for sending the element's directionality in form submission
   */
  'dirname'?: string | false
  /**
   * Whether the form control is disabled
   */
  'disabled'?: boolean | false
  /**
   * Associates the control with a form element
   */
  'form'?: string | false
  /**
   * URL to use for form submission
   */
  'formAction'?: string | false
  /**
   * Form data set encoding type to use for form submission
   */
  'formEncType'?: string | false
  /**
   * HTTP method to use for form submission
   */
  'formMethod'?: string | false
  /**
   * Bypass form control validation for form submission
   */
  'formNoValidate'?: boolean | false
  /**
   * Browsing context for form submission
   */
  'formTarget'?: string | false
  /**
   * Same as height attribute for <img>; vertical dimension
   */
  'height'?: string | false
  /**
   * Value of the id attribute of the <datalist> of autocomplete options
   */
  'list'?: string | false
  /**
   * Maximum value
   */
  'max'?: number | string | false
  /**
   * Maximum length (number of characters) of value
   */
  'maxLength'?: number | false
  /**
   * Minimum value
   */
  'min'?: number | string | false
  /**
   * Minimum length (number of characters) of value
   */
  'minLength'?: number | false
  /**
   * Boolean. Whether to allow multiple values
   */
  'multiple'?: boolean | false
  /**
   * Name of the form control. Submitted with the form as part of a name/value pair
   */
  'name'?: string | false
  /**
   * Pattern the value must match to be valid
   */
  'pattern'?: string | false
  /**
   * Text that appears in the form control when it has no value set
   */
  'placeholder'?: string | false
  /**
   * Designates an <input type="button"> as a control for a popover element
   */
  'popovertarget'?: string | false
  /**
   * Specifies the action that a popover control should perform
   */
  'popovertargetaction'?: 'toggle' | 'show' | 'hide' | false
  /**
   * Boolean. The value is not editable
   */
  'readOnly'?: boolean | false
  /**
   * Boolean. A value is required or must be checked for the form to be submittable
   */
  'required'?: boolean | false
  /**
   * Size of the control
   */
  'size'?: string | false
  /**
   * Same as src attribute for <img>; address of image resource
   */
  'src'?: string | false
  /**
   * Incremental values that are valid
   */
  'step'?: string | false
  /**
   * Type of form control
   */
  'type'?: string | false
  /**
   * The initial value of the control
   */
  'value'?: number | string | false
  /**
   * Same as width attribute for <img>
   */
  'width'?: number | string | false
}>>

/** The <legend> HTML element represents a caption for the content of its parent <fieldset>. */
export type ReactSkruvLegendHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLLegendElement, {}>>

/** The <meter> HTML element represents either a scalar value within a known range or a fractional value. */
export type ReactSkruvMeterHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLMeterElement, {
  /**
   * The current numeric value. This must be between the minimum and maximum values (min attribute and max attribute) if they are specified. If unspecified or malformed, the value is 0. If specified, but not within the range given by the min attribute and max attribute, the value is equal to the nearest end of the range.
   * 
   * Note: Unless the value attribute is between 0 and 1 (inclusive), the min and max attributes should define the range so that the value attribute's value is within it.
   */
  'value'?: number | string | false
  /**
   * The lower numeric bound of the measured range. This must be less than the maximum value (max attribute), if specified. If unspecified, the minimum value is 0.
   */
  'min'?: number | string | false
  /**
   * The upper numeric bound of the measured range. This must be greater than the minimum value (min attribute), if specified. If unspecified, the maximum value is 1.
   */
  'max'?: number | string | false
  /**
   * The upper numeric bound of the low end of the measured range. This must be greater than the minimum value (min attribute), and it also must be less than the high value and maximum value (high attribute and max attribute, respectively), if any are specified. If unspecified, or if less than the minimum value, the low value is equal to the minimum value.
   */
  'low'?: number | false
  /**
   * The lower numeric bound of the high end of the measured range. This must be less than the maximum value (max attribute), and it also must be greater than the low value and minimum value (low attribute and min attribute, respectively), if any are specified. If unspecified, or if greater than the maximum value, the high value is equal to the maximum value.
   */
  'high'?: number | false
  /**
   * This attribute indicates the optimal numeric value. It must be within the range (as defined by the min attribute and max attribute). When used with the low attribute and high attribute, it gives an indication where along the range is considered preferable. For example, if it is between the min attribute and the low attribute, then the lower range is considered preferred. The browser may color the meter's bar differently depending on whether the value is less than or equal to the optimum value.
   */
  'optimum'?: number | false
  /**
   * This optional attribute is used to explicitly set a <form> owner for the <meter> element. If omitted, the <meter> is associated with its ancestor <form> element or the form association set by the form attribute on another ancestor element, such as on a <fieldset>, if any. If included, the value must be the id of a <form> in the same tree.
   */
  'form'?: string | false
}>>

/** The <optgroup> HTML element creates a grouping of options within a <select> element. */
export type ReactSkruvOptgroupHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLOptGroupElement, {
  /**
   * If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones.
   */
  'disabled'?: boolean | false
  /**
   * The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used.
   */
  'label'?: string | false
}>>

/** The <select> HTML element represents a control that provides a menu of options. */
export type ReactSkruvSelectHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLSelectElement, {
  /**
   * A string providing a hint for a user agent's autocomplete feature. See The HTML autocomplete attribute for a complete list of values and details on how to use autocomplete.
   */
  'autoComplete'?: string | false
  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form element in a document can have the autofocus attribute.
   */
  'autoFocus'?: boolean | false
  /**
   * This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element with the disabled attribute set, then the control is enabled.
   */
  'disabled'?: boolean | false
  /**
   * The <form> element to associate the <select> with (its form owner). The value of this attribute must be the id of a <form> in the same document. (If this attribute is not set, the <select> is associated with its ancestor <form> element, if any.)
   * 
   * This attribute lets you associate <select> elements to <form>s anywhere in the document, not just inside a <form>. It can also override an ancestor <form> element.
   */
  'form'?: string | false
  /**
   * This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When multiple is specified, most browsers will show a scrolling list box instead of a single line dropdown.
   */
  'multiple'?: boolean | false
  /**
   * This attribute is used to specify the name of the control.
   */
  'name'?: string | false
  /**
   * A Boolean attribute indicating that an option with a non-empty string value must be selected.
   */
  'required'?: boolean | false
  /**
   * If the control is presented as a scrolling list box (e.g. when multiple is specified), this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select element as a scrolled list box. The default value is 0.
   * 
   * Note: According to the HTML specification, the default value for size should be 1; however, in practice, this has been found to break some websites, and no other browser currently does that, so Mozilla has opted to continue to return 0 for the time being with Firefox.
   */
  'size'?: string | false
}>>

/** The <output> HTML element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action. */
export type ReactSkruvOutputHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLOutputElement, {
  /**
   * A space-separated list of other elements' ids, indicating that those elements contributed input values to (or otherwise affected) the calculation.
   */
  'htmlfor'?: string | false
  /**
   * The <form> element to associate the output with (its form owner). The value of this attribute must be the id of a <form> in the same document. (If this attribute is not set, the <output> is associated with its ancestor <form> element, if any.)
   * 
   * This attribute lets you associate <output> elements to <form>s anywhere in the document, not just inside a <form>. It can also override an ancestor <form> element.
   */
  'form'?: string | false
  /**
   * The element's name. Used in the form.elements API.
   */
  'name'?: string | false
}>>

/** The <progress> HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar. */
export type ReactSkruvProgressHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLProgressElement, {
  /**
   * This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than 0 and be a valid floating point number. The default value is 1.
   */
  'max'?: number | string | false
  /**
   * This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and max, or between 0 and 1 if max is omitted. If there is no value attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take.
   */
  'value'?: number | string | false
}>>

/** The <textarea> HTML element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form. */
export type ReactSkruvTextareaHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLTextAreaElement, {
  /**
   * This attribute indicates whether the value of the control can be automatically completed by the browser. Possible values are:
   * 
   * off: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.
   * 
   * on: The browser can automatically complete the value based on values that the user has entered during previous uses.
   * 
   * If the autocomplete attribute is not specified on a <textarea> element, then the browser uses the autocomplete attribute value of the <textarea> element's form owner. The form owner is either the <form> element that this <textarea> element is a descendant of or the form element whose id is specified by the form attribute of the input element. For more information, see the autocomplete attribute in <form>.
   */
  'autoComplete'?: string | false
  /**
   * A string which indicates whether to activate automatic spelling correction and processing of text substitutions (if any are configured) while the user is editing this textarea. Permitted values are:
   * 
   * on
   * 
   * Enable automatic spelling correction and text substitutions.
   * 
   * off
   * 
   * Disable automatic spelling correction and text substitutions.
   */
  'autoCorrect'?: string | number | boolean | false
  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified.
   */
  'autoFocus'?: boolean | false
  /**
   * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20.
   */
  'cols'?: string | false
  /**
   * This attribute is used to indicate the text directionality of the element contents similar to the dirname attribute of the <input> element.
   * 
   * For more information, see the dirname attribute.
   */
  'dirname'?: string | false
  /**
   * This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element when the disabled attribute is set, the control is enabled.
   */
  'disabled'?: boolean | false
  /**
   * The form element that the <textarea> element is associated with (its "form owner"). The value of the attribute must be the id of a form element in the same document. If this attribute is not specified, the <textarea> element must be a descendant of a form element. This attribute enables you to place <textarea> elements anywhere within a document, not just as descendants of form elements.
   */
  'form'?: string | false
  /**
   * The maximum string length (measured in UTF-16 code units) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.
   */
  'maxLength'?: number | false
  /**
   * The minimum string length (measured in UTF-16 code units) required that the user should enter.
   */
  'minLength'?: number | false
  /**
   * The name of the control.
   */
  'name'?: string | false
  /**
   * A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.
   * 
   * Note: Placeholders should only be used to show an example of the type of data that should be entered into a form; they are not a substitute for a proper <label> element tied to the input. See <input> labels for a full explanation.
   */
  'placeholder'?: string | false
  /**
   * This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form.
   */
  'readOnly'?: boolean | false
  /**
   * This attribute specifies that the user must fill in a value before submitting a form.
   */
  'required'?: boolean | false
  /**
   * The number of visible text lines for the control. If it is specified, it must be a positive integer. If it is not specified, the default value is 2.
   */
  'rows'?: string | false
  /**
   * Specifies whether the <textarea> is subject to spell checking by the underlying browser/OS. The value can be:
   * 
   * true: Indicates that the element needs to have its spelling and grammar checked.
   * 
   * default : Indicates that the element is to act according to a default behavior, possibly based on the parent element's own spellcheck value.
   * 
   * false : Indicates that the element should not be spell checked.
   */
  'spellCheck'?: boolean | false
  /**
   * Indicates how the control should wrap the value for form submission. Possible values are:
   * 
   * hard: The browser automatically inserts line breaks (CR+LF) so that each line is no longer than the width of the control; the cols attribute must be specified for this to take effect
   * 
   * soft: The browser ensures that all line breaks in the entered value are a CR+LF pair, but no additional line breaks are added to the value.
   * 
   * off
   * 
   * Non-standard
   * 
   * : Like soft but changes appearance to white-space: pre so line segments exceeding cols are not wrapped and the <textarea> becomes horizontally scrollable.
   * 
   * If this attribute is not specified, soft is its default value.
   */
  'wrap'?: string | false
}>>

/** The <details> HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the <summary> element. */
export type ReactSkruvDetailsHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLDetailsElement, {
  /**
   * This Boolean attribute indicates whether the details — that is, the contents of the <details> element — are currently visible. The details are shown when this attribute exists, or hidden when this attribute is absent. By default this attribute is absent which means the details are not visible.
   * 
   * Note: You have to remove this attribute entirely to make the details hidden. open="false" makes the details visible because this attribute is Boolean.
   */
  'open'?: boolean | false
}>>

/** The <summary> HTML element specifies a summary, caption, or legend for a <details> element's disclosure box. Clicking the <summary> element toggles the state of the parent <details> element open and closed. */
export type ReactSkruvSummaryHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLElement, {}>>

/** The <dialog> HTML element represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow. */
export type ReactSkruvDialogHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLDialogElement, {
  /**
   * Indicates that the dialog is active and can be interacted with. When the open attribute is not set, the dialog shouldn't be shown to the user.
   * 
   * It is recommended to use the .show() or .showModal() methods to render dialogs, rather than the open attribute. If a <dialog> is opened using the open attribute, it will be non-modal.
   */
  'open'?: boolean | false
}>>

/** The <slot> HTML element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together. */
export type ReactSkruvSlotHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLSlotElement, {
  /**
   * The slot's name.
   * 
   * A named slot is a <slot> element with a name attribute.
   */
  'name'?: string | false
}>>

/** The <template> HTML element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript. */
export type ReactSkruvTemplateHTMLAttributes = util.AsyncContent<ReactHTMLAttributes<HTMLTemplateElement, {}>>

/** The <a> SVG element creates a hyperlink to other web pages, files, locations in the same page, email addresses, or any other URL. It is very similar to HTML's <a> element. */
export type ReactSkruvASVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGAElement, {
  /**
   * Instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file.
   * 
   * Value type: <string> ; Default value: none; Animatable: no
   */
  'download'?: string | false
  /**
   * The URL or URL fragment the hyperlink points to.
   * 
   * Value type: <URL> ; Default value: none; Animatable: yes
   */
  'href'?: string | false
  /**
   * The human language of the URL or URL fragment that the hyperlink points to.
   * 
   * Value type: <string> ; Default value: none; Animatable: yes
   */
  'hrefLang'?: string | false
  /**
   * A space-separated list of URLs to which, when the hyperlink is followed, POST requests with the body PING will be sent by the browser (in the background). Typically used for tracking. For a more widely-supported feature addressing the same use cases, see Navigator.sendBeacon().
   * 
   * Value type: <list-of-URLs> ; Default value: none; Animatable: no
   */
  'ping'?: string | false
  /**
   * Which referrer to send when fetching the URL.
   * 
   * Value type: no-referrer|no-referrer-when-downgrade|same-origin|origin|strict-origin|origin-when-cross-origin|strict-origin-when-cross-origin|unsafe-url ; Default value: none; Animatable: no
   */
  'referrerPolicy'?: string | false
  /**
   * The relationship of the target object to the link object.
   * 
   * Value type: <list-of-Link-Types> ; Default value: none; Animatable: yes
   */
  'rel'?: string | false
  /**
   * Where to display the linked URL.
   * 
   * Value type: _self|_parent|_top|_blank|<name> ; Default value: _self; Animatable: yes
   */
  'target'?: string | false
  /**
   * A MIME type for the linked URL.
   * 
   * Value type: <string> ; Default value: none; Animatable: yes
   */
  'type'?: string | false
} & ReactSVGPresentationAttributes>>

/** The SVG <animate> element provides a way to animate an attribute of an element over time. */
export type ReactSkruvAnimateSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGAnimateElement, {
} & ReactSVGAnimationAttributes>>

/** The SVG <animateMotion> element provides a way to define how an element moves along a motion path. */
export type ReactSkruvAnimatemotionSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGAnimateMotionElement, {
  /**
   * This attribute indicate, in the range [0,1], how far is the object along the path for each keyTimes associated values.
   * 
   * Value type: <number>*; Default value: none; Animatable: no
   */
  'keyPoints'?: string | number | boolean | false
  /**
   * This attribute defines the path of the motion, using the same syntax as the d attribute.
   * 
   * Value type: <string>; Default value: none; Animatable: no
   */
  'path'?: string | number | boolean | false
  /**
   * This attribute defines a rotation applied to the element animated along a path, usually to make it pointing in the direction of the animation.
   * 
   * Value type: <number>|auto|auto-reverse; Default value: 0; Animatable: no
   */
  'rotate'?: string | number | boolean | false
} & ReactSVGAnimationAttributes>>

/** The animateTransform element animates a transformation attribute on its target element, thereby allowing animations to control translation, scaling, rotation, and/or skewing. */
export type ReactSkruvAnimatetransformSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGAnimateTransformElement, {
} & ReactSVGAnimationAttributes>>

/** The <circle> SVG element is an SVG basic shape, used to draw circles based on a center point and a radius. */
export type ReactSkruvCircleSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGCircleElement, {
  /**
   * The x-axis coordinate of the center of the circle.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'cx'?: string | number | boolean | false
  /**
   * The y-axis coordinate of the center of the circle.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'cy'?: string | number | boolean | false
  /**
   * The radius of the circle. A value lower or equal to zero disables rendering of the circle.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'r'?: string | number | boolean | false
  /**
   * The total length for the circle's circumference, in user units.
   * 
   * Value type: <number> ; Default value: none; Animatable: yes
   */
  'pathLength'?: string | number | boolean | false
} & ReactSVGAnimationAttributes>>

/** The <clipPath> SVG element defines a clipping path, to be used by the clip-path property. */
export type ReactSkruvClippathSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGClipPathElement, {
  /**
   * Defines the coordinate system for the contents of the <clipPath> element.
   * 
   * Value type: userSpaceOnUse|objectBoundingBox ; Default value: userSpaceOnUse; Animatable: yes
   */
  'clipPathUnits'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The <defs> element is used to store graphical objects that will be used at a later time. Objects created inside a <defs> element are not rendered directly. To display them you have to reference them (with a <use> element for example). */
export type ReactSkruvDefsSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGDefsElement, {
} & ReactSVGPresentationAttributes>>

/** The <desc> element provides an accessible, long-text description of any SVG container element or graphics element. */
export type ReactSkruvDescSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGDescElement, {}>>

/** The <ellipse> element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius. */
export type ReactSkruvEllipseSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGEllipseElement, {
  /**
   * The x position of the center of the ellipse.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'cx'?: string | number | boolean | false
  /**
   * The y position of the center of the ellipse.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'cy'?: string | number | boolean | false
  /**
   * The radius of the ellipse on the x axis.
   * 
   * Value type: auto|<length>|<percentage> ; Default value: auto; Animatable: yes
   */
  'rx'?: string | number | boolean | false
  /**
   * The radius of the ellipse on the y axis.
   * 
   * Value type: auto|<length>|<percentage> ; Default value: auto; Animatable: yes
   */
  'ry'?: string | number | boolean | false
  /**
   * This attribute lets specify the total length for the path, in user units.
   * 
   * Value type: <number> ; Default value: none; Animatable: yes
   */
  'pathLength'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The <feBlend> SVG filter primitive composes two objects together ruled by a certain blending mode. This is similar to what is known from image editing software when blending two layers. The mode is defined by the mode attribute. */
export type ReactSkruvFeblendSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEBlendElement, {
  'in'?: string | number | boolean | false
  'in2'?: string | number | boolean | false
  'mode'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feColorMatrix> SVG filter element changes colors based on a transformation matrix. Every pixel's color value [R,G,B,A] is matrix multiplied by a 5 by 5 color matrix to create new color [R',G',B',A']. */
export type ReactSkruvFecolormatrixSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEColorMatrixElement, {
  'in'?: string | number | boolean | false
  'type'?: string | false
  'values'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feComponentTransfer> SVG filter primitive performs color-component-wise remapping of data for each pixel. It allows operations like brightness adjustment, contrast adjustment, color balance or thresholding. */
export type ReactSkruvFecomponenttransferSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEComponentTransferElement, {
  'in'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feComposite> SVG filter primitive performs the combination of two input images pixel-wise in image space using one of the Porter-Duff compositing operations: over, in, atop, out, xor, lighter, or arithmetic. */
export type ReactSkruvFecompositeSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFECompositeElement, {
  'in'?: string | number | boolean | false
  'in2'?: string | number | boolean | false
  'operator'?: string | number | boolean | false
  'k1'?: string | number | boolean | false
  'k2'?: string | number | boolean | false
  'k3'?: string | number | boolean | false
  'k4'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feConvolveMatrix> SVG filter primitive applies a matrix convolution filter effect. A convolution combines pixels in the input image with neighboring pixels to produce a resulting image. A wide variety of imaging operations can be achieved through convolutions, including blurring, edge detection, sharpening, embossing and beveling. */
export type ReactSkruvFeconvolvematrixSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEConvolveMatrixElement, {
  'in'?: string | number | boolean | false
  'order'?: string | number | boolean | false
  'kernelMatrix'?: string | number | boolean | false
  'divisor'?: string | number | boolean | false
  'bias'?: string | number | boolean | false
  'targetX'?: string | number | boolean | false
  'targetY'?: string | number | boolean | false
  'edgeMode'?: string | number | boolean | false
  'kernelUnitLength'?: string | number | boolean | false
  'preserveAlpha'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feDiffuseLighting> SVG filter primitive lights an image using the alpha channel as a bump map. The resulting image, which is an RGBA opaque image, depends on the light color, light position and surface geometry of the input bump map. */
export type ReactSkruvFediffuselightingSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEDiffuseLightingElement, {
  'in'?: string | number | boolean | false
  'surfaceScale'?: string | number | boolean | false
  'diffuseConstant'?: string | number | boolean | false
  'kernelUnitLength'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feDisplacementMap> SVG filter primitive uses the pixel values from the image from in2 to spatially displace the image from in. */
export type ReactSkruvFedisplacementmapSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEDisplacementMapElement, {
  'in'?: string | number | boolean | false
  'in2'?: string | number | boolean | false
  'scale'?: string | number | boolean | false
  'xChannelSelector'?: string | number | boolean | false
  'yChannelSelector'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feDistantLight> filter primitive defines a distant light source that can be used within a lighting filter primitive: <feDiffuseLighting> or <feSpecularLighting>. */
export type ReactSkruvFedistantlightSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEDistantLightElement, {
  'azimuth'?: string | number | boolean | false
  'elevation'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The SVG <feDropShadow> filter primitive creates a drop shadow of the input image. It can only be used inside a <filter> element. */
export type ReactSkruvFedropshadowSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEDropShadowElement, {
  /**
   * This attribute defines the x offset of the drop shadow.
   * 
   * Value type: <number>; Default value: 2; Animatable: yes
   */
  'dx'?: string | number | boolean | false
  /**
   * This attribute defines the y offset of the drop shadow.
   * 
   * Value type: <number>; Default value: 2; Animatable: yes
   */
  'dy'?: string | number | boolean | false
  /**
   * This attribute defines the standard deviation for the blur operation in the drop shadow.
   * 
   * Value type: <number>; Default value: 2; Animatable: yes
   */
  'stdDeviation'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feFlood> SVG filter primitive fills the filter subregion with the color and opacity defined by flood-color and flood-opacity. */
export type ReactSkruvFefloodSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEFloodElement, {
  'floodcolor'?: string | number | boolean | false
  'floodopacity'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feFuncA> SVG filter primitive defines the transfer function for the alpha component of the input graphic of its parent <feComponentTransfer> element. */
export type ReactSkruvFefuncaSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEFuncAElement, {
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feFuncB> SVG filter primitive defines the transfer function for the blue component of the input graphic of its parent <feComponentTransfer> element. */
export type ReactSkruvFefuncbSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEFuncBElement, {
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feFuncG> SVG filter primitive defines the transfer function for the green component of the input graphic of its parent <feComponentTransfer> element. */
export type ReactSkruvFefuncgSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEFuncGElement, {
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feFuncR> SVG filter primitive defines the transfer function for the red component of the input graphic of its parent <feComponentTransfer> element. */
export type ReactSkruvFefuncrSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEFuncRElement, {
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feGaussianBlur> SVG filter primitive blurs the input image by the amount specified in stdDeviation, which defines the bell-curve. */
export type ReactSkruvFegaussianblurSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEGaussianBlurElement, {
  'in'?: string | number | boolean | false
  'stdDeviation'?: string | number | boolean | false
  'edgeMode'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feImage> SVG filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.) */
export type ReactSkruvFeimageSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEImageElement, {
  'crossOrigin'?: string | false
  'preserveAspectRatio'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feMerge> SVG element allows filter effects to be applied concurrently instead of sequentially. This is achieved by other filters storing their output via the result attribute and then accessing it in a <feMergeNode> child. */
export type ReactSkruvFemergeSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEMergeElement, {
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The feMergeNode takes the result of another filter to be processed by its parent <feMerge>. */
export type ReactSkruvFemergenodeSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEMergeNodeElement, {
  'in'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feMorphology> SVG filter primitive is used to erode or dilate the input image. Its usefulness lies especially in fattening or thinning effects. */
export type ReactSkruvFemorphologySVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEMorphologyElement, {
  'in'?: string | number | boolean | false
  'operator'?: string | number | boolean | false
  'radius'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feOffset> SVG filter primitive allows to offset the input image. The input image as a whole is offset by the values specified in the dx and dy attributes. */
export type ReactSkruvFeoffsetSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEOffsetElement, {
  'in'?: string | number | boolean | false
  'dx'?: string | number | boolean | false
  'dy'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <fePointLight> filter primitive defines a light source which allows to create a point light effect. It that can be used within a lighting filter primitive: <feDiffuseLighting> or <feSpecularLighting>. */
export type ReactSkruvFepointlightSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFEPointLightElement, {
  'x'?: string | number | boolean | false
  'y'?: string | number | boolean | false
  'z'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feSpecularLighting> SVG filter primitive lights a source graphic using the alpha channel as a bump map. The resulting image is an RGBA image based on the light color. The lighting calculation follows the standard specular component of the Phong lighting model. The resulting image depends on the light color, light position and surface geometry of the input bump map. The result of the lighting calculation is added. The filter primitive assumes that the viewer is at infinity in the z direction. */
export type ReactSkruvFespecularlightingSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFESpecularLightingElement, {
  'in'?: string | number | boolean | false
  'surfaceScale'?: string | number | boolean | false
  'specularConstant'?: string | number | boolean | false
  'specularExponent'?: string | number | boolean | false
  'kernelUnitLength'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feSpotLight> SVG filter primitive defines a light source that can be used to create a spotlight effect.
 * 
 * It is used within a lighting filter primitive: <feDiffuseLighting> or <feSpecularLighting>. */
export type ReactSkruvFespotlightSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFESpotLightElement, {
  'x'?: string | number | boolean | false
  'y'?: string | number | boolean | false
  'z'?: string | number | boolean | false
  'pointsAtX'?: string | number | boolean | false
  'pointsAtY'?: string | number | boolean | false
  'pointsAtZ'?: string | number | boolean | false
  'specularExponent'?: string | number | boolean | false
  'limitingConeAngle'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feTile> SVG filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image. The effect is similar to the one of a <pattern>. */
export type ReactSkruvFetileSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFETileElement, {
  'in'?: string | number | boolean | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <feTurbulence> SVG filter primitive creates an image using the Perlin turbulence function. It allows the synthesis of artificial textures like clouds or marble. The resulting image will fill the entire filter primitive subregion. */
export type ReactSkruvFeturbulenceSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFETurbulenceElement, {
  'baseFrequency'?: string | number | boolean | false
  'numOctaves'?: string | number | boolean | false
  'seed'?: string | number | boolean | false
  'stitchTiles'?: string | number | boolean | false
  'type'?: string | false
} & ReactSVGPresentationAttributes & ReactSVGFilterAttributes>>

/** The <filter> SVG element defines a custom filter effect by grouping atomic filter primitives. It is never rendered itself, but must be used by the filter attribute on SVG elements, or the filter CSS property for SVG/HTML elements. */
export type ReactSkruvFilterSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGFilterElement, {
  'x'?: string | number | boolean | false
  'y'?: string | number | boolean | false
  'width'?: number | string | false
  'height'?: string | false
  'filterUnits'?: string | number | boolean | false
  'primitiveUnits'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The <foreignObject> SVG element includes elements from a different XML namespace. In the context of a browser, it is most likely (X)HTML. */
export type ReactSkruvForeignobjectSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGForeignObjectElement, {
  /**
   * The height of the foreignObject.
   * 
   * Value type: <length>|<percentage> ; Default value: auto; Animatable: yes
   */
  'height'?: string | false
  /**
   * The width of the foreignObject.
   * 
   * Value type: <length>|<percentage> ; Default value: auto; Animatable: yes
   */
  'width'?: number | string | false
  /**
   * The x coordinate of the foreignObject.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'x'?: string | number | boolean | false
  /**
   * The y coordinate of the foreignObject.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'y'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The <g> SVG element is a container used to group other SVG elements. */
export type ReactSkruvGSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGGElement, {
} & ReactSVGPresentationAttributes>>

/** The <image> SVG element includes images inside SVG documents. It can display raster image files or other SVG files. */
export type ReactSkruvImageSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGImageElement, {
} & ReactSVGPresentationAttributes>>

/** The <line> element is an SVG basic shape used to create a line connecting two points. */
export type ReactSkruvLineSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGLineElement, {
  /**
   * Defines the x-axis coordinate of the line starting point.
   * 
   * Value type: <length>|<percentage>|<number> ; Default value: 0; Animatable: yes
   */
  'x1'?: string | number | boolean | false
  /**
   * Defines the x-axis coordinate of the line ending point.
   * 
   * Value type: <length>|<percentage>|<number> ; Default value: 0; Animatable: yes
   */
  'x2'?: string | number | boolean | false
  /**
   * Defines the y-axis coordinate of the line starting point.
   * 
   * Value type: <length>|<percentage>|<number> ; Default value: 0; Animatable: yes
   */
  'y1'?: string | number | boolean | false
  /**
   * Defines the y-axis coordinate of the line ending point.
   * 
   * Value type: <length>|<percentage>|<number> ; Default value: 0; Animatable: yes
   */
  'y2'?: string | number | boolean | false
  /**
   * Defines the total path length in user units.
   * 
   * Value type: <number> ; Default value: none; Animatable: yes
   */
  'pathLength'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The <linearGradient> element lets authors define linear gradients to apply to other SVG elements. */
export type ReactSkruvLineargradientSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGLinearGradientElement, {
  /**
   * This attribute defines the coordinate system for attributes x1, x2, y1, y2
   * 
   * Value type: userSpaceOnUse|objectBoundingBox ; Default value: objectBoundingBox; Animatable: yes
   */
  'gradientUnits'?: string | number | boolean | false
  /**
   * This attribute provides additional transformation to the gradient coordinate system.
   * 
   * Value type: <transform-list> ; Default value: identity transform; Animatable: yes
   */
  'gradientTransform'?: string | number | boolean | false
  /**
   * This attribute defines a reference to another <linearGradient> element that will be used as a template.
   * 
   * Value type: <URL> ; Default value: none; Animatable: yes
   */
  'href'?: string | false
  /**
   * This attribute indicates how the gradient behaves if it starts or ends inside the bounds of the shape containing the gradient.
   * 
   * Value type: pad|reflect|repeat ; Default value: pad; Animatable: yes
   */
  'spreadMethod'?: string | number | boolean | false
  /**
   * This attribute defines the x coordinate of the starting point of the vector gradient along which the linear gradient is drawn.
   * 
   * Value type: <length-percentage> | <number>; Default value: 0%; Animatable: yes
   */
  'x1'?: string | number | boolean | false
  /**
   * This attribute defines the x coordinate of the ending point of the vector gradient along which the linear gradient is drawn.
   * 
   * Value type: <length-percentage> | <number>; Default value: 100%; Animatable: yes
   */
  'x2'?: string | number | boolean | false
  /**
   * This attribute defines the y coordinate of the starting point of the vector gradient along which the linear gradient is drawn.
   * 
   * Value type: <length-percentage> | <number>; Default value: 0%; Animatable: yes
   */
  'y1'?: string | number | boolean | false
  /**
   * This attribute defines the y coordinate of the ending point of the vector gradient along which the linear gradient is drawn.
   * 
   * Value type: <length-percentage> | <number>; Default value: 0%; Animatable: yes
   */
  'y2'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The <marker> element defines a graphic used for drawing arrowheads or polymarkers on a given <path>, <line>, <polyline> or <polygon> element. */
export type ReactSkruvMarkerSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGMarkerElement, {
  /**
   * This attribute defines the height of the marker viewport.
   * 
   * Value type: <length> ; Default value: 3; Animatable: yes
   */
  'markerHeight'?: string | number | boolean | false
  /**
   * This attribute defines the coordinate system for the attributes markerWidth, markerHeight and the contents of the <marker>.
   * 
   * Value type: userSpaceOnUse|strokeWidth ; Default value: strokeWidth; Animatable: yes
   */
  'markerUnits'?: string | number | boolean | false
  /**
   * This attribute defines the width of the marker viewport.
   * 
   * Value type: <length> ; Default value: 3; Animatable: yes
   */
  'markerWidth'?: string | number | boolean | false
  /**
   * This attribute defines the orientation of the marker relative to the shape it is attached to.
   * 
   * Value type: auto|auto-start-reverse|<angle> ; Default value: 0; Animatable: yes
   */
  'orient'?: string | number | boolean | false
  /**
   * This attribute defines how the svg fragment must be deformed if it is embedded in a container with a different aspect ratio.
   * 
   * Value type: (none| xMinYMin| xMidYMin| xMaxYMin| xMinYMid| xMidYMid| xMaxYMid| xMinYMax| xMidYMax| xMaxYMax) (meet|slice)? ; Default value: xMidYMid meet; Animatable: yes
   */
  'preserveAspectRatio'?: string | number | boolean | false
  /**
   * This attribute defines the x coordinate for the reference point of the marker.
   * 
   * Value type: left|center|right|<coordinate> ; Default value: 0; Animatable: yes
   */
  'refX'?: string | number | boolean | false
  /**
   * This attribute defines the y coordinate for the reference point of the marker.
   * 
   * Value type: top|center|bottom|<coordinate> ; Default value: 0; Animatable: yes
   */
  'refY'?: string | number | boolean | false
  /**
   * This attribute defines the bound of the SVG viewport for the current SVG fragment.
   * 
   * Value type: <list-of-numbers> ; Default value: none; Animatable: yes
   */
  'viewBox'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The <mask> element defines an alpha mask for compositing the current object into the background. A mask is used/referenced using the mask property. */
export type ReactSkruvMaskSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGMaskElement, {
  /**
   * This attribute defines the height of the masking area.
   * 
   * Value type: <length> ; Default value: 120%; Animatable: yes
   */
  'height'?: string | false
  /**
   * This attribute defines the coordinate system for the contents of the <mask>.
   * 
   * Value type: userSpaceOnUse|objectBoundingBox ; Default value: userSpaceOnUse; Animatable: yes
   */
  'maskContentUnits'?: string | number | boolean | false
  /**
   * This attribute defines the coordinate system for attributes x, y, width and height on the <mask>.
   * 
   * Value type: userSpaceOnUse|objectBoundingBox ; Default value: objectBoundingBox; Animatable: yes
   */
  'maskUnits'?: string | number | boolean | false
  /**
   * This attribute defines the x-axis coordinate of the top-left corner of the masking area.
   * 
   * Value type: <coordinate> ; Default value: -10%; Animatable: yes
   */
  'x'?: string | number | boolean | false
  /**
   * This attribute defines the y-axis coordinate of the top-left corner of the masking area.
   * 
   * Value type: <coordinate> ; Default value: -10%; Animatable: yes
   */
  'y'?: string | number | boolean | false
  /**
   * This attribute defines the width of the masking area.
   * 
   * Value type: <length> ; Default value: 120%; Animatable: yes
   */
  'width'?: number | string | false
} & ReactSVGPresentationAttributes>>

/** The <metadata> SVG element adds metadata to SVG content. Metadata is structured information about data. The contents of <metadata> should be elements from other XML namespaces such as RDF, FOAF, etc. */
export type ReactSkruvMetadataSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGMetadataElement, {}>>

/** The <mpath> sub-element for the <animateMotion> element provides the ability to reference an external <path> element as the definition of a motion path. */
export type ReactSkruvMpathSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGMPathElement, {}>>

/** The <path> SVG element is the generic element to define a shape. All the basic shapes can be created with a path element. */
export type ReactSkruvPathSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGPathElement, {
  /**
   * This attribute defines the shape of the path.
   * 
   * Value type: <string> ; Default value: ''; Animatable: yes
   */
  'd'?: string | number | boolean | false
  /**
   * This attribute lets authors specify the total length for the path, in user units.
   * 
   * Value type: <number> ; Default value: none; Animatable: yes
   */
  'pathLength'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The <pattern> element defines a graphics object which can be redrawn at repeated x- and y-coordinate intervals ("tiled") to cover an area. */
export type ReactSkruvPatternSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGPatternElement, {
  /**
   * This attribute determines the height of the pattern tile.
   * 
   * Value type: <length>|<percentage>; Default value: 0; Animatable: yes
   */
  'height'?: string | false
  /**
   * This attribute reference a template pattern that provides default values for the <pattern> attributes.
   * 
   * Value type: <URL>; Default value: none; Animatable: yes
   */
  'href'?: string | false
  /**
   * This attribute defines the coordinate system for the contents of the <pattern>.
   * 
   * Value type: userSpaceOnUse|objectBoundingBox; Default value: userSpaceOnUse; Animatable: yes
   * 
   * Note: This attribute has no effect if a viewBox attribute is specified on the <pattern> element.
   */
  'patternContentUnits'?: string | number | boolean | false
  /**
   * This attribute contains the definition of an optional additional transformation from the pattern coordinate system onto the target coordinate system.
   * 
   * Value type: <transform-list>; Default value: none; Animatable: yes
   */
  'patternTransform'?: string | number | boolean | false
  /**
   * This attribute defines the coordinate system for attributes x, y, width, and height.
   * 
   * Value type: userSpaceOnUse|objectBoundingBox; Default value: objectBoundingBox; Animatable: yes
   */
  'patternUnits'?: string | number | boolean | false
  /**
   * This attribute defines how the SVG fragment must be deformed if it is embedded in a container with a different aspect ratio.
   * 
   * Value type: (none| xMinYMin| xMidYMin| xMaxYMin| xMinYMid| xMidYMid| xMaxYMid| xMinYMax| xMidYMax| xMaxYMax) (meet|slice)? ; Default value: xMidYMid meet; Animatable: yes
   */
  'preserveAspectRatio'?: string | number | boolean | false
  /**
   * This attribute defines the bound of the SVG viewport for the pattern fragment.
   * 
   * Value type: <list-of-numbers> ; Default value: none; Animatable: yes
   */
  'viewBox'?: string | number | boolean | false
  /**
   * This attribute determines the width of the pattern tile.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'width'?: number | string | false
  /**
   * This attribute determines the x coordinate shift of the pattern tile.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'x'?: string | number | boolean | false
  /**
   * This attribute determines the y coordinate shift of the pattern tile.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'y'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The <polygon> element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point. */
export type ReactSkruvPolygonSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGPolygonElement, {
  /**
   * This attribute defines the list of points (pairs of x,y absolute coordinates) required to draw the polygon.
   * 
   * Value type: <number>+ ; Default value: ""; Animatable: yes
   */
  'points'?: string | number | boolean | false
  /**
   * This attribute lets specify the total length for the path, in user units.
   * 
   * Value type: <number> ; Default value: none; Animatable: yes
   */
  'pathLength'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The <polyline> SVG element is an SVG basic shape that creates straight lines connecting several points. Typically a polyline is used to create open shapes as the last point doesn't have to be connected to the first point. For closed shapes see the <polygon> element. */
export type ReactSkruvPolylineSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGPolylineElement, {
  /**
   * This attribute defines the list of points (pairs of x,y absolute coordinates) required to draw the polyline
   * 
   * Value type: <number>+ ; Default value: ""; Animatable: yes
   */
  'points'?: string | number | boolean | false
  /**
   * This attribute lets specify the total length for the path, in user units.
   * 
   * Value type: <number> ; Default value: none; Animatable: yes
   */
  'pathLength'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The <radialGradient> element lets authors define radial gradients that can be applied to fill or stroke of graphical elements. */
export type ReactSkruvRadialgradientSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGRadialGradientElement, {
  /**
   * This attribute defines the x coordinate of the end circle of the radial gradient.
   * 
   * Value type: <length> ; Default value: 50%; Animatable: yes
   */
  'cx'?: string | number | boolean | false
  /**
   * This attribute defines the y coordinate of the end circle of the radial gradient.
   * 
   * Value type: <length> ; Default value: 50%; Animatable: yes
   */
  'cy'?: string | number | boolean | false
  /**
   * This attribute defines the radius of the start circle of the radial gradient. The gradient will be drawn such that the 0% <stop> is mapped to the perimeter of the start circle.
   * 
   * Value type: <length> ; Default value: 0%; Animatable: yes
   */
  'fr'?: string | number | boolean | false
  /**
   * This attribute defines the x coordinate of the start circle of the radial gradient.
   * 
   * Value type: <length> ; Default value: Same as cx; Animatable: yes
   */
  'fx'?: string | number | boolean | false
  /**
   * This attribute defines the y coordinate of the start circle of the radial gradient.
   * 
   * Value type: <length> ; Default value: Same as cy; Animatable: yes
   */
  'fy'?: string | number | boolean | false
  /**
   * This attribute defines the coordinate system for attributes cx, cy, r, fx, fy, fr
   * 
   * Value type: userSpaceOnUse|objectBoundingBox ; Default value: objectBoundingBox; Animatable: yes
   */
  'gradientUnits'?: string | number | boolean | false
  /**
   * This attribute provides additional transformation to the gradient coordinate system.
   * 
   * Value type: <transform-list> ; Default value: identity transform; Animatable: yes
   */
  'gradientTransform'?: string | number | boolean | false
  /**
   * This attribute defines a reference to another <radialGradient> element that will be used as a template.
   * 
   * Value type: <URL> ; Default value: none; Animatable: yes
   */
  'href'?: string | false
  /**
   * This attribute defines the radius of the end circle of the radial gradient. The gradient will be drawn such that the 100% <stop> is mapped to the perimeter of the end circle.
   * 
   * Value type: <length> ; Default value: 50%; Animatable: yes
   */
  'r'?: string | number | boolean | false
  /**
   * This attribute indicates how the gradient behaves if it starts or ends inside the bounds of the shape containing the gradient.
   * 
   * Value type: pad|reflect|repeat ; Default value: pad; Animatable: yes
   */
  'spreadMethod'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The <rect> element is a basic SVG shape that draws rectangles, defined by their position, width, and height. The rectangles may have their corners rounded. */
export type ReactSkruvRectSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGRectElement, {
  /**
   * The x coordinate of the rect.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'x'?: string | number | boolean | false
  /**
   * The y coordinate of the rect.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'y'?: string | number | boolean | false
  /**
   * The width of the rect.
   * 
   * Value type: auto|<length>|<percentage> ; Default value: auto; Animatable: yes
   */
  'width'?: number | string | false
  /**
   * The height of the rect.
   * 
   * Value type: auto|<length>|<percentage> ; Default value: auto; Animatable: yes
   */
  'height'?: string | false
  /**
   * The horizontal corner radius of the rect. Defaults to ry if it is specified.
   * 
   * Value type: auto|<length>|<percentage> ; Default value: auto; Animatable: yes
   */
  'rx'?: string | number | boolean | false
  /**
   * The vertical corner radius of the rect. Defaults to rx if it is specified.
   * 
   * Value type: auto|<length>|<percentage> ; Default value: auto; Animatable: yes
   */
  'ry'?: string | number | boolean | false
  /**
   * The total length of the rectangle's perimeter, in user units.
   * 
   * Value type: <number> ; Default value: none; Animatable: yes
   */
  'pathLength'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The SVG script element allows to add scripts to an SVG document. */
export type ReactSkruvScriptSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGScriptElement, {
  /**
   * This attribute defines CORS settings as define for the HTML <script> element.
   * 
   * Value type: <string>; Default value: ?; Animatable: yes
   */
  'crossOrigin'?: string | false
  /**
   * The URL to the script to load.
   * 
   * Value type: <URL> ; Default value: none; Animatable: no
   */
  'href'?: string | false
  /**
   * This attribute defines type of the script language to use.
   * 
   * Value type: <string>; Default value: application/ecmascript; Animatable: no
   */
  'type'?: string | false
}>>

/** The SVG <set> element provides a simple means of just setting the value of an attribute for a specified duration. */
export type ReactSkruvSetSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGSetElement, {
  /**
   * This attribute defines the value to be applied to the target attribute for the duration of the animation. The value must match the requirements of the target attribute.
   * 
   * Value type: <anything>; Default value: none; Animatable: no
   */
  'to'?: string | number | boolean | false
} & ReactSVGAnimationAttributes>>

/** The SVG <stop> element defines a color and its position to use on a gradient. This element is always a child of a <linearGradient> or <radialGradient> element. */
export type ReactSkruvStopSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGStopElement, {
  /**
   * This attribute defines where the gradient stop is placed along the gradient vector.
   * 
   * Value type: <number>|<percentage>; Default value: 0; Animatable: yes
   */
  'offset'?: string | number | boolean | false
  /**
   * This attribute defines the color of the gradient stop. It can be used as a CSS property.
   * 
   * Value type: currentcolor|<color>|<icccolor>; Default value: black; Animatable: yes
   */
  'stopcolor'?: string | number | boolean | false
  /**
   * This attribute defines the opacity of the gradient stop. It can be used as a CSS property.
   * 
   * Value type: <opacity>; Default value: 1; Animatable: yes
   */
  'stopopacity'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The SVG <style> element allows style sheets to be embedded directly within SVG content. */
export type ReactSkruvStyleSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGStyleElement, {
  /**
   * This attribute defines type of the style sheet language to use as a media type string.
   * 
   * Value type: <string>; Default value: text/css; Animatable: no
   */
  'type'?: string | false
  /**
   * This attribute defines to which media the style applies.
   * 
   * Value type: <string>; Default value: all; Animatable: no
   */
  'media'?: string | false
  /**
   * This attribute the title of the style sheet which can be used to switch between alternate style sheets.
   * 
   * Value type: <string>; Default value: none; Animatable: no
   */
  'title'?: string | false
}>>

/** The svg element is a container that defines a new coordinate system and viewport. It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document. */
export type ReactSkruvSvgSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGSVGElement, {
  /**
   * The minimum SVG language profile that the document requires.
   * 
   * Value type: <string> ; Default value: none; Animatable: no
   */
  'baseProfile'?: string | number | boolean | false
  /**
   * The default scripting language used by the SVG fragment.
   * 
   * Value type: <string> ; Default value: application/ecmascript; Animatable: no
   */
  'contentScriptType'?: string | number | boolean | false
  /**
   * The default style sheet language used by the SVG fragment.
   * 
   * Value type: <string> ; Default value: text/css; Animatable: no
   */
  'contentStyleType'?: string | number | boolean | false
  /**
   * The displayed height of the rectangular viewport. (Not the height of its coordinate system.)
   * 
   * Value type: <length>|<percentage> ; Default value: auto; Animatable: yes
   */
  'height'?: string | false
  /**
   * How the svg fragment must be deformed if it is displayed with a different aspect ratio.
   * 
   * Value type: (none| xMinYMin| xMidYMin| xMaxYMin| xMinYMid| xMidYMid| xMaxYMid| xMinYMax| xMidYMax| xMaxYMax) (meet|slice)? ; Default value: xMidYMid meet; Animatable: yes
   */
  'preserveAspectRatio'?: string | number | boolean | false
  /**
   * Which version of SVG is used for the inner content of the element.
   * 
   * Value type: <number> ; Default value: none; Animatable: no
   */
  'version'?: string | false
  /**
   * The SVG viewport coordinates for the current SVG fragment.
   * 
   * Value type: <list-of-numbers> ; Default value: none; Animatable: yes
   */
  'viewBox'?: string | number | boolean | false
  /**
   * The displayed width of the rectangular viewport. (Not the width of its coordinate system.)
   * 
   * Value type: <length>|<percentage> ; Default value: auto; Animatable: yes
   */
  'width'?: number | string | false
  /**
   * The displayed x coordinate of the svg container. No effect on outermost svg elements.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'x'?: string | number | boolean | false
  /**
   * The displayed y coordinate of the svg container. No effect on outermost svg elements.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'y'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The <switch> SVG element evaluates any requiredFeatures, requiredExtensions and systemLanguage attributes on its direct child elements in order, and then renders the first child where these attributes evaluate to true. */
export type ReactSkruvSwitchSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGSwitchElement, {
} & ReactSVGPresentationAttributes>>

/** The <symbol> element is used to define graphical template objects which can be instantiated by a <use> element. */
export type ReactSkruvSymbolSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGSymbolElement, {
  /**
   * This attribute determines the height of the symbol.
   * 
   * Value type: <length>|<percentage> ; Default value: auto; Animatable: yes
   */
  'height'?: string | false
  /**
   * This attribute defines how the svg fragment must be deformed if it is embedded in a container with a different aspect ratio.
   * 
   * Value type: (none| xMinYMin| xMidYMin| xMaxYMin| xMinYMid| xMidYMid| xMaxYMid| xMinYMax| xMidYMax| xMaxYMax) (meet|slice)? ; Default value: xMidYMid meet; Animatable: yes
   */
  'preserveAspectRatio'?: string | number | boolean | false
  /**
   * This attribute determines the x coordinate of the reference point of the symbol.
   * 
   * Value type: <length>|<percentage>|left|center|right ; Default value: None; Animatable: yes
   */
  'refX'?: string | number | boolean | false
  /**
   * This attribute determines the y coordinate of the reference point of the symbol.
   * 
   * Value type: <length>|<percentage>|top|center|bottom ; Default value: None; Animatable: yes
   */
  'refY'?: string | number | boolean | false
  /**
   * This attribute defines the bound of the SVG viewport for the current symbol.
   * 
   * Value type: <list-of-numbers> ; Default value: none; Animatable: yes
   */
  'viewBox'?: string | number | boolean | false
  /**
   * This attribute determines the width of the symbol.
   * 
   * Value type: <length>|<percentage> ; Default value: auto; Animatable: yes
   */
  'width'?: number | string | false
  /**
   * This attribute determines the x coordinate of the symbol.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'x'?: string | number | boolean | false
  /**
   * This attribute determines the y coordinate of the symbol.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'y'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The SVG <text> element draws a graphics element consisting of text. It's possible to apply a gradient, pattern, clipping path, mask, or filter to <text>, like any other SVG graphics element. */
export type ReactSkruvTextSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGTextElement, {
  /**
   * The x coordinate of the starting point of the text baseline.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'x'?: string | number | boolean | false
  /**
   * The y coordinate of the starting point of the text baseline.
   * 
   * Value type: <length>|<percentage> ; Default value: 0; Animatable: yes
   */
  'y'?: string | number | boolean | false
  /**
   * Shifts the text position horizontally from a previous text element.
   * 
   * Value type: <length>|<percentage> ; Default value: none; Animatable: yes
   */
  'dx'?: string | number | boolean | false
  /**
   * Shifts the text position vertically from a previous text element.
   * 
   * Value type: <length>|<percentage> ; Default value: none; Animatable: yes
   */
  'dy'?: string | number | boolean | false
  /**
   * Rotates orientation of each individual glyph. Can rotate glyphs individually.
   * 
   * Value type: <list-of-number> ; Default value: none; Animatable: yes
   */
  'rotate'?: string | number | boolean | false
  /**
   * How the text is stretched or compressed to fit the width defined by the textLength attribute.
   * 
   * Value type: spacing|spacingAndGlyphs; Default value: spacing; Animatable: yes
   */
  'lengthAdjust'?: string | number | boolean | false
  /**
   * A width that the text should be scaled to fit.
   * 
   * Value type: <length>|<percentage> ; Default value: none; Animatable: yes
   */
  'textLength'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** To render text along the shape of a <path>, enclose the text in a <textPath> element that has an href attribute with a reference to the <path> element. */
export type ReactSkruvTextpathSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGTextPathElement, {
  /**
   * The URL to the path or basic shape on which to render the text. If the path attribute is set, href has no effect.
   * 
   * Value type: <URL> ; Default value: none; Animatable: yes
   */
  'href'?: string | false
  /**
   * Where length adjustment should be applied to the text: the space between glyphs, or both the space and the glyphs themselves.
   * 
   * Value type: spacing|spacingAndGlyphs; Default value: spacing; Animatable: yes
   */
  'lengthAdjust'?: string | number | boolean | false
  /**
   * Which method to render individual glyphs along the path.
   * 
   * Value type: align|stretch ; Default value: align; Animatable: yes
   */
  'method'?: string | false
  /**
   * The path on which the text should be rendered.
   * 
   * Value type: <path_data> ; Default value: none; Animatable: yes
   */
  'path'?: string | number | boolean | false
  /**
   * Which side of the path the text should be rendered.
   * 
   * Value type: left|right ; Default value: left; Animatable: yes
   */
  'side'?: string | number | boolean | false
  /**
   * How space between glyphs should be handled.
   * 
   * Value type: auto|exact ; Default value: exact; Animatable: yes
   */
  'spacing'?: string | number | boolean | false
  /**
   * How far the beginning of the text should be offset from the beginning of the path.
   * 
   * Value type: <length>|<percentage>|<number> ; Default value: 0; Animatable: yes
   */
  'startOffset'?: string | number | boolean | false
  /**
   * The width of the space into which the text will render.
   * 
   * Value type: <length>|<percentage>|<number> ; Default value: auto; Animatable: yes
   */
  'textLength'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The <title> element provides an accessible, short-text description of any SVG container element or graphics element. */
export type ReactSkruvTitleSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGTitleElement, {}>>

/** The SVG <tspan> element defines a subtext within a <text> element or another <tspan> element. It allows for adjustment of the style and/or position of that subtext as needed. */
export type ReactSkruvTspanSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGTSpanElement, {
  /**
   * The x coordinate of the starting point of the text baseline.
   * 
   * Value type: <length>|<percentage> ; Default value: none; Animatable: yes
   */
  'x'?: string | number | boolean | false
  /**
   * The y coordinate of the starting point of the text baseline.
   * 
   * Value type: <length>|<percentage> ; Default value: none; Animatable: yes
   */
  'y'?: string | number | boolean | false
  /**
   * Shifts the text position horizontally from a previous text element.
   * 
   * Value type: <length>|<percentage> ; Default value: none; Animatable: yes
   */
  'dx'?: string | number | boolean | false
  /**
   * Shifts the text position vertically from a previous text element.
   * 
   * Value type: <length>|<percentage> ; Default value: none; Animatable: yes
   */
  'dy'?: string | number | boolean | false
  /**
   * Rotates orientation of each individual glyph. Can rotate glyphs individually.
   * 
   * Value type: <list-of-number> ; Default value: none; Animatable: yes
   */
  'rotate'?: string | number | boolean | false
  /**
   * How the text is stretched or compressed to fit the width defined by the textLength attribute.
   * 
   * Value type: spacing|spacingAndGlyphs; Default value: spacing; Animatable: yes
   */
  'lengthAdjust'?: string | number | boolean | false
  /**
   * A width that the text should be scaled to fit.
   * 
   * Value type: <length>|<percentage> ; Default value: none; Animatable: yes
   */
  'textLength'?: string | number | boolean | false
} & ReactSVGPresentationAttributes>>

/** The <use> element takes nodes from within the SVG document, and duplicates them somewhere else.
 * 
 * The effect is the same as if the nodes were deeply cloned into a non-exposed DOM, then pasted where the use element is, much like cloned template elements. */
export type ReactSkruvUseSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGUseElement, {
  /**
   * The URL to an element/fragment that needs to be duplicated.Value type: <URL> ; Default value: none; Animatable: yes
   */
  'href'?: string | false
  /**
   * The x coordinate of an additional final offset transformation applied to the <use> element.Value type: <coordinate> ; Default value: 0; Animatable: yes
   */
  'x'?: string | number | boolean | false
  /**
   * The y coordinate of an additional final offset transformation applied to the <use> element.Value type: <coordinate> ; Default value: 0; Animatable: yes
   */
  'y'?: string | number | boolean | false
  /**
   * The width of the use element.Value type: <length> ; Default value: 0; Animatable: yes
   */
  'width'?: number | string | false
  /**
   * The height of the use element.Value type: <length> ; Default value: 0; Animatable: yes
   */
  'height'?: string | false
} & ReactSVGPresentationAttributes>>

/** A view is a defined way to view the image, like a zoom level or a detail view. */
export type ReactSkruvViewSVGAttributes = util.AsyncContent<ReactSVGAttributes<SVGViewElement, {
  'viewBox'?: string | number | boolean | false
  'preserveAspectRatio'?: string | number | boolean | false
}>>

/** The <math> MathML element is the top-level MathML element, used to write a single mathematical formula. It can be placed in HTML content where flow content is permitted. */
export type ReactSkruvMathMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * This enumerated attribute specifies how the enclosed MathML markup should be rendered. It can have one of the following values:
   * 
   * block, which means that this element will be displayed in its own block outside the current span of text and with math-style set to normal.
   * 
   * inline, which means that this element will be displayed inside the current span of text and with math-style set to compact.
   * 
   * If not present, its default value is inline.
   */
  'display'?: string | number | boolean | false
}>>

/** The <semantics> MathML element associates annotations with a MathML expression, for example its text source as a lightweight markup language or mathematical meaning expressed in a special XML dialect. Typically, its structure is: */
export type ReactSkruvSemanticsMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * The encoding of the semantic information in the annotation (e.g. "MathML-Content", "MathML-Presentation", "application/openmath+xml", "image/png")
   */
  'encoding'?: string | false
  /**
   * The location of an external source for semantic information.
   */
  'src'?: string | false
}>>

/** Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future. */
export type ReactSkruvMencloseMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * A list of notations, separated by white space, to apply to the child elements. The symbols are each drawn as if the others are not present, and therefore may overlap.
   */
  'notation'?: string | number | boolean | false
}>>

/** The <merror> MathML element is used to display contents as error messages. The intent of this element is to provide a standard way for programs that generate MathML from other input to report syntax errors. */
export type ReactSkruvMerrorMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {}>>

/** The <mfrac> MathML element is used to display fractions. It can also be used
 * 
 * to mark up fraction-like objects such as
 * 
 * binomial coefficients
 * 
 * and Legendre symbols. */
export type ReactSkruvMfracMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * The alignment of the denominator under the fraction. Possible values are: left, center (default), and right.
   */
  'denomalign'?: string | number | boolean | false
  /**
   * A <length-percentage> indicating the thickness of the horizontal fraction line.
   */
  'linethickness'?: string | number | boolean | false
  /**
   * The alignment of the numerator over the fraction. Possible values are: left, center (default), and right.
   */
  'numalign'?: string | number | boolean | false
}>>

/** The <mi> MathML element indicates that the content should be rendered as an identifier such as function names, variables or symbolic constants. You can also have arbitrary text in it to mark up terms. */
export type ReactSkruvMiMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {}>>

/** The <mmultiscripts> MathML element is used to attach an arbitrary number of subscripts and superscripts to an expression at once, generalizing the <msubsup> element. Scripts can be either prescripts (placed before the expression) or postscripts (placed after it). */
export type ReactSkruvMmultiscriptsMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * A <length-percentage> indicating the minimum amount to shift the baseline of the subscript down.
   */
  'subscriptshift'?: string | number | boolean | false
  /**
   * A <length-percentage> indicating the minimum amount to shift the baseline of the superscript up.
   */
  'superscriptshift'?: string | number | boolean | false
}>>

/** The <mn> MathML element represents a numeric literal which is normally a sequence of digits with a possible separator (a dot or a comma). However, it is also allowed to have arbitrary text in it which is actually a numeric quantity, for example "eleven". */
export type ReactSkruvMnMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {}>>

/** The <mo> MathML element represents an operator in a broad sense. Besides operators in strict mathematical meaning, this element also includes "operators" like parentheses, separators like comma and semicolon, or "absolute value" bars. */
export type ReactSkruvMoMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * A <boolean> indicating whether the operator should be treated as an accent when used as an under- or overscript (i.e. drawn bigger and closer to the base expression).
   */
  'accent'?: string | number | boolean | false
  /**
   * A <boolean> indicating whether the operator is a fence (such as parentheses). There is no visual effect for this attribute.
   */
  'fence'?: string | number | boolean | false
  /**
   * A <boolean> indicating whether the operator should be drawn bigger when math-style is set to normal.
   */
  'largeop'?: string | number | boolean | false
  /**
   * A <length-percentage> indicating the amount of space before the operator.
   */
  'lspace'?: string | number | boolean | false
  /**
   * A <length-percentage> indicating the maximum size of the operator when it is stretchy.
   */
  'maxsize'?: string | number | boolean | false
  /**
   * A <length-percentage> indicating the minimum size of the operator when it is stretchy.
   */
  'minsize'?: string | number | boolean | false
  /**
   * A <boolean> indicating whether attached under- and overscripts move to sub- and superscript positions when math-style is set to compact.
   */
  'movablelimits'?: string | number | boolean | false
  /**
   * A <length-percentage> indicating the amount of space after the operator.
   */
  'rspace'?: string | number | boolean | false
  /**
   * A <boolean> indicating whether the operator is a separator (such as commas). There is no visual effect for this attribute.
   */
  'separator'?: string | number | boolean | false
  /**
   * A <boolean> indicating whether the operator stretches to the size of the adjacent element.
   */
  'stretchy'?: string | number | boolean | false
  /**
   * A <boolean> indicating whether a stretchy operator should be vertically symmetric around the imaginary math axis (centered fraction line).
   */
  'symmetric'?: string | number | boolean | false
}>>

/** The <mover> MathML element is used to attach an accent or a limit over an expression. Use the following syntax: <mover> base overscript </mover> */
export type ReactSkruvMoverMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * A <boolean> indicating whether the over script should be treated as an accent (i.e. drawn bigger and closer to the base expression).
   */
  'accent'?: string | number | boolean | false
}>>

/** The <mpadded> MathML element is used to add extra padding and to set the general adjustment of position and size of enclosed contents. */
export type ReactSkruvMpaddedMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * A <length-percentage> indicating the desired depth (below the baseline) of the <mpadded> element.
   */
  'depth'?: string | number | boolean | false
  /**
   * A <length-percentage> indicating the desired height (above the baseline) of the <mpadded> element.
   */
  'height'?: string | false
  /**
   * A <length-percentage> indicating the horizontal location of the positioning point of the child content with respect to the positioning point of the <mpadded> element.
   */
  'lspace'?: string | number | boolean | false
  /**
   * A <length-percentage> indicating the vertical location of the positioning point of the child content with respect to the positioning point of the <mpadded> element.
   */
  'voffset'?: string | number | boolean | false
  /**
   * A <length-percentage> indicating the desired depth (below the baseline) of the <mpadded> element.
   */
  'width'?: number | string | false
}>>

/** The <mphantom> MathML element is rendered invisibly, but dimensions (such as height, width, and baseline position) are still kept. */
export type ReactSkruvMphantomMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {}>>

/** The <mroot> MathML element is used to display roots with an explicit index. Two arguments are accepted, which leads to the syntax: <mroot> base index </mroot>. */
export type ReactSkruvMrootMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {}>>

/** The <mrow> MathML element is used to group sub-expressions, which usually contain one or more operators with their respective operands (such as <mi> and <mn>). This element renders as a horizontal row containing its arguments. */
export type ReactSkruvMrowMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {}>>

/** The <ms> MathML element represents a string literal meant to be interpreted by programming languages and computer algebra systems. */
export type ReactSkruvMsMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * The opening quote to enclose the content. The default value is &quot;.
   */
  'lquote'?: string | number | boolean | false
  /**
   * The closing quote to enclose the content. The default value is &quot;.
   */
  'rquote'?: string | number | boolean | false
}>>

/** The <mspace> MathML element is used to display a blank space, whose size is set by its attributes. */
export type ReactSkruvMspaceMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * A <length-percentage> indicating the desired depth (below the baseline) of the space.
   */
  'depth'?: string | number | boolean | false
  /**
   * A <length-percentage> indicating the desired height (above the baseline) of the space.
   */
  'height'?: string | false
  /**
   * A <length-percentage> indicating the desired width of the space.
   */
  'width'?: number | string | false
}>>

/** The <msqrt> MathML element is used to display square roots (no index is displayed). The square root accepts only one argument, which leads to the following syntax: <msqrt> base </msqrt>. */
export type ReactSkruvMsqrtMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {}>>

/** The <mstyle> MathML element is used to change the style of its children. */
export type ReactSkruvMstyleMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * Specifies a minimum font size allowed due to changes in scriptlevel. The default value is 8pt.
   */
  'scriptminsize'?: string | number | boolean | false
  /**
   * Specifies the multiplier to be used to adjust font size due to changes in scriptlevel. The default value is 0.71.
   */
  'scriptsizemultiplier'?: string | number | boolean | false
}>>

/** The <msub> MathML element is used to attach a subscript to an expression. */
export type ReactSkruvMsubMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * A <length-percentage> indicating the minimum amount to shift the baseline of the subscript down.
   */
  'subscriptshift'?: string | number | boolean | false
}>>

/** The <msup> MathML element is used to attach a superscript to an expression. */
export type ReactSkruvMsupMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * A <length-percentage> indicating the minimum amount to shift the baseline of the superscript up.
   */
  'superscriptshift'?: string | number | boolean | false
}>>

/** The <msubsup> MathML element is used to attach both a subscript and a superscript, together, to an expression. */
export type ReactSkruvMsubsupMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * A <length-percentage> indicating the minimum amount to shift the baseline of the subscript down.
   */
  'subscriptshift'?: string | number | boolean | false
  /**
   * A <length-percentage> indicating the minimum amount to shift the baseline of the superscript up.
   */
  'superscriptshift'?: string | number | boolean | false
}>>

/** The <mtable> MathML element allows you to create tables or matrices. Its children are <mtr> elements (representing rows), each of them having <mtd> elements as its children (representing cells). These elements are similar to <table>, <tr> and <td> elements of HTML. */
export type ReactSkruvMtableMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * Specifies the vertical alignment of the table with respect to its environment.
   * 
   * Possible values are:
   * 
   * axis (default): The vertical center of the table aligns on the environment's axis (typically the minus sign).
   * 
   * baseline: The vertical center of the table aligns on the environment's baseline.
   * 
   * bottom: The bottom of the table aligns on the environments baseline.
   * 
   * center: See baseline.
   * 
   * top: The top of the table aligns on the environments baseline.
   * 
   * In addition, values of the align attribute can end with a rownumber (e.g. align="center 3"). This allows you to align the specified row of the table rather than the whole table. A negative Integer value counts rows from the bottom of the table.
   */
  'align'?: string | false
  /**
   * Specifies the horizontal alignment of the cells. Multiple values separated by space are allowed and apply to the corresponding columns (e.g. columnalign="left right center"). Possible values are: left, center (default) and right.
   */
  'columnalign'?: string | number | boolean | false
  /**
   * Specifies column borders. Multiple values separated by space are allowed and apply to the corresponding columns (e.g. columnlines="none none solid"). Possible values are: none (default), solid and dashed.
   */
  'columnlines'?: string | number | boolean | false
  /**
   * Specifies the space between table columns. Multiple values separated by space are allowed and apply to the corresponding columns (e.g. columnspacing="1em 2em"). Possible values are <length-percentage>.
   */
  'columnspacing'?: string | number | boolean | false
  /**
   * Specifies borders of the entire table. Possible values are: none (default), solid and dashed.
   */
  'frame'?: string | false
  /**
   * Specifies additional space added between the table and frame. The first value specifies the spacing on the right and left; the second value specifies the spacing above and below. Possible values are <length-percentage>.
   */
  'framespacing'?: string | number | boolean | false
  /**
   * Specifies the vertical alignment of the cells. Multiple values separated by space are allowed and apply to the corresponding rows (e.g. rowalign="top bottom axis"). Possible values are: axis, baseline (default), bottom, center and top.
   */
  'rowalign'?: string | number | boolean | false
  /**
   * Specifies row borders. Multiple values separated by space are allowed and apply to the corresponding rows (e.g. rowlines="none none solid"). Possible values are: none (default), solid and dashed.
   */
  'rowlines'?: string | number | boolean | false
  /**
   * Specifies the space between table rows. Multiple values separated by space are allowed and apply to the corresponding rows (e.g. rowspacing="1em 2em"). Possible values are <length-percentage>.
   */
  'rowspacing'?: string | number | boolean | false
  /**
   * A <length-percentage> indicating the width of the entire table.
   */
  'width'?: number | string | false
}>>

/** The <mtd> MathML element represents a cell in a table or a matrix. It may only appear in a <mtr> element. This element is similar to the <td> element of HTML. */
export type ReactSkruvMtdMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * A non-negative integer value that indicates on how many columns does the cell extend.
   */
  'columnspan'?: string | number | boolean | false
  /**
   * A non-negative integer value that indicates on how many rows does the cell extend.
   */
  'rowSpan'?: number | false
  /**
   * Specifies the horizontal alignment of this cell and overrides values specified by <mtable> or <mtr>.
   * 
   * Possible values are: left, center and right.
   */
  'columnalign'?: string | number | boolean | false
  /**
   * Specifies the vertical alignment of this cell and overrides values specified by <mtable> or <mtr>.
   * 
   * Possible values are: axis, baseline, bottom, center and top.
   */
  'rowalign'?: string | number | boolean | false
}>>

/** The <mtext> MathML element is used to render arbitrary text with no notational meaning, such as comments or annotations. */
export type ReactSkruvMtextMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {}>>

/** The <mtr> MathML element represents a row in a table or a matrix. It may only appear in a <mtable> element and its children are <mtd> elements representing cells. This element is similar to the <tr> element of HTML. */
export type ReactSkruvMtrMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * Overrides the horizontal alignment of cells specified by <mtable> for this row. Multiple values separated by space are allowed and apply to the corresponding columns (e.g. columnalign="left center right"). Possible values are: left, center and right.
   */
  'columnalign'?: string | number | boolean | false
  /**
   * Overrides the vertical alignment of cells specified by <mtable> for this row. Possible values are: axis, baseline, bottom, center and top.
   */
  'rowalign'?: string | number | boolean | false
}>>

/** The <munder> MathML element is used to attach an accent or a limit under an expression. It uses the following syntax: <munder> base underscript </munder> */
export type ReactSkruvMunderMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * A <boolean> indicating whether the under script should be treated as an accent (i.e. drawn bigger and closer to the base expression).
   */
  'accentunder'?: string | number | boolean | false
}>>

/** The <munderover> MathML element is used to attach accents or limits both under and over an expression. */
export type ReactSkruvMunderoverMathMLAttributes = util.AsyncContent<ReactMathMLAttributes<MathMLElement, {
  /**
   * A <boolean> indicating whether the over script should be treated as an accent (i.e. drawn bigger and closer to the base expression).
   */
  'accent'?: string | number | boolean | false
  /**
   * A <boolean> indicating whether the under script should be treated as an accent (i.e. drawn bigger and closer to the base expression).
   */
  'accentunder'?: string | number | boolean | false
}>>

export type ReactSkruvFeedAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {}>>

export type ReactSkruvEntryAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {}>>

export type ReactSkruvIdAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {}>>

export type ReactSkruvTitleAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {
  'type'?: string | false
}>>

export type ReactSkruvUpdatedAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {}>>

export type ReactSkruvAuthorAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {}>>

export type ReactSkruvNameAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {}>>

export type ReactSkruvUriAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {}>>

export type ReactSkruvEmailAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {}>>

export type ReactSkruvLinkAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {
  'href'?: string | false
  'rel'?: string | false
  'type'?: string | false
  'hrefLang'?: string | false
  'title'?: string | false
  'length'?: string | number | boolean | false
}>>

export type ReactSkruvCategoryAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {
  'term'?: string | number | boolean | false
  'scheme'?: string | false
  'label'?: string | false
}>>

export type ReactSkruvContributorAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {}>>

export type ReactSkruvGeneratorAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {
  'uri'?: string | false
  'version'?: string | false
}>>

export type ReactSkruvIconAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {}>>

export type ReactSkruvLogoAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {}>>

export type ReactSkruvRightsAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {
  'type'?: string | false
}>>

export type ReactSkruvSubtitleAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {}>>

export type ReactSkruvContentAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {
  'type'?: string | false
  'src'?: string | false
}>>

export type ReactSkruvSummaryAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {
  'type'?: string | false
}>>

export type ReactSkruvPublishedAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {}>>

export type ReactSkruvSourceAtomAttributes = util.AsyncContent<ReactAtomAttributes<Element, {}>>

export type ReactSkruvUrlsetSitemapAttributes = util.AsyncContent<ReactSitemapAttributes<Element, {}>>

export type ReactSkruvUrlSitemapAttributes = util.AsyncContent<ReactSitemapAttributes<Element, {}>>

export type ReactSkruvLocSitemapAttributes = util.AsyncContent<ReactSitemapAttributes<Element, {}>>

export type ReactSkruvLastmodSitemapAttributes = util.AsyncContent<ReactSitemapAttributes<Element, {}>>

export type ReactSkruvChangefreqSitemapAttributes = util.AsyncContent<ReactSitemapAttributes<Element, {}>>

export type ReactSkruvPrioritySitemapAttributes = util.AsyncContent<ReactSitemapAttributes<Element, {}>>

export type ReactSkruvSitemapindexSitemapAttributes = util.AsyncContent<ReactSitemapAttributes<Element, {}>>

export type ReactSkruvSitemapSitemapAttributes = util.AsyncContent<ReactSitemapAttributes<Element, {}>>

export type ReactSkruvMathHTMLAttributes = ReactSkruvMathMathMLAttributes
export type ReactSkruvSvgHTMLAttributes = ReactSkruvSvgSVGAttributes

export namespace JSX {
  export interface IntrinsicElements {
    'html': ReactSkruvHtmlHTMLAttributes
    'base': ReactSkruvBaseHTMLAttributes
    'head': ReactSkruvHeadHTMLAttributes
    'title': ReactSkruvTitleHTMLAttributes
    'script': ReactSkruvScriptHTMLAttributes
    'style': ReactSkruvStyleHTMLAttributes
    'link': ReactSkruvLinkHTMLAttributes
    'meta': ReactSkruvMetaHTMLAttributes
    'body': ReactSkruvBodyHTMLAttributes
    'address': ReactSkruvAddressHTMLAttributes
    'article': ReactSkruvArticleHTMLAttributes
    'aside': ReactSkruvAsideHTMLAttributes
    'footer': ReactSkruvFooterHTMLAttributes
    'h1': ReactSkruvH1HTMLAttributes
    'h2': ReactSkruvH2HTMLAttributes
    'h3': ReactSkruvH3HTMLAttributes
    'h4': ReactSkruvH4HTMLAttributes
    'h5': ReactSkruvH5HTMLAttributes
    'h6': ReactSkruvH6HTMLAttributes
    'header': ReactSkruvHeaderHTMLAttributes
    'hgroup': ReactSkruvHgroupHTMLAttributes
    'main': ReactSkruvMainHTMLAttributes
    'nav': ReactSkruvNavHTMLAttributes
    'section': ReactSkruvSectionHTMLAttributes
    'search': ReactSkruvSearchHTMLAttributes
    'blockquote': ReactSkruvBlockquoteHTMLAttributes
    'cite': ReactSkruvCiteHTMLAttributes
    'dd': ReactSkruvDdHTMLAttributes
    'dt': ReactSkruvDtHTMLAttributes
    'dl': ReactSkruvDlHTMLAttributes
    'div': ReactSkruvDivHTMLAttributes
    'figcaption': ReactSkruvFigcaptionHTMLAttributes
    'figure': ReactSkruvFigureHTMLAttributes
    'hr': ReactSkruvHrHTMLAttributes
    'li': ReactSkruvLiHTMLAttributes
    'ol': ReactSkruvOlHTMLAttributes
    'ul': ReactSkruvUlHTMLAttributes
    'menu': ReactSkruvMenuHTMLAttributes
    'p': ReactSkruvPHTMLAttributes
    'pre': ReactSkruvPreHTMLAttributes
    'a': ReactSkruvAHTMLAttributes
    'abbr': ReactSkruvAbbrHTMLAttributes
    'b': ReactSkruvBHTMLAttributes
    'bdi': ReactSkruvBdiHTMLAttributes
    'bdo': ReactSkruvBdoHTMLAttributes
    'br': ReactSkruvBrHTMLAttributes
    'code': ReactSkruvCodeHTMLAttributes
    'data': ReactSkruvDataHTMLAttributes
    'dfn': ReactSkruvDfnHTMLAttributes
    'em': ReactSkruvEmHTMLAttributes
    'i': ReactSkruvIHTMLAttributes
    'kbd': ReactSkruvKbdHTMLAttributes
    'mark': ReactSkruvMarkHTMLAttributes
    'q': ReactSkruvQHTMLAttributes
    'rp': ReactSkruvRpHTMLAttributes
    'ruby': ReactSkruvRubyHTMLAttributes
    'rt': ReactSkruvRtHTMLAttributes
    's': ReactSkruvSHTMLAttributes
    'samp': ReactSkruvSampHTMLAttributes
    'small': ReactSkruvSmallHTMLAttributes
    'span': ReactSkruvSpanHTMLAttributes
    'strong': ReactSkruvStrongHTMLAttributes
    'sub': ReactSkruvSubHTMLAttributes
    'sup': ReactSkruvSupHTMLAttributes
    'time': ReactSkruvTimeHTMLAttributes
    'u': ReactSkruvUHTMLAttributes
    'var': ReactSkruvVarHTMLAttributes
    'wbr': ReactSkruvWbrHTMLAttributes
    'area': ReactSkruvAreaHTMLAttributes
    'audio': ReactSkruvAudioHTMLAttributes
    'img': ReactSkruvImgHTMLAttributes
    'map': ReactSkruvMapHTMLAttributes
    'track': ReactSkruvTrackHTMLAttributes
    'video': ReactSkruvVideoHTMLAttributes
    'embed': ReactSkruvEmbedHTMLAttributes
    'iframe': ReactSkruvIframeHTMLAttributes
    'object': ReactSkruvObjectHTMLAttributes
    'picture': ReactSkruvPictureHTMLAttributes
    'source': ReactSkruvSourceHTMLAttributes
    'portal': ReactSkruvPortalHTMLAttributes
    'canvas': ReactSkruvCanvasHTMLAttributes
    'noscript': ReactSkruvNoscriptHTMLAttributes
    'del': ReactSkruvDelHTMLAttributes
    'ins': ReactSkruvInsHTMLAttributes
    'caption': ReactSkruvCaptionHTMLAttributes
    'col': ReactSkruvColHTMLAttributes
    'colgroup': ReactSkruvColgroupHTMLAttributes
    'table': ReactSkruvTableHTMLAttributes
    'tbody': ReactSkruvTbodyHTMLAttributes
    'tr': ReactSkruvTrHTMLAttributes
    'td': ReactSkruvTdHTMLAttributes
    'tfoot': ReactSkruvTfootHTMLAttributes
    'th': ReactSkruvThHTMLAttributes
    'thead': ReactSkruvTheadHTMLAttributes
    'button': ReactSkruvButtonHTMLAttributes
    'datalist': ReactSkruvDatalistHTMLAttributes
    'option': ReactSkruvOptionHTMLAttributes
    'fieldset': ReactSkruvFieldsetHTMLAttributes
    'label': ReactSkruvLabelHTMLAttributes
    'form': ReactSkruvFormHTMLAttributes
    'input': ReactSkruvInputHTMLAttributes
    'legend': ReactSkruvLegendHTMLAttributes
    'meter': ReactSkruvMeterHTMLAttributes
    'optgroup': ReactSkruvOptgroupHTMLAttributes
    'select': ReactSkruvSelectHTMLAttributes
    'output': ReactSkruvOutputHTMLAttributes
    'progress': ReactSkruvProgressHTMLAttributes
    'textarea': ReactSkruvTextareaHTMLAttributes
    'details': ReactSkruvDetailsHTMLAttributes
    'summary': ReactSkruvSummaryHTMLAttributes
    'dialog': ReactSkruvDialogHTMLAttributes
    'slot': ReactSkruvSlotHTMLAttributes
    'template': ReactSkruvTemplateHTMLAttributes
    'svgA': ReactSkruvASVGAttributes
    'animate': ReactSkruvAnimateSVGAttributes
    'animateMotion': ReactSkruvAnimatemotionSVGAttributes
    'animateTransform': ReactSkruvAnimatetransformSVGAttributes
    'circle': ReactSkruvCircleSVGAttributes
    'clipPath': ReactSkruvClippathSVGAttributes
    'defs': ReactSkruvDefsSVGAttributes
    'desc': ReactSkruvDescSVGAttributes
    'ellipse': ReactSkruvEllipseSVGAttributes
    'feBlend': ReactSkruvFeblendSVGAttributes
    'feColorMatrix': ReactSkruvFecolormatrixSVGAttributes
    'feComponentTransfer': ReactSkruvFecomponenttransferSVGAttributes
    'feComposite': ReactSkruvFecompositeSVGAttributes
    'feConvolveMatrix': ReactSkruvFeconvolvematrixSVGAttributes
    'feDiffuseLighting': ReactSkruvFediffuselightingSVGAttributes
    'feDisplacementMap': ReactSkruvFedisplacementmapSVGAttributes
    'feDistantLight': ReactSkruvFedistantlightSVGAttributes
    'feDropShadow': ReactSkruvFedropshadowSVGAttributes
    'feFlood': ReactSkruvFefloodSVGAttributes
    'feFuncA': ReactSkruvFefuncaSVGAttributes
    'feFuncB': ReactSkruvFefuncbSVGAttributes
    'feFuncG': ReactSkruvFefuncgSVGAttributes
    'feFuncR': ReactSkruvFefuncrSVGAttributes
    'feGaussianBlur': ReactSkruvFegaussianblurSVGAttributes
    'feImage': ReactSkruvFeimageSVGAttributes
    'feMerge': ReactSkruvFemergeSVGAttributes
    'feMergeNode': ReactSkruvFemergenodeSVGAttributes
    'feMorphology': ReactSkruvFemorphologySVGAttributes
    'feOffset': ReactSkruvFeoffsetSVGAttributes
    'fePointLight': ReactSkruvFepointlightSVGAttributes
    'feSpecularLighting': ReactSkruvFespecularlightingSVGAttributes
    'feSpotLight': ReactSkruvFespotlightSVGAttributes
    'feTile': ReactSkruvFetileSVGAttributes
    'feTurbulence': ReactSkruvFeturbulenceSVGAttributes
    'filter': ReactSkruvFilterSVGAttributes
    'foreignObject': ReactSkruvForeignobjectSVGAttributes
    'g': ReactSkruvGSVGAttributes
    'image': ReactSkruvImageSVGAttributes
    'line': ReactSkruvLineSVGAttributes
    'linearGradient': ReactSkruvLineargradientSVGAttributes
    'marker': ReactSkruvMarkerSVGAttributes
    'mask': ReactSkruvMaskSVGAttributes
    'metadata': ReactSkruvMetadataSVGAttributes
    'mpath': ReactSkruvMpathSVGAttributes
    'path': ReactSkruvPathSVGAttributes
    'pattern': ReactSkruvPatternSVGAttributes
    'polygon': ReactSkruvPolygonSVGAttributes
    'polyline': ReactSkruvPolylineSVGAttributes
    'radialGradient': ReactSkruvRadialgradientSVGAttributes
    'rect': ReactSkruvRectSVGAttributes
    'svgScript': ReactSkruvScriptSVGAttributes
    'set': ReactSkruvSetSVGAttributes
    'stop': ReactSkruvStopSVGAttributes
    'svgStyle': ReactSkruvStyleSVGAttributes
    'svg': ReactSkruvSvgSVGAttributes
    'switch': ReactSkruvSwitchSVGAttributes
    'symbol': ReactSkruvSymbolSVGAttributes
    'text': ReactSkruvTextSVGAttributes
    'textPath': ReactSkruvTextpathSVGAttributes
    'svgTitle': ReactSkruvTitleSVGAttributes
    'tspan': ReactSkruvTspanSVGAttributes
    'use': ReactSkruvUseSVGAttributes
    'view': ReactSkruvViewSVGAttributes
    'math': ReactSkruvMathMathMLAttributes
    'semantics': ReactSkruvSemanticsMathMLAttributes
    'menclose': ReactSkruvMencloseMathMLAttributes
    'merror': ReactSkruvMerrorMathMLAttributes
    'mfrac': ReactSkruvMfracMathMLAttributes
    'mi': ReactSkruvMiMathMLAttributes
    'mmultiscripts': ReactSkruvMmultiscriptsMathMLAttributes
    'mn': ReactSkruvMnMathMLAttributes
    'mo': ReactSkruvMoMathMLAttributes
    'mover': ReactSkruvMoverMathMLAttributes
    'mpadded': ReactSkruvMpaddedMathMLAttributes
    'mphantom': ReactSkruvMphantomMathMLAttributes
    'mroot': ReactSkruvMrootMathMLAttributes
    'mrow': ReactSkruvMrowMathMLAttributes
    'ms': ReactSkruvMsMathMLAttributes
    'mspace': ReactSkruvMspaceMathMLAttributes
    'msqrt': ReactSkruvMsqrtMathMLAttributes
    'mstyle': ReactSkruvMstyleMathMLAttributes
    'msub': ReactSkruvMsubMathMLAttributes
    'msup': ReactSkruvMsupMathMLAttributes
    'msubsup': ReactSkruvMsubsupMathMLAttributes
    'mtable': ReactSkruvMtableMathMLAttributes
    'mtd': ReactSkruvMtdMathMLAttributes
    'mtext': ReactSkruvMtextMathMLAttributes
    'mtr': ReactSkruvMtrMathMLAttributes
    'munder': ReactSkruvMunderMathMLAttributes
    'munderover': ReactSkruvMunderoverMathMLAttributes
    'feed': ReactSkruvFeedAtomAttributes
    'entry': ReactSkruvEntryAtomAttributes
    'id': ReactSkruvIdAtomAttributes
    'atomTitle': ReactSkruvTitleAtomAttributes
    'updated': ReactSkruvUpdatedAtomAttributes
    'author': ReactSkruvAuthorAtomAttributes
    'name': ReactSkruvNameAtomAttributes
    'uri': ReactSkruvUriAtomAttributes
    'email': ReactSkruvEmailAtomAttributes
    'atomLink': ReactSkruvLinkAtomAttributes
    'category': ReactSkruvCategoryAtomAttributes
    'contributor': ReactSkruvContributorAtomAttributes
    'generator': ReactSkruvGeneratorAtomAttributes
    'icon': ReactSkruvIconAtomAttributes
    'logo': ReactSkruvLogoAtomAttributes
    'rights': ReactSkruvRightsAtomAttributes
    'subtitle': ReactSkruvSubtitleAtomAttributes
    'content': ReactSkruvContentAtomAttributes
    'atomSummary': ReactSkruvSummaryAtomAttributes
    'published': ReactSkruvPublishedAtomAttributes
    'atomSource': ReactSkruvSourceAtomAttributes
    'urlset': ReactSkruvUrlsetSitemapAttributes
    'url': ReactSkruvUrlSitemapAttributes
    'loc': ReactSkruvLocSitemapAttributes
    'lastmod': ReactSkruvLastmodSitemapAttributes
    'changefreq': ReactSkruvChangefreqSitemapAttributes
    'priority': ReactSkruvPrioritySitemapAttributes
    'sitemapindex': ReactSkruvSitemapindexSitemapAttributes
    'sitemap': ReactSkruvSitemapSitemapAttributes
    'skruvHeader': util.SkruvHeaderAttributes
    'skruvComment': util.SkruvTextAttributes
    'skruvText': util.SkruvTextAttributes
    [elemName: string]: any;
  }
}

/** @type {Record<string,string>} */
const reactMappings = {
  accentHeight: 'accent-height',
  accentheight: 'accent-height',
  acceptCharset: 'accept-charset',
  acceptcharset: 'accept-charset',
  accessKey: 'accesskey',
  alignmentBaseline: 'alignment-baseline',
  alignmentbaseline: 'alignment-baseline',
  allowFullScreen: 'allowfullscreen',
  allowReorder: 'allowreorder',
  arabicForm: 'arabic-form',
  arabicform: 'arabic-form',
  attributeName: 'attributename',
  attributeType: 'attributetype',
  autoCapitalize: 'autocapitalize',
  autoComplete: 'autocomplete',
  autoCorrect: 'autocorrect',
  autoFocus: 'autofocus',
  autoPlay: 'autoplay',
  autoReverse: 'autoreverse',
  autoSave: 'autosave',
  baseFrequency: 'basefrequency',
  baseProfile: 'baseprofile',
  baselineShift: 'baseline-shift',
  baselineshift: 'baseline-shift',
  calcMode: 'calcmode',
  capHeight: 'cap-height',
  capheight: 'cap-height',
  cellPadding: 'cellpadding',
  cellSpacing: 'cellspacing',
  charSet: 'charset',
  classID: 'classid',
  className: 'class',
  classname: 'class',
  clipPath: 'clip-path',
  clipPathUnits: 'clippathunits',
  clipRule: 'clip-rule',
  clippath: 'clip-path',
  cliprule: 'clip-rule',
  colSpan: 'colspan',
  colorInterpolation: 'color-interpolation',
  colorInterpolationFilters: 'color-interpolation-filters',
  colorProfile: 'color-profile',
  colorRendering: 'color-rendering',
  colorinterpolation: 'color-interpolation',
  colorinterpolationfilters: 'color-interpolation-filters',
  colorprofile: 'color-profile',
  colorrendering: 'color-rendering',
  contentEditable: 'contenteditable',
  contentScriptType: 'contentscripttype',
  contentStyleType: 'contentstyletype',
  contextMenu: 'contextmenu',
  controlsList: 'controlslist',
  crossOrigin: 'crossorigin',
  dangerouslySetInnerHTML: 'dangerouslysetinnerhtml',
  dateTime: 'datetime',
  defaultChecked: 'defaultchecked',
  defaultValue: 'defaultvalue',
  diffuseConstant: 'diffuseconstant',
  disablePictureInPicture: 'disablepictureinpicture',
  disableRemotePlayback: 'disableremoteplayback',
  dominantBaseline: 'dominant-baseline',
  dominantbaseline: 'dominant-baseline',
  edgeMode: 'edgemode',
  enableBackground: 'enable-background',
  enablebackground: 'enable-background',
  encType: 'enctype',
  enterKeyHint: 'enterkeyhint',
  externalResourcesRequired: 'externalresourcesrequired',
  fetchPriority: 'fetchpriority',
  fillOpacity: 'fill-opacity',
  fillRule: 'fill-rule',
  fillopacity: 'fill-opacity',
  fillrule: 'fill-rule',
  filterRes: 'filterres',
  filterUnits: 'filterunits',
  floodColor: 'flood-color',
  floodOpacity: 'flood-opacity',
  floodcolor: 'flood-color',
  floodopacity: 'flood-opacity',
  fontFamily: 'font-family',
  fontSize: 'font-size',
  fontSizeAdjust: 'font-size-adjust',
  fontStretch: 'font-stretch',
  fontStyle: 'font-style',
  fontVariant: 'font-variant',
  fontWeight: 'font-weight',
  fontfamily: 'font-family',
  fontsize: 'font-size',
  fontsizeadjust: 'font-size-adjust',
  fontstretch: 'font-stretch',
  fontstyle: 'font-style',
  fontvariant: 'font-variant',
  fontweight: 'font-weight',
  formAction: 'formaction',
  formEncType: 'formenctype',
  formMethod: 'formmethod',
  formNoValidate: 'formnovalidate',
  formTarget: 'formtarget',
  frameBorder: 'frameborder',
  glyphName: 'glyph-name',
  glyphOrientationHorizontal: 'glyph-orientation-horizontal',
  glyphOrientationVertical: 'glyph-orientation-vertical',
  glyphRef: 'glyphref',
  glyphname: 'glyph-name',
  glyphorientationhorizontal: 'glyph-orientation-horizontal',
  glyphorientationvertical: 'glyph-orientation-vertical',
  gradientTransform: 'gradienttransform',
  gradientUnits: 'gradientunits',
  horizAdvX: 'horiz-adv-x',
  horizOriginX: 'horiz-origin-x',
  horizadvx: 'horiz-adv-x',
  horizoriginx: 'horiz-origin-x',
  hrefLang: 'hreflang',
  htmlFor: 'for',
  htmlfor: 'for',
  httpEquiv: 'http-equiv',
  httpequiv: 'http-equiv',
  imageRendering: 'image-rendering',
  imageSizes: 'imagesizes',
  imageSrcSet: 'imagesrcset',
  imagerendering: 'image-rendering',
  innerHTML: 'innerhtml',
  inputMode: 'inputmode',
  itemID: 'itemid',
  itemProp: 'itemprop',
  itemRef: 'itemref',
  itemScope: 'itemscope',
  itemType: 'itemtype',
  kernelMatrix: 'kernelmatrix',
  kernelUnitLength: 'kernelunitlength',
  keyParams: 'keyparams',
  keyPoints: 'keypoints',
  keySplines: 'keysplines',
  keyTimes: 'keytimes',
  keyType: 'keytype',
  lengthAdjust: 'lengthadjust',
  letterSpacing: 'letter-spacing',
  letterspacing: 'letter-spacing',
  lightingColor: 'lighting-color',
  lightingcolor: 'lighting-color',
  limitingConeAngle: 'limitingconeangle',
  marginHeight: 'marginheight',
  marginWidth: 'marginwidth',
  markerEnd: 'marker-end',
  markerHeight: 'markerheight',
  markerMid: 'marker-mid',
  markerStart: 'marker-start',
  markerUnits: 'markerunits',
  markerWidth: 'markerwidth',
  markerend: 'marker-end',
  markermid: 'marker-mid',
  markerstart: 'marker-start',
  maskContentUnits: 'maskcontentunits',
  maskUnits: 'maskunits',
  maxLength: 'maxlength',
  mediaGroup: 'mediagroup',
  minLength: 'minlength',
  noModule: 'nomodule',
  noValidate: 'novalidate',
  numOctaves: 'numoctaves',
  overlinePosition: 'overline-position',
  overlineThickness: 'overline-thickness',
  overlineposition: 'overline-position',
  overlinethickness: 'overline-thickness',
  paintOrder: 'paint-order',
  paintorder: 'paint-order',
  panose1: 'panose-1',
  pathLength: 'pathlength',
  patternContentUnits: 'patterncontentunits',
  patternTransform: 'patterntransform',
  patternUnits: 'patternunits',
  playsInline: 'playsinline',
  pointerEvents: 'pointer-events',
  pointerevents: 'pointer-events',
  pointsAtX: 'pointsatx',
  pointsAtY: 'pointsaty',
  pointsAtZ: 'pointsatz',
  preserveAlpha: 'preservealpha',
  preserveAspectRatio: 'preserveaspectratio',
  primitiveUnits: 'primitiveunits',
  radioGroup: 'radiogroup',
  readOnly: 'readonly',
  refX: 'refx',
  refY: 'refy',
  referrerPolicy: 'referrerpolicy',
  renderingIntent: 'rendering-intent',
  renderingintent: 'rendering-intent',
  repeatCount: 'repeatcount',
  repeatDur: 'repeatdur',
  requiredExtensions: 'requiredextensions',
  requiredFeatures: 'requiredfeatures',
  rowSpan: 'rowspan',
  shapeRendering: 'shape-rendering',
  shaperendering: 'shape-rendering',
  specularConstant: 'specularconstant',
  specularExponent: 'specularexponent',
  spellCheck: 'spellcheck',
  spreadMethod: 'spreadmethod',
  srcDoc: 'srcdoc',
  srcLang: 'srclang',
  srcSet: 'srcset',
  startOffset: 'startoffset',
  stdDeviation: 'stddeviation',
  stitchTiles: 'stitchtiles',
  stopColor: 'stop-color',
  stopOpacity: 'stop-opacity',
  stopcolor: 'stop-color',
  stopopacity: 'stop-opacity',
  strikethroughPosition: 'strikethrough-position',
  strikethroughThickness: 'strikethrough-thickness',
  strikethroughposition: 'strikethrough-position',
  strikethroughthickness: 'strikethrough-thickness',
  strokeDasharray: 'stroke-dasharray',
  strokeDashoffset: 'stroke-dashoffset',
  strokeLinecap: 'stroke-linecap',
  strokeLinejoin: 'stroke-linejoin',
  strokeMiterlimit: 'stroke-miterlimit',
  strokeOpacity: 'stroke-opacity',
  strokeWidth: 'stroke-width',
  strokedasharray: 'stroke-dasharray',
  strokedashoffset: 'stroke-dashoffset',
  strokelinecap: 'stroke-linecap',
  strokelinejoin: 'stroke-linejoin',
  strokemiterlimit: 'stroke-miterlimit',
  strokeopacity: 'stroke-opacity',
  strokewidth: 'stroke-width',
  suppressContentEditableWarning: 'suppresscontenteditablewarning',
  suppressHydrationWarning: 'suppresshydrationwarning',
  surfaceScale: 'surfacescale',
  systemLanguage: 'systemlanguage',
  tabIndex: 'tabindex',
  tableValues: 'tablevalues',
  targetX: 'targetx',
  targetY: 'targety',
  textAnchor: 'text-anchor',
  textDecoration: 'text-decoration',
  textLength: 'textlength',
  textRendering: 'text-rendering',
  textanchor: 'text-anchor',
  textdecoration: 'text-decoration',
  textrendering: 'text-rendering',
  transformOrigin: 'transform-origin',
  transformorigin: 'transform-origin',
  underlinePosition: 'underline-position',
  underlineThickness: 'underline-thickness',
  underlineposition: 'underline-position',
  underlinethickness: 'underline-thickness',
  unicodeBidi: 'unicode-bidi',
  unicodeRange: 'unicode-range',
  unicodebidi: 'unicode-bidi',
  unicoderange: 'unicode-range',
  unitsPerEm: 'units-per-em',
  unitsperem: 'units-per-em',
  useMap: 'usemap',
  vAlphabetic: 'v-alphabetic',
  vHanging: 'v-hanging',
  vIdeographic: 'v-ideographic',
  vMathematical: 'v-mathematical',
  valphabetic: 'v-alphabetic',
  vectorEffect: 'vector-effect',
  vectoreffect: 'vector-effect',
  vertAdvY: 'vert-adv-y',
  vertOriginX: 'vert-origin-x',
  vertOriginY: 'vert-origin-y',
  vertadvy: 'vert-adv-y',
  vertoriginx: 'vert-origin-x',
  vertoriginy: 'vert-origin-y',
  vhanging: 'v-hanging',
  videographic: 'v-ideographic',
  viewBox: 'viewbox',
  viewTarget: 'viewtarget',
  vmathematical: 'v-mathematical',
  wordSpacing: 'word-spacing',
  wordspacing: 'word-spacing',
  writingMode: 'writing-mode',
  writingmode: 'writing-mode',
  xChannelSelector: 'xchannelselector',
  xHeight: 'x-height',
  xheight: 'x-height',
  xlinkActuate: 'xlink:actuate',
  xlinkArcrole: 'xlink:arcrole',
  xlinkHref: 'xlink:href',
  xlinkRole: 'xlink:role',
  xlinkShow: 'xlink:show',
  xlinkTitle: 'xlink:title',
  xlinkType: 'xlink:type',
  xlinkactuate: 'xlink:actuate',
  xlinkarcrole: 'xlink:arcrole',
  xlinkhref: 'xlink:href',
  xlinkrole: 'xlink:role',
  xlinkshow: 'xlink:show',
  xlinktitle: 'xlink:title',
  xlinktype: 'xlink:type',
  xmlBase: 'xml:base',
  xmlLang: 'xml:lang',
  xmlSpace: 'xmlspace',
  xmlbase: 'xml:base',
  xmllang: 'xml:lang',
  xmlnsXlink: 'xmlns:xlink',
  xmlnsxlink: 'xmlns:xlink',
  yChannelSelector: 'ychannelselector',
  zoomAndPan: 'zoomandpan',
  // This is stupid and I hate it.
  onChange: 'oninput',
  onchange: 'oninput'
}
export const Fragment = '#fragment'
const aliases = {
  'svgA': 'a',
  'svgScript': 'script',
  'svgStyle': 'style',
  'svgTitle': 'title',
  'atomTitle': 'title',
  'atomLink': 'link',
  'atomSummary': 'summary',
  'atomSource': 'source'
}
export const jsxs = (nodeName: string | Function, attributes = { children: [] }) => {
  // @ts-ignore
  nodeName = aliases[nodeName] || nodeName
  if (nodeName === Fragment && attributes.children) { return attributes.children }
  if (nodeName === Fragment) { return [] }
  if (typeof nodeName === "function") return nodeName(attributes, attributes.children)
  const { children, ...attrs } = attributes
  if (!nodeName.includes('-')) {
    Object.keys(attrs)
      .forEach(e => {
        if (e[0] === 'o' && e[1] === 'n' && e !== e.toLowerCase()) {
          // @ts-ignore
          attrs[e.toLowerCase()] = attrs[e]
          // @ts-ignore
          delete attrs[e]
          // @ts-ignore
        } else if (reactMappings[e]) {
          // @ts-ignore
          attrs[reactMappings[e]] = attrs[e]
          // @ts-ignore
          delete attrs[e]
        }
      })
  }
  if (children) { return { isSkruvDom: true, t: nodeName, c: [attrs || {}, children] } }
  return { isSkruvDom: true, t: nodeName, c: [attrs || {}] }
}
export const jsx = jsxs
