import TagList from "@/components/TagList"
import { headers } from "next/headers"

export default async function TagsRoute({params, searchParams}: {params: { slug: string }}) {
  console.log('tagRoute:', params)
  return (
  <div>
      <TagList params={params}/>
    </div>
  )
}
