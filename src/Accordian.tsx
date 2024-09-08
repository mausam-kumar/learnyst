import { DisclosurePanel, DisclosureButton, Disclosure } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { ChevronDown } from "./icons";

const Accordion = ({ title, child, showDownArrow = false }: {
  title: ReactNode, child: ReactNode, showDownArrow?: boolean
}) => (
  <Disclosure as="div" className="p-2 border shadow-sm rounded">
    {({ open }) => (
      <>
        <DisclosureButton className={`inline-flex items-center cursor-pointer justify-between w-full mb-1 ${open ? "font-semibold" : ""}`}>
          {title}
          <motion.span
            whileHover={{ backgroundColor: "rgb(161 161 170 / 0.3)" }}
            initial={{ backgroundColor: "transparent" }}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{
              duration: 0.15,
              type: "tween",
            }}
            className="rounded-full"
          />
          {showDownArrow && <ChevronDown />}
        </DisclosureButton>
        <AnimatePresence>
          <DisclosurePanel
            as={motion.div}
            initial={{ y: -20, opacity: 0.2 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: -20,
              opacity: 0.2,
              transition: { duration: 0.2, type: "tween" },
            }}
            transition={true}
            className="text-sm text-neutral-700"
          >
            {child}
          </DisclosurePanel>
        </AnimatePresence>
      </>
    )}
  </Disclosure>
);

export default Accordion;
