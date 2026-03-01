import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistDialog = ({ open, onOpenChange }: WaitlistDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setLoading(true);
    try {
      const { error } = await supabase.from("waitlist").insert({
        name: name.trim(),
        email: email.trim(),
      });

      if (error) throw error;

      setSubmitted(true);
      toast({
        title: "You're on the list! 🎉",
        description: "We'll be in touch soon.",
      });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (open: boolean) => {
    if (!open) {
      // Reset form on close
      setTimeout(() => {
        setName("");
        setEmail("");
        setSubmitted(false);
      }, 300);
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="text-center py-6">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full gradient-primary flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl font-display font-bold">You're In!</DialogTitle>
              <DialogDescription className="text-base mt-2">
                We'll reach out soon to get you started with IvyLink.
              </DialogDescription>
            </DialogHeader>
            <Button variant="hero" className="mt-6" onClick={() => handleClose(false)}>
              Got It
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-display font-bold">
                Join the <span className="text-gradient">Waitlist</span>
              </DialogTitle>
              <DialogDescription className="text-base">
                Be the first to automate your med spa referrals with IvyLink.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="waitlist-name">Name</Label>
                <Input
                  id="waitlist-name"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  maxLength={100}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="waitlist-email">Email</Label>
                <Input
                  id="waitlist-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  maxLength={255}
                />
              </div>
              <Button variant="hero" size="lg" className="w-full group" type="submit" disabled={loading}>
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    Join the Waitlist
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
