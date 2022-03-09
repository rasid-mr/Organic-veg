import {version as Version} from './../package.json'
import Util from './objects/Util.js'
import Components from './objects/Components.js'
import Objects from './objects/Objects.js'
import Process from './process/Process.js'
import Internals from './core/Internals.js'
import Render from './core/Render.js'
import Interpolate from './objects/Interpolate.js'
import CubicBezier from 'cubic-bezier-easing'
import Easing from './easing/easing-bezier.js' // and CubicBezier easing functions
import Selector from './util/selector.js'

// TweenConstructor
import Tween from './tween/tween.js'
import TweenCollection from './tween/tweenCollection.js' // comment out if you don't want to use the allTo() and allFromTo() methods

import to from './interface/to.js'
import fromTo from './interface/fromTo.js'
import allTo from './interface/allTo.js' // comment out if you don't need tweenCollection feature
import allFromTo from './interface/allFromTo.js' // comment out if you don't need tweenCollection feature

// import Animation from './animation/animationDevelopment.js' // use whatever Animation class you want
import Animation from './animation/animation.js'

// import components' objects
// add/remove/replace any component 
import essentialBoxModelOps from './components/boxModelEssential.js'
import colorsOps from './components/colorProperties.js'
import attrOps from './components/htmlAttributes.js'
import opacityOps from './components/opacityProperty.js'
import textWriteOps from './components/textWrite.js'
import transformOps from './components/transformFunctions.js'
import scrollOps from './components/scrollProperty.js'
import svgDrawOps from './components/svgDraw.js'
import svgMorphOps from './components/svgMorph.js'
import svgTransformOps from './components/svgTransform.js'

// initialize your components
const EssentialBoxModel = new Animation(essentialBoxModelOps)
const ColorProperties = new Animation(colorsOps)
const HTMLAttributes = new Animation(attrOps)
const OpacityProperty = new Animation(opacityOps)
const TextWrite = new Animation(textWriteOps)
const TransformFunctions = new Animation(transformOps)
const ScrollProperty = new Animation(scrollOps)
const SVGDraw = new Animation(svgDrawOps)
const SVGMorph = new Animation(svgMorphOps)
const SVGTransform = new Animation(svgTransformOps)

// export the GLOBAL !important
export default {
  Animation,
  Components: {
    EssentialBoxModel,
    ColorProperties,
    HTMLAttributes,
    OpacityProperty,
    TextWrite,
    TransformFunctions,
    ScrollProperty,
    SVGDraw,
    SVGMorph,
    SVGTransform
  },

  Tween, // Tween Constructor
  fromTo, // Tween Interface
  to, // Tween Interface
  TweenCollection, // Tween Collection
  allFromTo, // Tween Collection Interface
  allTo, // Tween Collection Interface

  Objects,
  Util,
  Easing,
  CubicBezier,
  Render,
  Interpolate,
  Process,
  Internals,
  Selector,
  Version
}