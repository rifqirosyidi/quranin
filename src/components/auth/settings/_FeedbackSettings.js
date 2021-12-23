import React from "react";
import Button from "../../general/button/Button";
import Input from "../../data-entry/input";

const FeedbackSettings = () => {
  return (
    <div className="p-6 bg-primary rounded-xl">
      <h2 className="text-2xl font-primary font-medium">Feedback</h2>
      <p className="text-secondary font-primary text-sm mt-1">
        Kirim saran & masukan.
      </p>
      <Input label="Name" bg="secondary" value="Your Name" />
      <Input label="Email" bg="secondary" value="your@nauk.com" />

      <p className="font-primary font-medium mt-4 mb-2">Pesan</p>
      <textarea
        className="w-full rounded-xl p-4 bg-secondary font-primary"
        placeholder="Pesan"
      ></textarea>
      <div className="flex items-center justify-end mt-6">
        <Button>Kirim</Button>
      </div>
    </div>
  );
};

export default FeedbackSettings;
