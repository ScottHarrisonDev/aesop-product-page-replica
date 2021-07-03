interface Banner {
  copy: string
}

interface CTA {
  title: string,
  copy: string,
  url: string
}

interface MoreProducts {
  copy: string
}

interface Content {
  banner: Banner,
  cta: CTA,
  "more-products": MoreProducts,
}

export interface ContentInterface {
  content: Content,
  layout: string[]
}

