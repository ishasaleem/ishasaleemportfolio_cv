const automations = [
  "Lead capture → Google Sheets → Email notification",
  "Webhook → CRM sync using n8n",
  "Form submission → Slack alert → Database update",
];

const Automation: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl px-6 mx-auto">
        <h2 className="mb-10 text-4xl font-bold dark:text-white">
          Automation Work
        </h2>

        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
          {automations.map((item) => (
            <li
              key={item}
              className="p-5 bg-white border rounded-xl dark:bg-gray-900 dark:border-gray-800"
            >
              ⚡ {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Automation;
