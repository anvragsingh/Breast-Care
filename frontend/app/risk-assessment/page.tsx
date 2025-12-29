
"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Logo } from "@/components/logo"
import quizData from '../../../breast_cancer_quiz.json'

export default function RiskAssessmentPage() {
  // Merge original questions with new ones
  const newQuestions = [
    {
      id: 1001,
      question: "How often do you perform breast self-examinations?",
      options: [
        { text: "Monthly", points: 0 },
        { text: "Occasionally", points: 1 },
        { text: "Rarely/Never", points: 2 },
        { text: "Not sure how", points: 2 }
      ]
    },
    {
      id: 1002,
      question: "How often do you attend regular breast cancer screening (mammogram/ultrasound) as recommended for your age group?",
      options: [
        { text: "Always, as recommended", points: 0 },
        { text: "Sometimes, but not regularly", points: 1 },
        { text: "Rarely/Never", points: 2 },
        { text: "Not eligible by age", points: 0 }
      ]
    }
  ]
  const questions = [...quizData.questions, ...newQuestions]
  const scoring = quizData.scoring

  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [result, setResult] = useState<any>(null)

  const handleOptionChange = (questionId: number, points: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: points }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Sum points
    const total = Object.values(answers).reduce((sum, v) => sum + (typeof v === 'number' ? v : 0), 0)
    // Find risk level
    let risk = scoring[0]
    for (const s of scoring) {
      const [min, max] = s.range.includes('+') ? [parseInt(s.range), Infinity] : s.range.split('-').map(Number)
      if (total >= min && total <= max) {
        risk = s
        break
      }
    }
    setResult({ total, ...risk })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b border-pink-200">
        <div className="container flex items-center justify-between h-20 px-4 mx-auto">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Logo 
              height={40} 
              width={180} 
              className="flex-shrink-0 md:w-48 md:h-14 w-36 h-8 leading-none" 
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
            <Link href="/risk-assessment" className="text-pink-600 font-medium">
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

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-0">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
            </Button>
          </Link>

          <h1 className="text-3xl font-bold text-pink-900 mb-4">{quizData.title}</h1>
          <p className="text-gray-600 mb-4">{quizData.description}</p>
          <p className="text-sm text-pink-700 bg-pink-50 p-3 rounded-md mb-8">{quizData.disclaimer}</p>

          <form className="space-y-8" onSubmit={handleSubmit}>
            {questions.map((q) => (
              <Card key={q.id} className="border-pink-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-pink-900">{q.question}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {q.options.map((opt: any, idx: number) => (
                    <label key={idx} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={opt.points}
                        onChange={() => handleOptionChange(q.id, opt.points)}
                        className="text-pink-600 focus:ring-pink-500"
                      />
                      <span className="text-gray-700">{opt.text}</span>
                    </label>
                  ))}
                </CardContent>
              </Card>
            ))}

            <Button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3"
            >
              Get My Risk Assessment
            </Button>
          </form>

          {result && (
            <Card className="mt-8 border-pink-200 bg-pink-50">
              <CardHeader>
                <CardTitle className="text-pink-900">Your Risk Assessment Result</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-pink-700">Risk Level:</Label>
                    <p className="text-lg font-semibold text-pink-900">{result.level}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-pink-700">Score:</Label>
                    <p className="text-lg font-semibold text-pink-900">{result.total} points</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-pink-700">Description:</Label>
                    <p className="text-gray-700">{result.description}</p>
                  </div>
                  {result.recommendations && (
                    <div>
                      <Label className="text-sm font-medium text-pink-700">Recommendations:</Label>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {result.recommendations.map((rec: string, idx: number) => (
                          <li key={idx}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
