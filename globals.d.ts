import { Vue } from "vue-property-decorator"

declare module '*.svg' {
  export const content: any
}
declare module '*.vue' {
  import { Vue } from "vue-property-decorator"
  export const content: Vue
}
declare module '*.png' {
  export const content: any
}

declare module 'vue/types/vue' {
  interface VueConstructor {
    $axios: any
    router: any
  }
  interface Vue {
    $axios: any
    router: any

  }
}




