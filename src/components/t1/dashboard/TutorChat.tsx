'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, X, Minimize2, Maximize2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface TutorChatProps {
  isOpen: boolean;
  onToggle: () => void;
  currentDimension?: string;
}

const SUGGESTED_PROMPTS = [
  "What's the Infinite Learning Continuum?",
  "How does Adaptive Pacing work?",
  "Explain SkillPrints to me",
  "What is the Artemis Oath?",
  "Tell me about Centers of Inquiry",
  "What's the Darwin Voyage?",
];

const DIMENSION_CONTEXT: Record<string, string> = {
  'open-loop-learning': 'The traveler is currently exploring Dimension 01: The Infinite Learning Continuum.',
  'adaptive-paced-learning': 'The traveler is currently exploring Dimension 02: Adaptive Paced Learning.',
  'global-skills-matrix': 'The traveler is currently exploring Dimension 03: SkillPrints (Global Skills Matrix).',
  'purpose-learning': 'The traveler is currently exploring Dimension 04: The Artemis Oath (Purpose Learning).',
  'centers-of-inquiry': 'The traveler is currently exploring Dimension 05: Centers of Inquiry.',
  'darwin-voyage': 'The traveler is currently exploring Dimension 06: The World as Campus (Darwin Voyage).',
};

export function TutorChat({ isOpen, onToggle, currentDimension }: TutorChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Welcome, traveler! I\'m your Artemis Dimension Tutor. I can help you explore any of the six dimensions — ask me about the Infinite Learning Continuum, Adaptive Pacing, SkillPrints, the Artemis Oath, Centers of Inquiry, or the Darwin Voyage. What sparks your curiosity?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async (text?: string) => {
    const content = text || input.trim();
    if (!content || isLoading) return;

    const userMessage: Message = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const contextMsg = currentDimension ? DIMENSION_CONTEXT[currentDimension] : '';
      const apiMessages = [
        ...messages.filter(m => m.role !== 'assistant' || m !== messages[0]),
        ...(contextMsg ? [{ role: 'user' as const, content: `[Context: ${contextMsg}]` }, { role: 'assistant' as const, content: 'Noted. I\'ll tailor my responses to the current dimension.' }] : []),
        userMessage,
      ];

      const response = await fetch('/api/t1-tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await response.json();

      if (data.message) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: 'I seem to have lost my way across the dimensions. Could you try asking again?' }]);
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'The dimensional link seems unstable. Please try again in a moment.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button — visible when chat is closed */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={onToggle}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#8A0000] text-white rounded-full shadow-xl hover:bg-[#6B0000] transition-colors flex items-center justify-center"
          title="Open Dimension Tutor"
        >
          <Sparkles className="w-6 h-6" />
        </motion.button>
      )}

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[400px] bg-white border-l border-gray-200 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#8A0000] rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Dimension Tutor</h3>
                  <p className="text-[10px] text-gray-500">Powered by z.ai</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={onToggle}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={onToggle}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#8A0000] text-white rounded-br-md'
                        : 'bg-gray-100 text-gray-800 rounded-bl-md'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompts — show only when few messages */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-2 font-medium">Quick questions</p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => sendMessage(prompt)}
                      className="text-xs px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t border-gray-200 bg-white">
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about any dimension..."
                  className="flex-1 resize-none border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-[#8A0000]/40 focus:ring-1 focus:ring-[#8A0000]/20 transition-all min-h-[40px] max-h-[120px]"
                  rows={1}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 bg-[#8A0000] text-white rounded-xl flex items-center justify-center hover:bg-[#6B0000] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
