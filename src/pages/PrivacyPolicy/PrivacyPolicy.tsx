import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="mt-5">
        <Breadcrumb />
      </div>
      <div className="space-y-8 mt-[50px]">
        <div className="max-w-4xl mx-auto p-6 space-y-8 text-gray-800">
          {/* Section */}
          <section>
            <h2 className="text-2xl font-bold">Who we are</h2>
            <p>
              <span className="font-semibold">Suggested text:</span> Our website
              address is:{" "}
              <a
                href="https://gizmos.qodeinteractive.com"
                className="text-blue-600 underline"
              >
                https://gizmos.qodeinteractive.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Comments</h2>
            <p>
              <span className="font-semibold">Suggested text:</span> When
              visitors leave comments on the site we collect the data shown in
              the comments form, and also the visitors’ IP address and browser
              user agent string to help spam detection.
            </p>
            <p>
              An anonymized string created from your email address (also called
              a hash) may be provided to the Gravatar service to see if you are
              using it. The Gravatar service privacy policy is available here:{" "}
              <a
                href="https://automattic.com/privacy/"
                className="text-blue-600 underline"
              >
                https://automattic.com/privacy/
              </a>
              . After approval of your comment, your profile picture is visible
              to the public in the context of your comment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Media</h2>
            <p>
              <span className="font-semibold">Suggested text:</span> If you
              upload images to the website, you should avoid uploading images
              with embedded location data (EXIF GPS) included. Visitors to the
              website can download and extract any location data from images on
              the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Cookies</h2>
            <p>
              <span className="font-semibold">Suggested text:</span> If you
              leave a comment on our site you may opt-in to saving your name,
              email address and website in cookies...
            </p>
            {/* Add the remaining cookie details as <p>... </p> */}
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Embedded content from other websites
            </h2>
            <p>
              <span className="font-semibold">Suggested text:</span> Articles on
              this site may include embedded content (e.g. videos, images,
              articles, etc.)...
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Who we share your data with</h2>
            <p>
              <span className="font-semibold">Suggested text:</span> If you
              request a password reset, your IP address will be included in the
              reset email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">How long we retain your data</h2>
            <p>
              <span className="font-semibold">Suggested text:</span> If you
              leave a comment, the comment and its metadata are retained
              indefinitely...
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              What rights you have over your data
            </h2>
            <p>
              <span className="font-semibold">Suggested text:</span> If you have
              an account on this site, or have left comments, you can request to
              receive an exported file...
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Where your data is sent</h2>
            <p>
              <span className="font-semibold">Suggested text:</span> Visitor
              comments may be checked through an automated spam detection
              service.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
