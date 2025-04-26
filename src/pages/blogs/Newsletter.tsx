import { InputField } from "@/components/ui/form/input-field";


export default function Newsletter() {
  return (
    <div className="mt-[50px]">
     <h3 className="text-2xl font-semibold">Newsletter</h3> 
     <div className="mt-5">
        <p className="text-sm text-gray-400">
        Submit to our newsletter to be lorem ipsum sit amet dolor huperti nec
        </p>
        <div className="mt-4">
            <InputField className="w-full rounded-md" id="newsletter" placeholder="Type Your Email..."/>
        </div>
     </div>
    </div>
  )
}
