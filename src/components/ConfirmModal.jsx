import { Button } from "./Index"
import { useEffect } from "react"
import { createPortal } from "react-dom"

function ConfirmModal({
    isOpen,
    onClose,
    onConfirm,
    title = "Are you Sure?",
    message = "This Message cannot be undone",
    confirmText = "Confirm",
    cancelText = "Cancel",
    bgColor = "bg-red-600 hover:bg-red-700",
    loading = false,
}) {

    if (!isOpen) return null;

    useEffect(() => {
        if (!isOpen) return;
        
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && isOpen && !loading) {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose, loading])

    return createPortal(
        /* LAYER 1: Backdrop */
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/30 backdrop-blur-xs animate-fade-in"
            onClick={(e) => {
                if (e.target === e.currentTarget && !loading) {
                    onClose();
                }
            }}>

            {/* LAYER 2: White Card */}
            <div className="bg-white border border-stone-200/80 rounded-2xl p-6 max-w-sm w-full shadow-xl animate-fade-up">

                <div className="flex items-start gap-3.5 mb-3">

                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </div>

                    <div>
                        <h3 className="font-serif font-bold text-lg text-stone-900 leading-snug">
                            {title}
                        </h3>
                        <p className="text-sm text-stone-500 mt-1 leading-relaxed">
                            {message}
                        </p>
                    </div>
                </div>

                {/* Buttons (Cancel & Confirm) */}
                <div className="flex items-center justify-end gap-2.5 mt-6">
                    {/* Normal Cancel Button */}
                    <button
                        type="button"
                        disabled={loading}
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-800 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
                    >
                        {cancelText}
                    </button>

                    {/* Reusable Smart Button (with loading spinner) */}
                    <Button
                        type="button"
                        loading={loading}
                        loadingText="Processing..."
                        bgColor={bgColor}
                        onClick={onConfirm}
                        className="py-2 px-4 text-sm"
                    >
                        {confirmText}
                    </Button>
                </div>

            </div>
        </div>,
        document.body
    );
}

export default ConfirmModal;