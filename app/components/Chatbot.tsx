'use client'

import { useState, useRef, useEffect, useCallback, memo } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
  id: string
}

interface ChatbotProps {
  isOpen: boolean
  onClose: () => void
}

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-msg',
      role: 'assistant',
      content: `🔥 Hey there! I'm Spark, Zane's AI assistant. I'm here 24/7 to help with questions about our web development and AI automation services.

Quick question - what's your biggest challenge with your current website? Is it:
• Not generating enough leads?
• Looking outdated compared to competitors?
• Missing opportunities after business hours?
• All of the above? 😅

I can show you exactly how we solve these problems (and probably grab you a free website audit while we're at it).`
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: inputValue
    }

    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInputValue('')
    setIsLoading(true)

    try {
      // Only send recent conversation history (last 10 messages) to reduce payload
      const recentMessages = updatedMessages.slice(-10)

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: recentMessages.map(({ id, ...msg }) => msg)
        }),
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json()

      setMessages(prev => [...prev, {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.message
      }])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again or contact us directly.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:bottom-6 md:right-6 z-50 flex flex-col">
      {/* Chat Window */}
      <div className="bg-gray-900 border-2 border-orange-500 rounded-2xl shadow-2xl w-full md:w-96 h-[600px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl mr-2">🔥</div>
            <div>
              <div className="font-bold text-white">Spark</div>
              <div className="text-xs text-orange-100">Zane's AI Assistant</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            aria-label="Close chat"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-950" role="log" aria-live="polite" aria-label="Chat messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white'
                    : 'bg-gray-800 text-gray-100 border border-gray-700'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-800 border border-gray-700 p-3 rounded-2xl">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 bg-gray-900 border-t border-gray-800">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-800 text-white border border-gray-700 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              disabled={isLoading}
              aria-label="Chat message input"
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full px-6 py-2 font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
