import { Link } from "react-router-dom";

export default function Tags() {
  const tags = [
    {
      tag: "Branding",
    },
    {
      tag: "Design",
    },
    {
      tag: "Funding",
    },
    {
      tag: "Gadget",
    },
    {
      tag: "Innovation",
    },
    {
      tag: "Marketing",
    },
    {
      tag: "New Style",
    },
    {
      tag: "Success",
    },
    {
      tag: "Sustainable",
    },
    {
      tag: "Viral",
    },
  ];
  return (
    <div>
      <h3 className="text-2xl font-semibold">Tags</h3>
      <ul className="mt-5 flex flex-wrap gap-3 mb-5">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            <Link
              className="text-gray-600 text-sm hover:text-black"
              to={`/${tag?.tag}`}
            >
              {tag?.tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
