export default async function Footer() {
  return (
    <footer className="bg-fb-pink-500 text-fb-white-100 border-t border-white-200 shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-white-200 sm:text-center">
        © 2023{" "}
        <a href="https://feedback.com/" className="hover:underline">
          Feedback™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
