interface SEO {
  meta?: HTMLMetaElement[] | null,
  title?: string
}

export default function (options?: SEO) {
  let pageTitle: string = 'Tages'

  if (options?.title) {
    pageTitle = `${options.title} - Tages`
  }

  if (options?.meta) {
    options.meta.forEach(metaEl => {
      const meta = document.createElement('meta') as HTMLMetaElement

      meta.name = metaEl.name
      meta.content = metaEl.content

      document.getElementsByTagName('head')[0].appendChild(meta)
    })
  }

  document.title = pageTitle
}