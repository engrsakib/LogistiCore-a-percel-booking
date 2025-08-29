import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "What is a courier service?",
    answer: "Courier service is a safe and fast way to send parcels or documents from one place to another.",
  },
  {
    question: "How can I book a parcel?",
    answer: "You can book parcels online, via app, or by visiting the courier office.",
  },
  {
    question: "How do I track my package?",
    answer: "You can track your package using the tracking number on the website or app.",
  },
  {
    question: "How are courier charges determined?",
    answer: "Charges are calculated based on weight, distance, and type of service.",
  },
  {
    question: "Can I send parcels internationally?",
    answer: "Yes, many courier services provide international delivery.",
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery usually takes 1-5 days depending on location and service type.",
  },
  {
    question: "What items are prohibited in courier?",
    answer: "Illegal, flammable, explosive items, weapons, and some restricted items cannot be sent.",
  },
  {
    question: "How will I know when my package is delivered?",
    answer: "You will be notified via SMS, call, or app notification.",
  },
  {
    question: "What if my package is lost?",
    answer: "Contact the courier office immediately and file a claim.",
  },
  {
    question: "How can I pay for courier service?",
    answer: "You can pay by cash, card, mobile banking, or online payment.",
  },
  {
    question: "How safe is courier service?",
    answer: "Courier service is safe if you choose a trusted company. Some offer insurance facilities.",
  },
  {
    question: "What are the office hours?",
    answer: "Usually from 9 AM to 8 PM.",
  },
  {
    question: "Is Cash on Delivery (COD) available?",
    answer: "Yes, many courier services offer Cash on Delivery.",
  },
  {
    question: "Do I need an ID for courier service?",
    answer: "You may need to provide an ID, national ID, or phone number.",
  },
  {
    question: "Can I send liquids or food items?",
    answer: "Some couriers allow liquids or food items but have specific rules.",
  },
  {
    question: "What happens if delivery fails?",
    answer: "If delivery fails, another attempt is made or the parcel is returned.",
  },
  {
    question: "Can I send gifts through courier?",
    answer: "Yes, you can send gifts, parcels, documents, etc.",
  },
  {
    question: "Is delivery available on Fridays or holidays?",
    answer: "Some couriers deliver 7 days a week, including holidays.",
  },
  {
    question: "How much does courier charge?",
    answer: "Charges start from 50 BDT, depending on weight, distance, and service type.",
  },
  {
    question: "Why is phone number required for courier?",
    answer: "Phone number is needed for communication and delivery confirmation.",
  },
];

export default function CourierFAQ() {
  const [customQuestion, setCustomQuestion] = useState("");
  const [customAnswer, setCustomAnswer] = useState<string | null>(null);

  // Simulate custom answer (you can integrate AI/chatbot/API here)
  const handleCustomQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) {
      setCustomAnswer("Please enter your question...");
      return;
    }
    setCustomAnswer(
      "Your question has been received. Our team will reply soon, or you may contact customer support."
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-900 dark:to-orange-900 py-8 px-2">
      <div className="w-full md:w-10/12 mx-auto">
        <Card className="mb-8 shadow-md border-0 rounded-2xl bg-gradient-to-r from-orange-100 to-blue-50 dark:from-gray-900 dark:to-blue-950">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <FaQuestionCircle className="text-orange-500 text-3xl" />
              <CardTitle className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent tracking-tight">
                Courier FAQ
              </CardTitle>
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-100">
              20 common questions about courier services. You can also ask your own question below!
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white dark:bg-gray-950 rounded-xl shadow p-5 border border-orange-100 dark:border-orange-900">
                  <h3 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">{faq.question}</h3>
                  <p className="text-gray-700 dark:text-gray-200">{faq.answer}</p>
                </div>
              ))}
            </div>
            {/* Custom Question Section */}
            <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-orange-50 dark:from-blue-950 dark:to-orange-900 rounded-xl shadow border border-orange-100 dark:border-orange-900">
              <h2 className="font-bold text-lg mb-2 text-blue-700 dark:text-blue-300">Ask Your Own Question</h2>
              <form onSubmit={handleCustomQuestion} className="flex flex-col md:flex-row gap-3 items-center">
                <Input
                  type="text"
                  placeholder="Type your question..."
                  value={customQuestion}
                  onChange={(e) => {
                    setCustomQuestion(e.target.value);
                    setCustomAnswer(null);
                  }}
                  className="w-full md:w-2/3"
                />
                <Button type="submit" className="w-full md:w-auto">
                  Submit Question
                </Button>
              </form>
              {customAnswer && (
                <div className="mt-4 p-3 rounded bg-white dark:bg-gray-950 border border-blue-100 dark:border-blue-900 text-blue-700 dark:text-blue-300">
                  {customAnswer}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        {/* Footer note */}
        <div className="text-center text-xs text-muted-foreground mt-8">
          &copy; {new Date().getFullYear()} Logisti Core. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}