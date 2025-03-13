import HeroSection from "@/components/contact/hero-section";
import ContactInfo from "@/components/contact/contact-info";
import ContactForm from "@/components/contact/contact-form";

export const metadata = {
  title: "Contact Us | AllStarHub",
  description: "Get in touch with AllStarHub for any inquiries or support.",
};

const ContactPage = () => {
  return (
    <main>
      <HeroSection />
      <section className="container mx-auto my-16 px-4">
        <div className="mx-auto grid max-w-5xl gap-12 rounded-lg bg-background p-8 shadow-lg md:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
