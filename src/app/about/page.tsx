export default function About() {
    return (
      <section>
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-4">
          I&apos;m passionate about crafting intuitive interfaces and brand experiences.
        </p>
        <h3 className="mt-6 text-xl font-semibold">Contact</h3>
        <ul className="mt-2">
          <li>Email: kaelan@example.com</li>
          <li>
            LinkedIn:{' '}
            <a href="https://linkedin.com/in/kaelan" className="text-blue-600">
              linkedin.com/in/kaelan
            </a>
          </li>
          <li>Instagram: @kaelan.design</li>
        </ul>
      </section>
    );
  }
  