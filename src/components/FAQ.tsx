import { faqs } from "@/content/offer";

export function FAQ() {
  return (
    <section className="sale" id="faq">
      <div className="sale-wrap sale-wrap--narrow">
        <h2 className="sale-title">Ainda ficou alguma dúvida?</h2>

        <div className="faq">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>
                <span>{item.q}</span>
                <i aria-hidden />
              </summary>
              <div>
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
