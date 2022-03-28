import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'locale/*.json' {
  const value: any
  export default value
}
