interface Image {
  url: string,
  alt: string
}

interface Size {
  name: string,
  image: Image,
  price: number
}

interface Detail {
  title: string,
  copy: string
}

interface CTA {
  title: string,
  copy: string,
  image: Image,
  url: string
}

interface Instruction {
  title: string,
  copy: string
}

interface Instructions {
  primary: Instruction,
  secondary: Instruction[]
}

interface RelatedProduct {
  title: string,
  subtitle: string,
  image: Image
}

export interface ProductInterface {
  id: number,
  slug: string,
  category: string[],
  name: string,
  description: string,
  sizes: Size[],
  details: Detail[],
  cta: CTA,
  gallery: Image[],
  instructions: Instructions,
  "related-products": RelatedProduct[]
}
