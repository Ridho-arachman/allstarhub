import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Get in touch</h2>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <MapPin className="mt-1 h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Head Office</p>
            <p className="text-sm text-muted-foreground">
              123 Basketball Street, NBA City
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Mail className="mt-1 h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Email Us</p>
            <p className="text-sm text-muted-foreground">
              info@allstarhub.com
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="mt-1 h-5 w-5 text-primary" />
          <div>
            <p className="font-medium">Call Us</p>
            <p className="text-sm text-muted-foreground">+1 234 567 8900</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <p className="font-medium">Follow our social media</p>
        <div className="flex space-x-4">
          {[
            { icon: Facebook, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Instagram, href: "#" },
            { icon: Linkedin, href: "#" },
          ].map(({ icon: Icon, href }, index) => (
            <Link
              key={index}
              href={href}
              className="rounded-full bg-muted p-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;