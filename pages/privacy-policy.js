import React from "react";
import { useRef, useState } from "react";

function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Privacy Policy
      </h1>
      <div className="user-content">
        <h3 className="text-lg font-semibold">1. USER CONSENT</h3>
        <p className="mb-4 text-base">
          By submitting Personal Information through our Site or Services, you
          agree to the terms of this Privacy Policy and you expressly consent to
          the collection, use and disclosure of the Personal Information in
          accordance with this Privacy Policy.
        </p>
      </div>
      <div className="user-content">
        <h3 className="text-lg font-semibold">
          2. WHAT DO WE DO WITH YOUR INFORMATION?
        </h3>
        <p className="mb-4 text-base">
          When you purchase a subscription from us, we collect the personal
          information you give us such as your name, phone number and email
          address.
        </p>
        <p className="mb-4 text-base">
          We also automatically receive your computer’s internet protocol (IP)
          address in order to provide us with information that helps us learn
          about your browser and operating system.
        </p>
        <p className="mb-4 text-base">
          We collect and use personal information for business purposes in
          order:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            That you may download information and take advantage of certain
            other features of our website.
          </li>
          <li>
            To provide information or interactive services through this website,
            to your e-mail address or via sms or through social media.
          </li>
          <li>To seek your feedback or to contact you.</li>
          <li>
            To administer or otherwise carry out our obligations in relation to
            any agreement you have with us.
          </li>
          <li>To create products or services that may meet your needs.</li>
          <li>
            To process and respond to requests, assess, identify problems and
            improve system performance, and communicate with visitors about our
            products, services and businesses.
          </li>
        </ul>
      </div>
      <div className="user-content">
        <h3 className="text-lg font-semibold">3. THIRD PARTY WEBSITES</h3>
        <p className="mb-4 text-base">
          When you click on a link to any other website or location, you will
          leave our Site and go to another site and another entity may collect
          Personal Information or Anonymous Information from you. We have no
          control over, do not review, and cannot be responsible for, these
          outside websites or their content. Please be aware that the terms of
          this Privacy Policy do not apply to these outside websites or content,
          or to any collection of information after you click on links to such
          outside websites.
        </p>
      </div>
      <div className="user-content">
        <h3 className="text-lg font-semibold">4. DISCLOSURE</h3>
        <p className="mb-4 text-base">
          We may disclose your personal information if we are required by law to
          do so or if you violate our Terms of Service.
        </p>
      </div>
      <div className="user-content">
        <h3 className="text-lg font-semibold">5. SECURITY</h3>
        <p className="mb-4 text-base">
          To protect your personal information, we take reasonable precautions
          and follow industry best practices to make sure it is not
          inappropriately lost, misused, accessed, disclosed, altered or
          destroyed. No method of transmission over the Internet, or method of
          electronic storage, is 100% secure, however. Therefore, while it uses
          reasonable efforts to protect your Personal Information, the platform
          cannot guarantee its absolute security.
        </p>
      </div>
      <div className="user-content">
        <h3 className="text-lg font-semibold">6. COOKIES</h3>
        <p className="mb-4 text-base">
          Cookies are pieces of information that a browser can record after
          visiting a web site. We may use cookies for technical purposes such as
          to enable better navigation through our site, or to store user
          preferences for interacting with the site. If you turn off the option
          to have cookies stored on your browser, it will affect your experience
          of using the platform.
        </p>
      </div>
      <div className="user-content">
        <h3 className="text-lg font-semibold">7. AGE OF CONSENT</h3>
        <p className="mb-4 text-base">
          By using this site, you represent that you are at least the age of
          majority in your state or province of residence, or that you are the
          age of majority in your state or province of residence and you have
          given us your consent to allow any of your minor dependents to use
          this site.
        </p>
      </div>
      <div className="user-content">
        <h3 className="text-lg font-semibold">
          8. CHANGES TO THIS PRIVACY POLICY
        </h3>
        <p className="mb-4 text-base">
          We reserve the right to modify this privacy policy at any time, so
          please review it frequently. Changes and clarifications will take
          effect immediately upon their posting on the website. If we make
          material changes to this policy, we will notify you here that it has
          been updated, so that you are aware of what information we collect,
          how we use it, and under what circumstances, if any, we use and/or
          disclose it.
        </p>
      </div>
      <div className="user-content">
        <h3 className="text-lg font-semibold">
          9. QUESTIONS AND CONTACT INFORMATION
        </h3>
        <p className="mb-4 text-base">
          If you would like to: access, correct, amend or delete any personal
          information we have about you, register a complaint, or simply want
          more information mail us at:{" "}
          <a href="mailto:info@lnprcapital.com" className="text-blue-500">
            info@lnprcapital.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
