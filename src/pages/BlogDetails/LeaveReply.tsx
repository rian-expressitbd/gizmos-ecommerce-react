import { Button } from "@/components/ui/button";

export default function LeaveReply() {
  return (
    <div className="mt-10 mb-5">
      <h3 className="text-4xl font-bold mb-6">Leave a Reply</h3>
      <p className="text-sm text-gray-500 mb-6">
        Your email address will not be published. Required fields are marked *
      </p>

      <form className="space-y-6">
        <textarea
          className="w-full border border-gray-300 rounded-lg p-4 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Comment *"
          required
        ></textarea>

        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Name *"
          required
        />
        <input
          type="email"
          className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Email *"
          required
        />
        <input
          type="url"
          className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Website"
        />

        <div className="flex items-center">
          <input type="checkbox" id="save-info" className="mr-2" />
          <label htmlFor="save-info" className="text-gray-600 text-sm">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        <Button
          title="comment_btn"
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg text-sm uppercase font-semibold hover:bg-blue-800 transition"
        >
          Post Comment
        </Button>
      </form>
    </div>
  );
}
