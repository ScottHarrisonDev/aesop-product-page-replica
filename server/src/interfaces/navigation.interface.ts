interface Link {
  id: string,
  label: string,
  slug: string | null,
  interactive: boolean
}

export interface NavigationInterface {
  left: Link[],
  right: Link[]
}
