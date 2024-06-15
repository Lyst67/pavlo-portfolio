"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "../components/button";
import { toast } from "sonner";

const MessageSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().min(2, "Too Short!").required("Required"),
});

type MessageFormValues = {
  name: string;
  email: string;
  message: string;
};

const initialValues: MessageFormValues = {
  name: "",
  email: "",
  message: "",
};

export interface MessageFormProps {
  onSubmit?: (values: MessageFormValues) => void | Promise<void>;
}

export default function MessageForm({ onSubmit }: MessageFormProps) {
  const sendEmail = async (values: MessageFormValues, { resetForm }: any) => {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      to_name: "Pavlo Lystopad",
      message: values.message,
    };

    const SERVICE_ID = process.env.NEXT_PUBLIC_MY_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_MY_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_MY_PUBLIC_KEY;

    await emailjs
      .send(`${SERVICE_ID}`, `${TEMPLATE_ID}`, templateParams, {
        publicKey: `${PUBLIC_KEY}`,
      })
      .then(
        (response) => {
          toast.success("Your message has been sent!");
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          toast.error("Something went wrong!");
          console.log("FAILED...", err);
        }
      );
    resetForm();
  };

  const fieldStyles =
    "text-sm md:text-base bg-dark-bg px-4 py-2 border border-solid border-transparent rounded-md hover:border-salad focus:border-salad outline-none";

  return (
    <>
      <Formik
        onSubmit={sendEmail}
        initialValues={initialValues}
        validationSchema={MessageSchema}
      >
        {({ errors, touched, values }) => (
          <Form className="w-full sm:max-w-96 lg:max-w-none lg:w-4/5 2xl:w-2/3 mx-auto space-y-6 lg:space-y-7 2xl:space-y-9">
            <div className="grid">
              <label
                className="text-sm md:text-base font-extralight"
                htmlFor="name"
              >
                Name
              </label>
              <Field
                className={fieldStyles}
                name="name"
                placeholder="Enter Your Name"
              />
              {errors.name && touched.name ? (
                <div className="text-xs mt-1 text-error">{errors.name}</div>
              ) : !errors.name && values.name ? (
                <div className="text-xs mt-1 text-success">Success</div>
              ) : null}
            </div>
            <div className="grid">
              <label
                className="text-sm md:text-base font-extralight"
                htmlFor="email"
              >
                Email
              </label>
              <Field
                className={fieldStyles}
                name="email"
                type="email"
                placeholder="Enter Your Email"
              />
              {errors.email && touched.email ? (
                <div className="text-xs mt-1 text-error">{errors.email}</div>
              ) : !errors.email && values.email ? (
                <div className="text-xs mt-1 text-success">Success</div>
              ) : null}
            </div>
            <div className="grid">
              <label
                className="text-sm md:text-base font-extralight"
                htmlFor="message"
              >
                Message
              </label>
              <Field
                className={fieldStyles}
                rows="5"
                as="textarea"
                name="message"
                type="text"
                placeholder="Enter Your Message"
              />
              {errors.email && touched.email ? (
                <div className="text-xs mt-1 text-error">{errors.message}</div>
              ) : !errors.message && values.message ? (
                <div className="text-xs mt-1 text-success">Success</div>
              ) : null}
            </div>
            <Button>Submit</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
