import { Route, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ConditionalRoute({ check = () => [], ...props }) {
  const validations = check();

  for (const condition of validations) {
    if (!condition.check()) {
      if (condition.message) {
        toast(condition.message);
      }
      return <Navigate to={condition.to} />;
    }
  }

  return <Route {...props} />;
}
