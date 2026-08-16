import { jsx as _jsx } from "react/jsx-runtime";
import CircularText from "../components/circular-text";
export default function CircularTextDemo() {
    return (_jsx(CircularText, { text: "VAIBHAV*LABS*COMPONENTS*", onHover: "speedUp", spinDuration: 20, className: "custom-class" }));
}
