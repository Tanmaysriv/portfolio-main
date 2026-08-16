import { Mail, Linkedin, Github, Code2 } from "lucide-react";
export const contactConfig = {
    title: "Let's Contact",
    description: "Open for collaboration, ideas, or just a good tech conversation.",
    form: {
        labels: {
            name: "Name",
            email: "Email",
            phone: "Phone Number",
            message: "Message",
        },
        placeholders: {
            name: "Your name",
            email: "your.email@example.com",
            phone: "+1 (555) 123-4567",
            message: "Tell me about your project...",
        },
        submitButton: "Send Message",
        successMessage: "Thanks for your message! I'll get back to you soon.",
        errorMessage: "Something went wrong. Please try again.",
    },
    socialData: [
        {
            name: "Email",
            text: "srivastavatanmay888@gmail.com",
            icon: Mail,
            href: "mailto:srivastavatanmay888@gmail.com"
        },
    ],
    socialLinks: [
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "https://www.linkedin.com/in/tanmaysrivastava888/",
        },
        {
  name: "GitHub",
  icon: Github,
  href: "https://github.com/Tanmaysriv",
},
        {
  name: "LeetCode",
  icon: Code2,
  href: "https://leetcode.com/u/salvatore007/",
},
    ],
};
