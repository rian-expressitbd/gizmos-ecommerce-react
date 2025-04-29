import React, { useState } from "react";

// Accordion Trigger Props
type AccordionTriggerProps = {
  children: React.ReactNode;
  onClick: () => void;
  isOpen: boolean;
};

// Accordion Content Props
type AccordionContentProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

// Accordion Trigger Component
export const AccordionTrigger = ({
  children,
  onClick,
  isOpen,
}: AccordionTriggerProps) => {
  return (
    <div
      className="flex justify-between items-center cursor-pointer p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <span className="font-medium text-gray-900">{children}</span>
      <span className="transform transition-transform duration-200 text-gray-500">
        {isOpen ? "▲" : "▼"}
      </span>
    </div>
  );
};

// Accordion Content Component
export const AccordionContent = ({
  children,
  isOpen,
}: AccordionContentProps) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-200 ${
        isOpen ? "max-h-full" : "max-h-0"
      }`}
    >
      <div className="p-4 bg-white">{children}</div>
    </div>
  );
};

// Main Accordion Component
type AccordionProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean; // Added this prop type
};

export const Accordion = ({
  trigger,
  children,
  defaultOpen = false,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-1 border border-gray-200 rounded-lg overflow-hidden">
      <AccordionTrigger onClick={toggleAccordion} isOpen={isOpen}>
        {trigger}
      </AccordionTrigger>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </div>
  );
};
