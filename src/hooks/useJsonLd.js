import { useEffect } from 'react'

export default function useJsonLd(id, data) {
  useEffect(() => {
    if (!data) return undefined

    let tag = document.getElementById(id)
    const created = !tag
    if (created) {
      tag = document.createElement('script')
      tag.type = 'application/ld+json'
      tag.id = id
      document.head.appendChild(tag)
    }
    tag.textContent = JSON.stringify(data)

    return () => {
      tag.remove()
    }
  }, [id, data])
}
