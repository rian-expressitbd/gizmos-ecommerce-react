import {
  Accordion,
 
} from "@/components/ui/accordion";

export default function Accordions() {

  return (
    <div>
      <div className="max-w-xl mx-auto mt-10">
      <Accordion trigger={<h3 className="text-lg font-semibold">What is this?</h3>}>
        <p>This is a reusable Accordion component built with Tailwind and React.</p>
      </Accordion>

      <Accordion trigger={<h3 className="text-lg font-semibold">How does it work?</h3>}>
        <p>Clicking on the trigger toggles the visibility of the content.</p>
      </Accordion>
    </div>
    </div>
  );
}
