import { Building2, Mail, Users, Briefcase, BookOpen, Phone } from "lucide-react";

const footerSections = [
  {
    title: "Address",
    icon: Building2,
    content: (
      <address className="text-muted-foreground not-italic">
        <Building2 className="inline-block mr-2 mb-1" size={16} />
        123 Innovation Street<br />
        Tech District, TD 12345
      </address>
    ),
  },
  {
    title: "Product",
    icon: Briefcase,
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li className="flex items-center gap-2">
          <Briefcase size={16} />
          Solutions
        </li>
        <li className="flex items-center gap-2">
          <Briefcase size={16} />
          Services
        </li>
        <li className="flex items-center gap-2">
          <Briefcase size={16} />
          Integration
        </li>
      </ul>
    ),
  },
  {
    title: "About",
    icon: Users,
    content: (
      <ul className="space-y-2 text-muted-foreground">
        <li className="flex items-center gap-2">
          <Users size={16} />
          Team
        </li>
        <li className="flex items-center gap-2">
          <Users size={16} />
          Career
        </li>
        <li className="flex items-center gap-2">
          <BookOpen size={16} />
          Blog
        </li>
      </ul>
    ),
  },
  {
    title: "Contact",
    icon: Phone,
    content: (
      <div className="space-y-2 text-muted-foreground">
        <p className="flex items-center">
          <Mail className="mr-2" size={16} />
          contact@fabro.com
        </p>
        <p className="flex items-center">
          <Phone className="mr-2" size={16} />
          +1 (555) 123-4567
        </p>
      </div>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <section.icon size={18} />
                {section.title}
              </h3>
              {section.content}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}