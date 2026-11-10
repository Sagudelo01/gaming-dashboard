import { useCallback, useRef, useState } from 'react'
import { ToastContext } from '../lib/toastContext'

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const idRef = useRef(0)

  const notify = useCallback((message) => {
    const id = ++idRef.current
    setToasts((prev) => [...prev, { id, message }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 2600)
  }, [])

  return (
    <ToastContext.Provider value={notify}>
      {children}
      <div className="pointer-events-none fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 flex-col items-center gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="toast-in pointer-events-auto rounded-xl border border-white/10 bg-panel/95 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-black/40 backdrop-blur-xl"
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
