export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-800 sm:text-3xl">Resume</h1>
          <p className="text-sm text-gray-500">
            Updated 1/2/2026
          </p>
        </div>
        <a
          className="text-sm font-medium text-gray-700 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-900"
          href="/KarnavTrivedi_SWE_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Open PDF
        </a>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)]">
        <iframe
          className="h-[70vh] w-full sm:h-[80vh]"
          src="/KarnavTrivedi_SWE_Resume.pdf#view=FitH"
          title="Resume PDF"
        />
      </div>
    </div>
  );
}
