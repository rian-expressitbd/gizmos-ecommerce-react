import CommonContactForm from "../common/CommonContactForm";

export default function ContactForm() {
  return (
    <div className="mt-[50px]">
      <h1 className="text-5xl font-semibold">Ask Us a Question</h1>
      <p className="text-sm mt-5">
        Your email address will not be published. Required fields are marked *
      </p>
      <CommonContactForm />
    </div>
  );
}
