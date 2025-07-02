import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";

const CallToAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mt-20"
    >
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">🔥 WebNexa AI</h2>
        <p className="text-xl text-gray-300">
          Your Website. Your AI Agents. Your Business — on Autopilot.
        </p>
      </motion.div>
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Free Strategy Call
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.div>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl w-full">
          <DialogTitle>Book a Free Strategy Call</DialogTitle>
          <iframe
            src="https://calendly.com/d/cv2k-w6g-qvk/30-minute-meeting"
            title="Book a Call"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
          />
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default CallToAction; 