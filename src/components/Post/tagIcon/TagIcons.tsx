import TagIcon from "@/components/Post/tagIcon/TagIcon";
import type { Tag } from "@/types/Tag";

type Props = { tags: string[] };

export default function TagIcons({ tags }: Props) {
  return (
    <ul className="flex flex-wrap gap-1 text-center">
      {tags.map((tag) => {
        return <TagIcon key={tag} tag={tag} />;
      })}
    </ul>
  );
}