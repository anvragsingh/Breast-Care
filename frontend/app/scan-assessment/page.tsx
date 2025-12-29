"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming correct path
import { ArrowLeft, Upload, FileImage } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Assuming correct path
import { Label } from "@/components/ui/label"; // Added Label import
import { Logo } from "@/components/logo"; // Added Logo import

// Define the shape of the general info data
type GeneralInfo = {
  fullName: string;
  age: string;
  gender: string;
  contact: string; // Kept as string, could be more specific if needed
};

// --- GeneralInfoForm Component (from Snippet 1) ---
// Component for collecting general info before upload
const GeneralInfoForm: React.FC<{ onSubmit: (data: GeneralInfo) => void }> = ({ onSubmit }) => {
  const [formState, setFormState] = useState<GeneralInfo>({
    fullName: "",
    age: "",
    gender: "",
    contact: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation can be added here if needed
    onSubmit(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          value={formState.fullName}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
        />
      </div>

      <div>
        <label htmlFor="age" className="block mb-1 text-sm font-medium text-gray-700">Age</label>
        <input
          id="age"
          type="number"
          name="age"
          value={formState.age}
          onChange={handleChange}
          required
          min="0" // Optional: basic validation
          className="w-full p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
        />
      </div>

      <div>
        <label htmlFor="gender" className="block mb-1 text-sm font-medium text-gray-700">Gender</label>
        <select
          id="gender"
          name="gender"
          value={formState.gender}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
        >
          <option value="" disabled>Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact" className="block mb-1 text-sm font-medium text-gray-700">
          Contact Info <span className="text-xs text-gray-500">(Optional - e.g., email or phone)</span>
        </label>
        <input
          id="contact"
          type="text"
          name="contact"
          value={formState.contact}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:ring-pink-500 focus:border-pink-500"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition"
      >
        Save Info & Proceed to Upload
      </Button>
    </form>
  );
};

// --- Main ScanAssessmentPage Component (Integrated) ---
export default function ScanAssessmentPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null); // Consider defining a more specific type for the result
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generalInfo, setGeneralInfo] = useState<GeneralInfo | null>(null); // State to hold submitted general info
  const [infoSubmitted, setInfoSubmitted] = useState(false); // Track if form was submitted

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      // Reset results when a new file is selected
      setResult(null);
      setError(null);
    } else {
        // Clear preview if no file is selected (e.g., user cancels selection)
        setSelectedFile(null);
        setPreviewUrl(null);
    }
  };

  const handleUploadClick = () => {
    // Trigger the hidden file input
    document.getElementById("fileInput")?.click();
  };

  // Handles submission of the General Info form
  const handleInfoFormSubmit = (data: GeneralInfo) => {
    setGeneralInfo(data);
    setInfoSubmitted(true); // Mark info as submitted
    setError(null); // Clear previous errors
    console.log("General Info submitted:", data);
    // Optionally, scroll to the upload section or give visual feedback
  };

  // Handles the final submission (Analyze Scan)
  const handleScanSubmit = async () => {
    // 1. Check if General Info has been submitted
    if (!generalInfo) {
      setError("Please complete and save the 'General Info' section first.");
      // Optionally, focus or highlight the form section
      return;
    }

    // 2. Check if a file has been selected
    if (!selectedFile) {
      setError("Please select a scan file to upload.");
      return;
    }

    // 3. Start loading state and clear previous results/errors
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // 4. Convert file to base64
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        // Ensure result is string and split correctly
        reader.onload = () => {
            const resultString = reader.result as string;
            if (resultString && resultString.includes(',')) {
                resolve(resultString.split(",")[1]);
            } else {
                reject(new Error("Failed to read file correctly."));
            }
        };
        reader.onerror = (error) => reject(error);
      });

      // 5. Call backend API with both image and general info
      const response = await fetch("/api/check_scan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: base64, // The base64 image data
          ...generalInfo, // Spread the collected general info
        }),
      });

      // 6. Process the response
      const data = await response.json();
      if (response.ok) {
        setResult(data);
      } else {
        setError(data.error || `Error: ${response.statusText}`);
      }
    } catch (err: any) {
      console.error("Error during scan submission:", err);
      setError("Error uploading or processing scan: " + (err.message || "Unknown error"));
    } finally {
      // 7. Reset loading state
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-pink-50/30"> {/* Added subtle background */}
      {/* --- Header (from Snippet 2) --- */}
      <header className="sticky top-0 z-10 bg-white border-b border-pink-200 shadow-sm">
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
            <Link href="/risk-assessment" className="text-pink-950 hover:text-pink-600 transition-colors">
              Risk Assessment
            </Link>
            <Link href="/scan-assessment" className="text-pink-600 font-medium">
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

      {/* --- Main Content --- */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back to Home Link */}
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-0">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
            </Button>
          </Link>

          {/* Page Title */}
          <h1 className="text-3xl font-bold text-pink-900 mb-8">Breast Scan Assessment</h1>

          {/* Step 1: General Information */}
          <Card className="mb-8 border-pink-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-pink-900">Step 1: General Information</CardTitle>
              <CardDescription>
                Please provide some basic information. This helps in contextualizing the scan analysis (optional fields can be skipped).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GeneralInfoForm onSubmit={handleInfoFormSubmit} />
            </CardContent>
          </Card>

          {/* Step 2: Upload & Analyze Scan */}
          <Card className="mb-8 border-pink-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-pink-900">Step 2: Upload & Analyze Scan</CardTitle>
              <CardDescription>
                Upload your breast scan image (mammogram, ultrasound, or MRI) for AI-assisted analysis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* File Upload Section */}
                <div>
                  <Label htmlFor="fileInput" className="text-sm font-medium text-pink-700 mb-2 block">
                    Select Scan Image
                  </Label>
                  <div className="border-2 border-dashed border-pink-200 rounded-lg p-6 text-center hover:border-pink-300 transition-colors">
                    <input
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    {!selectedFile ? (
                      <div>
                        <div className="mx-auto h-12 w-12 text-pink-400 mb-4">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </div>
                        <p className="text-sm text-pink-600 mb-2">Click to upload or drag and drop</p>
                        <p className="text-xs text-pink-500">PNG, JPG, JPEG up to 10MB</p>
                        <Button
                          type="button"
                          onClick={handleUploadClick}
                          className="mt-4 bg-pink-600 hover:bg-pink-700 text-white"
                        >
                          Choose File
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <div className="mx-auto h-12 w-12 text-green-500 mb-4">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-sm text-green-600 mb-2">File selected: {selectedFile.name}</p>
                        <Button
                          type="button"
                          onClick={handleUploadClick}
                          variant="outline"
                          className="mt-2"
                        >
                          Change File
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Preview Section */}
                {previewUrl && (
                  <div>
                    <Label className="text-sm font-medium text-pink-700 mb-2 block">
                      Image Preview
                    </Label>
                    <div className="border border-pink-200 rounded-lg p-4">
                      <img
                        src={previewUrl}
                        alt="Scan preview"
                        className="max-w-full h-auto max-h-64 mx-auto rounded"
                      />
                    </div>
                  </div>
                )}

                {/* Analyze Button */}
                <Button
                  onClick={handleScanSubmit}
                  disabled={!selectedFile || loading}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Analyzing...
                    </div>
                  ) : (
                    "Analyze Scan"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Error Display */}
          {error && (
            <Card className="mb-8 border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <div className="flex items-center text-red-700">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Error: {error}</span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Results Display */}
          {result && (
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900">Analysis Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-green-700">Analysis Status:</Label>
                    <p className="text-lg font-semibold text-green-900">{result.status}</p>
                  </div>
                  {result.confidence && (
                    <div>
                      <Label className="text-sm font-medium text-green-700">Confidence Level:</Label>
                      <p className="text-lg font-semibold text-green-900">{result.confidence}%</p>
                    </div>
                  )}
                  {result.findings && (
                    <div>
                      <Label className="text-sm font-medium text-green-700">Key Findings:</Label>
                      <p className="text-gray-700">{result.findings}</p>
                    </div>
                  )}
                  {result.recommendations && (
                    <div>
                      <Label className="text-sm font-medium text-green-700">Recommendations:</Label>
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