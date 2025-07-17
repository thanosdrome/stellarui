import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 2 seconds and close modal
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
      // Reset form when closing
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
        setIsSubmitting(false);
      }, 200);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent 
        className="sm:max-w-md border-accent-dark-brown backdrop-blur-md"
        style={{
          background: `linear-gradient(135deg, rgba(var(--dark-background-rgb), 0.95) 0%, rgba(var(--accent-dark-brown-rgb), 0.8) 100%)`,
          backdropFilter: "blur(20px)",
        }}
      >
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-white mb-2">
            {isSubmitted ? "Welcome aboard! 🎉" : "Join the Waitlist"}
          </DialogTitle>
          <DialogDescription className="text-gray-70">
            {isSubmitted 
              ? "Thank you for joining! We'll notify you when StellarUI launches."
              : "Be the first to experience the future of UI design. Get early access and exclusive updates."
            }
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 bg-black/20 border-accent-dark-brown text-white placeholder:text-gray-70 focus:border-accent-orange-light focus:ring-accent-orange-light/20"
                disabled={isSubmitting}
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting || !email}
              className="w-full h-12 text-base font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: isSubmitting 
                  ? "linear-gradient(180deg, #6b4423 0%, #8b4a2a 100%)"
                  : "linear-gradient(180deg, #925C40 0%, #cd5a25 100%)",
                opacity: isSubmitting || !email ? 0.7 : 1,
              }}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Joining...
                </div>
              ) : (
                "Join the Waitlist"
              )}
            </Button>
          </form>
        ) : (
          <div className="flex flex-col items-center py-6">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-white font-medium">Successfully joined!</p>
            <p className="text-gray-70 text-sm mt-1">Check your email for confirmation</p>
          </div>
        )}

        <div className="text-center mt-4">
          <p className="text-xs text-gray-70">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};