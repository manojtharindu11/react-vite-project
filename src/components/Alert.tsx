import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

function Alert({ children, onClose }: Props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show">
      <strong>{children}</strong> You can close this alert by clicking close
      button.
      <button type="button" onClick={onClose} className="btn-close"></button>
    </div>
  );
}

export default Alert;
