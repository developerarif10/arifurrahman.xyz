"use client";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { createContext, useContext, useEffect, useState } from "react";

const DrawerContext = createContext(undefined);

const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("Drawer components must be used within a Drawer");
  }
  return context;
};

export function Drawer({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <DrawerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function DrawerTrigger({ children, className }) {
  const { setIsOpen } = useDrawer();

  return (
    <button onClick={() => setIsOpen(true)} className={cn(className)}>
      {children}
    </button>
  );
}

export function DrawerContent({ children, className }) {
  const { isOpen, setIsOpen } = useDrawer();

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={cn(
              "fixed bottom-3 left-0 right-0 bg-background border-t border-border rounded-lg z-50 max-h-[70vh] overflow-hidden w-[95%] mx-auto flex flex-col",
              className
            )}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function DrawerHeader({ children, className, showCloseButton = true }) {
  const { setIsOpen } = useDrawer();

  return (
    <div
      className={cn(
        "flex items-center justify-between p-4 border-b border-border",
        className
      )}
    >
      <div className="flex-1">{children}</div>
      {showCloseButton && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(false)}
          className="text-muted-foreground hover:text-foreground transition-colors ml-4"
        >
          <X size={20} />
        </motion.button>
      )}
    </div>
  );
}

export function DrawerBody({ children, className }) {
  return (
    <div className={cn("p-4 overflow-y-auto flex-1", className)}>
      {children}
    </div>
  );
}

export function DrawerFooter({ children, className }) {
  return (
    <div className={cn("border-t border-border", className)}>{children}</div>
  );
}
