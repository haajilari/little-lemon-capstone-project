//components/HelpSection.js
import React from "react";

const HelpSection = () => {
  return (
    <section
      style={{ padding: "20px", backgroundColor: "#f9f9f9", marginTop: "20px" }}
    >
      <h3>Need Help?</h3>
      <details>
        <summary>How do I edit my reservation?</summary>
        <p>You can clear the form and start over, or contact us via phone.</p>
      </details>
      <details>
        <summary>Is there a cancellation fee?</summary>
        <p>No, cancellations are free up to 2 hours before booking.</p>
      </details>
    </section>
  );
};

export default HelpSection;
