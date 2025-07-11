import { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Button = function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
};

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
    close() {
      if (dialog.current) {
        dialog.current.close();
      }
    },
  }));

  // 👉 Close when clicking outside (backdrop)
  useEffect(() => {
    const dialogEl = dialog.current;

    const handleClickOutside = (event) => {
      const rect = dialogEl.getBoundingClientRect();
      const clickedInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;

      if (!clickedInDialog) {
        dialogEl.close();
      }
    };

    if (dialogEl) {
      dialogEl.addEventListener('click', handleClickOutside);
    }

    return () => {
      if (dialogEl) {
        dialogEl.removeEventListener('click', handleClickOutside);
      }
    };
  }, []);

  return createPortal(
    <dialog
      ref={dialog}
      className="bg-[#3A3848] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-stone-900/90 p-4 rounded-md shadow-md z-50"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;
