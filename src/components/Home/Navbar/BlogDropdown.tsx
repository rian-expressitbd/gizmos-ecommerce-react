import { Dispatch, SetStateAction, useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

type BlogPostOpenProps = {
  setIsBlogOpen: Dispatch<SetStateAction<boolean>>;
  setIsPostTypesOpen: Dispatch<SetStateAction<boolean>>;
  isPostTypesOpen: boolean;
};
export default function BlogDropdown({
  setIsBlogOpen,
  setIsPostTypesOpen,
  isPostTypesOpen,
}: BlogPostOpenProps) {
  const blogDropdownRef = useRef<HTMLDivElement>(null);
  const postTypesButtonRef = useRef<HTMLButtonElement>(null);
  const postTypesRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={blogDropdownRef}
      className="absolute top-full left-0 mt-0 w-[200px] bg-white shadow-xl border rounded-sm py-2 z-50 text-black"
      onMouseEnter={() => setIsBlogOpen(true)}
      onMouseLeave={() => setIsBlogOpen(false)}
    >
      <Link
        to="/blog/right-sidebar"
        className="block px-4 py-2 hover:bg-gray-100"
      >
        Right Sidebar
      </Link>
      <Link
        to="/blog/left-sidebar"
        className="block px-4 py-2 hover:bg-gray-100"
      >
        Left Sidebar
      </Link>
      <Link to="/blog/no-sidebar" className="block px-4 py-2 hover:bg-gray-100">
        No Sidebar
      </Link>
      <div className="relative group">
        <button
          ref={postTypesButtonRef}
          className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100"
          onMouseEnter={() => setIsPostTypesOpen(true)}
          onMouseLeave={() => setIsPostTypesOpen(false)}
        >
          <span>Post Types</span>
          <MdKeyboardArrowRight size={20} />
        </button>

        {isPostTypesOpen && (
          <div
            ref={postTypesRef}
            className="absolute top-0 left-full w-[200px] bg-white shadow-xl border rounded-sm py-2 z-50"
            onMouseEnter={() => setIsPostTypesOpen(true)}
            onMouseLeave={() => setIsPostTypesOpen(false)}
          >
            <Link
              to="/blog/post/standard"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Standard Post
            </Link>
            <Link
              to="/blog/post/gallery"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Gallery Post
            </Link>
            <Link
              to="/blog/post/quote"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Quote Post
            </Link>
            <Link
              to="/blog/post/link"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Link Post
            </Link>
            <Link
              to="/blog/post/audio"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Audio Post
            </Link>
            <Link
              to="/blog/post/video"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Video Post
            </Link>
            <Link
              to="/blog/post/no-sidebar"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              No Sidebar Post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
