"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

interface HealthPriorityModalProps {
  isOpen: boolean
  onClose: () => void
}

export function HealthPriorityModal({ isOpen, onClose }: HealthPriorityModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Small delay to trigger the fade-in animation
      const timer = setTimeout(() => setIsVisible(true), 100)
      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg sm:max-w-xl lg:max-w-2xl bg-white rounded-xl border-0 shadow-2xl p-0 overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full p-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 shadow-sm"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        <div className={`transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Illustration Section */}
          <div className="relative bg-gradient-to-br from-pink-50 to-pink-100 p-8">
            <div className="flex items-center justify-center mb-4">
              {/* SVG Illustration - Doctor and Patient */}
                             <svg
                 width="160"
                 height="100"
                 viewBox="0 0 160 100"
                 className="text-pink-600"
                 fill="currentColor"
               >
                                 {/* Doctor figure */}
                 <g transform="translate(15, 25)">
                   {/* Doctor's head */}
                   <circle cx="20" cy="12" r="10" fill="#fdf2f8" stroke="#ec4899" strokeWidth="1.5"/>
                   {/* Doctor's body */}
                   <rect x="15" y="22" width="10" height="25" fill="#fdf2f8" stroke="#ec4899" strokeWidth="1.5"/>
                   {/* Doctor's coat */}
                   <rect x="12" y="22" width="16" height="27" fill="white" stroke="#ec4899" strokeWidth="1.5"/>
                   {/* Stethoscope */}
                   <path d="M 17 30 Q 12 24 6 30 Q 12 36 17 30" fill="none" stroke="#374151" strokeWidth="1.5"/>
                   <circle cx="6" cy="30" r="2.5" fill="#374151"/>
                   <circle cx="12" cy="24" r="1.5" fill="#374151"/>
                   {/* Doctor's arm pointing */}
                   <path d="M 27 30 L 35 25" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round"/>
                   <circle cx="35" cy="25" r="1.5" fill="#ec4899"/>
                 </g>

                 {/* Patient figure */}
                 <g transform="translate(85, 25)">
                   {/* Patient's head */}
                   <circle cx="20" cy="12" r="10" fill="#fdf2f8" stroke="#ec4899" strokeWidth="1.5"/>
                   {/* Patient's body */}
                   <rect x="15" y="22" width="10" height="25" fill="#fdf2f8" stroke="#ec4899" strokeWidth="1.5"/>
                   {/* Patient's top */}
                   <rect x="12" y="22" width="16" height="27" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5"/>
                   {/* Patient's hand on chest */}
                   <ellipse cx="17" cy="35" rx="4" ry="2.5" fill="#fdf2f8" stroke="#ec4899" strokeWidth="1"/>
                   {/* Pink ribbon on patient */}
                   <path d="M 12 30 Q 9 27 12 24 Q 15 27 12 30" fill="#be185d"/>
                   <path d="M 12 24 L 12 21" stroke="#be185d" strokeWidth="1.5"/>
                 </g>

                 {/* Connection line between figures */}
                 <path d="M 50 50 L 110 50" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.6"/>
              </svg>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 text-center">
            <DialogHeader className="space-y-6">
              <DialogTitle className="text-3xl font-bold text-pink-900 leading-tight">
                Your Health, Our Priority.
              </DialogTitle>
              <p className="text-lg text-pink-700 leading-relaxed">
                Empowering early detection with AI care.
              </p>
            </DialogHeader>

            {/* Call to action */}
            <div className="mt-6">
              <button
                onClick={onClose}
                className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 