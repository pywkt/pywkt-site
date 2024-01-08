import TagList from "@/components/TagList"

export default function DefaultTagsRoute({params}: { params: { slug: string}}) {
  console.log('default par:', params.slug)
  return (
  <div><TagList /></div>
  )
}
