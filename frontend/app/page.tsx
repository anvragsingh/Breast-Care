"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MessageCircle, ClipboardCheck, ScanLine, Newspaper, ExternalLink } from "lucide-react"
import { fetchBreastCancerNews, NewsArticle } from "@/lib/news-api"
import { HealthPriorityModal } from "@/components/health-priority-modal"
import { Logo } from "@/components/logo"

// News component
function NewsSection() {
  const [newsData, setNewsData] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [refreshing, setRefreshing] = useState(false)

  const loadNews = async () => {
    try {
      setLoading(true)
      setError(null)
      const news = await fetchBreastCancerNews()
      setNewsData(news)
    } catch (err) {
      setError('Failed to load news')
      console.error('Error loading news:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    await loadNews()
    setRefreshing(false)
  }

  useEffect(() => {
    loadNews()
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Newspaper className="w-8 h-8 text-pink-600 mr-3" />
            <h2 className="text-3xl font-bold text-center text-pink-900">Latest Breast Cancer News</h2>
          </div>
          <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
            Stay informed with the latest developments in breast cancer research, treatment, and prevention.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="border-pink-100 shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="w-full h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="w-full h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="w-4/6 h-4 bg-gray-200 rounded animate-pulse"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Newspaper className="w-8 h-8 text-pink-600 mr-3" />
            <h2 className="text-3xl font-bold text-center text-pink-900">Latest Breast Cancer News</h2>
          </div>
          <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
            Stay informed with the latest developments in breast cancer research, treatment, and prevention.
          </p>
          <div className="text-center">
            <p className="text-gray-500 mb-4">{error}</p>
            <Button 
              onClick={handleRefresh} 
              variant="outline" 
              className="border-pink-200 text-pink-700 hover:bg-pink-50"
              disabled={refreshing}
            >
              {refreshing ? "Refreshing..." : "Try Again"}
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Newspaper className="w-8 h-8 text-pink-600 mr-3" />
          <h2 className="text-3xl font-bold text-center text-pink-900">Latest Breast Cancer News</h2>
        </div>
        <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
          Stay informed with the latest developments in breast cancer research, treatment, and prevention.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news) => (
            <Card key={news.id} className="border-pink-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 text-xs font-medium text-pink-700 bg-pink-100 rounded-full">
                    News
                  </span>
                  <span className="text-xs text-gray-500">{news.publishedAt}</span>
                </div>
                <CardTitle className="text-lg text-pink-900 line-clamp-2">{news.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-sm text-gray-600 line-clamp-3">{news.description}</p>
                <p className="mt-2 text-xs text-gray-500">Source: {news.source.name}</p>
              </CardContent>
              <CardFooter className="pt-0">
                <a 
                  href={news.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 px-2 py-1 rounded text-sm flex items-center"
                >
                  Read More <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8 space-x-4">
          <Button 
            onClick={handleRefresh}
            variant="outline" 
            className="border-pink-200 text-pink-700 hover:bg-pink-50"
            disabled={refreshing}
          >
            {refreshing ? "Refreshing..." : "Refresh News"}
          </Button>
          <Link href="/blogs">
            <Button variant="outline" className="border-pink-200 text-pink-700 hover:bg-pink-50">
              View Blogs <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// FAQAccordion component for FAQ section
import { ChevronDown } from "lucide-react"

function FAQAccordion() {
  const faqs = [
    {
      question: "What are the early signs and symptoms of breast cancer?",
      answer: `The most commonly known early sign of breast cancer is a lump in the breast or underarm area. However, it's important to be aware of other changes as well. These can include alterations in the size or shape of the breast, any unusual or spontaneous nipple discharge, or changes to the skin such as dimpling or puckering. If you happen to notice any of these signs or anything else that feels out of the ordinary for your body, it is crucial to consult a doctor for a professional evaluation without delay.`
    },
    {
      question: "How is breast cancer diagnosed?",
      answer: `The process of diagnosing breast cancer typically begins with a physical examination by a doctor. If any abnormalities are suspected, further imaging tests are usually recommended. These include a mammogram, which is an X-ray of the breast, a breast ultrasound, which uses sound waves to create images, or sometimes an MRI for a more detailed view. While these tests can identify suspicious areas, the only definitive way to confirm a cancer diagnosis is through a biopsy, a procedure where a small tissue sample is removed and analyzed in a lab to determine if cancerous cells are present.`
    },
    {
      question: "Why are regular mammograms important, even if I feel healthy?",
      answer: `Yes, it is highly recommended to get regular mammograms even if you feel perfectly fine and have no symptoms. The primary benefit of routine screening is that it can detect many breast cancers at a very early stage, long before a lump can be felt or other symptoms appear. Finding cancer early is a critical factor in successful treatment and survival, which is why consistent screening is considered a life-saving practice.`
    },
    {
      question: "What are the main treatments for breast cancer?",
      answer: `Breast cancer treatment is highly personalized and the approach taken depends on the specific type and stage of the cancer. The treatment plan may involve one or a combination of several methods. These often include surgery to remove the cancerous tissue, chemotherapy to destroy cancer cells throughout the body, and radiation therapy to target any remaining cells in the breast area. Additionally, more specialized treatments such as hormone therapy, which is effective for hormone-sensitive cancers, or targeted therapy, which focuses on specific cancer cell characteristics, may be used.`
    },
    {
      question: "Is chemotherapy always necessary for breast cancer treatment?",
      answer: `No, chemotherapy is not a required treatment for every case of breast cancer. The decision to use chemo depends heavily on the specific characteristics of the tumor. For instance, some cancers that are diagnosed at an early stage or are hormone-positive may be effectively treated with other methods, such as hormone therapy or targeted drugs, either in combination with surgery and radiation or as a standalone treatment, making chemotherapy unnecessary.`
    },
    {
      question: "How can I get a diagnostic test scheduled?",
      answer: `Yes, absolutely. We have made it convenient for you to take control of your health screenings. You can easily schedule important diagnostic tests, such as a mammogram, or book a consultation with a specialist directly through our website’s user-friendly booking system.`
    },
    {
      question: "What kind of emotional and mental support is available during breast cancer treatment?",
      answer: `We understand that a breast cancer journey is emotionally and mentally challenging, which is why comprehensive support is a core part of our care. We offer patients access to professional counselors for one-on-one support, as well as connections to support groups where you can share experiences with others on a similar path. Furthermore, we can connect you with survivor mentors who have been through treatment themselves and can provide invaluable guidance and encouragement to help you cope throughout your journey.`
    },
    {
      question: "What does follow-up care involve after breast cancer treatment?",
      answer: `Yes, consistent follow-up care is an essential part of your long-term health plan after completing breast cancer treatment. These regular check-ups are vital for several reasons: they allow your medical team to monitor your recovery, help manage any long-term side effects from treatment, and are crucial for detecting any potential recurrence of cancer as early as possible. This ongoing care is key to maintaining your long-term health and well-being.`
    },
  ]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border border-pink-200 rounded-lg bg-white shadow-sm">
          <button
            className="w-full flex items-center justify-between px-6 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded-lg transition-colors"
            onClick={() => toggle(idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`faq-panel-${idx}`}
          >
            <span className="font-semibold text-pink-900 text-left text-base md:text-lg">
              {faq.question}
            </span>
            <ChevronDown
              className={`w-6 h-6 ml-4 text-pink-600 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
            />
          </button>
          <div
            id={`faq-panel-${idx}`}
            className={`px-6 pb-4 text-gray-700 text-sm md:text-base transition-all duration-300 ease-in-out ${openIndex === idx ? 'block' : 'hidden'}`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const [showModal, setShowModal] = useState(false)

  const handleScrollToServices = () => {
    if (servicesRef.current) {
      const headerOffset = 100; // Adjust this value based on your header height
      const elementPosition = servicesRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
  const handleScrollToFaq = () => {
    if (faqRef.current) {
      const yOffset = -100; // Slightly more offset for FAQ to ensure heading is fully visible
      const y = faqRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  // Show modal after a short delay when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 2000) // Show modal after 2 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-10 bg-white border-b border-pink-200">
        <div className="container flex items-center justify-between h-20 px-4 mx-auto">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Logo 
              height={40} // Reduce from 80 to 40
              width={180} // Reduce from 180 to 120
              className="flex-shrink-0 h-14 w-auto" // Simplify the className
            />
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="/" className="text-pink-950 hover:text-pink-600 transition-colors">
              Home
            </Link>
            <Link href="/blogs" className="text-pink-950 hover:text-pink-600 transition-colors">
              Blogs
            </Link>
            <Link href="/chat" className="text-pink-950 hover:text-pink-600 transition-colors">
              Chat
            </Link>
            <Link href="/risk-assessment" className="text-pink-950 hover:text-pink-600 transition-colors">
              Risk Assessment
            </Link>
            <Link href="/scan-assessment" className="text-pink-950 hover:text-pink-600 transition-colors">
              Scan Assessment
            </Link>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="text-pink-950">
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-pink-50 to-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight text-pink-900 sm:text-5xl md:text-6xl">
                Early Detection Saves Lives
              </h1>
              <p className="mt-6 text-xl text-pink-700">
                Our comprehensive breast cancer detection tools help you stay informed, assess your risk, and take
                control of your health.
              </p>
              {/* Buttons removed as per user request */}
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* New Button Block */}
        <section className="py-12 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={handleScrollToServices} 
                className="px-8 py-3 text-lg font-medium text-white transition-colors bg-pink-600 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Get Started
              </button>
              <button 
                onClick={handleScrollToFaq} 
                className="px-8 py-3 text-lg font-medium text-pink-700 transition-colors bg-pink-100 rounded-lg hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={servicesRef} className="py-16" id="services">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-pink-900">Our Services</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="group relative overflow-hidden border-pink-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10 pb-4">
                  <div className="p-2 mb-4 rounded-full bg-pink-50 w-fit">
                    <MessageCircle className="w-6 h-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-pink-900">AI Chatbot</CardTitle>
                  <CardDescription>Get instant answers to your breast health questions</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600">
                    Our AI-powered chatbot provides reliable information about breast cancer, symptoms, and preventive
                    measures.
                  </p>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Link href="/chat">
                    <Button variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-0">
                      Start chatting <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="group relative overflow-hidden border-pink-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10 pb-4">
                  <div className="p-2 mb-4 rounded-full bg-pink-50 w-fit">
                    <ClipboardCheck className="w-6 h-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-pink-900">Risk Assessment</CardTitle>
                  <CardDescription>Evaluate your personal risk factors</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600">
                    Take our comprehensive quiz to understand your risk level based on family history, lifestyle, and
                    other factors.
                  </p>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Link href="/risk-assessment">
                    <Button variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-0">
                      Take assessment <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="group relative overflow-hidden border-pink-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10 pb-4">
                  <div className="p-2 mb-4 rounded-full bg-pink-50 w-fit">
                    <ScanLine className="w-6 h-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-pink-900">Scan Assessment</CardTitle>
                  <CardDescription>Advanced imaging analysis</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600">
                    Upload your mammogram or ultrasound images for AI-assisted analysis and early detection support.
                  </p>
                </CardContent>
                <CardFooter className="relative z-10">
                  <Link href="/scan-assessment">
                    <Button variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-0">
                      Upload scan <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Breast Cancer Awareness Section */}
        <section className="py-16 bg-gradient-to-b from-white to-pink-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-pink-900 mb-4">Breast Cancer Awareness</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                Knowledge is power. Learn about breast cancer symptoms, treatment options, and advanced therapies to make informed decisions about your health.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {/* What is Breast Cancer & Symptoms */}
              <Card className="group relative overflow-hidden border-pink-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10 pb-4">
                  <div className="p-3 mb-4 rounded-full bg-pink-50 w-fit">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <CardTitle className="text-pink-900">What is Breast Cancer & Symptoms</CardTitle>
                  <CardDescription>Understanding the basics and early warning signs</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <div className="p-4 bg-pink-50 rounded-lg">
                      <h4 className="font-semibold text-pink-800 mb-2">Common Symptoms:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Lump or thickening in breast or underarm</li>
                        <li>• Changes in breast size or shape</li>
                        <li>• Nipple discharge or inversion</li>
                        <li>• Skin changes (redness, dimpling)</li>
                        <li>• Breast pain or tenderness</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Risk Factors:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Age (50+ years)</li>
                        <li>• Family history</li>
                        <li>• Genetic mutations (BRCA1/2)</li>
                        <li>• Hormone replacement therapy</li>
                        <li>• Dense breast tissue</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Treatment Options */}
              <Card className="group relative overflow-hidden border-pink-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10 pb-4">
                  <div className="p-3 mb-4 rounded-full bg-pink-50 w-fit">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <CardTitle className="text-pink-900">Treatment Options for Breast Cancer</CardTitle>
                  <CardDescription>Comprehensive treatment approaches</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Surgical Options:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Lumpectomy (breast-conserving)</li>
                        <li>• Mastectomy (complete removal)</li>
                        <li>• Sentinel lymph node biopsy</li>
                        <li>• Axillary lymph node dissection</li>
                        <li>• Breast reconstruction</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Medical Therapies:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Chemotherapy</li>
                        <li>• Radiation therapy</li>
                        <li>• Hormone therapy</li>
                        <li>• Targeted therapy</li>
                        <li>• Immunotherapy</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Advanced Therapies */}
              <Card className="group relative overflow-hidden border-pink-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10 pb-4">
                  <div className="p-3 mb-4 rounded-full bg-pink-50 w-fit">
                    <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <CardTitle className="text-pink-900">Advanced Therapies</CardTitle>
                  <CardDescription>Hormone, Targeted & Immunotherapy</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Hormone Therapy:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Tamoxifen (SERM)</li>
                        <li>• Aromatase inhibitors</li>
                        <li>• Ovarian suppression</li>
                        <li>• Fulvestrant</li>
                        <li>• CDK4/6 inhibitors</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-teal-50 rounded-lg">
                      <h4 className="font-semibold text-teal-800 mb-2">Targeted & Immunotherapy:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• HER2-targeted therapy</li>
                        <li>• PARP inhibitors</li>
                        <li>• Checkpoint inhibitors</li>
                        <li>• CAR-T cell therapy</li>
                        <li>• Antibody-drug conjugates</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* News Section */}
        <NewsSection />

        {/* Statistics Section */}
        <section className="py-16 bg-pink-50">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center text-pink-900">Why Early Detection Matters</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-pink-600">99%</p>
                <p className="mt-2 text-gray-700">5-year survival rate when breast cancer is detected early</p>
              </div>
              <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-pink-600">1 in 8</p>
                <p className="mt-2 text-gray-700">Women will develop breast cancer in their lifetime</p>
              </div>
              <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                <p className="text-4xl font-bold text-pink-600">30%</p>
                <p className="mt-2 text-gray-700">Reduction in mortality through regular screening</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta-section" className="py-16">
          <div className="container px-4 mx-auto">
            <div className="p-8 text-center bg-gradient-to-r from-pink-100 to-pink-50 rounded-xl">
              <h2 className="text-3xl font-bold text-pink-900">Take Control of Your Breast Health Today</h2>
              <p className="max-w-2xl mx-auto mt-4 text-lg text-pink-700">
                Regular screenings and risk assessments are key to early detection. Start your journey to better breast
                health now.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link href="/risk-assessment">
                  <Button className="bg-pink-600 hover:bg-pink-700">Start Risk Assessment</Button>
                </Link>
                <Link href="/chat">
                  <Button variant="outline" className="border-pink-200 text-pink-700 hover:bg-pink-50">
                    Chat with AI Assistant
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FAQ Section */}
      <section id="faq-section" ref={faqRef} className="py-16 bg-white border-t border-pink-100">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pink-900 mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Answers to common questions about breast cancer, diagnosis, treatment, and support.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-pink-900 text-pink-100">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-semibold">BrestCare</h3>
              <p className="text-pink-200">Dedicated to breast cancer awareness, early detection, and support.</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/chat" className="text-pink-200 hover:text-white">
                    Chat
                  </Link>
                </li>
                <li>
                  <Link href="/risk-assessment" className="text-pink-200 hover:text-white">
                    Risk Assessment
                  </Link>
                </li>
                <li>
                  <Link href="/scan-assessment" className="text-pink-200 hover:text-white">
                    Scan Assessment
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-pink-200 hover:text-white">
                    About Breast Cancer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-pink-200 hover:text-white">
                    Support Groups
                  </a>
                </li>
                <li>
                  <a href="#" className="text-pink-200 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 mt-8 text-center border-t border-pink-800">
            <p className="text-pink-300">&copy; {new Date().getFullYear()} BrestCare. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Health Priority Modal */}
      <HealthPriorityModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </div>
  )
}
