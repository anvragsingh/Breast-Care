// Modal functionality and interactive elements
export class ModalController {
  constructor() {
    this.modals = new Map()
  }

  // Register a modal with its trigger and content
  registerModal(id, trigger, content, options = {}) {
    this.modals.set(id, {
      trigger,
      content,
      options: {
        autoShow: options.autoShow || false,
        delay: options.delay || 0,
        ...options
      }
    })
  }

  // Show modal with fade-in animation
  showModal(id) {
    const modal = this.modals.get(id)
    if (!modal) return

    const { content, options } = modal
    
    // Add fade-in animation
    content.style.opacity = '0'
    content.style.transform = 'translateY(20px)'
    content.style.display = 'block'
    
    setTimeout(() => {
      content.style.transition = 'all 0.3s ease-out'
      content.style.opacity = '1'
      content.style.transform = 'translateY(0)'
    }, 10)
  }

  // Hide modal with fade-out animation
  hideModal(id) {
    const modal = this.modals.get(id)
    if (!modal) return

    const { content } = modal
    
    content.style.transition = 'all 0.3s ease-in'
    content.style.opacity = '0'
    content.style.transform = 'translateY(20px)'
    
    setTimeout(() => {
      content.style.display = 'none'
    }, 300)
  }

  // Auto-show modal after delay
  autoShowModal(id) {
    const modal = this.modals.get(id)
    if (!modal || !modal.options.autoShow) return

    setTimeout(() => {
      this.showModal(id)
    }, modal.options.delay)
  }
}

// Utility functions for responsive design
export const responsiveUtils = {
  // Check if device is mobile
  isMobile() {
    return window.innerWidth <= 768
  },

  // Check if device is tablet
  isTablet() {
    return window.innerWidth > 768 && window.innerWidth <= 1024
  },

  // Check if device is desktop
  isDesktop() {
    return window.innerWidth > 1024
  },

  // Add responsive event listeners
  addResponsiveListener(callback) {
    window.addEventListener('resize', callback)
    return () => window.removeEventListener('resize', callback)
  }
}

// Logo interaction utilities
export const logoUtils = {
  // Add hover effects to logo
  addLogoHoverEffect(logoElement) {
    if (!logoElement) return

    logoElement.addEventListener('mouseenter', () => {
      logoElement.style.transform = 'scale(1.05)'
      logoElement.style.transition = 'transform 0.2s ease-in-out'
    })

    logoElement.addEventListener('mouseleave', () => {
      logoElement.style.transform = 'scale(1)'
    })
  },

  // Ensure logo is crisp on high-DPI displays
  optimizeLogoForRetina(logoElement) {
    if (!logoElement) return

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    // Set canvas size accounting for device pixel ratio
    canvas.width = logoElement.offsetWidth * dpr
    canvas.height = logoElement.offsetHeight * dpr
    canvas.style.width = logoElement.offsetWidth + 'px'
    canvas.style.height = logoElement.offsetHeight + 'px'

    ctx.scale(dpr, dpr)
  }
} 