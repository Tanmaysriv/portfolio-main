import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";
import { heroConfig, skillComponents, socialLinks } from "@/config/hero";
import { parseTemplate } from "@/lib/hero";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Container from "../common/container";
import Skill from "../common/skill";
import CV from "../svg/CV";
import Chat from "../svg/Chat";
import { Button } from "../ui/button";
import Link from "next/link";
const buttonIcons = {
    CV: CV,
    Chat: Chat,
};
export default function Hero() {
  const { avatar, name, title, description, skills, buttons } = heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === "skill" && "skill" in part && part.skill) {
        const SkillComponent =
          part.skill.component && skillComponents[part.skill.component];

        if (SkillComponent) {
          return (
            <Skill
              key={part.key}
              name={part.skill.name}
              href={part.skill.href}
            >
              <SkillComponent />
            </Skill>
          );
        }

        return (
          <a
            key={part.key}
            href={part.skill.href}
            className="text-primary underline underline-offset-4"
          >
            {part.skill.name}
          </a>
        );
      }

      if (part.type === "bold" && "text" in part) {
        return (
          <b
            key={part.key}
            className="whitespace-pre-wrap text-primary"
          >
            {part.text}
          </b>
        );
      }

      if (part.type === "text" && "text" in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }

      return null;
    });
  };

  return (
    <Container className="mx-auto w-full max-w-5xl px-5 sm:px-6 md:px-8">
      {/* Avatar */}
      <Image
        src={avatar}
        alt={name}
        width={100}
        height={100}
        priority
        className="
          size-20
          rounded-full
          bg-blue-300
          object-cover
          dark:bg-yellow-300
          sm:size-24
          md:size-28
        "
      />

      {/* Hero text */}
      <div className="mt-6 flex flex-col gap-2 sm:mt-8">
        <h1
          className="
            max-w-5xl
            text-3xl
            font-bold
            leading-[1.08]
            tracking-tight
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
          "
        >
          Hi, I'm {name} -{" "}
          <span className="text-secondary">
            {title}
          </span>
        </h1>

        {/* Description */}
        <div
          className="
            mt-4
            max-w-3xl
            text-sm
            leading-6
            whitespace-pre-wrap
            text-neutral-500
            sm:text-base
            sm:leading-7
            md:text-lg
            md:leading-8
          "
        >
          {renderDescription()}
        </div>
      </div>

      {/* Buttons */}
      <div
        className="
          mt-7
          flex
          w-full
          flex-col
          gap-3
          sm:mt-8
          sm:w-auto
          sm:flex-row
          sm:gap-4
        "
      >
        {buttons.map((button, idx) => {
          const Icon = buttonIcons[button.icon];

          return (
            <Link
              key={`${button.text}-${idx}`}
              href={button.href}
              className="w-full sm:w-auto"
            >
              <Button
                variant={button.varaiant}
                className={cn(
                  button.varaiant === "outline" &&
                    "inset-shadow-indigo-500",
                  button.varaiant === "default" &&
                    "inset-shadow-indigo-500",
                  "w-full cursor-pointer sm:w-auto"
                )}
              >
                {Icon && <Icon />}
                {button.text}
              </Button>
            </Link>
          );
        })}
      </div>

      {/* Social links */}
      <div className="mt-7 flex gap-4 sm:mt-8 sm:gap-3">
        <TooltipProvider delayDuration={0}>
          {socialLinks.map((link, idx) => (
            <Tooltip key={`${link.name}-${idx}`}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  className="
                    text-secondary
                    flex
                    items-center
                    gap-2
                    transition-transform
                    duration-200
                    hover:scale-110
                  "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="size-6">
                    {link.icon}
                  </span>
                </Link>
              </TooltipTrigger>

              <TooltipContent
                side="top"
                sideOffset={6}
                className="
                  z-50
                  rounded
                  bg-white
                  px-3
                  py-1
                  text-xs
                  text-black
                  shadow
                "
              >
                {link.name}
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </Container>
  );
}