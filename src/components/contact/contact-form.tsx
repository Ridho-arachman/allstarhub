import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-2xl font-semibold">Send us a message</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input placeholder="Name" />
        <Input placeholder="Company" />
        <Input placeholder="Phone" />
        <Input placeholder="Email" type="email" />
      </div>
      <Input placeholder="Subject" />
      <Textarea placeholder="Message" className="min-h-[150px]" />
      <Button className="w-full text-white">Send</Button>
    </div>
  );
};

export default ContactForm;
